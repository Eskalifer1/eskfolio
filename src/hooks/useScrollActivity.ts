import { useCallback, useRef } from "react";

import { useSharedScrollListener } from "./useSharedScrollListener";

type UseScrollActivityOptions = {
  containerRef: React.RefObject<HTMLElement | null>;
  debounceDelay?: number;
  active?: boolean;

  /** Called once when scrolling starts */
  onStart?: () => void;

  /** Called once when scrolling stops (after delay) */
  onStop?: () => void;
};

/**
 * Custom hook that tracks scroll activity and triggers callbacks
 * when scrolling starts and stops.
 *
 * @param {UseScrollActivityOptions} options - Hook options.
 * @example
 * useScrollActivity({
 *   containerRef,
 *   onStart: () => console.log("Scrolling started"),
 *   onStop: () => console.log("Scrolling stopped"),
 *   debounceDelay: 200,
 * });
 */
export const useScrollActivity = ({
  containerRef,
  debounceDelay = 200,
  active = true,
  onStart,
  onStop,
}: UseScrollActivityOptions): void => {
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handler = useCallback(() => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;
      onStart?.();
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (isScrollingRef.current) {
        isScrollingRef.current = false;
        onStop?.();
      }
    }, debounceDelay);
  }, [debounceDelay, onStart, onStop]);

  useSharedScrollListener(containerRef, handler, active);
};
