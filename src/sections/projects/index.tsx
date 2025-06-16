"use client";

import { useActiveSection } from "@/providers/section";

import { useRef } from "react";

import { Section } from "@/components/Section";

import { slicksScreen } from "@/lib/fonts/slicks-screen";

import { useScrollEffect } from "@/hooks/useScrollEffect";

import { PROJECTS, PROJECTS_LENGTH } from "@/consts/projects";
import { SECTION_CONFIG } from "@/consts/sections";

import ProjectsHero from "./Hero";
import ProjectItem from "./ProjectItem";

function ProjectsSection() {
  const { activeSection } = useActiveSection();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyContainerScrollRef = useRef<HTMLDivElement | null>(null);

  useScrollEffect({
    containerRef: sectionRef,
    active: activeSection === SECTION_CONFIG.projects.key,
    onScrollProgress: (progress) => {
      const maxTranslate = -window.innerWidth * (PROJECTS_LENGTH - 1);
      if (stickyContainerScrollRef?.current) {
        stickyContainerScrollRef.current.style.transform = `translateX(${progress * maxTranslate}px)`;
      }
    },
  });

  const height = `${PROJECTS_LENGTH * 100}vh`;

  return (
    <>
      <Section
        ref={sectionRef}
        id={SECTION_CONFIG.projects.key}
        sectionClassName="h-screen snap-center overflow-x-hidden overflow-y-auto !p-0 bg-secondary"
        className={`${slicksScreen.className} m-0 block !max-w-none !p-0`}
        innerWrapStyle={{ height }}
        aria-label="My projects"
      >
        <div
          ref={stickyContainerScrollRef}
          className="sticky top-0 flex max-w-none flex-nowrap !transition-none will-change-transform"
        >
          <ProjectsHero containerRef={sectionRef} />
          {PROJECTS.map((project) => (
            <ProjectItem key={project.key} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}

export default ProjectsSection;
