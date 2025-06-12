import { useEffect } from "react";

import { useScrollActivity } from "@/hooks/useScrollActivity";

import { HeroAnimationType } from "../consts";

type UseHeroScrollAnimationOptions = {
  /** Ref to the scrollable container that triggers animation changes */
  containerRef: React.RefObject<HTMLElement | null>;

  /** Whether scroll tracking is active (e.g. based on active section) */
  active: boolean;

  /** Current animation type of the hero (e.g. "idle", "run") */
  animationType: HeroAnimationType;

  /** Setter function to update the hero's animation */
  setAnimationType: (type: HeroAnimationType) => void;
};

/**
 * Custom hook that synchronizes the hero's animation state with scroll activity.
 * While the container is scrolling, the animation is set to `"run"`.
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
  animationType,
  setAnimationType,
}: UseHeroScrollAnimationOptions) => {
  const isScrolling = useScrollActivity({ containerRef, active });

  useEffect(() => {
    if (!active) return;

    if (isScrolling) {
      if (animationType !== "run") {
        setAnimationType("run");
      }
    } else {
      if (animationType === "run") {
        setAnimationType("idle");
      }
    }
  }, [isScrolling, active, animationType, setAnimationType]);
};
