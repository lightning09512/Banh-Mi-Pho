import {
  CART_UPGRADE_COST,
  BUSINESS_STAGE_NAMES,
  CUSTOMER_ARRIVAL_SECONDS,
  CUSTOMER_PATIENCE_SECONDS,
  CUSTOMER_TYPES,
  INGREDIENTS,
  OFFLINE_CAP_MINUTES,
  OFFLINE_COINS_PER_MINUTE,
  RECIPES,
  RESTOCK_PACK_COST,
  RESTOCK_PACK_SIZE,
  SHIFT_SECONDS,
  STAFF_HIRE_COST,
  STAFF_WAGE_PER_SHIFT,
  MAX_CART_LEVEL,
  createStartingInventory,
  getRecipeCost,
  type CustomerType,
  type IngredientId,
  type Inventory,
  type RecipeId,
} from "./data";

export interface WaitingCustomer {
  id: number;
  type: CustomerType;
  recipe: RecipeId;
  patience: number;
  status: "walking" | "waiting";
}

export interface ShiftReport {
  served: number;
  left: number;
  revenue: number;
  tips: number;
  ingredientCosts: number;
  wages: number;
  net: number;
  reputationEarned: number;
}

export interface GameSnapshot {
  storeName: string;
  coins: number;
  reputation: number;
  cartLevel: number;
  hasStaff: boolean;
  inventory: Inventory;
  inShift: boolean;
  secondsRemaining: number;
  elapsedSeconds: number;
  customers: WaitingCustomer[];
  assembly: IngredientId[];
  feedback: string;
  report: ShiftReport | null;
  offlineNotice: string;
  shiftRevenue: number;
  nightAmount: number;
  totalServed: number;
}

interface SavedGame {
  version: 1;
  storeName?: string;
  coins: number;
  reputation: number;
  cartLevel: number;
  hasStaff: boolean;
  inventory: Inventory;
  totalServed: number;
  lastSavedAt: number;
}

const SAVE_KEY = "banh-mi-pho-save-v1";
const STORE_NAME_MAX_LENGTH = 24;

function normalizeStoreName(value: string): string {
  return value.replace(/\s+/g, " ").trim().slice(0, STORE_NAME_MAX_LENGTH);
}

export class GameStore {
  private storeName = "";
  private coins = 100;
  private reputation = 0;
  private cartLevel = 1;
  private hasStaff = false;
  private inventory = createStartingInventory();
  private inShift = false;
  private secondsRemaining = 0;
  private elapsedSeconds = 0;
  private customers: WaitingCustomer[] = [];
  private assembly: IngredientId[] = [];
  private feedback = "Chào buổi sáng! Mở ca để đón khách đầu tiên.";
  private report: ShiftReport | null = null;
  private offlineNotice = "";
  private shiftRevenue = 0;
  private shiftTips = 0;
  private shiftIngredientCosts = 0;
  private shiftServed = 0;
  private shiftLeft = 0;
  private shiftReputation = 0;
  private arrivalClock = 0;
  private staffClock = 0;
  private customerId = 0;
  private lastPersistAt = 0;
  private totalServed = 0;
  private readonly listeners = new Set<(snapshot: GameSnapshot) => void>();

  constructor() {
    this.load();
  }

  subscribe(listener: (snapshot: GameSnapshot) => void): () => void {
    this.listeners.add(listener);
    listener(this.getSnapshot());
    return () => this.listeners.delete(listener);
  }

  getSnapshot(): GameSnapshot {
    const nightAmount = this.inShift
      ? Math.max(0, Math.min(1, (this.elapsedSeconds - 85) / 35))
      : 0;

    return {
      storeName: this.storeName,
      coins: this.coins,
      reputation: this.reputation,
      cartLevel: this.cartLevel,
      hasStaff: this.hasStaff,
      inventory: { ...this.inventory },
      inShift: this.inShift,
      secondsRemaining: this.secondsRemaining,
      elapsedSeconds: this.elapsedSeconds,
      customers: this.customers.map((customer) => ({ ...customer })),
      assembly: [...this.assembly],
      feedback: this.feedback,
      report: this.report ? { ...this.report } : null,
      offlineNotice: this.offlineNotice,
      shiftRevenue: this.shiftRevenue,
      nightAmount,
      totalServed: this.totalServed,
    };
  }

  setStoreName(value: string): boolean {
    const storeName = normalizeStoreName(value);
    if (!storeName) return false;
    this.storeName = storeName;
    this.feedback = `Đã treo biển hiệu “${storeName}”.`;
    this.persist();
    this.publish();
    return true;
  }

