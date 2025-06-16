import { useSharedEventListener } from "@/hooks/useSharedEventListener";

/**
 * useSharedScrollListener
 *
 * A specialized hook that subscribes to a scroll event on a given container.
 * Internally uses the shared event manager to ensure only one native scroll listener per container.
 *
 * ⚠️ Backward-compatible wrapper around `useSharedEventListener`.
 *
 * @param {React.RefObject<HTMLElement | null>} containerRef - Ref to the scrollable container.
 * @param {(e: Event) => void} handler - Function to execute on scroll.
 * @param {boolean} [enabled=true] - Whether the listener is active.
 * @param {AddEventListenerOptions} [options={ passive: true }] - Optional listener options.
 *
 * @example
 * useSharedScrollListener(containerRef, (e) => {
 *   console.log("scrolling", e);
 * });
 */
export function useSharedScrollListener(
  containerRef: React.RefObject<HTMLElement | null>,
  handler: (e: Event) => void,
  enabled: boolean = true,
  options?: AddEventListenerOptions,
) {
  useSharedEventListener(containerRef, "scroll", handler, enabled, options);
}
