import { Dispatch, SetStateAction } from "react";

import { useScrollActivity } from "@/hooks/useScrollActivity";

import { HERO_SPRITE_CONFIG } from "../consts";

type UseHeroScrollAnimationOptions = {
  /** Ref to the scrollable container that triggers animation changes */
  containerRef: React.RefObject<HTMLElement | null>;

  /** Whether scroll tracking is active (e.g. based on active section) */
  active: boolean;

  /** Setter function to update the hero's animation */
  setAnimationType: Dispatch<SetStateAction<string>>;
};

/**
 * Custom hook that synchronizes the hero's animation state with scroll activity.
 * While the container is scrolling, the animation is set to `HERO_ANIMATION_TYPE_CONFIG.run.key`.
 * When scrolling stops, it reverts to `"idle"`.
 *
 * This hook assumes that the animation state (e.g. `useHeroAnimation`) is managed
 * externally and passed into the hook via props.
 *
 * @param {UseHeroScrollAnimationOptions} options - Hook configuration object
 *
 * @example
 * const { animationType, setAnimationType } = useHeroAnimation();
 *
 * useHeroScrollAnimation({
 *   containerRef,
 *   active: activeSection === SECTION_CONFIG.projects.key,
 *   animationType,
 *   setAnimationType,
 * });
 */
export const useHeroScrollAnimation = ({
  containerRef,
  active,
  setAnimationType,
}: UseHeroScrollAnimationOptions): void => {
  useScrollActivity({
    containerRef,
    active,
    onStart: () =>
      setAnimationType((prev) =>
        prev === HERO_SPRITE_CONFIG.run.key ? prev : HERO_SPRITE_CONFIG.run.key,
      ),
    onStop: () =>
      setAnimationType((prev) =>
        prev === HERO_SPRITE_CONFIG.idle.key
          ? prev
          : HERO_SPRITE_CONFIG.idle.key,
      ),
  });
};
