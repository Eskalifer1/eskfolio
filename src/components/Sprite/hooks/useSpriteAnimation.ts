import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

import { SpriteAnimationConfig } from "../types";

export const useSpriteAnimation = (
  defaultAnimation: string,
  animationConfig: SpriteAnimationConfig,
) => {
  const [animationType, _setAnimationType] = useState<string>(defaultAnimation);
  const [isAnimationInterrupted, setIsAnimationInterrupted] = useState(false);
  const [iterationCount, setIterationCount] =
    useState<CSSProperties["animationIterationCount"]>("infinite");
  const [isFinalPlayed, setIsFinalPlayed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const setAnimationType = useCallback(
    (update: React.SetStateAction<string>) => {
      if (isFinalPlayed) return;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      _setAnimationType((prev) => {
        const newValue = typeof update === "function" ? update(prev) : update;

        if (newValue !== prev) {
          setIsAnimationInterrupted(false);
        }

        return newValue;
      });
    },
    [isFinalPlayed],
  );

  const playAnimationOnce = useCallback(
    (type: string, isFinal = false) => {
      if (
        animationType === animationConfig.idle.key ||
        !isAnimationInterrupted
      ) {
        setAnimationType(type);
        setIsAnimationInterrupted(true);
        setIterationCount(isFinal ? 1 : "infinite");

        if (isFinal) {
          setIsFinalPlayed(true);
          return;
        }

        const duration =
          (animationConfig[type].count / animationConfig[type].speed) * 1000;

        timerRef.current = setTimeout(() => {
          setAnimationType(defaultAnimation);
          setIsAnimationInterrupted(false);
          setIterationCount("infinite");
        }, duration);
      }
    },
    [animationType, isAnimationInterrupted, animationConfig, defaultAnimation],
  );

  return {
    animationType,
    playAnimationOnce,
    setAnimationType,
    iterationCount,
    isFinalPlayed,
  };
};
