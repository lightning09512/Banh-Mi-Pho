import { GAME_NAME_VI } from "./game";
import shopStage01Url from "../../assets/business-upgrades/shop_01.png";
import shopStage02Url from "../../assets/business-upgrades/shop_02.png";

export const SHOP_BASE_SIZE = { width: 2_172, height: 724 } as const;

export const SHOP_OVERLAY_BOX = { x: 700, y: 0, w: 860, h: 520 } as const;
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
] as const;

// Stages 1 and 2 use full-facade replacement artwork; later overlays are still pending.
export const SHOP_STAGES: readonly ShopStage[] = stageNames.map((name, index) => {
  const id = index + 1;
  const filename = `shop_${String(id).padStart(2, "0")}.${id <= 2 ? "png" : "webp"}`;
  return {
    id,
    image: id === 1 ? shopStage01Url : id === 2 ? shopStage02Url : null,
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