  startShift(): void {
    if (this.inShift) return;
    this.offlineNotice = "";
    this.inShift = true;
    this.secondsRemaining = SHIFT_SECONDS;
    this.elapsedSeconds = 0;
    this.customers = [this.makeCustomer()];
    this.assembly = [];
    this.shiftRevenue = 0;
    this.shiftTips = 0;
    this.shiftIngredientCosts = 0;
    this.shiftServed = 0;
    this.shiftLeft = 0;
    this.shiftReputation = 0;
    this.arrivalClock = 0;
    this.staffClock = 0;
    this.report = null;
    this.feedback = "Khách đầu tiên đang đi bộ tới quán. Chờ bạn ấy tới rồi bắt đầu chế biến món nhé!";
    this.persist();
    this.publish();
  }

  closeShift(): void {
    if (!this.inShift) return;
    this.offlineNotice = "";
    this.finishShift();
  }

  tapIngredient(ingredientId: IngredientId): void {
    this.offlineNotice = "";
    if (!this.inShift) {
      this.feedback = "Mở ca trước rồi mình mới chế biến món được nhé.";
      this.publish();
      return;
    }

    const customer = this.customers[0];
    if (!customer) {
      this.feedback = "Chưa có khách ở quầy, chờ khách kế tiếp nhé.";
      this.publish();
      return;
    }
    if (customer.status !== "waiting") {
      this.feedback = "Khách đang đi bộ tới quán; đợi bạn ấy tới rồi chế biến món nhé.";
      this.publish();
      return;
    }

    const recipe = RECIPES[customer.recipe];
    if (!this.hasRecipeStock(customer.recipe)) {
      this.assembly = [];
      this.feedback = "Thiếu nguyên liệu cho món này. Đóng ca rồi nhập hàng nhé.";
      this.publish();
      return;
    }

    const expectedIngredient = recipe.ingredients[this.assembly.length];
    if (ingredientId !== expectedIngredient) {
      const expectedName = INGREDIENTS.find((item) => item.id === expectedIngredient)?.name ?? "nguyên liệu kế tiếp";
      this.feedback = `Khách đang chờ ${expectedName}. Chọn đúng thứ tự để hoàn thành món nhé.`;
      this.publish();
      return;
    }

    this.assembly.push(ingredientId);
    if (this.assembly.length === recipe.ingredients.length) {
      this.completeOrder(false);
    } else {
      const next = recipe.ingredients[this.assembly.length];
      const nextName = INGREDIENTS.find((item) => item.id === next)?.name;
      this.feedback = `Đúng rồi! Tiếp theo: ${nextName}.`;
      this.publish();
    }
  }

  markCustomerWalking(customerId: number): void {
    const customer = this.customers.find((entry) => entry.id === customerId);
    if (!customer || customer.status === "walking") return;
    customer.status = "walking";
    this.assembly = [];
    this.feedback = "Khách phía trước đang bước tới quầy.";
    this.publish();
  }

  markCustomerArrived(customerId: number): void {
    const customer = this.customers.find((entry) => entry.id === customerId);
    if (!customer || customer.status === "waiting") return;
    customer.status = "waiting";
    this.feedback = "Khách đã tới quán. Hoàn thiện món theo đơn nhé!";
    this.publish();
  }

  restock(): void {
    this.offlineNotice = "";
    if (this.inShift) {
      this.feedback = "Đang đông khách, hết ca rồi nhập hàng cho thong thả nhé.";
      this.publish();
      return;
    }
    if (this.coins < RESTOCK_PACK_COST) {
      this.feedback = `Chưa đủ xu nhập hàng; cần ${RESTOCK_PACK_COST} xu.`;
      this.publish();
      return;
    }

    this.coins -= RESTOCK_PACK_COST;
    for (const ingredient of INGREDIENTS) this.inventory[ingredient.id] += RESTOCK_PACK_SIZE;
    this.feedback = `Đã nhập hàng: +${RESTOCK_PACK_SIZE} phần mỗi loại.`;
    this.persist();
    this.publish();
  }

