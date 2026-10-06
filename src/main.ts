import Phaser from "phaser";
import "./style.css";
import { BUSINESS_STAGE_NAMES, CART_UPGRADE_COST, CUSTOMER_TYPES, INGREDIENTS, MAX_CART_LEVEL, RECIPES, RESTOCK_PACK_COST, STAFF_HIRE_COST } from "./game/data";
import { GameStore, type GameSnapshot } from "./game/GameStore";
import { NeighborhoodScene } from "./game/NeighborhoodScene";

const store = new GameStore();
const app = document.querySelector<HTMLDivElement>("#app");
const phaserRoot = document.querySelector<HTMLDivElement>("#phaser-root");
if (!app || !phaserRoot) throw new Error("Không tìm thấy khung game.");

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "phaser-root",
  width: 1_280,
  height: 440,
  backgroundColor: "#c9a276",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    antialias: true,
    roundPixels: true,
  },
  scene: [new NeighborhoodScene(store)],
});

function formatClock(seconds: number): string {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function render(snapshot: GameSnapshot): void {
  const $ = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector);
  const coins = $("#coins");
  const reputation = $("#reputation");
  const orderTitle = $("#order-title");
  const orderHint = $("#order-hint");
  const callout = $("#customer-callout");
  const clock = $("#shift-clock");
  const feedback = $("#feedback");
  const queueCount = $("#queue-count");
  const status = $("#street-status");
  const level = $("#cart-level");
  const shiftButton = $("#shift-button") as HTMLButtonElement | null;
  const upgradeButton = $("[data-action='upgrade']") as HTMLButtonElement | null;
  const hireButton = $("#hire-button") as HTMLButtonElement | null;
  const report = $("#shift-report") as HTMLElement | null;

  if (coins) coins.textContent = snapshot.coins.toLocaleString("vi-VN");
  if (reputation) reputation.textContent = snapshot.reputation.toLocaleString("vi-VN");
  if (feedback) feedback.textContent = snapshot.offlineNotice || snapshot.feedback;
  if (queueCount) queueCount.textContent = snapshot.customers.length.toString();
  if (status) status.textContent = snapshot.inShift ? (snapshot.nightAmount > 0 ? "Phố lên đèn, khách vẫn ghé" : "Phố đang nhộn nhịp") : "Góc phố thân quen";
  if (clock) clock.textContent = snapshot.inShift ? `CÒN ${formatClock(snapshot.secondsRemaining)}` : "CA ĐÃ ĐÓNG";
  if (shiftButton) shiftButton.textContent = snapshot.inShift ? "Đóng ca, về tổng kết" : "Mở ca bán · 2 phút";
  if (level) level.textContent = `CẤP ${snapshot.cartLevel} / ${MAX_CART_LEVEL}`;
  if (level) level.title = BUSINESS_STAGE_NAMES[snapshot.cartLevel - 1];

  if (callout) {
    const customer = snapshot.customers[0];
    if (snapshot.inShift && customer?.status === "walking") {
      callout.textContent = `${CUSTOMER_TYPES[customer.type].name} đang đi tới xe…`;
    } else if (snapshot.inShift && customer) {
      callout.textContent = `${CUSTOMER_TYPES[customer.type].name} gọi ${RECIPES[customer.recipe].name.toLowerCase()} · còn ${customer.patience}s`;
    } else if (snapshot.inShift) {
      callout.textContent = "Đang đợi khách kế tiếp ghé xe…";
    } else {
      callout.textContent = snapshot.hasStaff ? "Phụ bếp đang nghỉ giữa ca — mở quán để bán tiếp nhé." : "Xe đang nghỉ — chuẩn bị hàng rồi mở ca nhé.";
    }
  }

  const activeCustomer = snapshot.customers[0];
  if (orderTitle) orderTitle.textContent = activeCustomer?.status === "walking"
    ? "Khách đang tới quầy…"
    : activeCustomer ? RECIPES[activeCustomer.recipe].name : "Chưa có khách";
  if (orderHint) {
    if (!snapshot.inShift) orderHint.textContent = "Mở ca để khách ghé xe. Làm đúng thứ tự nguyên liệu để nhận tiền boa và danh tiếng.";
    else if (activeCustomer?.status === "walking") orderHint.textContent = `${CUSTOMER_TYPES[activeCustomer.type].shortName} đang đi bộ tới quầy trên vỉa hè.`;
    else if (activeCustomer) orderHint.textContent = `${CUSTOMER_TYPES[activeCustomer.type].shortName} đang chờ. Chạm nguyên liệu theo thứ tự bên dưới.`;
    else orderHint.textContent = "Xe đang chờ khách mới. Trong lúc chờ, chuẩn bị nguyên liệu nhé.";
  }

  const steps = $("#order-steps");
  if (steps) {
    if (!activeCustomer) {
      steps.innerHTML = "<span class='empty-step'>Mở cửa để nhận đơn đầu tiên</span>";
    } else {
      const recipe = RECIPES[activeCustomer.recipe];
      steps.innerHTML = recipe.ingredients.map((ingredientId, index) => {
        const item = INGREDIENTS.find((entry) => entry.id === ingredientId)!;
        const done = index < snapshot.assembly.length;
        const current = index === snapshot.assembly.length;
        return `<span class="step-chip ${done ? "done" : ""} ${current ? "current" : ""}"><i>${done ? "✓" : item.icon}</i>${item.name}</span>`;
      }).join("");
    }
  }

  for (const ingredient of INGREDIENTS) {
    const stock = $(`#stock-${ingredient.id}`);
    const button = $(`[data-ingredient='${ingredient.id}']`) as HTMLButtonElement | null;
    const count = snapshot.inventory[ingredient.id];
    if (stock) stock.textContent = `${count} phần`;
    if (button) button.disabled = !snapshot.inShift || !activeCustomer || activeCustomer.status !== "waiting" || count < 1;
  }

  const restockButton = $("[data-action='restock']") as HTMLButtonElement | null;
  if (restockButton) restockButton.disabled = snapshot.inShift || snapshot.coins < RESTOCK_PACK_COST;

  const nextUpgradeCost = CART_UPGRADE_COST[snapshot.cartLevel] ?? 0;
  const upgradeLabel = $("#upgrade-label");
  const upgradeCost = $("#upgrade-cost");
  if (upgradeLabel) upgradeLabel.textContent = snapshot.cartLevel < MAX_CART_LEVEL ? `🏠 Nâng quán lên cấp ${snapshot.cartLevel + 1}` : "✅ Đã đạt cấp cao nhất";
  if (upgradeCost) upgradeCost.textContent = nextUpgradeCost > 0 ? `${nextUpgradeCost.toLocaleString("vi-VN")} xu` : "Đã xong bản thử";
  if (upgradeButton) upgradeButton.disabled = snapshot.inShift || nextUpgradeCost === 0 || snapshot.coins < nextUpgradeCost;

  const hireCost = $("#hire-cost");
  const businessNote = $("#business-note");
  if (snapshot.hasStaff) {
    if (hireCost) hireCost.textContent = "Đã có phụ bếp · lương 30 xu/ca";
    if (businessNote) businessNote.textContent = "Phụ bếp phục vụ tự động khi mở ca và tạo tối đa 4 giờ thu nhập ngoại tuyến.";
    if (hireButton) {
      hireButton.disabled = true;
      hireButton.querySelector("span")!.textContent = "✅ Đã thuê phụ bếp";
    }
  } else {
    if (hireCost) hireCost.textContent = snapshot.cartLevel >= 2 ? `${STAFF_HIRE_COST.toLocaleString("vi-VN")} xu` : "1.200 xu · cần xe cấp 2";
    if (businessNote) businessNote.textContent = "Bán bánh để dành tiền nâng cấp. Có phụ bếp, xe mới tự bán khi bạn rời game.";
    if (hireButton) {
      hireButton.disabled = snapshot.inShift || snapshot.cartLevel < 2 || snapshot.coins < STAFF_HIRE_COST;
      hireButton.querySelector("span")!.textContent = "🧑‍🍳 Thuê phụ bếp";
    }
  }

  for (const button of document.querySelectorAll<HTMLButtonElement>(".ingredient-button")) {
    button.classList.toggle("is-ready", !button.disabled);
  }

  if (report) {
    report.hidden = !snapshot.report;
    const details = $("#report-details");
    if (snapshot.report && details) {
      const result = snapshot.report;
      const signedNet = result.net >= 0 ? `+${result.net}` : `${result.net}`;
      details.innerHTML = `
        <div><span>Khách được phục vụ</span><strong>${result.served}</strong></div>
        <div><span>Khách rời hàng</span><strong>${result.left}</strong></div>
        <div><span>Tiền bán bánh</span><strong>${result.revenue.toLocaleString("vi-VN")} xu</strong></div>
        <div><span>Tiền boa</span><strong>${result.tips.toLocaleString("vi-VN")} xu</strong></div>
        <div><span>Nguyên liệu</span><strong>−${result.ingredientCosts.toLocaleString("vi-VN")} xu</strong></div>
        <div><span>Tiền công</span><strong>−${result.wages.toLocaleString("vi-VN")} xu</strong></div>
        <div class="net-row"><span>Lãi ròng ca này</span><strong>${signedNet} xu</strong></div>
        <div><span>Danh tiếng nhận được</span><strong>+${result.reputationEarned} ⭐</strong></div>
      `;
    }
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest<HTMLButtonElement>("button[data-action]");
  if (!button || button.disabled) return;

  switch (button.dataset.action) {
    case "toggle-shift":
      if (store.getSnapshot().inShift) store.closeShift();
      else store.startShift();
      break;
    case "ingredient": {
      const id = button.dataset.ingredient;
      if (id) store.tapIngredient(id as "bread" | "pate" | "cha" | "egg" | "greens");
      break;
    }
    case "restock":
      store.restock();
      break;
    case "upgrade":
      store.upgradeCart();
      break;
    case "hire":
      store.hireStaff();
      break;
    case "dismiss-report":
      store.dismissReport();
      break;
    case "fullscreen":
      if (document.fullscreenElement) void document.exitFullscreen();
      else void document.documentElement.requestFullscreen?.();
      break;
  }
});

document.addEventListener("fullscreenchange", () => {
  const fullscreenButton = document.querySelector<HTMLButtonElement>(".fullscreen-button");
  const isFullscreen = Boolean(document.fullscreenElement);
  if (!fullscreenButton) return;
  fullscreenButton.textContent = isFullscreen ? "⤢" : "⛶";
  fullscreenButton.setAttribute("aria-label", isFullscreen ? "Thoát toàn màn hình" : "Bật toàn màn hình");
  fullscreenButton.title = isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình";
});

store.subscribe(render);
