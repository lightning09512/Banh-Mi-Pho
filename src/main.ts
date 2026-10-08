import Phaser from "phaser";
import "./style.css";
import { BUSINESS_STAGE_NAMES, CART_UPGRADE_COST, CUSTOMER_TYPES, INGREDIENTS, MAX_CART_LEVEL, RECIPES, RESTOCK_PACK_COST, STAFF_HIRE_COST } from "./game/data";
import { GameStore, type GameSnapshot } from "./game/GameStore";
import { MusicPlayer } from "./game/MusicPlayer";
import { NeighborhoodScene } from "./game/NeighborhoodScene";
import { GAME_NAME_VI, GAME_TITLE } from "./config/game";

document.title = GAME_TITLE;

const store = new GameStore();
const musicPlayer = new MusicPlayer((state) => {
  const control = document.querySelector<HTMLDetailsElement>(".music-control");
  const trigger = document.querySelector<HTMLElement>("#music-control-trigger");
  const toggle = document.querySelector<HTMLButtonElement>("#music-toggle");
  const icon = document.querySelector<HTMLElement>("#music-toggle-icon");
  const label = document.querySelector<HTMLElement>("#music-toggle-label");
  const trackName = document.querySelector<HTMLElement>("#music-track-name");
  const slider = document.querySelector<HTMLInputElement>("#music-volume");
  const volumeValue = document.querySelector<HTMLOutputElement>("#music-volume-value");

  if (control) control.dataset.playing = String(state.isPlaying);
  if (trigger) {
    trigger.setAttribute("aria-label", state.isPlaying ? "Nhạc nền đang phát" : "Mở điều khiển nhạc nền");
    trigger.title = state.isPlaying ? `Đang phát: ${state.trackName}` : "Nhạc nền";
  }
  if (toggle) toggle.setAttribute("aria-pressed", String(state.isPlaying));
  if (icon) icon.textContent = state.isPlaying ? "Ⅱ" : "▶";
  if (label) label.textContent = state.isPlaying ? "Tạm dừng nhạc" : state.enabled ? "Phát nhạc" : "Bật nhạc";
  if (trackName) trackName.textContent = state.trackName;
  if (slider) slider.value = state.volumePercent.toString();
  if (volumeValue) volumeValue.value = `${state.volumePercent}%`;
});
const scene = new NeighborhoodScene(store);
let activeTab = "outside";
const app = document.querySelector<HTMLDivElement>("#app");
const phaserRoot = document.querySelector<HTMLDivElement>("#phaser-root");
if (!app || !phaserRoot) throw new Error("Không tìm thấy khung game.");

const devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
const initialCanvasBounds = phaserRoot.getBoundingClientRect();
const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "phaser-root",
  width: Math.max(1, Math.round(initialCanvasBounds.width * devicePixelRatio)),
  height: Math.max(1, Math.round(initialCanvasBounds.height * devicePixelRatio)),
  backgroundColor: "#c9a276",
  scale: {
    mode: Phaser.Scale.NONE,
  },
  render: {
    antialias: false,
    roundPixels: true,
  },
  scene: [scene],
});

const resizeGameCanvasForDpr = (): void => {
  const bounds = phaserRoot.getBoundingClientRect();
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const width = Math.max(1, Math.round(bounds.width * dpr));
  const height = Math.max(1, Math.round(bounds.height * dpr));
  scene.setDevicePixelRatio(dpr);
  if (game.scale.width !== width || game.scale.height !== height) game.scale.resize(width, height);
  game.canvas.style.width = `${bounds.width}px`;
  game.canvas.style.height = `${bounds.height}px`;
  game.scale.refresh();
};

const canvasResizeObserver = new ResizeObserver(resizeGameCanvasForDpr);
canvasResizeObserver.observe(phaserRoot);
window.addEventListener("resize", resizeGameCanvasForDpr, { passive: true });
game.events.once(Phaser.Core.Events.READY, resizeGameCanvasForDpr);

let editingStoreName = false;

function getDisplayStoreName(name: string): string {
  return name.replace(/^(?:xe\s+)?bánh\s+mì(?=\s|$)/i, "Quán Nhậu");
}

