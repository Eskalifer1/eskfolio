"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Section, SECTION_CONFIG, SECTIONS } from "@/consts/sections";

import { delay } from "@/helpers/delay";

interface ActiveSectionState {
  activeSection: Section;
  isFirstSection: boolean;
  isLastSection: boolean;
  setActiveSection: (section: Section) => void;
}

interface LoadingState {
  loadingSection: Section | null;
  isTransitioning: boolean;
}

interface VisitedSectionsState {
  visitedSections: Set<Section>;
  addVisitedSection: (section: Section) => void;
}

interface NavigationContextType {
  transitionTo: (target: Section) => void;
  goToNextSection: () => void;
  goToPrevSection: () => void;
}

// CONTEXTS
const ActiveSectionContext = createContext<ActiveSectionState | undefined>(
  undefined,
);
const LoadingContext = createContext<LoadingState | undefined>(undefined);
const VisitedSectionsContext = createContext<VisitedSectionsState | undefined>(
  undefined,
);
const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

// PROVIDER
export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<Section>(
    SECTION_CONFIG.hero.key,
  );
  const [loadingSection, setLoadingSection] = useState<Section | null>(
    SECTION_CONFIG.hero.key,
  );
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visitedSections, setVisitedSections] = useState<Set<Section>>(
    new Set([SECTION_CONFIG.hero.key]),
  );

  const activeSectionRef = useRef(activeSection);
  const isTransitioningRef = useRef(isTransitioning);
  const loadingSectionRef = useRef(loadingSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
    isTransitioningRef.current = isTransitioning;
    loadingSectionRef.current = loadingSection;
  }, [activeSection, isTransitioning, loadingSection]);

  const currentIndex = SECTIONS.indexOf(activeSection);
  const isFirstSection = currentIndex === 0;
  const isLastSection = currentIndex === SECTIONS.length - 1;

  const scrollToSection = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };

  const transitionTo = useCallback(
    async (target: Section, isFirstLoad?: boolean) => {
      const currentActive = activeSectionRef.current;
      const isTransitioning = isTransitioningRef.current;
      const loading = loadingSectionRef.current;

      if (target === currentActive && !isFirstLoad) return;
      if ((isTransitioning || loading) && !isFirstLoad) return;

      setIsTransitioning(true);
      setLoadingSection(target);
      setVisitedSections((prev) => new Set(prev).add(target));

      await delay("LOADING_SCREEN_FADE_ANIMATION");

      setActiveSection(target);
      scrollToSection(target);

      await delay("LOADING_SCREEN_FADE_ANIMATION");
      setIsTransitioning(false);

      await delay("LOADING_SCREEN_FADE_ANIMATION");
      await delay("LOADING_SCREEN_FADE_ANIMATION");
      setLoadingSection(null);
    },
    [],
  );

  const goToNextSection = useCallback(() => {
    if (isLastSection) return;
    transitionTo(SECTIONS[currentIndex + 1]);
  }, [isLastSection, currentIndex, transitionTo]);

  const goToPrevSection = useCallback(() => {
    if (isFirstSection) return;
    transitionTo(SECTIONS[currentIndex - 1]);
  }, [isFirstSection, currentIndex, transitionTo]);

  useLayoutEffect(() => {
    transitionTo(SECTION_CONFIG.hero.key, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeSectionValue = useMemo(
    () => ({
      activeSection,
      isFirstSection,
      isLastSection,
      setActiveSection,
    }),
    [activeSection, isFirstSection, isLastSection],
  );

  const loadingValue = useMemo(
    () => ({
      loadingSection,
      isTransitioning,
    }),
    [loadingSection, isTransitioning],
  );

  const visitedSectionsValue = useMemo(
    () => ({
      visitedSections,
      addVisitedSection: (s: Section) =>
        setVisitedSections((prev) => new Set(prev).add(s)),
    }),
    [visitedSections],
  );

  const navigationValue = useMemo(
    () => ({
      transitionTo,
      goToNextSection,
      goToPrevSection,
    }),
    [transitionTo, goToNextSection, goToPrevSection],
  );

  return (
    <ActiveSectionContext.Provider value={activeSectionValue}>
      <LoadingContext.Provider value={loadingValue}>
        <VisitedSectionsContext.Provider value={visitedSectionsValue}>
          <NavigationContext.Provider value={navigationValue}>
            {children}
          </NavigationContext.Provider>
        </VisitedSectionsContext.Provider>
      </LoadingContext.Provider>
    </ActiveSectionContext.Provider>
  );
};

// HOOKS
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context)
    throw new Error("useActiveSection must be used within SectionProvider");
  return context;
};

export const useLoadingSection = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used within SectionProvider");
  return context;
};

export const useVisitedSections = () => {
  const context = useContext(VisitedSectionsContext);
  if (!context)
    throw new Error("useVisitedSections must be used within SectionProvider");
  return context;
};

export const useSectionNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context)
    throw new Error("useSectionNavigation must be used within SectionProvider");
  return context;
};
