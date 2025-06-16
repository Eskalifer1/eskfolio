export type HeroAnimationType =
  | "idle"
  | "run"
  | "cry"
  | "attack"
  | "jump"
  | "slide";

export const animationSpriteTypeConfig: Record<
  HeroAnimationType,
  { count: number; position: number; speed: number }
> = {
  idle: { count: 13, position: 0, speed: 4 },
  run: { count: 8, position: 1, speed: 5 },
  attack: { count: 6, position: 11, speed: 5 },
  cry: { count: 4, position: 6, speed: 6 },
  jump: { count: 6, position: 5, speed: 5 },
  slide: { count: 5, position: 12, speed: 4 },
} as const;

export const HERO_ANIMATION_TYPE_CONFIG: {
  [K in HeroAnimationType]: { key: K };
} = {
  idle: { key: "idle" },
  run: { key: "run" },
  attack: { key: "attack" },
  cry: { key: "cry" },
  jump: { key: "jump" },
  slide: { key: "slide" },
} as const;
