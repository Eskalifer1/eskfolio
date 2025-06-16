import { useCallback, useEffect, useRef, useState } from "react";

import { useSharedEventListener } from "@/hooks/useSharedEventListener";

import {
  lockKeyboardNavigation,
  unlockKeyboardNavigation,
} from "@/helpers/keyboardNavigation";

export type Direction = "up" | "down" | "left" | "right";

const keyToDirectionMap: Record<string, Direction> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
};

type UseKeyboardDirectionProps = {
  active?: boolean;
  onPress?: (dir: Direction) => void;
  onRelease?: (dir: Direction) => void;
};

/**
 * useKeyboardDirection
 *
 * Tracks directional key presses (arrow keys) and triggers optional callbacks.
 *
 * @param {boolean} [active=true] - Whether the hook is active.
 * @param {(dir: Direction) => void} [onPress] - Called when a direction is pressed.
 * @param {(dir: Direction) => void} [onRelease] - Called when a direction is released.
 *
 * @returns {Direction | null} - The currently pressed direction.
 */
export function useKeyboardDirection({
  active = true,
  onPress,
  onRelease,
}: UseKeyboardDirectionProps): Direction | null {
  const [direction, setDirection] = useState<Direction | null>(null);
  const isPressedRef = useRef(false);

  useEffect(() => {
    if (active) {
      lockKeyboardNavigation();
      return () => unlockKeyboardNavigation();
    }
  }, [active]);

  const handleKeyDown = useCallback(
    (e: Event) => {
      const event = e as KeyboardEvent;
      const dir = keyToDirectionMap[event.key];
      if (!dir || isPressedRef.current) return;

      event.preventDefault();
      isPressedRef.current = true;
      setDirection(dir);
      onPress?.(dir);
    },
    [onPress],
  );

  const handleKeyUp = useCallback(
    (e: Event) => {
      const event = e as KeyboardEvent;
      const dir = keyToDirectionMap[event.key];
      if (!dir) return;

      event.preventDefault();
      isPressedRef.current = false;
      setDirection(null);
      onRelease?.(dir);
    },
    [onRelease],
  );

  const isClient = typeof window !== "undefined";

  useSharedEventListener(
    isClient ? window : (undefined as unknown as EventTarget),
    "keydown",
    handleKeyDown,
    active,
    { passive: false },
  );
  useSharedEventListener(
    isClient ? window : (undefined as unknown as EventTarget),
    "keyup",
    handleKeyUp,
    active,
    { passive: false },
  );

  return direction;
}
