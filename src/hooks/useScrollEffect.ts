import { useCallback } from "react";

import { useSharedScrollListener } from "./useSharedScrollListener";

type UseScrollEffectOptions = {
  /**
   * Reference to the scrollable container element.
   */
  containerRef: React.RefObject<HTMLElement | null>;

  /**
   * Callback executed on scroll, receiving progress (0 to 1),
   * current scrollTop and max scroll value.
   */
  onScrollProgress: (
    progress: number,
    scrollTop: number,
    maxScroll: number,
  ) => void;

  /**
   * Enables or disables the effect. Useful for conditional behavior.
   */
  active: boolean;
};

/**
 * A custom React hook that tracks scroll progress within a given container
 * and executes a callback with scroll values on scroll.
 *
 * It uses `requestAnimationFrame` for performance optimization and automatically
 * adds/removes scroll listeners based on component lifecycle and `active` flag.
 *
 * @param {UseScrollEffectOptions} options - Configuration object for the scroll effect.
 *
 * @example
 * ```tsx
 * const heroRef = useRef<HTMLDivElement>(null);
 * const containerRef = useRef<HTMLDivElement>(null);
 *
 * useScrollEffect({
 *   containerRef,
 *   active: activeSection === SECTION_CONFIG.projects.key,
 *   onScrollProgress: (progress) => {
 *     const offset = progress * 300; // animate by 300px horizontally
 *     if (heroRef.current) {
 *       heroRef.current.style.transform = `translateX(${offset}px)`;
 *     }
 *   }
 * });
 * ```
 */
export function useScrollEffect({
  containerRef,
  onScrollProgress,
  active,
}: UseScrollEffectOptions) {
  const handler = useCallback(() => {
    const container = containerRef?.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const progress = Math.min(scrollTop / maxScroll, 1);

    onScrollProgress(progress, scrollTop, maxScroll);
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [onScrollProgress]);

  useSharedScrollListener(containerRef, handler, active);
}
