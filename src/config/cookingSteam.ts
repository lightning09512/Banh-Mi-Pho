/** Steam origins are anchored at the rim of a visible pot or cooking surface. */
export type CookingSteamPoint = {
  /** X coordinate in the source image. */
  x: number;
  /** Y coordinate at the pot rim / grill surface in the source image. */
  y: number;
  /** Relative to the deliberately small, narrow steam sprite. */
  size?: number;
  intervalMs?: number;
};

/** Fixed cookers painted into the original 2172 × 724 street panorama. */
export const STREET_COOKING_STEAM_POINTS: readonly CookingSteamPoint[] = [
  { x: 145, y: 397, size: 0.54, intervalMs: 2_500 },
  { x: 580, y: 399, size: 0.56, intervalMs: 2_250 },
  { x: 1_715, y: 399, size: 0.48, intervalMs: 2_700 },
];

/**
 * Cooking origins for each 860 × 520 full-facade overlay.
 * Coordinates sit on the hot cookware / grill opening, not above the whole stall.
 * Later stages retain the same ground-floor kitchen, so their origins stay put.
 */
export const SHOP_COOKING_STEAM_POINTS: Readonly<Record<number, readonly CookingSteamPoint[]>> = {
  // Street cart: roast / grill surface and the small pot at the cart's right end.
  1: [
    { x: 199, y: 391, size: 0.56, intervalMs: 2_100 },
    { x: 260, y: 385, size: 0.46, intervalMs: 2_650 },
  ],
  // Sturdier cart: charcoal grate and the silver stock pot.
  2: [
    { x: 205, y: 399, size: 0.56, intervalMs: 2_150 },
    { x: 243, y: 377, size: 0.48, intervalMs: 2_550 },
  ],
  // First fixed counter: hot-food case and cooking pot beside it.
  3: [
    { x: 175, y: 393, size: 0.54, intervalMs: 2_250 },
    { x: 266, y: 391, size: 0.46, intervalMs: 2_650 },
  ],
  // Complete left bay: pot / burner at left, grill behind the service counter.
  4: [
    { x: 119, y: 389, size: 0.54, intervalMs: 2_150 },
    { x: 214, y: 398, size: 0.50, intervalMs: 2_550 },
  ],
  // The kitchen now uses two bays; anchor one wisp to the hooded grill and one to the pot.
  5: [
    { x: 154, y: 398, size: 0.58, intervalMs: 2_050 },
    { x: 260, y: 385, size: 0.48, intervalMs: 2_600 },
  ],
  6: [
    { x: 151, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 292, y: 393, size: 0.48, intervalMs: 2_550 },
  ],
  7: [
    { x: 151, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 282, y: 401, size: 0.46, intervalMs: 2_650 },
  ],
  8: [
    { x: 151, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 289, y: 399, size: 0.46, intervalMs: 2_650 },
  ],
  9: [
    { x: 149, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 296, y: 399, size: 0.46, intervalMs: 2_650 },
  ],
  10: [
    { x: 149, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 288, y: 401, size: 0.46, intervalMs: 2_650 },
  ],
  11: [
    { x: 149, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 288, y: 401, size: 0.46, intervalMs: 2_650 },
  ],
  12: [
    { x: 149, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 288, y: 401, size: 0.46, intervalMs: 2_650 },
  ],
  13: [
    { x: 149, y: 397, size: 0.58, intervalMs: 2_050 },
    { x: 288, y: 401, size: 0.46, intervalMs: 2_650 },
  ],
};
