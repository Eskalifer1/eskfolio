"use client";

import { useActiveSection } from "@/providers/section";

import { useRef } from "react";

import HeroAdventure from "@/components/HeroAdventure";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useScrollEffect } from "@/hooks/useScrollEffect";

import { SECTION_CONFIG } from "@/consts/sections";

interface PropsType {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function ProjectsHero({ containerRef }: PropsType) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useActiveSection();

  const isScrollAnimationActive = activeSection === SECTION_CONFIG.projects.key;

  const scrollDirection = useScrollDirection({
    containerRef,
    active: activeSection === SECTION_CONFIG.projects.key,
  });

  // console.log(scrollDirection, "scrollDirection")
  console.log("render")

  useScrollEffect({
    containerRef,
    active: isScrollAnimationActive,
    onScrollProgress: (progress) => {
      if (!heroRef?.current) return;
      const left = progress * (window.innerWidth * 3 - 161 - 128 - 16);
      heroRef.current!.style.transform = `translateX(${left}px)`;
    },
  });

  return (
    <div
      ref={heroRef}
      className="no-default-transition absolute bottom-4 left-4 z-1 translate-x-0 will-change-[transform,scale]"
      // style={{
      //   scale: scrollDirection === SCROLL_DIRECTION.DOWN ? "-1 1" : "1 -1",
      // }}
    >
      <HeroAdventure containerRef={containerRef} />
    </div>
  );
}

export default ProjectsHero;
