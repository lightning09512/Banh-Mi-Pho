import Phaser from "phaser";
import dawnStreetMapUrl from "../../assets/backgrounds/time-of-day/saigon-street-map-dawn.png";
import sunnyStreetMapUrl from "../../assets/backgrounds/time-of-day/saigon-street-map-sunny-day.png";
import overcastStreetMapUrl from "../../assets/backgrounds/time-of-day/saigon-street-map-overcast.png";
import sunsetStreetMapUrl from "../../assets/backgrounds/time-of-day/saigon-street-map-sunset.png";
import nightStreetMapUrl from "../../assets/backgrounds/time-of-day/saigon-street-map-night.png";
import foliageUrl from "../../assets/effects/saigon-foliage-wind-animation-atlas.png";
import edgeBranchSwayUrl from "../../assets/effects/saigon-edge-branch-sway-v1.png";
import dayNightEffectsUrl from "../../assets/effects/saigon-day-night-transition-atlas.png";
import weatherEffectsUrl from "../../assets/effects/saigon-weather-effects-atlas.png";
import schoolgirlIdleUrl from "../../assets/characters/saigon-schoolgirl-front-idle-v1-concept.png";
import backpackerTouristFrontUrl from "../../assets/characters/saigon-backpacker-tourist-front-customer.png";
import constructionWorkerFrontUrl from "../../assets/characters/saigon-construction-worker-front-customer.png";
import deliveryRiderFrontUrl from "../../assets/characters/saigon-delivery-rider-front-customer.png";
import foodReviewerFrontUrl from "../../assets/characters/saigon-food-reviewer-front-customer.png";
import genzNightowlFrontUrl from "../../assets/characters/saigon-genz-nightowl-front-customer.png";
import ingredientSupplierFrontUrl from "../../assets/characters/saigon-ingredient-supplier-front-customer.png";
import lotteryVendorFrontUrl from "../../assets/characters/saigon-lottery-vendor-front-customer.png";
import marketShopperFrontUrl from "../../assets/characters/saigon-market-shopper-front-customer.png";
import morningJoggerFrontUrl from "../../assets/characters/saigon-morning-jogger-front-customer.png";
import officeManFrontUrl from "../../assets/characters/saigon-office-man-front-customer.png";
import officeWomanFrontUrl from "../../assets/characters/saigon-office-woman-front-customer.png";
import olderRegularFrontUrl from "../../assets/characters/saigon-older-regular-front-customer.png";
import schoolboyFrontUrl from "../../assets/characters/saigon-schoolboy-front-customer.png";
import streetSweeperFrontUrl from "../../assets/characters/saigon-street-sweeper-front-customer.png";
import wardInspectorFrontUrl from "../../assets/characters/saigon-ward-inspector-front-customer.png";
import wardPoliceFrontUrl from "../../assets/characters/saigon-ward-police-officer-front-customer.png";
import youngMotherFrontUrl from "../../assets/characters/saigon-young-mother-front-customer.png";
import schoolgirlWalkUrl from "../../assets/characters/saigon-schoolgirl-walk-horizontal-v2-concept.png";
import officeManWalkUrl from "../../assets/characters/saigon-office-man-walk-horizontal-v3-12frame.png";
import marketShopperWalkUrl from "../../assets/characters/saigon-market-shopper-walk-horizontal-v3-12frame.png";
import touristWalkUrl from "../../assets/characters/saigon-backpacker-tourist-walk-horizontal-user.png";
import constructionWorkerWalkUrl from "../../assets/characters/saigon-construction-worker-walk-horizontal-user.png";
import deliveryRiderWalkUrl from "../../assets/characters/saigon-delivery-rider-walk-horizontal-user.png";
import foodReviewerWalkUrl from "../../assets/characters/saigon-food-reviewer-walk-horizontal-user.png";
import genzNightowlWalkUrl from "../../assets/characters/saigon-genz-nightowl-walk-horizontal-user.png";
import ingredientSupplierWalkUrl from "../../assets/characters/saigon-ingredient-supplier-walk-horizontal-v3-12frame.png";
import lotteryVendorWalkUrl from "../../assets/characters/saigon-lottery-vendor-walk-horizontal-user.png";
import morningJoggerWalkUrl from "../../assets/characters/saigon-morning-jogger-walk-horizontal-user.png";
import officeWomanWalkUrl from "../../assets/characters/saigon-office-woman-walk-horizontal-v2-concept.png";
import olderRegularWalkUrl from "../../assets/characters/saigon-older-regular-walk-horizontal-v2-concept.png";
import schoolboyWalkUrl from "../../assets/characters/saigon-schoolboy-walk-horizontal-v2-concept.png";
import streetSweeperWalkUrl from "../../assets/characters/saigon-street-sweeper-walk-horizontal-v2-concept.png";
import wardPoliceWalkUrl from "../../assets/characters/saigon-ward-police-officer-walk-horizontal-user.png";
import wardInspectorWalkUrl from "../../assets/characters/saigon-ward-inspector-walk-horizontal-user.png";
import youngMotherWalkUrl from "../../assets/characters/saigon-young-mother-walk-horizontal-v2-concept.png";
import streetCatActionsUrl from "../../assets/characters/saigon-street-cat-actions.png";
import pigeonEatUrl from "../../assets/characters/pigeon_eat-Sheet.png";
import pigeonFlyUrl from "../../assets/characters/pigeon_fiy-Sheet.png";
import pigeonWalkUrl from "../../assets/characters/pigeon_walking-Sheet.png";
import pigeonEgg01Url from "../../assets/characters/free_pigeon_prop_pack/eggs/egg_01_16x16.png";
import pigeonEgg03Url from "../../assets/characters/free_pigeon_prop_pack/eggs/egg_03_16x16.png";
import pigeonNestUrl from "../../assets/characters/free_pigeon_prop_pack/environment/nest_48x48.png";
import taphoaStudentBoyWalkUrl from "../../assets/characters/saigon-taphoa-student-boy-walk-v1.png";
import taphoaCollegeGirlWalkUrl from "../../assets/characters/saigon-taphoa-college-girl-walk-v1.png";
import taphoaStudentBoyBrowseUrl from "../../assets/characters/saigon-taphoa-student-boy-shop-idle-v1.png";
import taphoaCollegeGirlBrowseUrl from "../../assets/characters/saigon-taphoa-college-girl-shop-idle-v1.png";
import officeManPhoSeatUrl from "../../assets/characters/saigon-office-man-seated-pho-idle.png";
import officeWomanCoffeeSeatUrl from "../../assets/characters/saigon-office-woman-seated-coffee-idle.png";
import constructionWorkerComTamSeatUrl from "../../assets/characters/saigon-construction-worker-seated-com-tam-idle.png";
import backpackerCoffeeSeatUrl from "../../assets/characters/saigon-backpacker-tourist-seated-coffee-idle.png";
import olderRegularComTamSeatUrl from "../../assets/characters/saigon-older-regular-seated-com-tam-idle.png";
import {
  getShopStageImageKey,
  SHOP_BASE_SIZE,
  SHOP_OVERLAY_BOX,
  SHOP_STAGE_ASSET_DIRECTORY,
  SHOP_STAGE_FADE_MS,
  SHOP_STAGES,
} from "../config/shopStages";
import { RECIPES, type CustomerType } from "./data";
import { GameStore, type GameSnapshot, type WaitingCustomer } from "./GameStore";

type CustomerAppearance = {
  key: string;
  frontUrl: string;
  walkKey: string;
  shortName: string;
  idleAnimation?: string;
};

const CUSTOMER_APPEARANCES: Record<CustomerType, readonly CustomerAppearance[]> = {
  student: [
    { key: "customer-schoolgirl-idle", frontUrl: schoolgirlIdleUrl, walkKey: "walk-student", shortName: "Bạn học sinh", idleAnimation: "customer-schoolgirl-idle-loop" },
    { key: "customer-schoolboy", frontUrl: schoolboyFrontUrl, walkKey: "walk-schoolboy", shortName: "Bạn nam sinh" },
  ],
  office: [
    { key: "customer-office-man", frontUrl: officeManFrontUrl, walkKey: "walk-office", shortName: "Anh văn phòng" },
    { key: "customer-office-woman", frontUrl: officeWomanFrontUrl, walkKey: "walk-office-woman", shortName: "Cô văn phòng" },
  ],
  shopper: [
    { key: "customer-market-shopper", frontUrl: marketShopperFrontUrl, walkKey: "walk-shopper", shortName: "Cô đi chợ" },
    { key: "customer-older-regular", frontUrl: olderRegularFrontUrl, walkKey: "walk-older-regular", shortName: "Khách quen" },
    { key: "customer-young-mother", frontUrl: youngMotherFrontUrl, walkKey: "walk-young-mother", shortName: "Mẹ trẻ" },
    { key: "customer-construction-worker", frontUrl: constructionWorkerFrontUrl, walkKey: "walk-construction-worker", shortName: "Chú công nhân" },
    { key: "customer-delivery-rider", frontUrl: deliveryRiderFrontUrl, walkKey: "walk-delivery-rider", shortName: "Anh giao hàng" },
    { key: "customer-ingredient-supplier", frontUrl: ingredientSupplierFrontUrl, walkKey: "walk-ingredient-supplier", shortName: "Người giao hàng" },
    { key: "customer-lottery-vendor", frontUrl: lotteryVendorFrontUrl, walkKey: "walk-lottery-vendor", shortName: "Cô bán vé số" },
    { key: "customer-morning-jogger", frontUrl: morningJoggerFrontUrl, walkKey: "walk-morning-jogger", shortName: "Người chạy bộ" },
    { key: "customer-street-sweeper", frontUrl: streetSweeperFrontUrl, walkKey: "walk-street-sweeper", shortName: "Chú quét đường" },
    { key: "customer-ward-inspector", frontUrl: wardInspectorFrontUrl, walkKey: "walk-ward-inspector", shortName: "Cán bộ phường" },
    { key: "customer-ward-police", frontUrl: wardPoliceFrontUrl, walkKey: "walk-ward-police-officer", shortName: "Công an phường" },
  ],
  tourist: [
    { key: "customer-backpacker-tourist", frontUrl: backpackerTouristFrontUrl, walkKey: "walk-tourist", shortName: "Du khách" },
    { key: "customer-food-reviewer", frontUrl: foodReviewerFrontUrl, walkKey: "walk-food-reviewer", shortName: "Food blogger" },
    { key: "customer-genz-nightowl", frontUrl: genzNightowlFrontUrl, walkKey: "walk-genz-nightowl", shortName: "Bạn trẻ" },
  ],
};

const ALL_CUSTOMER_APPEARANCES: readonly CustomerAppearance[] = [
  ...CUSTOMER_APPEARANCES.student,
  ...CUSTOMER_APPEARANCES.office,
  ...CUSTOMER_APPEARANCES.shopper,
  ...CUSTOMER_APPEARANCES.tourist,
];

const WALKER_TEXTURES = [
  "walk-student",
  "walk-office",
  "walk-shopper",
  "walk-tourist",
  "walk-street-cat",
  "walk-construction-worker",
  "walk-delivery-rider",
  "walk-food-reviewer",
  "walk-genz-nightowl",
  "walk-ingredient-supplier",
  "walk-lottery-vendor",
  "walk-morning-jogger",
  "walk-office-woman",
  "walk-older-regular",
  "walk-schoolboy",
  "walk-street-sweeper",
  "walk-ward-police-officer",
  "walk-ward-inspector",
  "walk-young-mother",
] as const;

const WALKER_FOOTPRINTS: Partial<Record<(typeof WALKER_TEXTURES)[number], {
  width: number;
  height: number;
  shadowWidth: number;
  shadowHeight: number;
}>> = {
  // The cat atlas uses square frames; its transparent padding keeps poses
  // aligned to the sidewalk baseline.
  "walk-street-cat": { width: 72, height: 72, shadowWidth: 33, shadowHeight: 7 },
};

const PET_SPRITE_GRIDS = {
  "walk-street-cat": { url: streetCatActionsUrl, frameWidth: 160, frameHeight: 160 },
} as const;

const AMBIENT_WALKER_ASSETS = [
  { key: "walk-student", url: schoolgirlWalkUrl },
  { key: "walk-office", url: officeManWalkUrl },
  { key: "walk-shopper", url: marketShopperWalkUrl },
  { key: "walk-tourist", url: touristWalkUrl },
  { key: "walk-street-cat", url: streetCatActionsUrl },
  { key: "walk-construction-worker", url: constructionWorkerWalkUrl },
  { key: "walk-delivery-rider", url: deliveryRiderWalkUrl },
  { key: "walk-food-reviewer", url: foodReviewerWalkUrl },
  { key: "walk-genz-nightowl", url: genzNightowlWalkUrl },
  { key: "walk-ingredient-supplier", url: ingredientSupplierWalkUrl },
  { key: "walk-lottery-vendor", url: lotteryVendorWalkUrl },
  { key: "walk-morning-jogger", url: morningJoggerWalkUrl },
  { key: "walk-office-woman", url: officeWomanWalkUrl },
  { key: "walk-older-regular", url: olderRegularWalkUrl },
  { key: "walk-schoolboy", url: schoolboyWalkUrl },
  { key: "walk-street-sweeper", url: streetSweeperWalkUrl },
  { key: "walk-ward-police-officer", url: wardPoliceWalkUrl },
  { key: "walk-ward-inspector", url: wardInspectorWalkUrl },
  { key: "walk-young-mother", url: youngMotherWalkUrl },
] as const;
const CUSTOMER_FRAME_WIDTH = 247;
const CUSTOMER_FRAME_HEIGHT = 396;
const CUSTOMER_DISPLAY_WIDTH = 54;
const CUSTOMER_DISPLAY_HEIGHT = 86;
const CHARACTER_TARGET_VISIBLE_HEIGHT = 78;
const WALKER_BASELINE_Y = 374;
const WALK_FRAME_RATE = 5;
const CORE_WALKER_COUNT = 6;
const MAX_ACTIVE_AMBIENT_WALKERS = 14;
const LEAF_COUNT = 42;
const BRANCH_FRAME_WIDTH = 222;
const BRANCH_FRAME_HEIGHT = 232;
const BRANCH_ATTACHMENT_Y = 200;
const BRANCH_ANCHORS = [
  { side: "left", x: 0.003, y: 0.245, size: 1, phase: 0 },
  { side: "left", x: 0.025, y: 0.21, size: 0.68, phase: 0.31 },
  { side: "left", x: 0.055, y: 0.29, size: 0.56, phase: 0.68 },
  { side: "left", x: 0.09, y: 0.35, size: 0.46, phase: 0.89 },
  { side: "right", x: 0.94, y: 0.37, size: 0.46, phase: 0.77 },
  { side: "right", x: 0.96, y: 0.21, size: 0.56, phase: 0.53 },
  { side: "right", x: 0.978, y: 0.29, size: 0.68, phase: 0.29 },
  { side: "right", x: 0.997, y: 0.245, size: 1, phase: 0.11 },
] as const;
const DAY_LENGTH_MS = 6 * 60_000;
const WEATHER_CYCLE_MS = 6 * 60_000;
const START_DAY_PHASE = 0.42;

// Measured alpha bounds keep sheets with different transparent margins at the
// same apparent height when they share a sidewalk or customer queue.
const WALKER_ART_HEIGHTS: Record<string, number> = {
  "walk-student": 348,
  "walk-office": 349,
  "walk-shopper": 343,
  "walk-tourist": 361,
  "walk-construction-worker": 364,
  "walk-delivery-rider": 363,
  "walk-food-reviewer": 366,
  "walk-genz-nightowl": 365,
  "walk-ingredient-supplier": 324,
  "walk-lottery-vendor": 361,
  "walk-morning-jogger": 362,
  "walk-office-woman": 348,
  "walk-older-regular": 343,
  "walk-schoolboy": 347,
  "walk-street-sweeper": 351,
  "walk-ward-police-officer": 363,
  "walk-ward-inspector": 363,
  "walk-young-mother": 357,
  "walk-taphoa-student-boy": 386,
  "walk-taphoa-college-girl": 389,
};

const CUSTOMER_ART_HEIGHTS: Record<string, number> = {
  "customer-schoolgirl-idle": 350,
  "customer-schoolboy": 352,
  "customer-office-man": 335,
  "customer-office-woman": 347,
  "customer-market-shopper": 346,
  "customer-older-regular": 349,
  "customer-young-mother": 344,
  "customer-construction-worker": 345,
  "customer-delivery-rider": 345,
  "customer-ingredient-supplier": 353,
  "customer-lottery-vendor": 354,
  "customer-morning-jogger": 343,
  "customer-street-sweeper": 347,
  "customer-ward-inspector": 354,
  "customer-ward-police": 365,
  "customer-backpacker-tourist": 345,
  "customer-food-reviewer": 354,
  "customer-genz-nightowl": 349,
};

const CUSTOMER_ART_BOTTOMS: Record<string, number> = {
  "customer-schoolgirl-idle": 374,
  "customer-schoolboy": 389,
  "customer-office-man": 377,
  "customer-office-woman": 393,
  "customer-market-shopper": 391,
  "customer-older-regular": 393,
  "customer-young-mother": 377,
  "customer-construction-worker": 390,
  "customer-delivery-rider": 389,
  "customer-ingredient-supplier": 391,
  "customer-lottery-vendor": 389,
  "customer-morning-jogger": 391,
  "customer-street-sweeper": 393,
  "customer-ward-inspector": 396,
  "customer-ward-police": 395,
  "customer-backpacker-tourist": 391,
  "customer-food-reviewer": 391,
  "customer-genz-nightowl": 396,
};

