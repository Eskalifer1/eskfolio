import { useEffect, useState } from "react";

import {
  animationSpriteTypeConfig,
  HERO_ANIMATION_TYPE_CONFIG,
  HeroAnimationType,
} from "../consts";

export const useHeroAnimation = () => {
  const [animationType, setAnimationType] = useState<HeroAnimationType>("idle");
  const [isAnimationInterrupted, setIsAnimationInterrupted] = useState(false);

  const playAnimationOnce = (type: Exclude<HeroAnimationType, "idle">) => {
    if (animationType === HERO_ANIMATION_TYPE_CONFIG.idle.key) {
      setAnimationType(type);
      setIsAnimationInterrupted(true);
    }
  };

  useEffect(() => {
    if (!isAnimationInterrupted) return;

    const timer = setTimeout(
      () => {
        setAnimationType("idle");
        setIsAnimationInterrupted(false);
      },
      (animationSpriteTypeConfig[animationType].count /
        animationSpriteTypeConfig[animationType].speed) *
        1000,
    );

    return () => clearTimeout(timer);
  }, [isAnimationInterrupted, animationType]);

  return {
    animationType,
    playAnimationOnce,
    setAnimationType,
  };
};
