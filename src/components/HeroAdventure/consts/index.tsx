export type HeroAnimationType = "idle" | "run" | "cry" | "attack";

export const animationSpriteTypeConfig: Record<
  HeroAnimationType,
  { count: number; position: number; speed: number }
> = {
  idle: { count: 13, position: 0, speed: 4 },
  run: { count: 8, position: 1, speed: 5 },
  attack: { count: 10, position: 2, speed: 4.5 },
  cry: { count: 4, position: 6, speed: 6 },
} as const;

export const HERO_ANIMATION_TYPE_CONFIG: Record<
  HeroAnimationType,
  { key: HeroAnimationType }
> = {
  idle: { key: "idle" },
  run: { key: "run" },
  attack: { key: "attack" },
  cry: { key: "cry" },
} as const;