const GROCERY_BROWSE_ART_HEIGHTS: Record<string, number> = {
  "browse-taphoa-student-boy": 746,
  "browse-taphoa-college-girl": 779,
};

const GROCERY_BROWSE_ART_BOTTOMS: Record<string, number> = {
  "browse-taphoa-student-boy": 777,
  "browse-taphoa-college-girl": 779,
};

const DINER_ART_HEIGHTS: Record<string, number> = {
  "diner-office-man-pho": 342,
  "diner-office-woman-coffee": 342,
  "diner-construction-worker-com-tam": 338,
  "diner-backpacker-coffee": 711,
  "diner-older-regular-com-tam": 740,
};

const DINER_ART_BOTTOMS: Record<string, number> = {
  "diner-office-man-pho": 374,
  "diner-office-woman-coffee": 374,
  "diner-construction-worker-com-tam": 374,
  "diner-backpacker-coffee": 757,
  "diner-older-regular-com-tam": 770,
};

type TimeOfDayMap = "dawn" | "day" | "sunset" | "night";
type StreetMapMood = TimeOfDayMap | "overcast";
const STREET_MAP_TEXTURES: Record<StreetMapMood, string> = {
  dawn: "street-map-dawn",
  day: "street-map-day",
  overcast: "street-map-overcast",
  sunset: "street-map-sunset",
  night: "street-map-night",
};
const STREET_MAP_ASSETS: { mood: StreetMapMood; url: string }[] = [
  { mood: "dawn", url: dawnStreetMapUrl },
  { mood: "day", url: sunnyStreetMapUrl },
  { mood: "overcast", url: overcastStreetMapUrl },
  { mood: "sunset", url: sunsetStreetMapUrl },
  { mood: "night", url: nightStreetMapUrl },
];

function getWalkerOriginY(_textureKey: string): number {
  if (_textureKey === "walk-street-cat") return 1;
  return _textureKey === "walk-student" ? 366 / 392 : WALKER_BASELINE_Y / CUSTOMER_FRAME_HEIGHT;
}

function getWalkerFrameHeight(_textureKey: string): number {
  return _textureKey === "walk-student" ? 392 : CUSTOMER_FRAME_HEIGHT;
}

function getCharacterScaleFactor(artHeight: number, frameHeight: number, displayHeight: number, targetHeight = CHARACTER_TARGET_VISIBLE_HEIGHT): number {
  return targetHeight / (artHeight / frameHeight * displayHeight);
}

function setCharacterDisplaySize(
  sprite: Phaser.GameObjects.Sprite,
  displayWidth: number,
  displayHeight: number,
  frameHeight: number,
  artHeight: number,
  targetHeight = CHARACTER_TARGET_VISIBLE_HEIGHT,
): void {
  sprite.setDisplaySize(displayWidth, displayHeight);
  const scaleFactor = getCharacterScaleFactor(artHeight, frameHeight, displayHeight, targetHeight);
  sprite.setScale(sprite.scaleX * scaleFactor, sprite.scaleY * scaleFactor);
}

function getWalkerArtHeight(textureKey: string): number {
  return WALKER_ART_HEIGHTS[textureKey] ?? 350;
}

function getDinerFrameHeight(textureKey: string): number {
  if (textureKey === "diner-backpacker-coffee") return 795;
  if (textureKey === "diner-older-regular-com-tam") return 794;
  return CUSTOMER_FRAME_HEIGHT;
}

function getCustomerOriginY(textureKey: string): number {
  return (CUSTOMER_ART_BOTTOMS[textureKey] ?? CUSTOMER_FRAME_HEIGHT) / CUSTOMER_FRAME_HEIGHT;
}

function getDinerOriginY(textureKey: string): number {
  return (DINER_ART_BOTTOMS[textureKey] ?? getDinerFrameHeight(textureKey)) / getDinerFrameHeight(textureKey);
}

function getGroceryBrowseOriginY(textureKey: string): number {
  const frameHeight = 795;
  return (GROCERY_BROWSE_ART_BOTTOMS[textureKey] ?? frameHeight) / frameHeight;
}

function getWalkerStartFrame(textureKey: string, direction: -1 | 1): number {
  if (textureKey === "walk-street-cat") return direction > 0 ? 4 : 12;
  if (textureKey === "walk-office" || textureKey === "walk-shopper" || textureKey === "walk-tourist" || textureKey === "walk-construction-worker" || textureKey === "walk-delivery-rider" || textureKey === "walk-food-reviewer" || textureKey === "walk-genz-nightowl" || textureKey === "walk-ingredient-supplier" || textureKey === "walk-lottery-vendor" || textureKey === "walk-ward-police-officer" || textureKey === "walk-ward-inspector" || textureKey === "walk-morning-jogger") return direction > 0 ? 12 : 0;
  return direction > 0 ? 8 : 0;
}

function getAmbientWalkerSpeed(index: number, textureKey: string, unit: number): number {
  if (textureKey === "walk-street-cat") return 30 * unit;
  return (28 + ((index * 11) % 5) * 3) * unit;
}

function getStreetCharacterDepth(y: number): number {
  // Every person and pet uses the same foot-baseline sort. A larger y is nearer
  // the camera, so the front sidewalk lane always draws over the back lane.
  return 3.5 + y / 100_000;
}

const WEATHER_FRAMES = {
  clouds: [
    [47, 122, 123, 59], [192, 82, 222, 107], [432, 42, 330, 150],
    [811, 90, 168, 99], [992, 95, 144, 89], [1158, 125, 167, 64], [1340, 90, 151, 97],
  ],
  rain: [
    [124, 560, 29, 35], [179, 562, 28, 33], [235, 552, 41, 50], [311, 568, 32, 45],
    [360, 561, 37, 57], [417, 552, 44, 66], [487, 544, 54, 80], [565, 528, 62, 79],
    [629, 533, 47, 61], [675, 530, 65, 94], [737, 532, 67, 102], [1103, 557, 26, 49],
    [1356, 562, 22, 51],
  ],
  splashes: [
    [74, 697, 46, 38], [174, 680, 58, 54], [293, 679, 99, 58],
    [441, 704, 48, 27], [544, 697, 30, 34], [656, 691, 66, 46],
  ],
  ripples: [
    [836, 689, 91, 41], [1002, 679, 79, 57], [1137, 687, 84, 37], [1343, 695, 51, 22],
  ],
  shadows: [
    [1064, 813, 178, 49], [1280, 814, 203, 50], [1085, 882, 398, 73],
  ],
  flags: [
    [554, 771, 107, 185], [671, 767, 123, 189], [803, 769, 116, 189], [927, 774, 126, 184],
  ],
} as const;

// Count paving rows from the curb: lane 0 is the back line on row 3, and lane 1
// is the front line on row 1. Its lower foot baseline naturally sorts in front.
const WALKER_LANE_RATIOS = [0.75, 0.795] as const;

const DAY_NIGHT_FRAMES = {
  sun: [327, 117, 128, 136],
  sunset: [1305, 163, 145, 73],
  moon: [195, 505, 100, 127],
  stars: [
    [470, 513, 103, 104], [673, 545, 59, 60], [846, 517, 101, 106],
    [1048, 545, 57, 59], [1274, 525, 93, 93], [1501, 546, 56, 56],
  ],
  warmGlows: [
    [55, 718, 180, 96], [346, 726, 149, 86], [592, 740, 125, 73], [822, 741, 116, 71],
  ],
} as const;

type Walker = {
  textureKey: (typeof WALKER_TEXTURES)[number];
  sprite: Phaser.GameObjects.Sprite;
  shadow: Phaser.GameObjects.Image;
  active: boolean;
  direction: -1 | 1;
  lane: 0 | 1;
  speed: number;
  size: number;
  width: number;
  height: number;
  shadowWidth: number;
  shadowHeight: number;
  positionRatio: number;
  petMode?: "walking" | "paused";
  petNextPauseAt?: number;
  petPauseUntil?: number;
  petPauseCycle?: number;
  petAnimationComplete?: () => void;
};

type MovingSprite = {
  sprite: Phaser.GameObjects.Sprite;
  x: number;
  y: number;
  speed: number;
  phase: number;
};

type SkyCloud = {
  sprite: Phaser.GameObjects.Sprite;
  shadow: Phaser.GameObjects.Sprite;
  x: number;
  y: number;
  speed: number;
  phase: number;
  width: number;
  height: number;
};

type PigeonState = "walking" | "eating" | "flying";

type Pigeon = {
  sprite: Phaser.GameObjects.Sprite;
  shadow: Phaser.GameObjects.Ellipse;
  x: number;
  y: number;
  speed: number;
  direction: -1 | 1;
  positionRatio: number;
  state: PigeonState;
  stateTimerMs: number;
  peckCount: number;
  roamMinRatio: number;
  roamMaxRatio: number;
  width: number;
  height: number;
};

type RainDrop = {
  sprite: Phaser.GameObjects.Sprite;
  x: number;
  y: number;
  speed: number;
  drift: number;
};

type WeatherState = {
  cloudCover: number;
  rain: number;
  wind: number;
  label: string;
  icon: string;
};

type CrowdMotion = {
  targetX: number;
  speed: number;
  direction: -1 | 1;
  moving: boolean;
  needsWalkingState: boolean;
  idlePhase: number;
};

type DinerVenue = "coffee" | "pho" | "com-tam";
type StreetDinerPhase = "walking-in" | "sitting-down" | "eating" | "standing-up" | "walking-out";

type StreetDinerProfile = {
  id: string;
  name: string;
  venue: DinerVenue;
  walkTexture: string;
  seatedTexture: string;
  seatedAnimation: string;
};

type StreetDiner = {
  profile: StreetDinerProfile;
  seat: StreetDinerSeat;
  container: Phaser.GameObjects.Container;
  sprite: Phaser.GameObjects.Sprite;
  phase: StreetDinerPhase;
  xRatio: number;
  targetRatio: number;
  seatYRatio: number;
  direction: -1 | 1;
  timerMs: number;
  idleDurationMs: number;
};

type GroceryShopperPhase = "walking-in" | "shopping" | "walking-out";

type GroceryShopperProfile = {
  id: string;
  walkTexture: string;
  browseTexture: string;
  browseAnimation: string;
  dialogues: readonly string[];
};

type GroceryShopper = {
  profile: GroceryShopperProfile;
  container: Phaser.GameObjects.Container;
  sprite: Phaser.GameObjects.Sprite;
  bubble: Phaser.GameObjects.Container;
  phase: GroceryShopperPhase;
  xRatio: number;
  targetRatio: number;
  direction: -1 | 1;
  timerMs: number;
  exitDistance: number;
};

const STREET_DINER_PROFILES: readonly StreetDinerProfile[] = [
  { id: "office-man", name: "Anh văn phòng", venue: "pho", walkTexture: "walk-office", seatedTexture: "diner-office-man-pho", seatedAnimation: "diner-office-man-pho-eat" },
  { id: "office-woman", name: "Cô văn phòng", venue: "coffee", walkTexture: "walk-office-woman", seatedTexture: "diner-office-woman-coffee", seatedAnimation: "diner-office-woman-coffee-drink" },
  { id: "construction-worker", name: "Chú công nhân", venue: "com-tam", walkTexture: "walk-construction-worker", seatedTexture: "diner-construction-worker-com-tam", seatedAnimation: "diner-construction-worker-com-tam-eat" },
  { id: "backpacker", name: "Du khách", venue: "coffee", walkTexture: "walk-tourist", seatedTexture: "diner-backpacker-coffee", seatedAnimation: "diner-backpacker-coffee-drink" },
  { id: "older-regular", name: "Khách quen", venue: "com-tam", walkTexture: "walk-older-regular", seatedTexture: "diner-older-regular-com-tam", seatedAnimation: "diner-older-regular-com-tam-eat" },
];

const GROCERY_SHOPPER_PROFILES: readonly GroceryShopperProfile[] = [
  {
    id: "taphoa-student-boy",
    walkTexture: "walk-taphoa-student-boy",
    browseTexture: "browse-taphoa-student-boy",
    browseAnimation: "browse-taphoa-student-boy-purchase",
    dialogues: ["Cô ơi, cho cháu chai Sting!", "Cho cháu một chai Sting ạ!"],
  },
  {
    id: "taphoa-college-girl",
    walkTexture: "walk-taphoa-college-girl",
    browseTexture: "browse-taphoa-college-girl",
    browseAnimation: "browse-taphoa-college-girl-purchase",
    dialogues: ["Cho cháu 2 bịch bim bim!", "Cô ơi, cho cháu hai gói snack nha!"],
  },
];

type StreetDinerSeat = { id: string; xRatio: number; yRatio: number };

const DINER_SEATS: Record<DinerVenue, readonly StreetDinerSeat[]> = {
  // Ratios are measured from the center of each actual red stool in the
  // background map (2172 × 724). Keeping one slot per stool prevents diners
  // from stacking or appearing beside the furniture.
  coffee: [0.0295, 0.0525, 0.1041, 0.1298].map((xRatio, index) => ({ id: `coffee-${index}`, xRatio, yRatio: 0.728 })),
  pho: [0.2983, 0.3131].map((xRatio, index) => ({ id: `pho-${index}`, xRatio, yRatio: 0.728 })),
  "com-tam": [0.7827, 0.8121, 0.8398].map((xRatio, index) => ({ id: `com-tam-${index}`, xRatio, yRatio: 0.728 })),
};
const TOTAL_STREET_DINER_SEATS = Object.values(DINER_SEATS).reduce((total, seats) => total + seats.length, 0);
const MAX_ACTIVE_STREET_DINERS = Math.min(STREET_DINER_PROFILES.length, TOTAL_STREET_DINER_SEATS);
const DINER_APPROACH_DISTANCE = 132;
const DINER_DISPLAY_WIDTH = 52;
const DINER_DISPLAY_HEIGHT = 82;
const GROCERY_SHOP_TARGET_X_RATIO = 0.928;
const GROCERY_SHOP_TARGET_Y_RATIO = 0.742;
const GROCERY_APPROACH_DISTANCE = 118;
const GROCERY_DISPLAY_WIDTH = 54;
const GROCERY_DISPLAY_HEIGHT = 86;
const GROCERY_SPAWN_MIN_MS = 8_500;
const GROCERY_SPAWN_MAX_MS = 12_500;

export class NeighborhoodScene extends Phaser.Scene {
  private readonly store: GameStore;
  private streetBackdrop!: Phaser.GameObjects.Image;
  private street!: Phaser.GameObjects.Image;
  private streetTransition!: Phaser.GameObjects.Image;
  private streetOvercast!: Phaser.GameObjects.Image;
  private shopOverlay!: Phaser.GameObjects.Container;
  private shopPlaceholder!: Phaser.GameObjects.Rectangle;
  private shopPlaceholderFrame!: Phaser.GameObjects.Graphics;
  private shopStageTitle!: Phaser.GameObjects.Text;
  private shopStageAsset!: Phaser.GameObjects.Text;
  private shopArtwork?: Phaser.GameObjects.Image;
  private shopDebugFrame?: Phaser.GameObjects.Graphics;
  private shopDebugLabel?: Phaser.GameObjects.Text;
  private shopStage = 0;
  private debugShopStage: number | null = null;
  private shopDebugEnabled = false;
  private pendingShopStageImages = new Set<number>();
  private shopOverlayScale = 1;
  private devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
  private nightOverlay!: Phaser.GameObjects.Rectangle;
  private duskOverlay!: Phaser.GameObjects.Rectangle;
  private weatherOverlay!: Phaser.GameObjects.Rectangle;
  private crowd = new Map<number, Phaser.GameObjects.Container>();
  private crowdMotion = new Map<number, CrowdMotion>();
  private customerAppearances = new Map<number, CustomerAppearance>();
  private streetDiners: StreetDiner[] = [];
  private nextDinerProfileIndex = 0;
  private dinerSpawnCooldownMs = 1_300;
  private groceryShoppers: GroceryShopper[] = [];
  private nextGroceryShopperProfileIndex = 0;
  private grocerySpawnCooldownMs = 3_000;
  private pendingDepartures = new Map<number, { type: CustomerType; direction: -1 | 1 }>();
  private walkers: Walker[] = [];
  private walkerSpawnQueue: number[] = [];
  private ambientWalkerSpawnCooldownMs = 0;
  private leaves: MovingSprite[] = [];
  private clouds: SkyCloud[] = [];
  private pigeons: Pigeon[] = [];
  private pigeonNest!: Phaser.GameObjects.Image;
  private pigeonEggs: Phaser.GameObjects.Image[] = [];
  private rainDrops: RainDrop[] = [];
  private puddles: { sprite: Phaser.GameObjects.Sprite; x: number; y: number; phase: number }[] = [];
  private plants: Phaser.GameObjects.Sprite[] = [];
  private sun!: Phaser.GameObjects.Sprite;
  private moon!: Phaser.GameObjects.Sprite;
  private saigonFlag!: Phaser.GameObjects.Sprite;
  private stars: Phaser.GameObjects.Sprite[] = [];
  private warmGlows: Phaser.GameObjects.Sprite[] = [];
  private sunlightRays!: Phaser.GameObjects.Graphics;
  private rainTrails!: Phaser.GameObjects.Graphics;
  private steamPuffs: { puff: Phaser.GameObjects.Ellipse; life: number; speed: number }[] = [];
  private colorGrade?: Phaser.Filters.ColorMatrix;
  private vignette?: Phaser.Filters.Vignette;
  private cartX = 0;
  private groundY = 0;
  private cartWidth = 0;
  private cartHeight = 0;
  private unit = 1;
  private layoutWidth = 0;
  private layoutHeight = 0;
  private mapWidth = 0;
  private mapTop = 0;
  private mapHeight = 0;
  private maxPanX = 0;
  private dragStart?: { x: number; scrollX: number; pointerId: number };
  private dragMoved = false;
  private dragSurface?: HTMLCanvasElement;
  private gradeSignature = "";
  private environmentElapsedMs = 0;
  private lastEnvironmentUiAt = 0;
  private debugTimeOfDay: "dawn" | "day" | "sunset" | "night" | null = null;
  private debugWeather: "clear" | "cloudy" | "rain" | null = null;
  private lastSnapshot!: GameSnapshot;

