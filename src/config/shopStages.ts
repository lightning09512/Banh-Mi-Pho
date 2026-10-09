import { GAME_NAME_VI } from "./game";
import shopStage01Url from "../../assets/business-upgrades/shop_01.png";
import shopStage02Url from "../../assets/business-upgrades/shop_02.png";
import shopStage03Url from "../../assets/business-upgrades/shop_03.png";
import shopStage04Url from "../../assets/business-upgrades/shop_04.png";
import shopStage05Url from "../../assets/business-upgrades/shop_05.png";
import shopStage06Url from "../../assets/business-upgrades/shop_06.png";
import shopStage07Url from "../../assets/business-upgrades/shop_07.png";
import shopStage08Url from "../../assets/business-upgrades/shop_08.png";
import shopStage09Url from "../../assets/business-upgrades/shop_09.png";
import shopStage10Url from "../../assets/business-upgrades/shop_10.png";
import shopStage11Url from "../../assets/business-upgrades/shop_11.png";
import shopStage12Url from "../../assets/business-upgrades/shop_12.png";
import shopStage13Url from "../../assets/business-upgrades/shop_13.png";

export const SHOP_BASE_SIZE = { width: 2_172, height: 724 } as const;

export const SHOP_OVERLAY_BOX = { x: 700, y: 0, w: 860, h: 520 } as const;
// Keep the original map roofline visible. Upgrade art begins at the shared
// facade seam and is fitted to the sidewalk baseline, preventing a second roof.
export const SHOP_OVERLAY_ROOFLINE_Y = 89;
// Stage 7's storefront sits a little high against the sidewalk in its source
// art. Lower its upper anchor while keeping the ground baseline fixed.
// Stages 1–9 only upgrade the storefront. Reuse the map's exact roof, upper
// windows, balcony, and wiring instead of repainting the unchanged structure.
export const SHOP_EARLY_STAGE_STORE_FRONT_Y = 260;
export const SHOP_STAGE_ROOFLINE_Y: Readonly<Record<number, number>> = {
  1: 89,
  2: 90,
  3: 90,
  4: 90,
  5: 91,
  6: 91,
  // Lower the remapped storefront seam so its awning aligns with Stage 6;
  // the fitting transform still keeps its sidewalk baseline fixed.
  7: 85,
  8: 90,
  9: 90,
  10: 89,
  11: 88,
  12: 89,
  13: 90,
};
// Stage 7 has one stray alpha pixel near y=504, below the actual storefront
// baseline. Ignore that isolated pixel when fitting the artwork so the visible
// pots and furniture use the sidewalk baseline instead of floating above it.
export const SHOP_STAGE_ARTWORK_TRIM_BOTTOM_Y: Readonly<Record<number, number>> = {
  7: 494,
};
export const SHOP_STAGE_FADE_MS = 500;
export const SHOP_STAGE_ASSET_DIRECTORY = "assets/business-upgrades";

export type ShopStage = {
  id: number;
  image: string | null;
  filename: string;
  name: string;
  price?: number;
  income?: number;
  seats?: number;
};

const stageNames = [
  "Quầy nhậu vỉa hè",
  "Bếp nướng bình dân",
  "Quán nhậu có mái che",
  "Quán nhậu góc phố",
  "Quán nhậu gia đình",
  "Quán nướng sân hiên",
  "Quán nhậu hai gian",
  "Quán nhậu đông khách",
  "Quán nhậu sân vườn",
  "Quán nhậu mặt phố",
  "Quán nhậu ba gian",
  `Thương hiệu ${GAME_NAME_VI}`,
  "Quán nhậu ba cửa sổ",
] as const;

// All stages use full-facade replacement artwork.
export const SHOP_STAGES: readonly ShopStage[] = stageNames.map((name, index) => {
  const id = index + 1;
  const filename = `shop_${String(id).padStart(2, "0")}.png`;
  return {
    id,
    image: id === 1 ? shopStage01Url : id === 2 ? shopStage02Url : id === 3 ? shopStage03Url : id === 4 ? shopStage04Url : id === 5 ? shopStage05Url : id === 6 ? shopStage06Url : id === 7 ? shopStage07Url : id === 8 ? shopStage08Url : id === 9 ? shopStage09Url : id === 10 ? shopStage10Url : id === 11 ? shopStage11Url : id === 12 ? shopStage12Url : shopStage13Url,
    filename,
    name,
    price: undefined,
    income: undefined,
    seats: undefined,
  };
});

export function getShopStageImageKey(stage: number): string {
  return `shop-stage-${stage}`;
}
