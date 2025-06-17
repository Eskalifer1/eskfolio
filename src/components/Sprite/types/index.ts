export interface SpriteConfig<Key extends string = string> {
  count: number;
  position: number;
  speed: number;
  key: Key;
}

export type SpriteAnimationConfig = { [K in string]: SpriteConfig<K> };
