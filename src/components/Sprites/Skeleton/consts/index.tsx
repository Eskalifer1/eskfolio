import { SpriteConfig } from "@/components/Sprite/types";

export type SkeletonAnimationType = "idle" | "die";

export const SKELETON_SPRITE_CONFIG: {
  [K in SkeletonAnimationType]: SpriteConfig<K>;
} = {
  idle: { count: 8, position: 0, speed: 4, key: "idle" },
  die: { count: 17, position: 4, speed: 6, key: "die" },
} as const;