function updateStoreNameDraft(): void {
  const input = document.querySelector<HTMLInputElement>("#store-name-input");
  const preview = document.querySelector<HTMLElement>("#store-name-preview");
  const count = document.querySelector<HTMLElement>("#store-name-count");
  if (!input) return;
  const draft = input.value.replace(/\s+/g, " ").trim().slice(0, input.maxLength);
  if (preview) preview.textContent = getDisplayStoreName(draft) || "Tên quán của bạn";
  if (count) count.textContent = `${input.value.length}/${input.maxLength}`;
}

function openStoreNameModal(editing = false): void {
  const modal = document.querySelector<HTMLElement>("#store-name-modal");
  const input = document.querySelector<HTMLInputElement>("#store-name-input");
  const heading = document.querySelector<HTMLElement>("#store-name-heading");
  const description = document.querySelector<HTMLElement>("#store-name-description");
  const submit = document.querySelector<HTMLButtonElement>("#submit-store-name");
  const cancel = document.querySelector<HTMLButtonElement>("#cancel-store-name");
  const error = document.querySelector<HTMLElement>("#store-name-error");
  if (!modal || !input) return;

  editingStoreName = editing;
  const currentName = store.getSnapshot().storeName;
  input.value = getDisplayStoreName(currentName);
  if (heading) heading.textContent = editing ? "Đổi tên biển hiệu" : "Đặt tên cho cửa tiệm";
  if (description) {
    description.textContent = editing
      ? "Chọn một tên mới cho tiệm. Bảng hiệu sẽ được cập nhật và lưu lại trên thiết bị này."
      : "Quán nhậu nhỏ của gia đình giờ là của bạn. Hãy chọn tên để treo lên biển hiệu.";
  }
  if (submit) submit.textContent = editing ? "Lưu bảng hiệu" : "Bắt đầu ở góc phố";
  if (cancel) cancel.hidden = !editing;
  if (error) error.textContent = "";
  updateStoreNameDraft();
  modal.hidden = false;
  window.requestAnimationFrame(() => input.focus());
}

function saveStoreName(event: SubmitEvent): void {
  event.preventDefault();
  const input = document.querySelector<HTMLInputElement>("#store-name-input");
  const modal = document.querySelector<HTMLElement>("#store-name-modal");
  const error = document.querySelector<HTMLElement>("#store-name-error");
  if (!input || !modal) return;
  if (!store.setStoreName(input.value)) {
    if (error) error.textContent = "Bạn nhập tên tiệm trước khi treo bảng hiệu nhé.";
    input.focus();
    return;
  }
  modal.hidden = true;
}

