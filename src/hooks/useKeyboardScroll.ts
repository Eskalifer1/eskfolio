import { useEffect, useRef } from "react";

import { Direction } from "./useKeyboardDirection";

type UseKeyboardScrollProps = {
  direction: Direction | null;
  active?: boolean;
  containerRef?: React.RefObject<HTMLElement | null>;
  scrollStep?: number;
  behavior?: ScrollBehavior;
};

/**
 * useKeyboardScroll
 *
 * Scrolls the container based on left/right direction input.
 *
 * @param {Direction | null} direction - Current direction from keyboard.
 * @param {boolean} [active=true] - should use event
 * @param {React.RefObject<HTMLElement>} [containerRef] - Optional scrollable container.
 * @param {number} [scrollStep=10] - Step per frame.
 * @param {ScrollBehavior} [behavior='auto'] - Scroll behavior.
 */
export function useKeyboardScroll({
  direction,
  active,
  containerRef,
  scrollStep = 10,
  behavior = "auto",
}: UseKeyboardScrollProps) {
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const isHorizontal = direction === "left" || direction === "right";
    if (!isHorizontal || !active) return;

    const container = containerRef?.current ?? window;
    const delta = direction === "right" ? scrollStep : -scrollStep;

    const scroll = () => {
      if (container instanceof Window) {
        window.scrollBy({ top: delta, behavior });
      } else {
        container.scrollBy({ top: delta, behavior });
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, containerRef, scrollStep, behavior, active]);
}
