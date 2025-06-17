import { SpriteConfig } from "@/components/Sprite/types";

export type HeroAnimationType =
  | "idle"
  | "run"
  | "cry"
  | "attack"
  | "jump"
  | "slide";

export const HERO_SPRITE_CONFIG: {
  [K in HeroAnimationType]: SpriteConfig<K>;
} = {
  idle: { count: 13, position: 0, speed: 4, key: "idle" },
  run: { count: 8, position: 1, speed: 5, key: "run" },
  attack: { count: 6, position: 10, speed: 5, key: "attack" },
  cry: { count: 4, position: 6, speed: 6, key: "cry" },
  jump: { count: 6, position: 5, speed: 5, key: "jump" },
  slide: { count: 5, position: 12, speed: 4, key: "slide" },
} as const;
