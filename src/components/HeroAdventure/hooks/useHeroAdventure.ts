import { useActiveSection } from "@/providers/section";

import { RefObject } from "react";

import { useScrollDirection } from "@/hooks/useScrollDirection";

import { SCROLL_DIRECTION } from "@/consts/scroll/direction";
import { SECTION_CONFIG } from "@/consts/sections";

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

  return { animationType, playAnimationOnce, isScrollDown };
};
