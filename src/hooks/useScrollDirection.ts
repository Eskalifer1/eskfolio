import { useCallback, useRef, useState } from "react";

import { SCROLL_DIRECTION, ScrollDirection } from "@/consts/scroll/direction";

import { useSharedScrollListener } from "./useSharedScrollListener";

type UseScrollDirectionOptions = {
  containerRef: React.RefObject<HTMLElement | null>;
  active: boolean;
  delay?: number;
};

/**
 * Tracks scroll direction ("up" or "down") of a scrollable container.
 * Returns SCROLL_DIRECTION.DOWN by default and after scroll stops.
 */
export const useScrollDirection = ({
  containerRef,
  active = true,
  delay = 100,
}: UseScrollDirectionOptions): ScrollDirection => {
  const [direction, setDirection] = useState<ScrollDirection>(
    SCROLL_DIRECTION.DOWN,
  );
  const lastScrollTop = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handler = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const currentScrollTop = container.scrollTop;
    const delta = currentScrollTop - lastScrollTop.current;

    if (delta > 0 && direction !== SCROLL_DIRECTION.DOWN) {
      setDirection(SCROLL_DIRECTION.DOWN);
    } else if (delta < 0 && direction !== SCROLL_DIRECTION.UP) {
      setDirection(SCROLL_DIRECTION.UP);
    }

    lastScrollTop.current = currentScrollTop;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection((prev) =>
        prev === SCROLL_DIRECTION.DOWN ? prev : SCROLL_DIRECTION.DOWN,
      );
    }, delay);
  }, [containerRef, delay, direction]);

  useSharedScrollListener(containerRef, handler, active);

  return direction;
};
