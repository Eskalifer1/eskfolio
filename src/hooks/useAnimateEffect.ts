import { useEffect, useRef } from "react";

import { TIMING_DOUBLED_LOADING_SCREEN } from "@/consts/timing";

export function useAnimatedEffect(
  effect: () => void | (() => void) | Promise<void | (() => void)>,
  deps: React.DependencyList,
  delay: number = TIMING_DOUBLED_LOADING_SCREEN,
) {
  const cleanupRef = useRef<(() => void) | void>(null);

  useEffect(() => {
    let isCancelled = false;

    const start = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (isCancelled) return;

      const result = await effect();
      cleanupRef.current = result;
    };

    start();

    return () => {
      isCancelled = true;
      if (cleanupRef.current) cleanupRef.current();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
