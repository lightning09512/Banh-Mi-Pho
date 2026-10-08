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

// All 12 stages use full-facade replacement artwork.
export const SHOP_STAGES: readonly ShopStage[] = stageNames.map((name, index) => {
  const id = index + 1;
  const filename = `shop_${String(id).padStart(2, "0")}.png`;
  return {
    id,
    image: id === 1 ? shopStage01Url : id === 2 ? shopStage02Url : id === 3 ? shopStage03Url : id === 4 ? shopStage04Url : id === 5 ? shopStage05Url : id === 6 ? shopStage06Url : id === 7 ? shopStage07Url : id === 8 ? shopStage08Url : id === 9 ? shopStage09Url : id === 10 ? shopStage10Url : id === 11 ? shopStage11Url : shopStage12Url,
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

