import { useAchievements } from "@/providers/achievements";
import { useActiveSection } from "@/providers/section";

import { RefObject } from "react";

import { useSpriteAnimation } from "@/components/Sprite/hooks/useSpriteAnimation";

import { useKeyboardDirection } from "@/hooks/useKeyboardDirection";
import { useKeyboardScroll } from "@/hooks/useKeyboardScroll";
import { useScrollDirection } from "@/hooks/useScrollDirection";

import { ACHIEVEMENT_KEYS } from "@/consts/achievements";
import { SCROLL_DIRECTION } from "@/consts/scroll/direction";
import { SECTION_CONFIG } from "@/consts/sections";

import { HERO_SPRITE_CONFIG } from "../consts";
import { useHeroScrollAnimation } from "./useHeroScrollAnimation";

interface PropsType {
  containerRef: RefObject<HTMLDivElement | null>;
}

export const useHeroAdventure = ({ containerRef }: PropsType) => {
  const { animationType, playAnimationOnce, setAnimationType } =
    useSpriteAnimation(HERO_SPRITE_CONFIG.idle.key, HERO_SPRITE_CONFIG);

  const { unlock } = useAchievements();

  const { activeSection } = useActiveSection();

  const isActive = activeSection === SECTION_CONFIG.projects.key;

  const scrollDirection = useScrollDirection({
    containerRef,
    active: isActive,
  });

  const isScrollDown = scrollDirection === SCROLL_DIRECTION.DOWN;

  useHeroScrollAnimation({
    containerRef,
    active: isActive,
    setAnimationType,
  });

  const direction = useKeyboardDirection({
    active: isActive,
    onPress: (dir) => {
      unlock(ACHIEVEMENT_KEYS.arrowKeysMaster);
      if (dir === "up") {
        playAnimationOnce(HERO_SPRITE_CONFIG.jump.key);
        return;
      }

      if (dir === "down") {
        playAnimationOnce(HERO_SPRITE_CONFIG.slide.key);
        return;
      }
    },
  });

  useKeyboardScroll({
    active: isActive,
    direction,
    containerRef: containerRef,
  });

  return { animationType, playAnimationOnce, isScrollDown };
};
