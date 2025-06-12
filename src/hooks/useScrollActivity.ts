import { useEffect, useState } from "react";

type UseScrollActivityOptions = {
  containerRef: React.RefObject<HTMLElement | null>;
  debounceDelay?: number;
  active?: boolean;
};

/**
 * Custom hook that detects if user is actively scrolling a container.
 *
 * @param {UseScrollActivityOptions} options - Hook options.
 * @returns {boolean} isScrolling - True while user is scrolling.
 *
 * @example
 * const isScrolling = useScrollActivity({ containerRef, debounceDelay: 150 });
 */
export const useScrollActivity = ({
  containerRef,
  debounceDelay = 150,
  active = true,
}: UseScrollActivityOptions): boolean => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, debounceDelay);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef, debounceDelay, active]);

  return isScrolling;
};
