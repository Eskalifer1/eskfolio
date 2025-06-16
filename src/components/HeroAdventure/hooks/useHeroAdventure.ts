import { useActiveSection } from "@/providers/section";

import { RefObject } from "react";

import { useKeyboardDirection } from "@/hooks/useKeyboardDirection";
import { useKeyboardScroll } from "@/hooks/useKeyboardScroll";
import { useScrollDirection } from "@/hooks/useScrollDirection";

import { SCROLL_DIRECTION } from "@/consts/scroll/direction";
import { SECTION_CONFIG } from "@/consts/sections";

import { HERO_ANIMATION_TYPE_CONFIG } from "../consts";
import { useHeroAnimation } from "./useHeroAnimation";
import { useHeroScrollAnimation } from "./useHeroScrollAnimation";

interface PropsType {
  containerRef: RefObject<HTMLDivElement | null>;
}

export const useHeroAdventure = ({ containerRef }: PropsType) => {
  const { animationType, playAnimationOnce, setAnimationType } =
    useHeroAnimation();

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
      if (dir === "up") playAnimationOnce(HERO_ANIMATION_TYPE_CONFIG.jump.key);
      if (dir === "down")
        playAnimationOnce(HERO_ANIMATION_TYPE_CONFIG.slide.key);
    },
  });

  useKeyboardScroll({
    active: isActive,
    direction,
    containerRef: containerRef,
  });

  return { animationType, playAnimationOnce, isScrollDown };
};