  upgradeCart(): void {
    this.offlineNotice = "";
    if (this.inShift) {
      this.feedback = "Đóng ca rồi hãy nâng cấp quán để khỏi làm khách phải chờ nhé.";
      this.publish();
      return;
    }
    const cost = CART_UPGRADE_COST[this.cartLevel];
    if (!cost) {
      this.feedback = "Thương hiệu đã đạt cấp cao nhất.";
      this.publish();
      return;
    }
    if (this.coins < cost) {
      this.feedback = `Cần thêm ${cost - this.coins} xu để nâng cấp quán.`;
      this.publish();
      return;
    }

    this.coins -= cost;
    this.cartLevel += 1;
    this.feedback = this.cartLevel === 2
      ? "Quán có bếp nướng mới và mặt quầy rộng hơn. Món đặc biệt đã mở!"
      : `Đã mở khóa ${BUSINESS_STAGE_NAMES[this.cartLevel - 1]}.`;
    this.persist();
    this.publish();
  }

  hireStaff(): void {
    this.offlineNotice = "";
    if (this.inShift) {
      this.feedback = "Đóng ca rồi hãy đón phụ bếp vào làm nhé.";
      this.publish();
      return;
    }
    if (this.cartLevel < 2) {
      this.feedback = "Cần nâng quán lên cấp 2 trước khi thuê phụ bếp.";
      this.publish();
      return;
    }
    if (this.hasStaff) {
      this.feedback = "Phụ bếp đang phụ mình trông quán rồi!";
      this.publish();
      return;
    }
    if (this.coins < STAFF_HIRE_COST) {
      this.feedback = `Cần thêm ${STAFF_HIRE_COST - this.coins} xu để thuê phụ bếp.`;
      this.publish();
      return;
    }

    this.coins -= STAFF_HIRE_COST;
    this.hasStaff = true;
    this.feedback = "Đã thuê phụ bếp! Bạn ấy sẽ tự phục vụ khách và giúp quán có thu nhập ngoại tuyến.";
    this.persist();
    this.publish();
  }

  tick(): void {
    if (!this.inShift) return;

    this.secondsRemaining = Math.max(0, this.secondsRemaining - 1);
    this.elapsedSeconds += 1;
    this.arrivalClock += 1;

    for (const customer of this.customers) {
      if (customer.status === "waiting") customer.patience -= 1;
    }
    const expired = this.customers.filter((customer) => customer.patience <= 0);
    if (expired.length > 0) {
      this.shiftLeft += expired.length;
      this.customers = this.customers.filter((customer) => customer.patience > 0);
      this.assembly = [];
      this.feedback = "Có khách đi mất vì đợi lâu. Nâng cấp quán hoặc nhờ phụ bếp để phục vụ nhanh hơn.";
    }

    if (this.arrivalClock >= CUSTOMER_ARRIVAL_SECONDS) {
      this.arrivalClock = 0;
      if (this.customers.length < 3) this.customers.push(this.makeCustomer());
    }

    if (this.hasStaff) {
      this.staffClock += 1;
      if (this.staffClock >= 8 && this.customers[0]?.status === "waiting" && this.assembly.length === 0) {
        this.staffClock = 0;
        this.completeOrder(true);
      }
    }

    if (this.secondsRemaining <= 0) {
      this.finishShift();
      return;
    }

    if (this.elapsedSeconds % 10 === 0) this.persist();
    this.publish();
  }

  dismissReport(): void {
    this.report = null;
    this.publish();
  }

  private makeCustomer(): WaitingCustomer {
    const roll = Math.random();
    const type: CustomerType = roll < 0.32
      ? "student"
      : roll < 0.60
        ? "office"
        : roll < 0.82
          ? "shopper"
          : "tourist";

    let recipe: RecipeId;
    if (type === "student") recipe = "cha";
    else if (type === "office") recipe = "egg";
    else if (type === "tourist" && this.cartLevel >= 2) recipe = "special";
    else if (type === "shopper" && this.cartLevel >= 2 && Math.random() < 0.4) recipe = "special";
    else recipe = Math.random() < 0.5 ? "cha" : "egg";

    return { id: ++this.customerId, type, recipe, patience: CUSTOMER_PATIENCE_SECONDS, status: "walking" };
  }

  private hasRecipeStock(recipeId: RecipeId): boolean {
    return RECIPES[recipeId].ingredients.every((ingredient) => this.inventory[ingredient] > 0);
  }

