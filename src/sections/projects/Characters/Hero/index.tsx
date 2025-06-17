"use client";

import { useActiveSection } from "@/providers/section";

import { RefObject, useRef } from "react";

import HeroAdventure, {
  HERO_CONTAINER_SIZE,
} from "@/components/Sprites/HeroAdventure";

import { useScrollEffect } from "@/hooks/useScrollEffect";

import { PROJECTS_LENGTH } from "@/consts/projects";
import { SECTION_CONFIG } from "@/consts/sections";

import { HeroAdventureRefAPI } from "../types";

interface PropsType {
  containerRef: React.RefObject<HTMLDivElement | null>;
  heroApiRef: RefObject<HeroAdventureRefAPI | null>;
}

function ProjectsHero({ containerRef, heroApiRef }: PropsType) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useActiveSection();

  const isScrollAnimationActive = activeSection === SECTION_CONFIG.projects.key;

  useScrollEffect({
    containerRef,
    active: isScrollAnimationActive,
    onScrollProgress: (progress) => {
      if (!heroRef?.current) return;
      // 16 - initial position
      // 180 - Section navigation buttons container width
      const left =
        progress *
        (window.innerWidth * PROJECTS_LENGTH - 180 - HERO_CONTAINER_SIZE - 16);
      heroRef.current!.style.transform = `translateX(${left}px)`;
    },
  });

  return (
    <div
      ref={heroRef}
      className="no-default-transition absolute bottom-4 left-4 z-3 translate-x-0 will-change-[transform,scale]"
    >
      <HeroAdventure containerRef={containerRef} heroRef={heroApiRef} />
    </div>
  );
}

export default ProjectsHero;
