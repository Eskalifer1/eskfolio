import { useLoadingSection, useSectionNavigation } from "@/providers/section";

import { useCallback } from "react";

import { useSharedEventListener } from "@/hooks/useSharedEventListener";

import { isKeyboardNavigationLocked } from "@/helpers/keyboardNavigation";

/**
 * useSectionKeyboardNavigation
 *
 * Listens for keyboard navigation keys (ArrowUp/ArrowDown/PageUp/PageDown)
 * and navigates to the previous or next section using section context.
 */
export function useSectionKeyboardNavigation() {
  const { goToNextSection, goToPrevSection } = useSectionNavigation();
  const { isTransitioning } = useLoadingSection();

  const handleKeyDown = useCallback(
    (e: Event) => {
      const event = e as KeyboardEvent;
      if (isTransitioning || isKeyboardNavigationLocked()) return;

      switch (event.key) {
        case "ArrowDown":
        case "PageDown":
          event.preventDefault();
          goToNextSection();
          break;
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          goToPrevSection();
          break;
        default:
          break;
      }
    },
    [goToNextSection, goToPrevSection, isTransitioning],
  );

  const isClient = typeof window !== "undefined";

  const target = isClient ? window : (undefined as unknown as EventTarget);

  useSharedEventListener(target, "keydown", handleKeyDown, true, {
    passive: false,
  });
}