function selectTab(tab: string, toggle = false): void {
  const panel = document.querySelector<HTMLElement>("#play-panel");
  const currentTab = activeTab;
  activeTab = toggle && tab === currentTab ? "outside" : tab;
  const activeButton = document.querySelector<HTMLButtonElement>(`[data-tab-target="${activeTab}"]`);
  const selectedPanel = activeTab !== "outside";
  if (app) app.dataset.panelOpen = String(selectedPanel);
  if (panel) {
    panel.hidden = !selectedPanel;
    panel.dataset.menu = activeTab;
  }
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-tab-target]")) {
    const selected = button.dataset.tabTarget === activeTab;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
  for (const content of document.querySelectorAll<HTMLElement>("[data-menu-content]")) {
    content.hidden = content.dataset.menuContent !== activeTab;
  }
  const headings: Record<string, [string, string]> = {
    shop: ["GÓC QUẢN LÝ", "Cửa tiệm"],
    staff: ["ĐỘI NGŨ", "Nhân viên"],
    menu: ["ĐANG PHỤC VỤ", "Thực đơn"],
    recipes: ["SỔ TAY MÓN NGON", "Sáng tạo"],
    stock: ["KHO NGUYÊN LIỆU", "Cửa hàng"],
  };
  const [eyebrow, title] = headings[activeTab] ?? ["GÓC PHỐ SÀI GÒN", "Bảng quản lý"];
  const eyebrowNode = document.querySelector<HTMLElement>("#sheet-eyebrow");
  const titleNode = document.querySelector<HTMLElement>("#sheet-title");
  if (eyebrowNode) eyebrowNode.textContent = eyebrow;
  if (titleNode) titleNode.textContent = title;
  if (selectedPanel) activeButton?.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function renderRecipes(snapshot: GameSnapshot): void {
  const list = document.querySelector<HTMLElement>("#recipe-collection");
  if (!list) return;
  list.innerHTML = Object.values(RECIPES).map((recipe) => {
    const unlocked = snapshot.cartLevel >= recipe.unlockLevel;
    const ingredientNames = recipe.ingredients.map((id) => INGREDIENTS.find((item) => item.id === id)?.name ?? id).join(" · ");
    return `<article class="recipe-card ${unlocked ? "" : "is-locked"}"><span class="recipe-icon">${unlocked ? "🥖" : "🔒"}</span><div><h3>${recipe.name}</h3><p>${unlocked ? ingredientNames : `Mở khóa ở cấp ${recipe.unlockLevel}`}</p></div><b>${unlocked ? `${recipe.salePrice} xu` : "Chưa mở"}</b></article>`;
  }).join("");
}

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
  const shiftButtonLabel = $("#shift-button-label");
  const businessStage = $("#business-stage");
  const upgradeButton = $("[data-action='upgrade']") as HTMLButtonElement | null;
  const hireButton = $("#hire-button") as HTMLButtonElement | null;
  const report = $("#shift-report") as HTMLElement | null;
  const storeNameDisplay = $("#store-name-display");
  const storeNameShort = $("#store-name-short");

  if (storeNameDisplay) storeNameDisplay.textContent = getDisplayStoreName(snapshot.storeName) || GAME_NAME_VI;
  if (storeNameShort) storeNameShort.textContent = getDisplayStoreName(snapshot.storeName) || "Chưa đặt tên";
  if (coins) coins.textContent = snapshot.coins.toLocaleString("vi-VN");
  if (reputation) reputation.textContent = snapshot.reputation.toLocaleString("vi-VN");
  if (feedback) feedback.textContent = snapshot.offlineNotice || snapshot.feedback;
  if (queueCount) queueCount.textContent = snapshot.customers.length.toString();
  if (status) status.textContent = snapshot.inShift ? "Phố đang nhộn nhịp" : "Góc phố thân quen";
  if (clock) clock.textContent = snapshot.inShift ? formatClock(snapshot.secondsRemaining) : "2 phút";
  if (shiftButtonLabel) shiftButtonLabel.textContent = snapshot.inShift ? "Đóng ca" : "Mở ca bán";
  if (level) level.textContent = `CẤP ${snapshot.cartLevel} / ${MAX_CART_LEVEL}`;
  if (level) level.title = BUSINESS_STAGE_NAMES[snapshot.cartLevel - 1];
  if (businessStage) businessStage.textContent = BUSINESS_STAGE_NAMES[snapshot.cartLevel - 1];
  renderRecipes(snapshot);

  if (callout) {
    const customer = snapshot.customers[0];
    if (snapshot.inShift && customer?.status === "walking") {
      callout.textContent = `${CUSTOMER_TYPES[customer.type].name} đang đi tới quán…`;
    } else if (snapshot.inShift && customer) {
      callout.textContent = `${CUSTOMER_TYPES[customer.type].name} gọi ${RECIPES[customer.recipe].name.toLowerCase()} · còn ${customer.patience}s`;
    } else if (snapshot.inShift) {
      callout.textContent = "Đang đợi khách kế tiếp ghé quán…";
    } else {
      callout.textContent = snapshot.hasStaff ? "Phụ bếp đang nghỉ giữa ca — mở quán để bán tiếp nhé." : "Quán đang nghỉ — chuẩn bị hàng rồi mở ca nhé.";
    }
  }

  const activeCustomer = snapshot.customers[0];
  if (orderTitle) orderTitle.textContent = activeCustomer?.status === "walking"
    ? "Khách đang tới quầy…"
    : activeCustomer ? RECIPES[activeCustomer.recipe].name : "Chưa có khách";
  if (orderHint) {
    if (!snapshot.inShift) orderHint.textContent = "Mở ca để khách ghé quán. Chọn đúng thứ tự nguyên liệu để nhận tiền boa và danh tiếng.";
    else if (activeCustomer?.status === "walking") orderHint.textContent = `${CUSTOMER_TYPES[activeCustomer.type].shortName} đang đi bộ tới quầy trên vỉa hè.`;
    else if (activeCustomer) orderHint.textContent = `${CUSTOMER_TYPES[activeCustomer.type].shortName} đang chờ. Chạm nguyên liệu theo thứ tự bên dưới.`;
    else orderHint.textContent = "Quán đang chờ khách mới. Trong lúc chờ, chuẩn bị nguyên liệu nhé.";
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
    const stockCount = $(`[data-stock-count="${ingredient.id}"]`);
    if (stockCount) stockCount.textContent = count.toString();
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
    if (hireCost) hireCost.textContent = snapshot.cartLevel >= 2 ? `${STAFF_HIRE_COST.toLocaleString("vi-VN")} xu` : "1.200 xu · cần quán cấp 2";
    if (businessNote) businessNote.textContent = "Phục vụ món để dành tiền nâng cấp. Có phụ bếp, quán vẫn kiếm xu khi bạn rời game.";
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
        <div><span>Doanh thu món</span><strong>${result.revenue.toLocaleString("vi-VN")} xu</strong></div>
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
  const panButton = target.closest<HTMLButtonElement>("button[data-map-pan]");
  if (panButton) {
    scene.panMap(panButton.dataset.mapPan === "-1" ? -1 : 1);
    return;
  }
  if (!button || button.disabled) return;

  switch (button.dataset.action) {
    case "toggle-shift":
      if (store.getSnapshot().inShift) {
        store.closeShift();
        selectTab("outside");
      } else {
        selectTab("menu");
        scene.centerOnShop();
        store.startShift();
      }
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
    case "edit-store-name":
      openStoreNameModal(true);
      break;
    case "dismiss-report":
      store.dismissReport();
      break;
    case "close-panel":
      selectTab("outside");
      break;
    case "fullscreen":
      if (document.fullscreenElement) void document.exitFullscreen();
      else void document.documentElement.requestFullscreen?.();
      break;
    case "toggle-music":
      stopAutoStartMusic();
      void musicPlayer.toggle();
      break;
  }
});