  private readonly onMapPointerDown = (event: PointerEvent): void => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest("button, a, input, select, textarea, summary, [role='button']")) return;

    event.preventDefault();
    this.dragStart = {
      x: event.clientX,
      scrollX: this.cameras.main.scrollX,
      pointerId: event.pointerId,
    };
    this.dragMoved = false;
    try {
      this.dragSurface?.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture can fail if the pointer was canceled during a resize.
    }
  };

  private readonly onMapPointerMove = (event: PointerEvent): void => {
    const dragStart = this.dragStart;
    if (!dragStart || event.pointerId !== dragStart.pointerId) return;

    event.preventDefault();
    const deltaX = event.clientX - dragStart.x;
    if (!this.dragMoved && Math.abs(deltaX) < 5) return;
    this.dragMoved = true;
    this.cameras.main.setScroll(
      Phaser.Math.Clamp(dragStart.scrollX - deltaX, 0, this.maxPanX),
      this.cameras.main.scrollY,
    );
  };

  private readonly onMapPointerUp = (event: PointerEvent): void => {
    if (this.dragStart?.pointerId === event.pointerId) this.dragStart = undefined;
  };

  constructor(store: GameStore) {
    super("neighborhood");
    this.store = store;
  }

  setDevicePixelRatio(value: number): void {
    this.devicePixelRatio = Math.max(1, value || 1);
    if (this.sys.isActive()) this.cameras.main.setZoom(this.devicePixelRatio);
  }

  private getLogicalWidth(): number {
    return this.scale.width / this.devicePixelRatio;
  }

  private getLogicalHeight(): number {
    return this.scale.height / this.devicePixelRatio;
  }

  preload(): void {
    for (const asset of STREET_MAP_ASSETS) {
      this.load.image(STREET_MAP_TEXTURES[asset.mood], asset.url);
    }
    this.preloadShopStageImages(this.getInitialShopStage(), true);
    this.load.spritesheet("diner-office-man-pho", officeManPhoSeatUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("diner-office-woman-coffee", officeWomanCoffeeSeatUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("diner-construction-worker-com-tam", constructionWorkerComTamSeatUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.image("diner-backpacker-coffee", backpackerCoffeeSeatUrl);
    this.load.image("diner-older-regular-com-tam", olderRegularComTamSeatUrl);
    this.load.spritesheet("walk-taphoa-student-boy", taphoaStudentBoyWalkUrl, {
      frameWidth: CUSTOMER_FRAME_WIDTH,
      frameHeight: CUSTOMER_FRAME_HEIGHT,
    });
    this.load.spritesheet("walk-taphoa-college-girl", taphoaCollegeGirlWalkUrl, {
      frameWidth: CUSTOMER_FRAME_WIDTH,
      frameHeight: CUSTOMER_FRAME_HEIGHT,
    });
    this.load.image("browse-taphoa-student-boy", taphoaStudentBoyBrowseUrl);
    this.load.image("browse-taphoa-college-girl", taphoaCollegeGirlBrowseUrl);
    this.load.image("day-night-effects", dayNightEffectsUrl);
    this.load.image("weather-effects", weatherEffectsUrl);
    this.load.spritesheet("pigeon-walking", pigeonWalkUrl, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("pigeon-eating", pigeonEatUrl, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("pigeon-flying", pigeonFlyUrl, { frameWidth: 32, frameHeight: 32 });
    this.load.image("pigeon-nest", pigeonNestUrl);
    this.load.image("pigeon-egg-01", pigeonEgg01Url);
    this.load.image("pigeon-egg-03", pigeonEgg03Url);
    this.load.spritesheet("foliage-atlas", foliageUrl, { frameWidth: 271, frameHeight: 241 });
    this.load.spritesheet("edge-branch-sway", edgeBranchSwayUrl, {
      frameWidth: BRANCH_FRAME_WIDTH,
      frameHeight: BRANCH_FRAME_HEIGHT,
    });
    for (const appearance of ALL_CUSTOMER_APPEARANCES) {
      this.load.spritesheet(appearance.key, appearance.frontUrl, {
        frameWidth: CUSTOMER_FRAME_WIDTH,
        frameHeight: CUSTOMER_FRAME_HEIGHT,
      });
    }
    for (const { key, url } of AMBIENT_WALKER_ASSETS.slice(0, CORE_WALKER_COUNT)) {
      if (key === "walk-student") this.load.image(key, url);
      else {
        const petGrid = key in PET_SPRITE_GRIDS ? PET_SPRITE_GRIDS[key as keyof typeof PET_SPRITE_GRIDS] : undefined;
        this.load.spritesheet(key, url, {
          frameWidth: petGrid?.frameWidth ?? CUSTOMER_FRAME_WIDTH,
          frameHeight: petGrid?.frameHeight ?? CUSTOMER_FRAME_HEIGHT,
        });
      }
    }
  }

  create(): void {
    this.devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
    this.cameras.main.setZoom(this.devicePixelRatio);
    if (import.meta.env.DEV) {
      const params = new URLSearchParams(window.location.search);
      const time = params.get("time");
      const weather = params.get("weather");
      if (time === "dawn" || time === "day" || time === "sunset" || time === "night") this.debugTimeOfDay = time;
      if (weather === "clear" || weather === "cloudy" || weather === "rain") this.debugWeather = weather;
      this.shopDebugEnabled = params.get("debug") === "1";
      const requestedStage = this.parseDevStage(params.get("stage"));
      if (requestedStage !== null) this.debugShopStage = requestedStage;
    }
    this.registerEnvironmentFrames();
    this.createCharacterShadowTexture();
    this.streetBackdrop = this.add.image(0, 0, STREET_MAP_TEXTURES.day)
      .setOrigin(0.5).setDepth(-2).setAlpha(0.7).setTint(0x9d8c72);
    this.streetBackdrop.enableFilters();
    this.streetBackdrop.filters?.internal.addBlur(0, 3, 3, 1.8);
    this.street = this.add.image(0, 0, STREET_MAP_TEXTURES.day).setOrigin(0.5).setDepth(-1.3);
    this.streetTransition = this.add.image(0, 0, STREET_MAP_TEXTURES.day)
      .setOrigin(0.5).setDepth(-1.2).setAlpha(0).setVisible(false);
    this.streetOvercast = this.add.image(0, 0, STREET_MAP_TEXTURES.overcast)
      .setOrigin(0.5).setDepth(-1.1).setAlpha(0).setVisible(false);
    this.createShopStageOverlay();
    this.nightOverlay = this.add.rectangle(0, 0, 1, 1, 0x111c3a, 0).setOrigin(0).setDepth(9);
    this.duskOverlay = this.add.rectangle(0, 0, 1, 1, 0xff9360, 0).setOrigin(0).setDepth(9);
    this.weatherOverlay = this.add.rectangle(0, 0, 1, 1, 0x6c8da6, 0).setOrigin(0).setDepth(9);
    this.streetBackdrop.setScrollFactor(0);
    this.nightOverlay.setScrollFactor(0);
    this.duskOverlay.setScrollFactor(0);
    this.weatherOverlay.setScrollFactor(0);

    const cameraFilters = this.cameras.main.filters;
    if (cameraFilters) {
      this.colorGrade = cameraFilters.external.addColorMatrix();
      this.vignette = cameraFilters.external.addVignette(0.5, 0.54, 0.98, 0.045, 0x332e3c);
    }

    this.anims.create({
      key: "dry-leaf-tumble",
      frames: this.anims.generateFrameNumbers("foliage-atlas", { start: 0, end: 7 }),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "green-leaf-spin",
      frames: this.anims.generateFrameNumbers("foliage-atlas", { start: 8, end: 15 }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "branch-sway-inward-left",
      frames: this.anims.generateFrameNumbers("edge-branch-sway", { start: 0, end: 7 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "branch-sway-inward-right",
      frames: this.anims.generateFrameNumbers("edge-branch-sway", { start: 8, end: 15 }),
      frameRate: 5,
      repeat: -1,
    });

    this.registerStudentWalkFrames();
    this.registerWalkerAnimations(0, CORE_WALKER_COUNT);
    this.registerStreetDinerFrames();
    this.registerStreetDinerAnimations();
    this.registerGroceryShopperFrames();
    this.registerGroceryShopperAnimations();
    this.anims.create({
      key: "customer-student-idle-loop",
      frames: this.anims.generateFrameNumbers("customer-schoolgirl-idle", { start: 0, end: 3 }),
      frameRate: 2,
      repeat: -1,
    });

    this.createAmbientWalkers(0, CORE_WALKER_COUNT);
    this.loadBackgroundWalkerAssets();
    this.createLivingEnvironment();
    // Capture drags on the canvas itself so touch/mouse gestures keep working
    // after the pointer leaves the canvas edge.
    this.dragSurface = this.game.canvas;
    this.dragSurface?.addEventListener("pointerdown", this.onMapPointerDown);
    this.dragSurface?.addEventListener("pointermove", this.onMapPointerMove);
    this.dragSurface?.addEventListener("pointerup", this.onMapPointerUp);
    this.dragSurface?.addEventListener("pointercancel", this.onMapPointerUp);
    this.dragSurface?.addEventListener("lostpointercapture", this.onMapPointerUp);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.dragSurface?.removeEventListener("pointerdown", this.onMapPointerDown);
      this.dragSurface?.removeEventListener("pointermove", this.onMapPointerMove);
      this.dragSurface?.removeEventListener("pointerup", this.onMapPointerUp);
      this.dragSurface?.removeEventListener("pointercancel", this.onMapPointerUp);
      this.dragSurface?.removeEventListener("lostpointercapture", this.onMapPointerUp);
      this.dragSurface = undefined;
      this.dragStart = undefined;
    });
    if (this.shopDebugEnabled) {
      this.input.keyboard?.on("keydown", (event: KeyboardEvent) => {
        if (event.key === "[") this.setShopStage(this.shopStage - 1);
        else if (event.key === "]") this.setShopStage(this.shopStage + 1);
      });
    }
    this.time.addEvent({ delay: 1_050, loop: true, callback: () => this.emitSteam() });

    this.scale.on("resize", this.layout, this);
    this.time.addEvent({ delay: 1_000, loop: true, callback: () => this.store.tick() });
    this.store.subscribe((snapshot) => {
      const previous = this.lastSnapshot;
      if (previous?.inShift) {
        const liveIds = new Set(snapshot.customers.map((customer) => customer.id));
        const servedIds = new Set<number>();
        if (snapshot.totalServed > previous.totalServed) {
          const served = previous.customers.find((customer) => !liveIds.has(customer.id));
          if (served) servedIds.add(served.id);
        }
        for (const customer of previous.customers) {
          if (!liveIds.has(customer.id)) {
            this.pendingDepartures.set(customer.id, {
              type: customer.type,
              direction: servedIds.has(customer.id) ? 1 : -1,
            });
          }
        }
      }
      this.lastSnapshot = snapshot;
      this.layout();
    });
    this.layout();
    this.centerOnShop();
  }

  private registerWalkerAnimations(startIndex: number, endIndex: number): void {
    for (const textureKey of WALKER_TEXTURES.slice(startIndex, endIndex)) {
      if (!this.textures.exists(textureKey)) continue;
      if (textureKey === "walk-street-cat") {
        this.anims.create({
          key: `${textureKey}-left`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 12, end: 15 }),
          frameRate: 5,
          repeat: -1,
        });
        this.anims.create({
          key: `${textureKey}-right`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 4, end: 7 }),
          frameRate: 5,
          repeat: -1,
        });
        this.anims.create({
          key: `${textureKey}-sit`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 16, end: 17 }),
          frameRate: 2,
          repeat: -1,
        });
        this.anims.create({
          key: `${textureKey}-groom`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 18, end: 23 }),
          frameRate: 3,
          repeat: -1,
        });
        this.anims.create({
          key: `${textureKey}-settle`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 24, end: 27 }),
          frameRate: 4,
          repeat: 0,
        });
        this.anims.create({
          key: `${textureKey}-sleep`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 28, end: 31 }),
          frameRate: 2,
          repeat: -1,
        });
        continue;
      }
      if (textureKey === "walk-office" || textureKey === "walk-shopper" || textureKey === "walk-tourist" || textureKey === "walk-construction-worker" || textureKey === "walk-delivery-rider" || textureKey === "walk-food-reviewer" || textureKey === "walk-genz-nightowl" || textureKey === "walk-ingredient-supplier" || textureKey === "walk-lottery-vendor" || textureKey === "walk-ward-police-officer" || textureKey === "walk-ward-inspector" || textureKey === "walk-morning-jogger") {
        this.anims.create({
          key: `${textureKey}-left`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 0, end: 11 }),
          frameRate: 8,
          repeat: -1,
        });
        this.anims.create({
          key: `${textureKey}-right`,
          frames: this.anims.generateFrameNumbers(textureKey, { start: 12, end: 23 }),
          frameRate: 8,
          repeat: -1,
        });
        continue;
      }
      this.anims.create({
        key: `${textureKey}-left`,
        frames: this.anims.generateFrameNumbers(textureKey, {
          start: 0,
          end: 7,
        }),
        frameRate: WALK_FRAME_RATE,
        repeat: -1,
      });
      this.anims.create({
        key: `${textureKey}-right`,
        frames: this.anims.generateFrameNumbers(textureKey, { start: 8, end: 15 }),
        frameRate: WALK_FRAME_RATE,
        repeat: -1,
      });
    }
  }

  private registerStudentWalkFrames(): void {
    const texture = this.textures.get("walk-student");
    const source = texture.getSourceImage() as HTMLImageElement;
    if (source.width !== 1979 || source.height !== 795) {
      throw new Error(`Unexpected student walk sheet dimensions: ${source.width} × ${source.height}`);
    }

    const rowTops = [6, 398];
    const frameHeight = 392;
    for (let frame = 0; frame < 16; frame += 1) {
      const column = frame % 8;
      const x = Math.round(column * source.width / 8);
      const right = Math.round((column + 1) * source.width / 8);
      texture.add(frame, 0, x, rowTops[Math.floor(frame / 8)], right - x, frameHeight);
    }
  }

  private registerStreetDinerFrames(): void {
    // The two additional character sheets were generated at roughly 2x the
    // requested size. Slice their four columns using measured source edges so
    // the one-pixel width rounding does not leak into neighboring frames.
    for (const textureKey of ["diner-backpacker-coffee", "diner-older-regular-com-tam"]) {
      const texture = this.textures.get(textureKey);
      const source = texture.getSourceImage() as HTMLImageElement;
      for (let frame = 0; frame < 4; frame += 1) {
        const left = Math.round(frame * source.width / 4);
        const right = Math.round((frame + 1) * source.width / 4);
        texture.add(frame, 0, left, 0, right - left, source.height);
      }
    }
  }

  private registerStreetDinerAnimations(): void {
    for (const profile of STREET_DINER_PROFILES) {
      this.anims.create({
        key: profile.seatedAnimation,
        frames: Array.from({ length: 4 }, (_, frame) => ({ key: profile.seatedTexture, frame })),
        frameRate: 2,
        repeat: -1,
      });
    }
  }

  private registerGroceryShopperFrames(): void {
    for (const profile of GROCERY_SHOPPER_PROFILES) {
      const texture = this.textures.get(profile.browseTexture);
      const source = texture.getSourceImage() as HTMLImageElement;
      for (let frame = 0; frame < 4; frame += 1) {
        const left = Math.round(frame * source.width / 4);
        const right = Math.round((frame + 1) * source.width / 4);
        texture.add(frame, 0, left, 0, right - left, source.height);
      }
    }
  }

  private registerGroceryShopperAnimations(): void {
    for (const profile of GROCERY_SHOPPER_PROFILES) {
      this.anims.create({
        key: `${profile.walkTexture}-left`,
        frames: this.anims.generateFrameNumbers(profile.walkTexture, { start: 0, end: 7 }),
        frameRate: WALK_FRAME_RATE,
        repeat: -1,
      });
      this.anims.create({
        key: `${profile.walkTexture}-right`,
        frames: this.anims.generateFrameNumbers(profile.walkTexture, { start: 8, end: 15 }),
        frameRate: WALK_FRAME_RATE,
        repeat: -1,
      });
      this.anims.create({
        key: profile.browseAnimation,
        frames: Array.from({ length: 4 }, (_, frame) => ({ key: profile.browseTexture, frame })),
        frameRate: 2,
        repeat: 0,
      });
    }
  }

  private setDinerWalkingPose(diner: StreetDiner): void {
    const sprite = diner.sprite;
    const animation = `${diner.profile.walkTexture}-${diner.direction > 0 ? "right" : "left"}`;
    sprite.anims.stop();
    sprite.setOrigin(0.5, getWalkerOriginY(diner.profile.walkTexture));
    sprite.setTexture(diner.profile.walkTexture, getWalkerStartFrame(diner.profile.walkTexture, diner.direction));
    setCharacterDisplaySize(
      sprite,
      DINER_DISPLAY_WIDTH * this.unit,
      DINER_DISPLAY_HEIGHT * this.unit,
      getWalkerFrameHeight(diner.profile.walkTexture),
      getWalkerArtHeight(diner.profile.walkTexture),
      CHARACTER_TARGET_VISIBLE_HEIGHT * this.unit,
    );
    sprite.setPosition(0, 0).play(animation);
  }

  private setDinerSeatedPose(diner: StreetDiner): void {
    diner.sprite.anims.stop();
    // Each seated sheet has a slightly different transparent bottom margin.
    // Anchor its visible base at the same stool/sidewalk line.
    diner.sprite.setOrigin(0.5, getDinerOriginY(diner.profile.seatedTexture));
    diner.sprite.setTexture(diner.profile.seatedTexture, 0);
    setCharacterDisplaySize(
      diner.sprite,
      DINER_DISPLAY_WIDTH * this.unit,
      DINER_DISPLAY_HEIGHT * this.unit,
      getDinerFrameHeight(diner.profile.seatedTexture),
      DINER_ART_HEIGHTS[diner.profile.seatedTexture] ?? 342,
      CHARACTER_TARGET_VISIBLE_HEIGHT * this.unit,
    );
    diner.sprite.setPosition(0, -4 * this.unit).play(diner.profile.seatedAnimation);
    this.tweens.add({
      targets: diner.sprite,
      y: 0,
      duration: 280,
      ease: "Quad.Out",
    });
  }

  private createGrocerySpeechBubble(dialogue: string): Phaser.GameObjects.Container {
    const label = this.add.text(0, 0, dialogue, {
      fontFamily: "Trebuchet MS, sans-serif",
      fontSize: "10px",
      fontStyle: "bold",
      color: "#493726",
      align: "center",
      padding: { x: 2, y: 1 },
    }).setOrigin(0.5);
    const width = Math.max(84, label.width + 18);
    const height = label.height + 12;
    const graphics = this.add.graphics();
    graphics.fillStyle(0xfff9e9, 0.98);
    graphics.fillRoundedRect(-width / 2, -height, width, height, 8);
    graphics.lineStyle(1.5, 0x624a34, 0.95);
    graphics.strokeRoundedRect(-width / 2, -height, width, height, 8);
    graphics.fillStyle(0xfff9e9, 0.98);
    graphics.fillTriangle(-6, 0, 6, 0, 0, 8);
    graphics.lineStyle(1.5, 0x624a34, 0.95);
    graphics.lineBetween(-5, 1, 0, 8);
    graphics.lineBetween(0, 8, 5, 1);
    label.setPosition(0, -height / 2);

    return this.add.container(0, -101 * this.unit, [graphics, label])
      .setScale(this.unit)
      .setVisible(false)
      .setDepth(8);
  }

  private setGroceryWalkingPose(shopper: GroceryShopper): void {
    const animation = `${shopper.profile.walkTexture}-${shopper.direction > 0 ? "right" : "left"}`;
    shopper.sprite.anims.stop();
    shopper.sprite
      .setOrigin(0.5, getWalkerOriginY(shopper.profile.walkTexture))
      .setTexture(shopper.profile.walkTexture, getWalkerStartFrame(shopper.profile.walkTexture, shopper.direction))
      .setPosition(0, 0)
      .play(animation);
    setCharacterDisplaySize(
      shopper.sprite,
      GROCERY_DISPLAY_WIDTH * this.unit,
      GROCERY_DISPLAY_HEIGHT * this.unit,
      getWalkerFrameHeight(shopper.profile.walkTexture),
      getWalkerArtHeight(shopper.profile.walkTexture),
      CHARACTER_TARGET_VISIBLE_HEIGHT * this.unit,
    );
  }

  private getViewportExitX(direction: -1 | 1, currentX: number): number {
    const camera = this.cameras.main;
    const viewportLeft = camera.scrollX;
    const viewportRight = viewportLeft + this.getLogicalWidth();
    const margin = 70 * this.unit;
    return direction > 0
      ? Math.max(currentX, viewportRight) + margin
      : Math.min(currentX, viewportLeft) - margin;
  }

  private trySpawnGroceryShopper(): boolean {
    if (!this.mapWidth || this.groceryShoppers.length > 0) return false;
    const camera = this.cameras.main;
    const viewportLeft = camera.scrollX;
    const viewportRight = viewportLeft + this.getLogicalWidth();
    const targetX = GROCERY_SHOP_TARGET_X_RATIO * this.mapWidth;
    const visibleMargin = 56 * this.unit;
    if (targetX < viewportLeft - visibleMargin || targetX > viewportRight + visibleMargin) return false;

    for (let offset = 0; offset < GROCERY_SHOPPER_PROFILES.length; offset += 1) {
      const index = (this.nextGroceryShopperProfileIndex + offset) % GROCERY_SHOPPER_PROFILES.length;
      const profile = GROCERY_SHOPPER_PROFILES[index];
      if (!this.textures.exists(profile.walkTexture) || !this.anims.exists(`${profile.walkTexture}-left`)) continue;

      const direction: -1 | 1 = targetX < (viewportLeft + viewportRight) / 2 ? 1 : -1;
      const approachDistance = GROCERY_APPROACH_DISTANCE * this.unit;
      const startRatio = GROCERY_SHOP_TARGET_X_RATIO - direction * approachDistance / this.mapWidth;
      const shadow = this.add.image(0, 1.5 * this.unit, "character-contact-shadow-soft")
        .setDisplaySize(34 * this.unit, 8 * this.unit)
        .setAlpha(0.48);
      const sprite = this.add.sprite(0, 0, profile.walkTexture, getWalkerStartFrame(profile.walkTexture, direction))
        .setOrigin(0.5, getWalkerOriginY(profile.walkTexture))
        .setDisplaySize(GROCERY_DISPLAY_WIDTH * this.unit, GROCERY_DISPLAY_HEIGHT * this.unit)
        .setAlpha(0.98);
      const bubble = this.createGrocerySpeechBubble(Phaser.Utils.Array.GetRandom([...profile.dialogues]));
      const container = this.add.container(startRatio * this.mapWidth, this.groundY, [shadow, sprite, bubble])
        .setDepth(getStreetCharacterDepth(this.groundY));
      const shopper: GroceryShopper = {
        profile,
        container,
        sprite,
        bubble,
        phase: "walking-in",
        xRatio: startRatio,
        targetRatio: GROCERY_SHOP_TARGET_X_RATIO,
        direction,
        timerMs: 0,
        exitDistance: 0,
      };
      this.setGroceryWalkingPose(shopper);
      sprite.anims.setProgress(Math.random());
      this.groceryShoppers.push(shopper);
      this.nextGroceryShopperProfileIndex = (index + 1) % GROCERY_SHOPPER_PROFILES.length;
      return true;
    }

    return false;
  }

  private updateGroceryShoppers(delta: number): void {
    const dtMs = Math.min(Math.max(0, delta), 100);
    const elapsed = dtMs / 1_000;
    if (this.groceryShoppers.length === 0) {
      this.grocerySpawnCooldownMs = Math.max(0, this.grocerySpawnCooldownMs - dtMs);
    }

    for (let index = this.groceryShoppers.length - 1; index >= 0; index -= 1) {
      const shopper = this.groceryShoppers[index];
      const targetY = this.mapTop + this.mapHeight * GROCERY_SHOP_TARGET_Y_RATIO;
      const walkingSpeed = 40 * this.unit;
      const approachDistance = GROCERY_APPROACH_DISTANCE * this.unit;

      if (shopper.phase === "walking-in") {
        const distance = shopper.targetRatio * this.mapWidth - shopper.xRatio * this.mapWidth;
        const step = walkingSpeed * elapsed;
        if (Math.abs(distance) <= step + 0.5) {
          shopper.xRatio = shopper.targetRatio;
          shopper.phase = "shopping";
          shopper.timerMs = 2_350;
          shopper.container.y = targetY;
          shopper.sprite.anims.stop();
          shopper.sprite
            .setOrigin(0.5, getGroceryBrowseOriginY(shopper.profile.browseTexture))
            .setTexture(shopper.profile.browseTexture, 0)
            .setPosition(0, 0)
            .play(shopper.profile.browseAnimation);
          setCharacterDisplaySize(
            shopper.sprite,
            GROCERY_DISPLAY_WIDTH * this.unit,
            GROCERY_DISPLAY_HEIGHT * this.unit,
            795,
            GROCERY_BROWSE_ART_HEIGHTS[shopper.profile.browseTexture] ?? 760,
            CHARACTER_TARGET_VISIBLE_HEIGHT * this.unit,
          );
          shopper.bubble.setVisible(true).setAlpha(0).setScale(this.unit * 0.84);
          this.tweens.add({
            targets: shopper.bubble,
            alpha: 1,
            scaleX: this.unit,
            scaleY: this.unit,
            duration: 180,
            ease: "Back.Out",
          });
        } else {
          shopper.xRatio += Math.sign(distance) * step / this.mapWidth;
          const approachProgress = Phaser.Math.Clamp(1 - Math.abs(distance) / approachDistance, 0, 1);
          const turnInProgress = this.smoothStep(0.52, 1, approachProgress);
          shopper.container.y = Phaser.Math.Linear(
            this.groundY,
            targetY,
            turnInProgress,
          );
        }
      } else if (shopper.phase === "shopping") {
        shopper.timerMs -= dtMs;
        if (shopper.timerMs <= 0) {
          shopper.phase = "walking-out";
          shopper.timerMs = 0;
          shopper.targetRatio = this.getViewportExitX(shopper.direction, shopper.xRatio * this.mapWidth) / this.mapWidth;
          shopper.exitDistance = Math.max(
            Math.abs((shopper.targetRatio - shopper.xRatio) * this.mapWidth),
            1,
          );
          this.tweens.add({
            targets: shopper.bubble,
            alpha: 0,
            duration: 140,
            onComplete: () => shopper.bubble.setVisible(false),
          });
          this.setGroceryWalkingPose(shopper);
        }
      } else {
        const distance = shopper.targetRatio * this.mapWidth - shopper.xRatio * this.mapWidth;
        const step = walkingSpeed * elapsed;
        if (Math.abs(distance) <= step + 0.5) {
          shopper.container.destroy(true);
          this.groceryShoppers.splice(index, 1);
          this.grocerySpawnCooldownMs = Phaser.Math.Between(GROCERY_SPAWN_MIN_MS, GROCERY_SPAWN_MAX_MS);
          continue;
        }
        shopper.xRatio += Math.sign(distance) * step / this.mapWidth;
        const exitProgress = Phaser.Math.Clamp(1 - Math.abs(distance) / shopper.exitDistance, 0, 1);
        shopper.container.y = Phaser.Math.Linear(
          targetY,
          this.groundY,
          this.smoothStep(0, 1, exitProgress),
        );
      }

      shopper.container.x = shopper.xRatio * this.mapWidth;
      shopper.container.setDepth(getStreetCharacterDepth(shopper.container.y));
      const shadow = shopper.container.getAt(0) as Phaser.GameObjects.Image;
      shadow.setPosition(0, 1.5 * this.unit).setDisplaySize(34 * this.unit, 8 * this.unit);
      if (shopper.phase === "shopping") {
        shopper.sprite.setOrigin(0.5, getGroceryBrowseOriginY(shopper.profile.browseTexture));
        setCharacterDisplaySize(
          shopper.sprite,
          GROCERY_DISPLAY_WIDTH * this.unit,
          GROCERY_DISPLAY_HEIGHT * this.unit,
          795,
          GROCERY_BROWSE_ART_HEIGHTS[shopper.profile.browseTexture] ?? 760,
          CHARACTER_TARGET_VISIBLE_HEIGHT * this.unit,
        );
      } else {
        shopper.sprite.setOrigin(0.5, getWalkerOriginY(shopper.profile.walkTexture));
        setCharacterDisplaySize(
          shopper.sprite,
          GROCERY_DISPLAY_WIDTH * this.unit,
          GROCERY_DISPLAY_HEIGHT * this.unit,
          getWalkerFrameHeight(shopper.profile.walkTexture),
          getWalkerArtHeight(shopper.profile.walkTexture),
          CHARACTER_TARGET_VISIBLE_HEIGHT * this.unit,
        );
      }
      shopper.bubble.setPosition(0, -101 * this.unit).setScale(this.unit);
    }

    if (this.groceryShoppers.length === 0 && this.grocerySpawnCooldownMs <= 0) {
      const started = this.trySpawnGroceryShopper();
      if (!started) this.grocerySpawnCooldownMs = 1_100;
    }
  }

  private trySpawnStreetDiner(): boolean {
    if (!this.mapWidth || this.streetDiners.length >= MAX_ACTIVE_STREET_DINERS) return false;
    const camera = this.cameras.main;
    const viewportLeft = camera.scrollX;
    const viewportRight = viewportLeft + this.getLogicalWidth();

    for (let offset = 0; offset < STREET_DINER_PROFILES.length; offset += 1) {
      const index = (this.nextDinerProfileIndex + offset) % STREET_DINER_PROFILES.length;
      const profile = STREET_DINER_PROFILES[index];
      const profileAlreadyOnStreet = this.streetDiners.some((diner) => diner.profile.id === profile.id);
      if (profileAlreadyOnStreet) continue;
      if (!this.textures.exists(profile.walkTexture) || !this.anims.exists(`${profile.walkTexture}-left`)) continue;

      const occupiedSeats = new Set(
        this.streetDiners
          .filter((diner) => diner.phase !== "walking-out")
          .map((diner) => diner.seat.id),
      );
      const seat = DINER_SEATS[profile.venue].find((slot) => !occupiedSeats.has(slot.id));
      if (!seat) continue;

      const targetX = seat.xRatio * this.mapWidth;
      const visibleMargin = 36 * this.unit;
      if (targetX < viewportLeft - visibleMargin || targetX > viewportRight + visibleMargin) continue;

      const direction: -1 | 1 = targetX < (viewportLeft + viewportRight) / 2 ? 1 : -1;
      const approachDistance = DINER_APPROACH_DISTANCE * this.unit;
      const startRatio = seat.xRatio - direction * approachDistance / this.mapWidth;
      const spawnX = startRatio * this.mapWidth;
      const shadow = this.add.image(0, 1.5 * this.unit, "character-contact-shadow-soft")
        .setDisplaySize(31 * this.unit, 8 * this.unit)
        .setAlpha(0.47);
      const sprite = this.add.sprite(0, 0, profile.walkTexture, getWalkerStartFrame(profile.walkTexture, direction))
        .setOrigin(0.5, getWalkerOriginY(profile.walkTexture))
        .setDisplaySize(DINER_DISPLAY_WIDTH * this.unit, DINER_DISPLAY_HEIGHT * this.unit)
        .setAlpha(0.98)
        .play(`${profile.walkTexture}-${direction > 0 ? "right" : "left"}`);
      sprite.anims.setProgress(Math.random());
      const container = this.add.container(spawnX, this.groundY, [shadow, sprite])
        .setDepth(getStreetCharacterDepth(this.groundY));
      const diner: StreetDiner = {
        profile,
        seat,
        container,
        sprite,
        phase: "walking-in",
        xRatio: startRatio,
        targetRatio: seat.xRatio,
        seatYRatio: seat.yRatio,
        direction,
        timerMs: 0,
        idleDurationMs: Phaser.Math.Between(9_000, 15_000),
      };
      this.streetDiners.push(diner);
      this.nextDinerProfileIndex = (index + 1) % STREET_DINER_PROFILES.length;
      return true;
    }

    return false;
  }

  private updateStreetDiners(delta: number): void {
    const dtMs = Math.min(Math.max(0, delta), 100);
    const elapsed = dtMs / 1_000;
    this.dinerSpawnCooldownMs = Math.max(0, this.dinerSpawnCooldownMs - dtMs);

    for (let index = this.streetDiners.length - 1; index >= 0; index -= 1) {
      const diner = this.streetDiners[index];
      const targetX = diner.targetRatio * this.mapWidth;
      const seatY = this.mapTop + this.mapHeight * diner.seatYRatio;
      const approachDistance = DINER_APPROACH_DISTANCE * this.unit;
      const walkingSpeed = 36 * this.unit;

      if (diner.phase === "walking-in") {
        const distance = targetX - diner.xRatio * this.mapWidth;
        const step = walkingSpeed * elapsed;
        if (Math.abs(distance) <= step + 0.5) {
          diner.xRatio = diner.targetRatio;
          diner.phase = "sitting-down";
          diner.timerMs = 380;
          diner.container.y = seatY;
          this.setDinerSeatedPose(diner);
        } else {
          diner.xRatio += Math.sign(distance) * step / this.mapWidth;
          const approachProgress = Phaser.Math.Clamp(1 - Math.abs(distance) / approachDistance, 0, 1);
          const turnInProgress = this.smoothStep(0.58, 1, approachProgress);
          diner.container.y = Phaser.Math.Linear(this.groundY, seatY, turnInProgress);
        }
      } else if (diner.phase === "sitting-down") {
        diner.timerMs -= dtMs;
        if (diner.timerMs <= 0) {
          diner.phase = "eating";
          diner.timerMs = diner.idleDurationMs;
        }
      } else if (diner.phase === "eating") {
        diner.timerMs -= dtMs;
        if (diner.timerMs <= 0) {
          diner.phase = "standing-up";
          diner.timerMs = 420;
          this.setDinerWalkingPose(diner);
        }
      } else if (diner.phase === "standing-up") {
        diner.timerMs -= dtMs;
        const standProgress = Phaser.Math.Clamp(1 - diner.timerMs / 420, 0, 1);
        diner.container.y = Phaser.Math.Linear(seatY, this.groundY, this.smoothStep(0, 1, standProgress));
        if (diner.timerMs <= 0) {
          diner.phase = "walking-out";
          diner.container.y = this.groundY;
          diner.targetRatio = this.getViewportExitX(diner.direction, diner.xRatio * this.mapWidth) / this.mapWidth;
        }
      } else if (diner.phase === "walking-out") {
        const distance = diner.targetRatio * this.mapWidth - diner.xRatio * this.mapWidth;
        const step = walkingSpeed * elapsed;
        if (Math.abs(distance) <= step + 0.5) {
          diner.container.destroy(true);
          this.streetDiners.splice(index, 1);
          this.dinerSpawnCooldownMs = Math.min(this.dinerSpawnCooldownMs, 900);
          continue;
        }
        diner.xRatio += Math.sign(distance) * step / this.mapWidth;
        diner.container.y = this.groundY;
      }

      const x = diner.xRatio * this.mapWidth;
      diner.container.x = x;
      diner.container.setDepth(getStreetCharacterDepth(diner.container.y));
      const shadow = diner.container.getAt(0) as Phaser.GameObjects.Image;
      shadow.setPosition(0, 1.5 * this.unit).setDisplaySize(31 * this.unit, 8 * this.unit);
      const isWalking = diner.sprite.texture.key === diner.profile.walkTexture;
      const textureKey = diner.sprite.texture.key;
      const frameHeight = isWalking ? getWalkerFrameHeight(diner.profile.walkTexture) : getDinerFrameHeight(textureKey);
      const artHeight = isWalking ? getWalkerArtHeight(diner.profile.walkTexture) : DINER_ART_HEIGHTS[textureKey] ?? 342;
      diner.sprite.setOrigin(0.5, isWalking ? getWalkerOriginY(diner.profile.walkTexture) : getDinerOriginY(textureKey));
      setCharacterDisplaySize(
        diner.sprite,
        DINER_DISPLAY_WIDTH * this.unit,
        DINER_DISPLAY_HEIGHT * this.unit,
        frameHeight,
        artHeight,
        CHARACTER_TARGET_VISIBLE_HEIGHT * this.unit,
      );
    }

    if (this.dinerSpawnCooldownMs <= 0) {
      const started = this.trySpawnStreetDiner();
      this.dinerSpawnCooldownMs = started ? Phaser.Math.Between(2_200, 3_400) : 1_100;
    }
  }

  private loadBackgroundWalkerAssets(): void {
    const ambientAssets = AMBIENT_WALKER_ASSETS.slice(CORE_WALKER_COUNT);
    if (ambientAssets.length === 0) return;
    for (const { key, url } of ambientAssets) {
      const petGrid = key in PET_SPRITE_GRIDS ? PET_SPRITE_GRIDS[key as keyof typeof PET_SPRITE_GRIDS] : undefined;
      this.load.spritesheet(key, url, {
        frameWidth: petGrid?.frameWidth ?? CUSTOMER_FRAME_WIDTH,
        frameHeight: petGrid?.frameHeight ?? CUSTOMER_FRAME_HEIGHT,
      });
    }
    this.load.once("complete", () => {
      this.registerWalkerAnimations(CORE_WALKER_COUNT, WALKER_TEXTURES.length);
      this.createAmbientWalkers(CORE_WALKER_COUNT, WALKER_TEXTURES.length);
      this.layout();
    });
    this.load.start();
  }

  private parseDevStage(value: string | null): number | null {
    if (!value || !/^(?:[1-9]|1[0-2])$/.test(value)) return null;
    return Number(value);
  }

  private getInitialShopStage(): number {
    if (import.meta.env.DEV) {
      const requested = this.parseDevStage(new URLSearchParams(window.location.search).get("stage"));
      if (requested !== null) return requested;
    }
    return this.store.getSnapshot().cartLevel;
  }

  private preloadShopStageImages(stageId: number, duringScenePreload = false): void {
    const ids = [...new Set([stageId, Math.min(SHOP_STAGES.length, stageId + 1)])];
    let queued = false;
    for (const id of ids) {
      const stage = SHOP_STAGES[id - 1];
      if (!stage?.image || this.textures.exists(getShopStageImageKey(id)) || this.pendingShopStageImages.has(id)) continue;
      this.pendingShopStageImages.add(id);
      this.load.image(getShopStageImageKey(id), stage.image);
      queued = true;
    }
    if (!queued || duringScenePreload) return;
    this.load.once("complete", () => {
      this.pendingShopStageImages.clear();
      this.refreshShopStageArtwork();
      this.layout();
    });
    this.load.start();
  }

  private createShopStageOverlay(): void {
    this.shopPlaceholder = this.add.rectangle(0, 0, 1, 1, 0x5c5147, 0.88).setOrigin(0);
    this.shopPlaceholderFrame = this.add.graphics();
    this.shopStageTitle = this.add.text(0, 0, "", {
      fontFamily: "Trebuchet MS, sans-serif",
      fontSize: "32px",
      fontStyle: "bold",
      color: "#fff4dc",
      stroke: "#342a23",
      strokeThickness: 4,
      align: "center",
    }).setOrigin(0.5);
    this.shopStageAsset = this.add.text(0, 0, "", {
      fontFamily: "Trebuchet MS, sans-serif",
      fontSize: "20px",
      color: "#f4d39d",
      stroke: "#342a23",
      strokeThickness: 3,
      align: "center",
    }).setOrigin(0.5);
    this.shopOverlay = this.add.container(0, 0, [
      this.shopPlaceholder,
      this.shopPlaceholderFrame,
      this.shopStageTitle,
      this.shopStageAsset,
    ]).setDepth(0.35);

    if (this.shopDebugEnabled) {
      this.shopDebugFrame = this.add.graphics().setDepth(8).setScrollFactor(1);
      this.shopDebugLabel = this.add.text(0, 0, "", {
        fontFamily: "monospace",
        fontSize: "13px",
        color: "#fff",
        backgroundColor: "#9e2433",
        padding: { x: 6, y: 4 },
      }).setOrigin(0).setDepth(8).setScrollFactor(1);
    }
  }

  setShopStage(stageId: number): void {
    if (!Number.isFinite(stageId)) return;
    this.debugShopStage = Phaser.Math.Clamp(Math.round(stageId), 1, SHOP_STAGES.length);
    this.transitionShopStage(this.debugShopStage, true);
  }

  private transitionShopStage(stageId: number, animate: boolean): void {
    const nextStage = Phaser.Math.Clamp(Math.round(stageId), 1, SHOP_STAGES.length);
    if (nextStage === this.shopStage) {
      this.refreshShopStageArtwork();
      return;
    }

    this.shopStage = nextStage;
    this.preloadShopStageImages(nextStage);
    if (!this.shopOverlay) return;
    this.tweens.killTweensOf(this.shopOverlay);
    if (!animate || this.shopStage === 0) {
      this.shopOverlay.setAlpha(1);
      this.refreshShopStageArtwork();
      return;
    }

    const halfFade = SHOP_STAGE_FADE_MS / 2;
    this.tweens.add({
      targets: this.shopOverlay,
      alpha: 0,
      duration: halfFade,
      ease: "Sine.easeIn",
      onComplete: () => {
        this.refreshShopStageArtwork();
        this.tweens.add({ targets: this.shopOverlay, alpha: 1, duration: halfFade, ease: "Sine.easeOut" });
      },
    });
  }

  private refreshShopStageArtwork(): void {
    if (!this.shopOverlay || !this.shopStageTitle || !this.shopStageAsset || this.shopStage < 1) return;
    const stage = SHOP_STAGES[this.shopStage - 1];
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    this.shopStageTitle
      .setText(`CẤP ${String(stage.id).padStart(2, "0")} / 12 · ${stage.name}`)
      .setResolution(dpr);
    this.shopStageAsset
      .setText(`Thiếu ảnh: ${SHOP_STAGE_ASSET_DIRECTORY}/${stage.filename} · 860 × 520 px`)
      .setResolution(dpr);

    const textureKey = getShopStageImageKey(stage.id);
    const hasArt = Boolean(stage.image && this.textures.exists(textureKey));
    if (hasArt) {
      if (!this.shopArtwork) {
        this.shopArtwork = this.add.image(0, 0, textureKey).setOrigin(0).setDepth(0.36);
        this.shopOverlay.add(this.shopArtwork);
      } else {
        this.shopArtwork.setTexture(textureKey);
      }
      this.shopArtwork.setVisible(true);
      this.shopPlaceholder.setVisible(false);
      this.shopPlaceholderFrame.setVisible(false);
      this.shopStageTitle.setVisible(false);
      this.shopStageAsset.setVisible(false);
    } else {
      this.shopArtwork?.setVisible(false);
      this.shopPlaceholder.setVisible(true);
      this.shopPlaceholderFrame.setVisible(true);
      this.shopStageTitle.setVisible(true);
      this.shopStageAsset.setVisible(true);
    }
  }

  update(_time: number, delta: number): void {
    const width = this.mapWidth || this.getLogicalWidth();
    const elapsed = Math.min(delta / 1_000, 0.05);
    this.environmentElapsedMs += Math.max(0, delta);
    this.updateLivingEnvironment(_time, elapsed, width);

    for (const [index, walker] of this.walkers.entries()) {
      if (!walker.active) continue;
      const camera = this.cameras.main;
      const viewportLeft = camera.scrollX;
      const viewportRight = viewportLeft + this.getLogicalWidth();
      const isPet = walker.textureKey === "walk-street-cat";
      const laneY = this.getWalkerLaneY(walker.lane) + Math.sin(index * 1.9) * 2 * this.unit;
      if (isPet) {
        if (walker.petMode === "paused" && _time >= (walker.petPauseUntil ?? 0)) {
          this.resumePet(walker, _time, index);
        }
        if (walker.petMode === "walking" && _time >= (walker.petNextPauseAt ?? Number.POSITIVE_INFINITY)) {
          this.startPetPause(walker, _time);
        }
        if (walker.petMode === "paused") {
          walker.sprite.y = laneY;
          walker.sprite.setDepth(getStreetCharacterDepth(walker.sprite.y));
          walker.shadow.setPosition(walker.sprite.x, laneY + 1.5 * this.unit)
            .setDepth(getStreetCharacterDepth(laneY) - 0.02);
          continue;
        }
      }
      walker.sprite.x += walker.direction * walker.speed * elapsed;
      // Keep each walker on one of two sidewalk lanes; the walk frames provide
      // the leg motion, so an extra high-frequency bob only makes sprites jitter.
      walker.sprite.y = laneY;
      walker.sprite.setDepth(getStreetCharacterDepth(walker.sprite.y));
      const leftViewport = walker.direction < 0 && walker.sprite.x < viewportLeft - 60 * this.unit;
      const rightViewport = walker.direction > 0 && walker.sprite.x > viewportRight + 60 * this.unit;
      if (leftViewport || rightViewport) {
        walker.active = false;
        walker.sprite.setVisible(false);
        walker.shadow.setVisible(false);
        this.walkerSpawnQueue.push(index);
        this.ambientWalkerSpawnCooldownMs = Math.max(
          this.ambientWalkerSpawnCooldownMs,
          1_200 + ((index * 337) % 700),
        );
        continue;
      }
      walker.shadow.setPosition(walker.sprite.x, laneY + 1.5 * this.unit)
        .setDepth(getStreetCharacterDepth(laneY) - 0.02);
    }

    this.updateStreetDiners(delta);
    this.updateGroceryShoppers(delta);

    this.ambientWalkerSpawnCooldownMs = Math.max(0, this.ambientWalkerSpawnCooldownMs - delta);
    const activeWalkerCount = this.walkers.reduce((count, walker) => count + Number(walker.active), 0);
    if (
      this.ambientWalkerSpawnCooldownMs <= 0 &&
      this.walkerSpawnQueue.length > 0 &&
      activeWalkerCount < MAX_ACTIVE_AMBIENT_WALKERS
    ) {
      const walkerIndex = this.walkerSpawnQueue.shift()!;
      const walker = this.walkers[walkerIndex];
      if (walker) {
        const camera = this.cameras.main;
        const viewportLeft = camera.scrollX;
        const viewportRight = viewportLeft + this.getLogicalWidth();
        const spawnX = walker.direction > 0
          ? viewportLeft - 60 * this.unit
          : viewportRight + 60 * this.unit;
        const animation = `${walker.textureKey}-${walker.direction > 0 ? "right" : "left"}`;
        walker.active = true;
        if (walker.petMode) {
          walker.petMode = "walking";
          walker.petNextPauseAt = _time + 5_500 + (walkerIndex % 2) * 4_000;
          walker.petPauseUntil = undefined;
        }
        const laneY = this.getWalkerLaneY(walker.lane);
        walker.sprite.setPosition(spawnX, laneY)
          .setAlpha(0.96 + (walkerIndex % 3) * 0.02)
          .setDepth(getStreetCharacterDepth(laneY))
          .setVisible(true)
          .play(animation);
        walker.shadow.setPosition(spawnX, laneY + 1.5 * this.unit)
          .setDepth(getStreetCharacterDepth(laneY) - 0.02)
          .setVisible(true);
        this.ambientWalkerSpawnCooldownMs = 900 + ((walkerIndex * 197) % 500);
      }
    }

    for (const [id, container] of this.crowd) {
      const motion = this.crowdMotion.get(id);
      const customer = this.lastSnapshot.customers.find((entry) => entry.id === id);
      const sprite = container.getAt(1) as Phaser.GameObjects.Sprite;
      if (!motion || !customer) continue;
      const appearance = this.getCustomerAppearance(customer.type, customer.id);

      if (motion.moving) {
        if (motion.needsWalkingState) {
          motion.needsWalkingState = false;
          this.store.markCustomerWalking(id);
        }
        const distance = motion.targetX - container.x;
        const direction: -1 | 1 = distance >= 0 ? 1 : -1;
        motion.direction = direction;
        const walkTexture = appearance.walkKey;
        const animationKey = `${walkTexture}-${direction > 0 ? "right" : "left"}`;
        if (sprite.texture.key !== walkTexture || sprite.anims.currentAnim?.key !== animationKey) {
          sprite.setOrigin(0.5, getWalkerOriginY(walkTexture));
          const visualScale = getCharacterScaleFactor(
            getWalkerArtHeight(walkTexture),
            getWalkerFrameHeight(walkTexture),
            CUSTOMER_DISPLAY_HEIGHT,
          );
          sprite.setScale(
            (CUSTOMER_DISPLAY_WIDTH * this.unit / CUSTOMER_FRAME_WIDTH) * visualScale,
            (CUSTOMER_DISPLAY_HEIGHT * this.unit / getWalkerFrameHeight(walkTexture)) * visualScale,
          );
          sprite.y = 0;
          sprite.setTexture(walkTexture, getWalkerStartFrame(walkTexture, direction));
          sprite.play(animationKey);
        }
        if (Math.abs(distance) <= motion.speed * elapsed) {
          container.x = motion.targetX;
          motion.moving = false;
          this.store.markCustomerArrived(id);
        } else {
          container.x += direction * motion.speed * elapsed;
        }
      } else {
        sprite.y = 0;
        const idleTexture = appearance.key;
        const idleAnimation = appearance.idleAnimation;
        if (sprite.texture.key !== idleTexture || (idleAnimation && sprite.anims.currentAnim?.key !== idleAnimation)) {
          sprite.anims.stop();
          sprite.setOrigin(0.5, 1);
          sprite.setTexture(idleTexture, 0);
          if (idleAnimation) sprite.play(idleAnimation);
        }
        if (!idleAnimation) {
          const breath = (Math.sin(_time / 320 + motion.idlePhase) + 1) / 2;
          const visualScale = getCharacterScaleFactor(
            CUSTOMER_ART_HEIGHTS[appearance.key] ?? 350,
            CUSTOMER_FRAME_HEIGHT,
            CUSTOMER_DISPLAY_HEIGHT,
          );
          const baseScaleX = (CUSTOMER_DISPLAY_WIDTH * this.unit / CUSTOMER_FRAME_WIDTH) * visualScale;
          const baseScaleY = (CUSTOMER_DISPLAY_HEIGHT * this.unit / CUSTOMER_FRAME_HEIGHT) * visualScale;
          // Anchor the subtle breathing scale at the soles so the contact shadow stays grounded.
          sprite.setScale(baseScaleX, baseScaleY * (1 + breath * 0.014));
        }
      }
    }

    for (let index = this.steamPuffs.length - 1; index >= 0; index -= 1) {
      const steam = this.steamPuffs[index];
      steam.life -= delta;
      steam.puff.y -= steam.speed * elapsed;
      steam.puff.alpha = Math.max(0, steam.life / 1_250) * 0.38;
      steam.puff.setScale(steam.puff.scaleX + elapsed * 0.22, steam.puff.scaleY + elapsed * 0.22);
      if (steam.life <= 0) {
        steam.puff.destroy();
        this.steamPuffs.splice(index, 1);
      }
    }
  }

  private startPetPause(walker: Walker, now: number): void {
    const cycle = walker.petPauseCycle ?? 0;
    walker.petPauseCycle = cycle + 1;
    walker.petMode = "paused";

    const playThenLoop = (transition: string, loop: string) => {
      const listener = () => {
        walker.petAnimationComplete = undefined;
        if (walker.active && walker.petMode === "paused") walker.sprite.play(loop);
      };
      walker.petAnimationComplete = listener;
      walker.sprite.once(Phaser.Animations.Events.ANIMATION_COMPLETE, listener);
      walker.sprite.play(transition);
    };

    const actions = ["sit", "groom", "nap", "groom"] as const;
    const action = actions[cycle % actions.length];
    walker.petPauseUntil = now + (action === "nap" ? 4_600 : action === "groom" ? 2_600 : 2_000);
    if (action === "nap") playThenLoop("walk-street-cat-settle", "walk-street-cat-sleep");
    else walker.sprite.play(`walk-street-cat-${action}`);
  }

  private resumePet(walker: Walker, now: number, index: number): void {
    if (walker.petAnimationComplete) {
      walker.sprite.off(Phaser.Animations.Events.ANIMATION_COMPLETE, walker.petAnimationComplete);
      walker.petAnimationComplete = undefined;
    }
    walker.petMode = "walking";
    walker.petPauseUntil = undefined;
    walker.petNextPauseAt = now + 9_000 + ((index + (walker.petPauseCycle ?? 0)) % 4) * 2_000;
    walker.sprite.play(`${walker.textureKey}-${walker.direction > 0 ? "right" : "left"}`);
  }

  private createAmbientWalkers(startIndex: number, endIndex: number): void {
    const width = this.mapWidth || this.getLogicalWidth();
    const directions = [1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1] as const;
    for (let index = startIndex; index < endIndex; index += 1) {
      const textureKey = WALKER_TEXTURES[index];
      if (!this.textures.exists(textureKey) || !this.anims.exists(`${textureKey}-left`)) continue;
      const direction = textureKey === "walk-street-cat" ? 1 : directions[index % directions.length];
      const lane: 0 | 1 = direction > 0 ? 0 : 1;
      const laneY = this.getWalkerLaneY(lane);
      const isPet = textureKey === "walk-street-cat";
      const size = isPet
        ? (0.88 + ((index * 3) % 5) * 0.07) * 0.92
        : getCharacterScaleFactor(
          getWalkerArtHeight(textureKey),
          getWalkerFrameHeight(textureKey),
          96,
        );
      const footprint = WALKER_FOOTPRINTS[textureKey] ?? { width: 60, height: 96, shadowWidth: 34, shadowHeight: 9 };
      const positionRatio = textureKey === "walk-street-cat"
        ? 0.43
        : ((index % MAX_ACTIVE_AMBIENT_WALKERS) + 0.5) / MAX_ACTIVE_AMBIENT_WALKERS;
      const animationKey = `${textureKey}-${direction > 0 ? "right" : "left"}`;
      const active = this.walkers.reduce((count, walker) => count + Number(walker.active), 0) < MAX_ACTIVE_AMBIENT_WALKERS;
      const shadow = this.add.image(positionRatio * width, laneY + 1.5 * this.unit, "character-contact-shadow-soft")
        .setOrigin(0.5)
        .setDepth(getStreetCharacterDepth(laneY) - 0.02)
        .setAlpha(isPet ? 0.34 : 0.56)
        .setVisible(active);
      const sprite = this.add.sprite(positionRatio * width, laneY, textureKey, getWalkerStartFrame(textureKey, direction))
        .setOrigin(0.5, getWalkerOriginY(textureKey))
        .setDepth(getStreetCharacterDepth(laneY))
        .setAlpha(0.96 + (index % 3) * 0.02)
        .setVisible(active);
      if (active) sprite.play(animationKey).anims.setProgress((index * 0.173) % 1);
      else this.walkerSpawnQueue.push(this.walkers.length);
      this.walkers.push({
        textureKey,
        shadow,
        sprite,
        active,
        direction,
        lane,
        speed: getAmbientWalkerSpeed(index, textureKey, this.unit),
        size,
        ...footprint,
        positionRatio,
        petMode: isPet ? "walking" : undefined,
        petNextPauseAt: isPet ? this.time.now + 4_000 + (index % 2) * 4_500 : undefined,
        petPauseCycle: isPet ? index % 4 : undefined,
      });
    }
  }

  private getWalkerLaneY(lane: 0 | 1): number {
    return this.mapTop + this.mapHeight * WALKER_LANE_RATIOS[lane];
  }

  private createCharacterShadowTexture(): void {
    const textureKey = "character-contact-shadow-soft";
    if (this.textures.exists(textureKey)) return;
    const texture = this.textures.createCanvas(textureKey, 96, 28);
    if (!texture) return;

    const { context } = texture;
    context.clearRect(0, 0, 96, 28);
    context.save();
    context.translate(48, 14);
    context.scale(1, 0.22);
    const gradient = context.createRadialGradient(0, 0, 2, 0, 0, 44);
    gradient.addColorStop(0, "rgba(35, 28, 22, 0.36)");
    gradient.addColorStop(0.42, "rgba(35, 28, 22, 0.21)");
    gradient.addColorStop(0.76, "rgba(35, 28, 22, 0.07)");
    gradient.addColorStop(1, "rgba(33, 25, 18, 0)");
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(0, 0, 44, 0, Math.PI * 2);
    context.fill();
    context.restore();
    texture.refresh();
  }

  private registerEnvironmentFrames(): void {
    const weatherTexture = this.textures.get("weather-effects");
    const dayNightTexture = this.textures.get("day-night-effects");
    const addFrames = (
      texture: Phaser.Textures.Texture,
      prefix: string,
      frames: readonly (readonly [number, number, number, number])[],
    ) => frames.forEach(([x, y, width, height], index) => {
      texture.add(`${prefix}-${index}`, 0, x, y, width, height);
    });

    addFrames(weatherTexture, "sky-cloud", WEATHER_FRAMES.clouds);
    addFrames(weatherTexture, "rain-streak", WEATHER_FRAMES.rain);
    addFrames(weatherTexture, "rain-splash", WEATHER_FRAMES.splashes);
    addFrames(weatherTexture, "rain-ripple", WEATHER_FRAMES.ripples);
    addFrames(weatherTexture, "cloud-shadow", WEATHER_FRAMES.shadows);
    addFrames(weatherTexture, "saigon-flag", WEATHER_FRAMES.flags);
    addFrames(dayNightTexture, "sun-disc", [DAY_NIGHT_FRAMES.sun]);
    addFrames(dayNightTexture, "sunset-disc", [DAY_NIGHT_FRAMES.sunset]);
    addFrames(dayNightTexture, "moon-crescent", [DAY_NIGHT_FRAMES.moon]);
    addFrames(dayNightTexture, "night-star", DAY_NIGHT_FRAMES.stars);
    addFrames(dayNightTexture, "warm-window-glow", DAY_NIGHT_FRAMES.warmGlows);
  }

  private createLivingEnvironment(): void {
    const weatherTexture = "weather-effects";
    const dayNightTexture = "day-night-effects";
    if (!this.anims.exists("pigeon-walk")) {
      this.anims.create({ key: "pigeon-walk", frames: this.anims.generateFrameNumbers("pigeon-walking", { start: 0, end: 3 }), frameRate: 6, repeat: -1 });
      this.anims.create({ key: "pigeon-eat", frames: this.anims.generateFrameNumbers("pigeon-eating", { start: 0, end: 3 }), frameRate: 5, repeat: -1 });
      this.anims.create({ key: "pigeon-fly", frames: this.anims.generateFrameNumbers("pigeon-flying", { start: 0, end: 6 }), frameRate: 8, repeat: -1 });
    }
    const flagFrames = WEATHER_FRAMES.flags.map((_, index) => ({ key: weatherTexture, frame: `saigon-flag-${index}` }));
    this.anims.create({ key: "saigon-flag-breeze", frames: flagFrames, frameRate: 5, repeat: -1, yoyo: true });

    this.sun = this.add.sprite(0, 0, dayNightTexture, "sun-disc-0")
      .setDepth(-0.92).setOrigin(0.5).setScrollFactor(1).setAlpha(0);
    this.moon = this.add.sprite(0, 0, dayNightTexture, "moon-crescent-0")
      .setDepth(-0.91).setOrigin(0.5).setScrollFactor(1).setAlpha(0);
    this.saigonFlag = this.add.sprite(0, 0, weatherTexture, "saigon-flag-0")
      .setDepth(-0.58).setOrigin(0.5, 1).setScrollFactor(1)
      .setDisplaySize(36, 52).setAlpha(0.8).play("saigon-flag-breeze");
    this.sunlightRays = this.add.graphics().setDepth(-0.88).setScrollFactor(1).setBlendMode(Phaser.BlendModes.ADD);
    this.rainTrails = this.add.graphics().setDepth(10.1).setScrollFactor(0);

    for (let index = 0; index < 12; index += 1) {
      const sprite = this.add.sprite(0, 0, dayNightTexture, `night-star-${index % DAY_NIGHT_FRAMES.stars.length}`)
        .setDepth(-0.84).setOrigin(0.5).setScrollFactor(1).setAlpha(0);
      this.stars.push(sprite);
    }

    for (let index = 0; index < 5; index += 1) {
      const cloudFrame = (index * 3 + 1) % WEATHER_FRAMES.clouds.length;
      const cloudSprite = this.add.sprite(0, 0, weatherTexture, `sky-cloud-${cloudFrame}`)
        .setDepth(-0.80).setOrigin(0.5).setScrollFactor(0.72).setAlpha(0.72);
      const shadow = this.add.sprite(0, 0, weatherTexture, `cloud-shadow-${index % WEATHER_FRAMES.shadows.length}`)
        .setDepth(-0.45).setOrigin(0.5).setScrollFactor(1)
        .setTint(0x667576).setBlendMode(Phaser.BlendModes.MULTIPLY).setAlpha(0.03);
      this.clouds.push({
        sprite: cloudSprite,
        shadow,
        x: 0,
        y: 0,
        speed: 8 + index % 3 * 3,
        phase: index * 1.87,
        width: 90 + (index % 3) * 22,
        height: 45 + (index % 2) * 12,
      });
    }

    for (let index = 0; index < 2; index += 1) {
      const positionRatio = index === 0 ? 0.485 : 0.515;
      const sprite = this.add.sprite(0, 0, "pigeon-walking", 0)
        .setOrigin(0.5, 1).setDepth(3.55).setScrollFactor(1).setVisible(false);
      const shadow = this.add.ellipse(0, 0, 19, 5, 0x332a27, 0.24)
        .setDepth(3.5).setScrollFactor(1).setVisible(false);
      this.pigeons.push({
        sprite,
        shadow,
        x: 0,
        y: 0,
        speed: 18 + index * 3,
        direction: index === 0 ? 1 : -1,
        positionRatio,
        state: "walking",
        stateTimerMs: 2_800 + index * 2_700,
        peckCount: 0,
        roamMinRatio: 0.48,
        roamMaxRatio: 0.52,
        width: 30,
        height: 30,
      });
    }

    for (let index = 0; index < 4; index += 1) {
      const glow = this.add.sprite(0, 0, dayNightTexture, `warm-window-glow-${index}`)
        .setDepth(9.6).setOrigin(0.5).setScrollFactor(1)
        .setBlendMode(Phaser.BlendModes.ADD).setTint(0xffc46b).setAlpha(0);
      this.warmGlows.push(glow);
    }

    for (let index = 0; index < BRANCH_ANCHORS.length; index += 1) {
      const anchor = BRANCH_ANCHORS[index];
      const isLeft = anchor.side === "left";
      const plant = this.add.sprite(0, 0, "edge-branch-sway", isLeft ? 0 : 8)
        .setDepth(-0.18)
        .setOrigin(isLeft ? 0.02 : 0.98, BRANCH_ATTACHMENT_Y / BRANCH_FRAME_HEIGHT)
        .setAlpha(0.72)
        .play(isLeft ? "branch-sway-inward-left" : "branch-sway-inward-right");
      plant.anims.setProgress(anchor.phase);
      this.plants.push(plant);
    }

    this.pigeonNest = this.add.image(0, 0, "pigeon-nest")
      .setDepth(2.92).setOrigin(0.5).setScrollFactor(1);
    this.pigeonEggs = [
      this.add.image(0, 0, "pigeon-egg-01").setDepth(2.94).setOrigin(0.5).setScrollFactor(1).setTint(0xd7ad78),
      this.add.image(0, 0, "pigeon-egg-03").setDepth(2.95).setOrigin(0.5).setScrollFactor(1).setTint(0x8294aa),
    ];

    for (let index = 0; index < LEAF_COUNT; index += 1) {
      const frame = index % 3 === 0 ? (index * 3) % 8 : 8 + (index * 5) % 8;
      const sprite = this.add.sprite(0, 0, "foliage-atlas", frame)
        .play(index % 3 === 0 ? "dry-leaf-tumble" : "green-leaf-spin")
        .setDepth(3.2).setAlpha(0.8 - (index % 4) * 0.07);
      sprite.anims.setProgress((index * 0.137) % 1);
      const gust = 16 + (index % 5) * 4;
      this.leaves.push({ sprite, x: 0, y: 0, speed: index % 2 === 0 ? -gust : gust, phase: index * 2.17 });
    }

    for (let index = 0; index < 38; index += 1) {
      const frame = index % WEATHER_FRAMES.rain.length;
      const sprite = this.add.sprite(0, 0, weatherTexture, `rain-streak-${frame}`)
        .setDepth(10).setOrigin(0.5).setScrollFactor(0)
        .setRotation(0.36).setTint(0xc2e7f7).setAlpha(0);
      const width = 6 + (index % 3) * 2;
      sprite.setDisplaySize(width, 19 + (index % 4) * 4);
      this.rainDrops.push({ sprite, x: 0, y: 0, speed: 250 + index % 5 * 55, drift: 48 + index % 4 * 11 });
    }

    for (let index = 0; index < 4; index += 1) {
      const ripple = this.add.sprite(0, 0, weatherTexture, `rain-ripple-${index}`)
        .setDepth(2.8).setOrigin(0.5).setScrollFactor(1).setTint(0xa7d8e8).setAlpha(0);
      const splash = this.add.sprite(0, 0, weatherTexture, `rain-splash-${index + 1}`)
        .setDepth(2.9).setOrigin(0.5, 0.85).setScrollFactor(1).setAlpha(0);
      this.puddles.push({ sprite: ripple, x: 0, y: 0, phase: index * 1.67 });
      this.puddles.push({ sprite: splash, x: 0, y: 0, phase: index * 2.19 + 0.8 });
    }
  }

  private updateStreetMap(phase: number, daylight: number, cloudCover: number): void {
    const stops: { phase: number; mood: TimeOfDayMap }[] = [
      { phase: 0, mood: "night" },
      { phase: 0.25, mood: "dawn" },
      { phase: 0.5, mood: "day" },
      { phase: 0.75, mood: "sunset" },
      { phase: 1, mood: "night" },
    ];
    let segment = 0;
    while (segment < stops.length - 2 && phase >= stops[segment + 1].phase) segment += 1;

    const fromMood = stops[segment].mood;
    const toMood = stops[segment + 1].mood;
    const transition = this.smoothStep(stops[segment].phase, stops[segment + 1].phase, phase);
    const fromTexture = STREET_MAP_TEXTURES[fromMood];
    const toTexture = STREET_MAP_TEXTURES[toMood];
    if (this.street.texture.key !== fromTexture) this.street.setTexture(fromTexture);
    if (this.streetTransition.texture.key !== toTexture) this.streetTransition.setTexture(toTexture);
    this.streetTransition.setAlpha(transition).setVisible(transition > 0.001);

    // Bring in the dedicated overcast artwork only during daylight. The time-of-day
    // map remains visible underneath, so weather does not erase sunset or night.
    const overcastAmount = this.smoothStep(0.2, 0.86, cloudCover) * daylight * 0.9;
    this.streetOvercast.setAlpha(overcastAmount).setVisible(overcastAmount > 0.001);

    const backdropMood = overcastAmount > 0.45 ? "overcast" : transition > 0.5 ? toMood : fromMood;
    const backdropTexture = STREET_MAP_TEXTURES[backdropMood];
    if (this.streetBackdrop.texture.key !== backdropTexture) this.streetBackdrop.setTexture(backdropTexture);
  }

  private updateLivingEnvironment(time: number, elapsed: number, mapWidth: number): void {
    const seconds = this.environmentElapsedMs / 1_000;
    const naturalPhase = (START_DAY_PHASE + this.environmentElapsedMs / DAY_LENGTH_MS) % 1;
    const phaseByName = { dawn: 0.25, day: 0.5, sunset: 0.75, night: 0 } as const;
    const phase = this.debugTimeOfDay ? phaseByName[this.debugTimeOfDay] : naturalPhase;
    const sunHeight = Math.cos((phase - 0.5) * Math.PI * 2);
    const daylight = this.smoothStep(-0.12, 0.18, sunHeight);
    const night = 1 - daylight;
    const twilight = Phaser.Math.Clamp(1 - Math.abs(sunHeight) / 0.34, 0, 1);
    const weather = this.getWeatherState(seconds);
    this.updateStreetMap(phase, daylight, weather.cloudCover);
    this.nightOverlay.setAlpha(night * 0.07);
    this.duskOverlay.setAlpha(twilight * 0.025);
    this.weatherOverlay.setAlpha(weather.cloudCover * 0.075 + weather.rain * 0.11);
    this.updateColorGrade(night, twilight, weather.cloudCover, weather.rain);

    const isDayArc = phase >= 0.25 && phase <= 0.75;
    const sunProgress = isDayArc ? (phase - 0.25) / 0.5 : 0;
    const sunX = mapWidth * (0.045 + sunProgress * 0.91);
    // This panorama starts at the roofline instead of showing an open sky.
    // Keep the sun and cloud silhouettes in the atmospheric margin above it.
    const sunY = this.mapTop + this.mapHeight * 0.035;
    const sunOpacity = isDayArc ? Math.max(daylight, twilight * 0.42) * (1 - weather.cloudCover * 0.45) : 0;
    const sunFrame = twilight > 0.24 ? "sunset-disc-0" : "sun-disc-0";
    if (this.sun.frame.name !== sunFrame) this.sun.setTexture("day-night-effects", sunFrame);
    this.sun.setPosition(sunX, sunY).setDisplaySize(26 * this.unit, 28 * this.unit).setAlpha(sunOpacity * 0.12);

    const moonProgress = (sunProgress + 0.5) % 1;
    const moonX = mapWidth * (0.045 + moonProgress * 0.91);
    this.moon.setPosition(moonX, sunY)
      .setDisplaySize(22 * this.unit, 28 * this.unit)
      .setAlpha(Phaser.Math.Clamp((night - 0.58) / 0.42, 0, 1) * (1 - weather.cloudCover * 0.36) * 0.58);
    this.saigonFlag.setPosition(mapWidth * 0.87, this.mapTop + this.mapHeight * 0.277)
      .setDisplaySize(36 * this.unit, 52 * this.unit).setAlpha(0.66 + weather.wind * 0.24);

    this.clouds.forEach((cloud, index) => {
      cloud.x += (cloud.speed + weather.wind * 16) * elapsed;
      if (cloud.x > mapWidth + cloud.width) cloud.x = -cloud.width;
      const bob = Math.sin(time / 4_700 + cloud.phase) * this.unit * 3;
      cloud.sprite.setPosition(cloud.x, this.mapTop + this.mapHeight * 0.038 + bob)
        .setDisplaySize(cloud.width * this.unit * 0.56, cloud.height * this.unit * 0.56)
        .setAlpha(0.25 + weather.cloudCover * 0.22)
        .setTint(night > 0.55 ? 0xb4bdd8 : twilight > 0.1 ? 0xffd8b0 : 0xffffff);
      cloud.shadow.setPosition(cloud.x + cloud.width * 0.38, this.mapTop + this.mapHeight * 0.805)
        .setDisplaySize(this.mapHeight * 0.28, this.mapHeight * 0.08)
        .setAlpha(daylight * (0.035 + weather.cloudCover * 0.29));
    });

    this.updatePigeons(elapsed, daylight, weather.rain, mapWidth);
    this.pigeonNest.setAlpha(0.78 + night * 0.12);
    this.pigeonEggs.forEach((egg) => egg.setAlpha(1));

    this.plants.forEach((plant, index) => {
      const gustPulse = (Math.sin(time / (1_650 + index * 170) + index * 1.8) + 1) / 2;
      // The sprite frames bend the leaves while the attachment point stays fixed.
      plant.anims.timeScale = 0.72 + weather.wind * 0.72 + gustPulse * 0.12;
      plant.setAlpha(0.42 + daylight * 0.32);
    });

    this.leaves.forEach((leaf, index) => {
      const direction = Math.sign(leaf.speed) || 1;
      const gustPulse = (Math.sin(time / (1_900 + index % 5 * 130) + leaf.phase) + 1) / 2;
      leaf.speed = direction * (9 + weather.wind * (22 + gustPulse * 26 + index % 4 * 5)) * this.unit;
      leaf.x += leaf.speed * elapsed;
      const bob = Math.sin(time / (510 + index % 5 * 90) + leaf.phase)
        * (9 + weather.wind * (20 + gustPulse * 12)) * this.unit;
      leaf.sprite.setPosition(leaf.x, leaf.y + bob);
      leaf.sprite.rotation += elapsed * (leaf.speed > 0 ? 1.65 : -1.42) * (0.68 + weather.wind + gustPulse * 0.6);
      leaf.sprite.setAlpha((0.66 + weather.wind * 0.3) * (index % 4 === 0 ? 0.98 : 0.86));
      if (leaf.x > mapWidth + 40 * this.unit) leaf.x = -40 * this.unit;
      if (leaf.x < -40 * this.unit) leaf.x = mapWidth + 40 * this.unit;
    });

    this.warmGlows.forEach((glow, index) => {
      const glowX = mapWidth * [0.205, 0.30, 0.705, 0.855][index];
      const glowY = this.mapTop + this.mapHeight * (0.468 + (index % 2) * 0.018);
      glow.setPosition(glowX, glowY)
        .setDisplaySize(this.mapHeight * 0.19, this.mapHeight * 0.085)
        .setAlpha(night * (0.34 + Math.sin(time / 860 + index) * 0.045));
    });

    this.stars.forEach((star, index) => {
      const starX = mapWidth * (0.055 + (index * 0.173) % 0.89);
      const starY = this.mapTop + this.mapHeight * (0.014 + index % 4 * 0.011);
      const twinkle = 0.58 + (Math.sin(time / (520 + index * 19) + index) + 1) * 0.18;
      star.setPosition(starX, starY).setDisplaySize((5 + index % 3 * 2) * this.unit, (5 + index % 3 * 2) * this.unit)
        .setAlpha(night * night * (1 - weather.cloudCover * 0.75) * twinkle);
    });

    this.sunlightRays.clear();
    const rayOpacity = daylight * (1 - weather.cloudCover * 0.68) * 0.042;
    if (rayOpacity > 0.002) {
      const endY = this.mapTop + this.mapHeight * 0.79;
      const rayWidth = this.mapHeight * 0.09;
      for (let index = -2; index <= 2; index += 1) {
        const spread = index * this.mapHeight * 0.052;
        this.sunlightRays.fillStyle(twilight > 0.1 ? 0xffbb79 : 0xffefbd, rayOpacity * (index === 0 ? 1 : 0.68));
        this.sunlightRays.beginPath();
        this.sunlightRays.moveTo(sunX + index * 4 * this.unit, sunY + this.mapHeight * 0.035);
        this.sunlightRays.lineTo(sunX + spread - rayWidth, endY);
        this.sunlightRays.lineTo(sunX + spread + rayWidth, endY);
        this.sunlightRays.closePath();
        this.sunlightRays.fillPath();
      }
    }

    const screenWidth = this.getLogicalWidth();
    const screenHeight = this.getLogicalHeight();
    this.rainTrails.clear();
    if (weather.rain > 0.015) {
      this.rainTrails.lineStyle(Math.max(1, this.unit * 1.1), 0x9edbf1, weather.rain * 0.56);
    }
    this.rainDrops.forEach((drop) => {
      if (drop.y > screenHeight + 24) {
        drop.y = -Phaser.Math.Between(10, Math.max(12, screenHeight * 0.48));
        drop.x = Phaser.Math.Between(0, Math.max(1, screenWidth));
      }
      drop.y += drop.speed * (0.72 + weather.rain * 0.8) * elapsed;
      drop.x -= (drop.drift + weather.wind * 58) * elapsed;
      drop.sprite.setPosition(drop.x, drop.y).setRotation(0.33 + weather.wind * 0.16)
        .setAlpha(weather.rain * 0.92).setVisible(weather.rain > 0.015);
      if (weather.rain > 0.015) {
        this.rainTrails.lineBetween(drop.x, drop.y, drop.x - (4 + weather.wind * 3) * this.unit, drop.y + (12 + weather.rain * 8) * this.unit);
      }
    });

    this.puddles.forEach((effect, index) => {
      const ripple = index % 2 === 0;
      const pulse = (Math.sin(time / (ripple ? 700 : 270) + effect.phase) + 1) / 2;
      effect.sprite.setPosition(effect.x, effect.y)
        .setDisplaySize((ripple ? 44 : 23) * this.unit, (ripple ? 19 : 25) * this.unit)
        .setAlpha(weather.rain * (ripple ? 0.34 + pulse * 0.2 : pulse * 0.68));
    });

    if (this.environmentElapsedMs - this.lastEnvironmentUiAt >= 500) {
      this.lastEnvironmentUiAt = this.environmentElapsedMs;
      const clockHours = Math.floor(phase * 24) % 24;
      const clockMinutes = Math.floor((phase * 24 * 60) % 60 / 5) * 5;
      const clockText = `${clockHours.toString().padStart(2, "0")}:${clockMinutes.toString().padStart(2, "0")}`;
      const badge = document.querySelector<HTMLElement>("#weather-label");
      if (badge) badge.textContent = `${weather.icon} ${clockText} · ${weather.label} · Sài Gòn`;
    }
  }

  private updatePigeons(elapsed: number, daylight: number, rain: number, mapWidth: number): void {
    const weatherAllowsPigeons = daylight >= 0.16 && rain <= 0.72;
    for (const pigeon of this.pigeons) {
      const { sprite, shadow } = pigeon;
      if (!weatherAllowsPigeons) {
        sprite.setVisible(false);
        shadow.setVisible(false);
        continue;
      }

      pigeon.stateTimerMs -= elapsed * 1_000;
      if (pigeon.state === "walking") {
        pigeon.x += pigeon.direction * pigeon.speed * this.unit * elapsed;
        pigeon.positionRatio = pigeon.x / mapWidth;
        if (pigeon.positionRatio <= pigeon.roamMinRatio) {
          pigeon.direction = 1;
          pigeon.positionRatio = pigeon.roamMinRatio;
          pigeon.x = pigeon.positionRatio * mapWidth;
        } else if (pigeon.positionRatio >= pigeon.roamMaxRatio) {
          pigeon.direction = -1;
          pigeon.positionRatio = pigeon.roamMaxRatio;
          pigeon.x = pigeon.positionRatio * mapWidth;
        }

        if (pigeon.stateTimerMs <= 0) {
          pigeon.state = "eating";
          pigeon.stateTimerMs = Phaser.Math.Between(950, 1_650);
          sprite.play("pigeon-eat", true);
        }
      } else if (pigeon.state === "eating" && pigeon.stateTimerMs <= 0) {
        pigeon.peckCount += 1;
        if (pigeon.peckCount >= 3 || (pigeon.peckCount > 0 && Math.random() < 0.12)) {
          pigeon.peckCount = 0;
          pigeon.state = "flying";
          pigeon.stateTimerMs = 1_500;
          pigeon.speed = Phaser.Math.Between(78, 105);
          sprite.play("pigeon-fly", true);
        } else {
          pigeon.state = "walking";
          pigeon.stateTimerMs = Phaser.Math.Between(3_200, 6_500);
          sprite.play("pigeon-walk", true);
        }
      } else if (pigeon.state === "flying") {
        pigeon.x += pigeon.direction * pigeon.speed * this.unit * elapsed;
        pigeon.y -= 23 * this.unit * elapsed;
        pigeon.positionRatio = pigeon.x / mapWidth;
        if (pigeon.stateTimerMs <= 0) {
          pigeon.positionRatio = Phaser.Math.Clamp(pigeon.positionRatio, pigeon.roamMinRatio, pigeon.roamMaxRatio);
          pigeon.x = pigeon.positionRatio * mapWidth;
          if (pigeon.positionRatio >= pigeon.roamMaxRatio) pigeon.direction = -1;
          else if (pigeon.positionRatio <= pigeon.roamMinRatio) pigeon.direction = 1;
          pigeon.y = this.groundY;
          pigeon.state = "walking";
          pigeon.stateTimerMs = Phaser.Math.Between(2_000, 4_500);
          pigeon.speed = Phaser.Math.Between(16, 22);
          sprite.play("pigeon-walk", true);
        }
      }

      const displayWidth = pigeon.width * this.unit;
      const displayHeight = pigeon.height * this.unit;
      sprite.setFlipX(pigeon.direction < 0)
        .setPosition(pigeon.x, pigeon.y)
        .setDisplaySize(displayWidth, displayHeight)
        .setDepth(getStreetCharacterDepth(pigeon.y) - 0.035)
        .setAlpha(daylight * (1 - rain * 0.45))
        .setVisible(true);
      shadow.setPosition(pigeon.x, pigeon.y + 1.5 * this.unit)
        .setDisplaySize(displayWidth * 0.54, 5 * this.unit)
        .setAlpha(pigeon.state === "flying" ? 0.12 : 0.24)
        .setVisible(pigeon.state !== "flying");
    }
  }

  private getWeatherState(seconds: number): WeatherState {
    if (this.debugWeather === "clear") return { cloudCover: 0.12, rain: 0, wind: 0.18, label: "Nắng nhẹ", icon: "☀️" };
    if (this.debugWeather === "cloudy") return { cloudCover: 0.82, rain: 0, wind: 0.36, label: "Mây che nắng", icon: "☁️" };
    if (this.debugWeather === "rain") return { cloudCover: 0.92, rain: 0.86, wind: 0.72, label: "Mưa rào", icon: "🌧️" };

    const cycle = (seconds * 1_000 % WEATHER_CYCLE_MS) / WEATHER_CYCLE_MS;
    const overcast = this.smoothStep(0.48, 0.60, cycle) * (1 - this.smoothStep(0.75, 0.84, cycle));
    const rainyWindow = this.smoothStep(0.77, 0.82, cycle) * (1 - this.smoothStep(0.91, 0.96, cycle));
    const gustWindow = this.smoothStep(0.64, 0.72, cycle) * (1 - this.smoothStep(0.91, 0.98, cycle));
    const cloudCover = 0.12 + overcast * 0.66 + rainyWindow * 0.18;
    const wind = 0.15 + gustWindow * 0.5 + rainyWindow * 0.28;
    if (rainyWindow > 0.08) return { cloudCover, rain: rainyWindow * 0.86, wind, label: "Mưa rào", icon: "🌧️" };
    if (overcast > 0.56) return { cloudCover, rain: 0, wind, label: gustWindow > 0.12 ? "Gió lay hàng me" : "Mây che nắng", icon: gustWindow > 0.12 ? "🍃" : "☁️" };
    return { cloudCover, rain: 0, wind, label: gustWindow > 0.15 ? "Gió nhẹ" : "Nắng nhẹ", icon: "☀️" };
  }

  private smoothStep(edge0: number, edge1: number, value: number): number {
    const t = Phaser.Math.Clamp((value - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  private emitSteam(): void {
    if (!this.cartWidth || !this.lastSnapshot) return;
    const x = this.cartX + this.cartWidth * (0.05 + Math.random() * 0.28);
    const y = this.groundY - this.cartHeight * 0.22;
    const puff = this.add.ellipse(x, y, 5 * this.unit, 4 * this.unit, 0xfff4d8, 0.36)
      .setDepth(4.5);
    this.steamPuffs.push({ puff, life: 1_250, speed: 24 * this.unit });
  }

  private layout(): void {
    if (!this.street || !this.shopOverlay || !this.lastSnapshot) return;

    const width = this.getLogicalWidth();
    const height = this.getLogicalHeight();
    const previousMapWidth = this.mapWidth;
    const previousMapHeight = this.mapHeight;
    const previousMapTop = this.mapTop;
    const portrait = width / height < 0.85;
    // Keep the storefront large enough to read on phones while preserving a
    // continuous 3:1 street panorama that can be explored with a horizontal drag.
    const mapHeight = portrait
      ? Math.min(height * 0.78, width * 1.45)
      : height;
    const mapWidth = mapHeight * 3;
    const mapTop = (height - mapHeight) / 2;
    // Place character feet on the lower half of the map's tiled sidewalk, above the curb.
    const groundY = mapTop + mapHeight * 0.80;
    const sourceScale = mapHeight / SHOP_BASE_SIZE.height;
    const overlayX = Math.round(SHOP_OVERLAY_BOX.x * sourceScale);
    const overlayY = Math.round(mapTop + SHOP_OVERLAY_BOX.y * sourceScale);
    const overlayWidth = Math.round(SHOP_OVERLAY_BOX.w * sourceScale);
    const overlayHeight = Math.round(SHOP_OVERLAY_BOX.h * sourceScale);
    const centerX = overlayX + overlayWidth / 2;
    // Keep interactive props at a readable game scale as the panoramic backdrop
    // grows to cover a full-screen viewport.
    const unit = Math.max(0.8, Math.min(width / 1_280, 1.5));
    const stage = this.debugShopStage ?? this.lastSnapshot.cartLevel;
    const cartWidth = overlayWidth;
    const cartHeight = overlayHeight;

    this.unit = unit;
    this.mapTop = mapTop;
    this.mapHeight = mapHeight;
    this.cartX = centerX;
    this.groundY = groundY;
    this.cartWidth = cartWidth;
    this.cartHeight = cartHeight;

    this.streetBackdrop.setPosition(width / 2, height / 2).setDisplaySize(width, height);
    this.street.setPosition(mapWidth / 2, mapTop + mapHeight / 2).setDisplaySize(mapWidth, mapHeight);
    this.streetTransition.setPosition(mapWidth / 2, mapTop + mapHeight / 2).setDisplaySize(mapWidth, mapHeight);
    this.streetOvercast.setPosition(mapWidth / 2, mapTop + mapHeight / 2).setDisplaySize(mapWidth, mapHeight);
    this.nightOverlay.setPosition(0, 0).setSize(width, height);
    this.duskOverlay.setPosition(0, 0).setSize(width, height);
    this.weatherOverlay.setPosition(0, 0).setSize(width, height);

    this.shopOverlay.setPosition(overlayX, overlayY);
    this.shopPlaceholder.setSize(overlayWidth, overlayHeight);
    const devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
    const frameThickness = Math.max(2, Math.round(3 * sourceScale));
    this.shopPlaceholderFrame.clear()
      .lineStyle(frameThickness, 0xe4c28d, 1)
      .strokeRect(0, 0, overlayWidth, overlayHeight);
    this.shopStageTitle
      .setPosition(overlayWidth / 2, overlayHeight * 0.43)
      .setFontSize(Math.max(12, Math.round(22 * sourceScale)))
      .setResolution(devicePixelRatio);
    this.shopStageAsset
      .setPosition(overlayWidth / 2, overlayHeight * 0.57)
      .setFontSize(Math.max(10, Math.round(16 * sourceScale)))
      .setResolution(devicePixelRatio);
    this.shopOverlayScale = sourceScale;
    this.shopArtwork?.setPosition(0, 0).setScale(this.shopOverlayScale);
    if (this.shopDebugFrame && this.shopDebugLabel) {
      this.shopDebugFrame.clear()
        .lineStyle(Math.max(2, Math.round(3 * sourceScale)), 0xff3f4f, 1)
        .strokeRect(overlayX, overlayY, overlayWidth, overlayHeight);
      this.shopDebugLabel
        .setText(`SHOP_OVERLAY_BOX ${SHOP_OVERLAY_BOX.x},${SHOP_OVERLAY_BOX.y},${SHOP_OVERLAY_BOX.w},${SHOP_OVERLAY_BOX.h} · cấp ${this.shopStage} · [ ]`)
        .setPosition(overlayX + 8, overlayY + 8)
        .setFontSize(Math.max(10, Math.round(13 * sourceScale)))
        .setResolution(devicePixelRatio);
    }
    this.transitionShopStage(stage, this.shopStage > 0);

    const resized = width !== this.layoutWidth
      || height !== this.layoutHeight
      || mapWidth !== previousMapWidth
      || mapHeight !== previousMapHeight
      || mapTop !== previousMapTop;
    if (resized) {
      const oldCenterX = this.layoutWidth ? this.cameras.main.scrollX + this.layoutWidth / 2 : mapWidth / 2;
      this.layoutWidth = width;
      this.layoutHeight = height;
      this.mapWidth = mapWidth;
      this.maxPanX = Math.max(0, mapWidth - width);
      this.cameras.main.setBounds(0, 0, mapWidth, height, false);
      this.cameras.main.setScroll(Phaser.Math.Clamp(oldCenterX - width / 2, 0, this.maxPanX), 0);
      this.walkers.forEach((walker) => {
        walker.sprite.x = walker.positionRatio * mapWidth;
      });
      this.clouds.forEach((cloud, index) => {
        cloud.x = mapWidth * (0.05 + index * 0.19);
        cloud.y = mapTop + mapHeight * (0.085 + index % 3 * 0.035);
      });
      this.leaves.forEach((leaf, index) => { leaf.x = mapWidth * (index / this.leaves.length); });
      this.plants.forEach((plant, index) => {
        const anchor = BRANCH_ANCHORS[index];
        const branchHeight = Math.min(mapHeight * 0.13, height * 0.11, width * 0.18) * anchor.size;
        plant.setPosition(mapWidth * anchor.x, mapTop + mapHeight * anchor.y)
          .setDisplaySize(branchHeight * BRANCH_FRAME_WIDTH / BRANCH_FRAME_HEIGHT, branchHeight);
      });
      this.stars.forEach((star, index) => {
        star.setPosition(mapWidth * (0.055 + (index * 0.173) % 0.89), mapTop + mapHeight * (0.045 + (index % 4) * 0.026));
      });
      this.warmGlows.forEach((glow, index) => {
        glow.setPosition(mapWidth * [0.205, 0.30, 0.705, 0.855][index], mapTop + mapHeight * (0.468 + (index % 2) * 0.018));
      });
      this.puddles.forEach((effect, index) => {
        effect.x = mapWidth * (0.07 + Math.floor(index / 2) * 0.285);
        effect.y = mapTop + mapHeight * 0.939;
      });
      this.rainDrops.forEach((drop, index) => {
        drop.x = (index / this.rainDrops.length) * width;
        drop.y = (index % 5) * (height / 5) - height * 0.35;
      });
    }

    this.walkers.forEach((walker, index) => {
      walker.speed = getAmbientWalkerSpeed(index, walker.textureKey, unit);
      const laneY = mapTop + mapHeight * WALKER_LANE_RATIOS[walker.lane] + Math.sin(index * 1.9) * 2 * unit;
      walker.shadow.setPosition(walker.sprite.x, laneY + 1.5 * unit)
        .setDisplaySize(walker.shadowWidth * walker.size * unit, walker.shadowHeight * walker.size * unit)
        .setDepth(getStreetCharacterDepth(laneY) - 0.02)
        .setVisible(walker.active);
      walker.sprite.setPosition(walker.sprite.x, laneY)
        .setDisplaySize(walker.width * walker.size * unit, walker.height * walker.size * unit)
        .setDepth(getStreetCharacterDepth(laneY))
        .setVisible(walker.active);
    });
    this.clouds.forEach((cloud, index) => {
      cloud.sprite.setPosition(cloud.x, cloud.y).setDisplaySize(cloud.width * unit, cloud.height * unit);
      cloud.shadow.setPosition(cloud.x, mapTop + mapHeight * 0.805)
        .setDisplaySize(mapHeight * 0.22, mapHeight * 0.065);
    });
    const pigeonRoamHalfWidth = Math.min(0.13, Math.max(0.035, (width / mapWidth) * 0.32));
    this.pigeons.forEach((pigeon, index) => {
      pigeon.roamMinRatio = 0.5 - pigeonRoamHalfWidth;
      pigeon.roamMaxRatio = 0.5 + pigeonRoamHalfWidth;
      pigeon.positionRatio = Phaser.Math.Clamp(pigeon.positionRatio, pigeon.roamMinRatio, pigeon.roamMaxRatio);
      pigeon.x = pigeon.positionRatio * mapWidth;
      pigeon.y = groundY + index * 2.5 * unit;
      pigeon.sprite.setPosition(pigeon.x, pigeon.y).setDisplaySize(pigeon.width * unit, pigeon.height * unit);
      pigeon.shadow.setPosition(pigeon.x, pigeon.y + 1.5 * unit).setDisplaySize(pigeon.width * unit * 0.54, 5 * unit);
    });
    const nestX = mapWidth * 0.875;
    const nestY = mapTop + mapHeight * 0.215;
    this.pigeonNest.setPosition(nestX, nestY).setDisplaySize(34 * unit, 34 * unit);
    this.pigeonEggs.forEach((egg, index) => {
      egg.setPosition(nestX + (index === 0 ? -4 : 4) * unit, nestY - 5 * unit)
        .setDisplaySize(10 * unit, 10 * unit);
    });
    this.leaves.forEach((leaf, index) => {
      const laneCycle = ((index * 17) % LEAF_COUNT) / LEAF_COUNT;
      const facadeCycle = ((index * 13) % LEAF_COUNT) / LEAF_COUNT;
      const heightRatio = index % 5 < 3
        ? 0.64 + laneCycle * 0.23
        : 0.40 + facadeCycle * 0.34;
      leaf.y = mapTop + mapHeight * heightRatio;
      leaf.sprite.setPosition(leaf.x, leaf.y)
        .setDisplaySize((22 + index % 4 * 2) * unit, (20 + index % 3 * 2) * unit);
    });
    this.syncCrowd(this.lastSnapshot.customers, centerX, groundY, cartWidth, unit);
  }

  centerOnShop(): void {
    if (!this.mapWidth) return;
    const desired = this.cartX - this.getLogicalWidth() / 2;
    this.cameras.main.setScroll(Phaser.Math.Clamp(desired, 0, this.maxPanX), 0);
  }

  panMap(direction: -1 | 1): void {
    if (!this.mapWidth) return;
    const distance = Math.max(this.getLogicalWidth() * 0.72, 220 * this.unit);
    this.cameras.main.setScroll(
      Phaser.Math.Clamp(this.cameras.main.scrollX + direction * distance, 0, this.maxPanX),
      0,
    );
  }

  private getCustomerAppearance(type: CustomerType, id: number): CustomerAppearance {
    const existing = this.customerAppearances.get(id);
    if (existing) return existing;

    const options = CUSTOMER_APPEARANCES[type];
    const desiredIndex = Math.max(0, id - 1) % options.length;
    const desired = options[desiredIndex];
    const loaded = options.filter((appearance) =>
      this.textures.exists(appearance.key) && this.textures.exists(appearance.walkKey),
    );
    const appearance = loaded.includes(desired)
      ? desired
      : loaded[Math.max(0, id - 1) % Math.max(1, loaded.length)] ?? desired;
    this.customerAppearances.set(id, appearance);
    return appearance;
  }

  private updateColorGrade(nightAmount: number, twilight: number, cloudCover: number, rain: number): void {
    if (!this.colorGrade) return;
    const signature = [nightAmount, twilight, cloudCover, rain].map((value) => Math.round(value * 100)).join(":");
    if (signature === this.gradeSignature) return;
    const matrix = this.colorGrade.colorMatrix;
    matrix.reset();
    matrix.brightness(1 - nightAmount * 0.045 - cloudCover * 0.03 - rain * 0.025);
    matrix.hue(-nightAmount * 3 + twilight * 4 - cloudCover * 2, true);
    matrix.saturate(-cloudCover * 0.1 + twilight * 0.07, true);
    const warmth = twilight * 0.045;
    matrix.multiply([
      1 + warmth, 0, 0, 0, 0,
      0, 1 + warmth * 0.18, 0, 0, 0,
      0, 0, 1 - warmth * 0.8, 0, 0,
      0, 0, 0, 1, 0,
    ], true);
    matrix.contrast(twilight * 0.018, true);
    if (this.vignette) this.vignette.strength = 0.035 + nightAmount * 0.025 + rain * 0.018;
    this.gradeSignature = signature;
  }

  private syncCrowd(
    customers: WaitingCustomer[],
    centerX = this.getLogicalWidth() / 2,
    groundY = this.getLogicalHeight() * 0.7,
    shopWidth = this.cartWidth,
    unit = this.unit,
  ): void {
    const liveIds = new Set(customers.map((customer) => customer.id));
    for (const [id, container] of this.crowd) {
      if (!liveIds.has(id)) {
        const departure = this.pendingDepartures.get(id);
        if (departure) this.animateDeparture(container, departure.type, departure.direction);
        else container.destroy(true);
        this.pendingDepartures.delete(id);
        this.crowdMotion.delete(id);
        this.customerAppearances.delete(id);
        this.crowd.delete(id);
      }
    }

    customers.forEach((customer, index) => {
      let container = this.crowd.get(customer.id);
      const appearance = this.getCustomerAppearance(customer.type, customer.id);
      const walkKey = appearance.walkKey;
      const frontKey = appearance.key;
      const recipe = RECIPES[customer.recipe];
      const targetX = centerX - shopWidth * 0.32 - index * 66 * unit;

      if (!container) {
        const shadow = this.add.image(0, 1.5 * unit, "character-contact-shadow-soft")
          .setDisplaySize(31 * unit, 8 * unit)
          .setAlpha(0.58);
        const sprite = this.add.sprite(0, 0, walkKey, getWalkerStartFrame(walkKey, 1)).setOrigin(0.5, getWalkerOriginY(walkKey));
        const label = this.add.text(0, -92 * unit, appearance.shortName, {
          fontFamily: "Trebuchet MS, sans-serif",
          fontSize: `${Math.max(9, 10 * unit)}px`,
          color: "#3f3023",
          backgroundColor: "#fff4dc",
          padding: { x: 5, y: 3 },
        }).setOrigin(0.5, 1);
        const orderTag = this.add.text(0, -108 * unit, recipe.name, {
          fontFamily: "Trebuchet MS, sans-serif",
          fontSize: `${Math.max(8, 9 * unit)}px`,
          color: "#ffffff",
          backgroundColor: "#285a53",
          padding: { x: 5, y: 3 },
        }).setOrigin(0.5, 1);
        container = this.add.container(this.cameras.main.scrollX + 48 * unit, groundY, [shadow, sprite, label, orderTag])
          .setDepth(getStreetCharacterDepth(groundY))
          .setData("customerId", customer.id);
        this.crowd.set(customer.id, container);
        const arrival = customer.status === "walking";
        this.crowdMotion.set(customer.id, {
          targetX,
          speed: 42 * unit,
          direction: 1,
          moving: arrival,
          needsWalkingState: false,
          idlePhase: Math.random() * Math.PI * 2,
        });
      }

      const motion = this.crowdMotion.get(customer.id);
      if (!motion || !container) return;
      motion.targetX = targetX;
      if (!motion.moving && Math.abs(container.x - targetX) > 3 * unit) {
        motion.moving = true;
        motion.needsWalkingState = customer.status === "waiting";
      }

      container.y = groundY;
      const shadow = container.getAt(0) as Phaser.GameObjects.Image;
      const sprite = container.getAt(1) as Phaser.GameObjects.Sprite;
      const label = container.getAt(2) as Phaser.GameObjects.Text;
      const orderTag = container.getAt(3) as Phaser.GameObjects.Text;
      shadow.setDisplaySize(31 * unit, 8 * unit).setPosition(0, 1.5 * unit);
      sprite.setDisplaySize(CUSTOMER_DISPLAY_WIDTH * unit, CUSTOMER_DISPLAY_HEIGHT * unit);
      label.setY(-92 * unit).setFontSize(`${Math.max(9, 10 * unit)}px`).setText(appearance.shortName);
      orderTag.setY(-108 * unit).setFontSize(`${Math.max(8, 9 * unit)}px`).setText(recipe.name);
      const isWalking = motion.moving || customer.status === "walking";
      if (isWalking) {
        const direction: -1 | 1 = targetX >= container.x ? 1 : -1;
        const animation = `${walkKey}-${direction > 0 ? "right" : "left"}`;
        if (sprite.texture.key !== walkKey || sprite.anims.currentAnim?.key !== animation) {
          sprite.setOrigin(0.5, getWalkerOriginY(walkKey));
          const visualScale = getCharacterScaleFactor(
            getWalkerArtHeight(walkKey),
            getWalkerFrameHeight(walkKey),
            CUSTOMER_DISPLAY_HEIGHT,
          );
          sprite.setScale(
            (CUSTOMER_DISPLAY_WIDTH * unit / CUSTOMER_FRAME_WIDTH) * visualScale,
            (CUSTOMER_DISPLAY_HEIGHT * unit / getWalkerFrameHeight(walkKey)) * visualScale,
          );
          sprite.y = 0;
          sprite.setTexture(walkKey, getWalkerStartFrame(walkKey, direction));
          sprite.play(animation);
        }
      } else {
        const idleTexture = frontKey;
        const idleAnimation = appearance.idleAnimation;
        if (sprite.texture.key !== idleTexture || (idleAnimation && sprite.anims.currentAnim?.key !== idleAnimation)) {
          sprite.anims.stop();
          sprite.setOrigin(0.5, getCustomerOriginY(frontKey));
          sprite.setTexture(idleTexture, 0);
          if (idleAnimation) sprite.play(idleAnimation);
        }
      }
      sprite.setOrigin(0.5, isWalking ? getWalkerOriginY(walkKey) : getCustomerOriginY(frontKey));
      const normalizedHeight = isWalking
        ? getWalkerArtHeight(walkKey)
        : CUSTOMER_ART_HEIGHTS[frontKey] ?? 350;
      const normalizedFrameHeight = isWalking ? getWalkerFrameHeight(walkKey) : CUSTOMER_FRAME_HEIGHT;
      setCharacterDisplaySize(
        sprite,
        CUSTOMER_DISPLAY_WIDTH * unit,
        CUSTOMER_DISPLAY_HEIGHT * unit,
        normalizedFrameHeight,
        normalizedHeight,
        CHARACTER_TARGET_VISIBLE_HEIGHT * unit,
      );
      const showOrder = index === 0 && !isWalking;
      label.setVisible(showOrder);
      orderTag.setVisible(showOrder);
    });
  }

  private animateDeparture(container: Phaser.GameObjects.Container, type: CustomerType, direction: -1 | 1): void {
    const sprite = container.getAt(1) as Phaser.GameObjects.Sprite;
    const label = container.getAt(2) as Phaser.GameObjects.Text;
    const orderTag = container.getAt(3) as Phaser.GameObjects.Text;
    const customerId = container.getData("customerId") as number;
    const walkKey = this.getCustomerAppearance(type, customerId).walkKey;
    sprite.setOrigin(0.5, getWalkerOriginY(walkKey));
    const visualScale = getCharacterScaleFactor(
      getWalkerArtHeight(walkKey),
      getWalkerFrameHeight(walkKey),
      CUSTOMER_DISPLAY_HEIGHT,
    );
    sprite.setScale(
      (CUSTOMER_DISPLAY_WIDTH * this.unit / CUSTOMER_FRAME_WIDTH) * visualScale,
      (CUSTOMER_DISPLAY_HEIGHT * this.unit / getWalkerFrameHeight(walkKey)) * visualScale,
    );
    sprite.y = 0;
    sprite.setTexture(walkKey, getWalkerStartFrame(walkKey, direction)).play(`${walkKey}-${direction > 0 ? "right" : "left"}`);
    label.setVisible(false);
    orderTag.setVisible(false);
    const destination = this.getViewportExitX(direction, container.x);
    const duration = Math.max(1_000, Math.abs(destination - container.x) / (90 * this.unit) * 1_000);
    this.tweens.add({
      targets: container,
      x: destination,
      duration,
      ease: "Linear",
      onComplete: () => container.destroy(true),
    });
  }
}
