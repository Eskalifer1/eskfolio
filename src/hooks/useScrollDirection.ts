import { useCallback, useEffect, useRef, useState } from "react";

import { SCROLL_DIRECTION, ScrollDirection } from "@/consts/scroll/direction";

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
  active,
  delay = 200,
}: UseScrollDirectionOptions): ScrollDirection => {
  const [direction, setDirection] = useState<ScrollDirection>(
    SCROLL_DIRECTION.DOWN,
  );
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearScrollTimeout = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = null;
    }
  };

  const handleScroll = useCallback(() => {
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

    clearScrollTimeout();
    scrollTimeout.current = setTimeout(() => {
      setDirection(SCROLL_DIRECTION.DOWN);
    }, delay);
  }, [containerRef.current, direction, delay]);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearScrollTimeout();
    };
  }, [active, handleScroll]);

  return direction;
};