function stopAutoStartMusic(): void {
  document.removeEventListener("pointerdown", startMusicAfterGesture);
  document.removeEventListener("keydown", startMusicAfterGesture);
}

function startMusicAfterGesture(event: Event): void {
  if (event.target instanceof Element && event.target.closest(".music-control")) return;
  stopAutoStartMusic();
  if (musicPlayer.shouldAutoStart) void musicPlayer.play();
}

document.addEventListener("pointerdown", startMusicAfterGesture);
document.addEventListener("keydown", startMusicAfterGesture);
document.querySelector<HTMLInputElement>("#music-volume")?.addEventListener("input", (event) => {
  const slider = event.currentTarget;
  if (slider instanceof HTMLInputElement) musicPlayer.setVolume(Number(slider.value));
});

document.querySelector<HTMLFormElement>("#store-name-form")?.addEventListener("submit", saveStoreName);
document.querySelector<HTMLInputElement>("#store-name-input")?.addEventListener("input", () => {
  updateStoreNameDraft();
  const error = document.querySelector<HTMLElement>("#store-name-error");
  if (error) error.textContent = "";
});
document.querySelector<HTMLButtonElement>("#cancel-store-name")?.addEventListener("click", () => {
  if (editingStoreName) {
    const modal = document.querySelector<HTMLElement>("#store-name-modal");
    if (modal) modal.hidden = true;
  }
});
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const suggestion = target.closest<HTMLButtonElement>("button[data-store-name-suggestion]");
  if (!suggestion?.dataset.storeNameSuggestion) return;
  const input = document.querySelector<HTMLInputElement>("#store-name-input");
  if (!input) return;
  input.value = suggestion.dataset.storeNameSuggestion;
  updateStoreNameDraft();
  input.focus();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const tabButton = target.closest<HTMLButtonElement>("button[data-tab-target]");
  if (tabButton?.dataset.tabTarget) {
    if (tabButton.dataset.tabTarget === "outside") {
      selectTab("outside");
      scene.centerOnShop();
      return;
    }
    selectTab(tabButton.dataset.tabTarget, true);
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
selectTab("outside");
if (!store.getSnapshot().storeName) openStoreNameModal();

const mapHint = document.querySelector<HTMLElement>("#map-hint");
phaserRoot.addEventListener("pointerdown", () => mapHint?.classList.add("is-dismissed"), { once: true });
window.setTimeout(() => mapHint?.classList.add("is-dismissed"), 6_000);
