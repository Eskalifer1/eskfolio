import { useCallback, useRef } from "react";

type UseParallaxOptions = {
  movementFactor?: number;
};

export function useParallaxEffect<T extends HTMLElement>({
  movementFactor = 60,
}: UseParallaxOptions = {}) {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const moveX = x * movementFactor;
      const moveY = y * movementFactor;

      if (ref.current) {
        ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    },
    [movementFactor],
  );

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(0, 0)`;
    }
  }, []);

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
  };
}