  private completeOrder(byStaff: boolean): void {
    const customer = this.customers[0];
    if (!customer) return;
    if (!this.hasRecipeStock(customer.recipe)) {
      this.assembly = [];
      this.feedback = "Hết món trong kho! Đóng ca và nhập hàng để tiếp tục bán.";
      this.publish();
      return;
    }

    const recipe = RECIPES[customer.recipe];
    const ingredientCost = getRecipeCost(customer.recipe);
    const baseTip = CUSTOMER_TYPES[customer.type].tip;
    const speedTip = !byStaff && customer.patience >= 25 ? 2 : 0;
    const tip = byStaff ? 0 : baseTip + speedTip;
    const reputationEarned = byStaff ? 1 : customer.patience >= 25 ? 2 : 1;

    for (const ingredient of recipe.ingredients) this.inventory[ingredient] -= 1;
    this.coins += recipe.salePrice + tip - ingredientCost;
    this.shiftRevenue += recipe.salePrice;
    this.shiftTips += tip;
    this.shiftIngredientCosts += ingredientCost;
    this.shiftServed += 1;
    this.totalServed += 1;
    this.reputation += reputationEarned;
    this.shiftReputation += reputationEarned;
    this.customers.shift();
    this.assembly = [];

    const guestName = CUSTOMER_TYPES[customer.type].name.toLowerCase();
    this.feedback = byStaff
      ? `Phụ bếp giao ${recipe.name.toLowerCase()} cho ${guestName}. Lãi đơn: ${recipe.salePrice - ingredientCost} xu.`
      : `Phục vụ món thành công! +${recipe.salePrice - ingredientCost + tip} xu${tip > 0 ? ` (có ${tip} xu boa)` : ""}.`;
    this.persist();
    this.publish();
  }

  private finishShift(): void {
    const wages = this.hasStaff ? STAFF_WAGE_PER_SHIFT : 0;
    const paidWages = Math.min(this.coins, wages);
    this.coins -= paidWages;
    this.report = {
      served: this.shiftServed,
      left: this.shiftLeft + this.customers.length,
      revenue: this.shiftRevenue,
      tips: this.shiftTips,
      ingredientCosts: this.shiftIngredientCosts,
      wages: paidWages,
      net: this.shiftRevenue + this.shiftTips - this.shiftIngredientCosts - paidWages,
      reputationEarned: this.shiftReputation,
    };
    this.inShift = false;
    this.secondsRemaining = 0;
    this.customers = [];
    this.assembly = [];
    this.feedback = "Ca bán kết thúc. Nhập hàng và nâng cấp trước khi mở ca mới nhé.";
    this.persist();
    this.publish();
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as SavedGame;
      if (saved.version !== 1) return;

      this.storeName = typeof saved.storeName === "string" ? normalizeStoreName(saved.storeName) : "";
      this.coins = Math.max(0, saved.coins);
      this.reputation = Math.max(0, saved.reputation);
      this.cartLevel = Math.max(1, Math.min(MAX_CART_LEVEL, saved.cartLevel));
      this.hasStaff = saved.hasStaff;
      this.inventory = { ...createStartingInventory(), ...saved.inventory };
      this.totalServed = Math.max(0, saved.totalServed ?? 0);

      if (this.hasStaff && Number.isFinite(saved.lastSavedAt)) {
        const elapsedMinutes = Math.min(
          OFFLINE_CAP_MINUTES,
          Math.max(0, Math.floor((Date.now() - saved.lastSavedAt) / 60_000)),
        );
        const offlineCoins = elapsedMinutes * OFFLINE_COINS_PER_MINUTE;
        if (offlineCoins > 0) {
          this.coins += offlineCoins;
          this.offlineNotice = `Phụ bếp đã bán giúp bạn ${elapsedMinutes} phút, mang về ${offlineCoins.toLocaleString("vi-VN")} xu.`;
        }
      }
      this.persist();
    } catch {
      this.feedback = "Chưa đọc được bản lưu cũ; mình bắt đầu một lượt mới nhé.";
    }
  }

  private persist(): void {
    this.lastPersistAt = Date.now();
    const saved: SavedGame = {
      version: 1,
      storeName: this.storeName,
      coins: this.coins,
      reputation: this.reputation,
      cartLevel: this.cartLevel,
      hasStaff: this.hasStaff,
      inventory: this.inventory,
      totalServed: this.totalServed,
      lastSavedAt: this.lastPersistAt,
    };
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(saved));
    } catch {
      this.feedback = "Máy đang chặn lưu dữ liệu trình duyệt; tiến trình có thể không được giữ.";
    }
  }

  private publish(): void {
    const snapshot = this.getSnapshot();
    for (const listener of this.listeners) listener(snapshot);
  }
}
