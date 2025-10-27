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

// ---------------- TYPES ----------------

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

interface SectionLoadContextType {
  reportSectionLoaded: (section: Section) => void;
}

// ---------------- CONTEXTS ----------------

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
const SectionLoadContext = createContext<SectionLoadContextType | undefined>(
  undefined,
);

// ---------------- PROVIDER ----------------

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

  // ----------- NAVIGATION LOGIC -----------

  const transitionTo = useCallback(
    async (target: Section, isFirstLoad?: boolean) => {
      const currentActive = activeSectionRef.current;
      const isTransitioning = isTransitioningRef.current;
      const loading = loadingSectionRef.current;

      if (target === currentActive && !isFirstLoad) return;
      if ((isTransitioning || loading) && !isFirstLoad) return;

      setIsTransitioning(true);
      setLoadingSection(target);

      setTimeout(() => {
        setVisitedSections((prev) => new Set(prev).add(target));
      }, 0);

      await delay("LOADING_SCREEN_FADE_ANIMATION");

      setActiveSection(target);
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

  // ----------- REPORT SECTION LOADED -----------

  const reportSectionLoaded = useCallback(async (section: Section) => {
    if (loadingSectionRef.current !== section) return;

    await delay("LOADING_SCREEN_FADE_ANIMATION");
    await delay("LOADING_SCREEN_FADE_ANIMATION");
    setIsTransitioning(false);

    await delay("LOADING_SCREEN_FADE_ANIMATION");
    await delay("LOADING_SCREEN_FADE_ANIMATION");
    setLoadingSection(null);
  }, []);

  // ----------- INITIAL MOUNT -----------

  useLayoutEffect(() => {
    transitionTo(SECTION_CONFIG.hero.key, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------- CONTEXT VALUES -----------

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

  const sectionLoadValue = useMemo(
    () => ({ reportSectionLoaded }),
    [reportSectionLoaded],
  );

  // ----------- PROVIDERS TREE -----------

  return (
    <ActiveSectionContext.Provider value={activeSectionValue}>
      <LoadingContext.Provider value={loadingValue}>
        <VisitedSectionsContext.Provider value={visitedSectionsValue}>
          <NavigationContext.Provider value={navigationValue}>
            <SectionLoadContext.Provider value={sectionLoadValue}>
              {children}
            </SectionLoadContext.Provider>
          </NavigationContext.Provider>
        </VisitedSectionsContext.Provider>
      </LoadingContext.Provider>
    </ActiveSectionContext.Provider>
  );
};

// ---------------- HOOKS ----------------

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context)
    throw new Error("useActiveSection must be used within SectionProvider");
  return context;
};

export const useLoadingSection = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoadingSection must be used within SectionProvider");
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

export const useSectionLoadReporter = () => {
  const context = useContext(SectionLoadContext);
  if (!context)
    throw new Error(
      "useSectionLoadReporter must be used within SectionProvider",
    );
  return context;
};
