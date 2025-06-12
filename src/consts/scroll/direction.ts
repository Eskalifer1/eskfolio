export const SCROLL_DIRECTION = {
  UP: "up",
  DOWN: "down",
} as const;

export type ScrollDirection =
  (typeof SCROLL_DIRECTION)[keyof typeof SCROLL_DIRECTION];
