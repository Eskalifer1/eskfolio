import { useEffect } from "react";

import {
    subscribeToScroll,
    unsubscribeFromScroll,
} from "@/helpers/scrollManager";

type UseSharedScrollListenerOptions = AddEventListenerOptions;

/**
 * A shared scroll listener hook that delegates scroll event handling
 * to a centralized scroll manager (`scrollManager`), ensuring only a single
 * scroll event listener is added per container, even if multiple hooks subscribe.
 *
 * This improves performance and avoids redundant `addEventListener` calls.
 *
 * @param {React.RefObject<HTMLElement>} containerRef - Ref to the scrollable element.
 * @param {(e: Event) => void} handler - Scroll event handler to call when scrolling.
 * @param {boolean} [enabled=true] - Whether the scroll listener should be active.
 * @param {UseSharedScrollListenerOptions} [options] - Options passed to `addEventListener`. Defaults to `{ passive: true }`.
 *
 * @example
 * useSharedScrollListener(containerRef, (e) => {
 *   console.log("scrolling");
 * });
 */
export function useSharedScrollListener(
  containerRef: React.RefObject<HTMLElement | null>,
  handler: (e: Event) => void,
  enabled: boolean = true,
  options?: UseSharedScrollListenerOptions,
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!enabled || !container) return;

    // Fallback to passive: true by default
    const eventOptions: UseSharedScrollListenerOptions = {
      passive: true,
      ...options,
    };

    subscribeToScroll(container, handler, eventOptions);
    return () => {
      unsubscribeFromScroll(container, handler);
    };
  }, [containerRef.current, enabled, handler, JSON.stringify(options)]);
}
