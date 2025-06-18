"use client";

import { useActiveSection } from "@/providers/section";

import { useRef } from "react";

import { Section } from "@/components/Section";

import { slicksScreen } from "@/lib/fonts/slicks-screen";

import { useScrollEffect } from "@/hooks/useScrollEffect";

import { PROJECTS, PROJECTS_LENGTH } from "@/consts/projects";
import { SECTION_CONFIG } from "@/consts/sections";

import ProjectCharacters from "./Characters";
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

  // const handleScrollBy = (scrollValue: number | string) => {
  //   if (!sectionRef?.current) return;

  //   let scrollAmount: number;

  //   if (typeof scrollValue === "string" && scrollValue.endsWith("vh")) {
  //     const vh = parseFloat(scrollValue);
  //     scrollAmount = (window.innerHeight * vh) / 100;
  //   } else if (typeof scrollValue === "number") {
  //     scrollAmount = scrollValue;
  //   } else {
  //     console.warn("Unsupported scroll value format:", scrollValue);
  //     return;
  //   }

  //   sectionRef.current.scrollBy({
  //     top: scrollAmount,
  //     behavior: "smooth",
  //   });
  // };

  // const handleScrollBy = (direction: "forward" | "backward") => {
  //   if (!sectionRef?.current) return;

  //   const section = sectionRef.current;
  //   const projectHeight = window.innerHeight;
  //   const currentScroll = section.scrollTop;
  //   const currentIndex = Math.round(currentScroll / projectHeight);

  //   let targetIndex =
  //     direction === "forward"
  //       ? Math.min(currentIndex + 1, PROJECTS_LENGTH - 1)
  //       : Math.max(currentIndex - 1, 0);

  //   const targetScroll = targetIndex * projectHeight;

  //   section.scrollTo({
  //     top: targetScroll,
  //     behavior: "smooth",
  //   });
  // };

  // const handleScrollBy = (direction: "forward" | "backward") => {
  //   if (!sectionRef?.current) return;

  //   const section = sectionRef.current;
  //   const projectHeight = window.innerHeight;
  //   const currentScroll = section.scrollTop;

  //   // Визначаємо індекс найближчої секції
  //   const floatIndex = currentScroll / projectHeight;
  //   console.log(floatIndex, "floatIndex");
  //   let targetIndex: number;

  //   if (direction === "forward") {
  //     targetIndex =
  //       floatIndex % 1 > 0.5
  //         ? Math.min(Math.ceil(floatIndex), PROJECTS_LENGTH - 1)
  //         : Math.min(Math.floor(floatIndex) + 1, PROJECTS_LENGTH - 1);
  //   } else {
  //     targetIndex =
  //       floatIndex % 1 < 0.5
  //         ? Math.max(Math.floor(floatIndex), 0)
  //         : Math.max(Math.ceil(floatIndex) - 1, 0);
  //   }
  //   const targetScroll = targetIndex * projectHeight;

  //   section.scrollTo({
  //     top: targetScroll,
  //     behavior: "smooth",
  //   });
  // };

  const handleScrollBy = (direction: "forward" | "backward") => {
    if (!sectionRef?.current) return;

    const section = sectionRef.current;
    const projectHeight = window.innerHeight;
    const currentScroll = section.scrollTop;

    // Додаємо крихітну похибку, щоб уникнути прилипання
    const epsilon = 0.1;
    const floatIndex =
      direction === "forward"
        ? (currentScroll + epsilon) / projectHeight
        : (currentScroll - epsilon) / projectHeight;

    let targetIndex: number;

    if (direction === "forward") {
      targetIndex =
        floatIndex % 1 > 0.5
          ? Math.min(Math.ceil(floatIndex), PROJECTS_LENGTH - 1)
          : Math.min(Math.floor(floatIndex) + 1, PROJECTS_LENGTH - 1);
    } else {
      targetIndex =
        floatIndex % 1 < 0.5
          ? Math.max(Math.floor(floatIndex), 0)
          : Math.max(Math.ceil(floatIndex) - 1, 0);
    }

    const targetScroll = targetIndex * projectHeight;

    section.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

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
          <ProjectCharacters containerRef={sectionRef} />
          {PROJECTS.map((project) => (
            <ProjectItem
              key={project.key}
              project={project}
              onArrowClick={handleScrollBy}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

export default ProjectsSection;
