import { useCallback, useEffect, useRef } from "react";

import { useSharedEventListener } from "@/hooks/useSharedEventListener";

interface UseMagneticEffectOptions {
  strength?: number;
  radius?: number;
  active?: boolean;
}

export function useMagneticEffect<T extends HTMLElement>({
  strength = 0.4,
  radius = 100,
  active = true,
}: UseMagneticEffectOptions = {}) {
  const ref = useRef<T | null>(null);
  const frameId = useRef<number>(0);

  const resetTransform = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: Event) => {
      const e = event as MouseEvent;
      if (!active || !ref.current) return;

      cancelAnimationFrame(frameId.current!);

      frameId.current = requestAnimationFrame(() => {
        const el = ref.current!;
        const rect = el.getBoundingClientRect();
        const elCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };

        const distX = e.clientX - elCenter.x;
        const distY = e.clientY - elCenter.y;
        const distanceSquared = distX ** 2 + distY ** 2;

        if (distanceSquared < radius ** 2) {
          const moveX = distX * strength;
          const moveY = distY * strength;
          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          resetTransform();
        }
      });
    },
    [active, strength, radius, resetTransform],
  );

  useSharedEventListener(window, "mousemove", handleMouseMove, active, {
    passive: true,
  });

  useSharedEventListener(window, "mouseleave", resetTransform, active, {
    passive: true,
  });

  // Cleanup
  useEffect(() => {
    return () => {
      cancelAnimationFrame(frameId.current!);
    };
  }, []);

  return ref;
}
