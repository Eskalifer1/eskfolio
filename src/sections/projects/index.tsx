"use client";

import { useActiveSection } from "@/providers/section";

import { useRef } from "react";

import { Section } from "@/components/Section";

import { useScrollEffect } from "@/hooks/useScrollEffect";

import { PROJECTS } from "@/consts/projects";
import { SECTION_CONFIG } from "@/consts/sections";

import ProjectsHero from "./Hero";

function ProjectsSection() {
  const { activeSection } = useActiveSection();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyContainerScrollRef = useRef<HTMLDivElement | null>(null);

  useScrollEffect({
    containerRef: sectionRef,
    active: activeSection === SECTION_CONFIG.projects.key,
    onScrollProgress: (progress) => {
      const maxTranslate = -window.innerWidth * 2;
      if (stickyContainerScrollRef?.current) {
        stickyContainerScrollRef.current.style.transform = `translateX(${progress * maxTranslate}px)`;
      }
    },
  });

  return (
    <>
      <Section
        ref={sectionRef}
        id={SECTION_CONFIG.projects.key}
        sectionClassName="h-screen snap-center overflow-x-hidden overflow-y-auto !p-0"
        className="m-0 block h-[300vh] max-w-none !p-0"
      >
        <div
          ref={stickyContainerScrollRef}
          className="no-default-transition sticky top-0 flex max-w-none animate-[scroll-section_linear] flex-nowrap [animation-timeline:scroll()]"
        >
          <ProjectsHero containerRef={sectionRef} />
          {PROJECTS.map((project) => (
            <div
              id={project.key}
              key={project.key}
              className="flex h-screen w-screen shrink-0 items-center justify-center"
              style={{
                backgroundImage: `url(/castle-room.png)`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
              }}
            >
              {project.name}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default ProjectsSection;
