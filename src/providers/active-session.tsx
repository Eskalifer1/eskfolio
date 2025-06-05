"use client";

import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

import { Section, SECTION_CONFIG, SECTIONS } from "@/consts/sections";

import { delay } from "@/helpers/delay";

interface ActiveSectionContextType {
  activeSection: Section;
  loadingSection: Section | null;
  visitedSections: Set<Section>;
  isTransitioning: boolean;
  isFirstSection: boolean;
  isLastSection: boolean;
  transitionTo: (target: Section) => void;
  goToNextSection: () => void;
  goToPrevSection: () => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: SECTION_CONFIG.hero.key,
  loadingSection: null,
  visitedSections: new Set([SECTION_CONFIG.hero.key]),
  isTransitioning: false,
  isFirstSection: true,
  isLastSection: false,
  transitionTo: () => {},
  goToNextSection: () => {},
  goToPrevSection: () => {},
});

export const ActiveSectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // @ts-expect-error Only null on load
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [loadingSection, setLoadingSection] = useState<Section | null>(
    SECTION_CONFIG.hero.key,
  );

  const [visitedSections, setVisitedSections] = useState<Set<Section>>(
    new Set([SECTION_CONFIG.hero.key]),
  );

  const [isTransitioning, setIsTransitioning] = useState(true);

  const currentIndex = SECTIONS.indexOf(
    activeSection || SECTION_CONFIG.hero.key,
  );
  const isFirstSection = currentIndex === 0;
  const isLastSection = currentIndex === SECTIONS.length - 1;

  const scrollToSection = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "instant",
      });
    }
  };

  const transitionTo = async (target: Section, isFirstLoad?: boolean) => {
    if (target === activeSection) return;

    if (isTransitioning && !isFirstLoad) return;
    // Due to this setting loading section after delay we need to add this condition

    if (loadingSection && !isFirstLoad) return;

    setIsTransitioning(true);
    setLoadingSection(target);
    setVisitedSections((prev) => prev.add(target));

    await delay("LOADING_SCREEN_FADE_ANIMATION");

    setActiveSection(target);
    scrollToSection(target);

    await delay("LOADING_SCREEN_FADE_ANIMATION");

    setIsTransitioning(false);

    await delay("LOADING_SCREEN_FADE_ANIMATION");
    // After delay for Loading screen
    setLoadingSection(null);
  };

  const goToNextSection = () => {
    if (isLastSection) return;
    const nextIndex = currentIndex + 1;
    transitionTo(SECTIONS[nextIndex]);
  };

  const goToPrevSection = () => {
    if (isFirstSection) return;
    const prevIndex = currentIndex - 1;
    transitionTo(SECTIONS[prevIndex]);
  };

  useLayoutEffect(() => {
    transitionTo(SECTION_CONFIG.hero.key, true);
    // eslint-disable-next-line
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        loadingSection,
        visitedSections,
        isTransitioning,
        isFirstSection,
        isLastSection,
        transitionTo,
        goToNextSection,
        goToPrevSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => useContext(ActiveSectionContext);
