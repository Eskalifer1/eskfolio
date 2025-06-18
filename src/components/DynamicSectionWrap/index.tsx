"use client";

import { useVisitedSections } from "@/providers/section";

import dynamic from "next/dynamic";

import { Section, SECTION_CONFIG } from "@/consts/sections";

interface PropsType {
  section: Section;
}

function DynamicSectionWrap({ section }: PropsType) {
  const { visitedSections } = useVisitedSections();

  if (!visitedSections.has(section)) {
    return null;
  }

  switch (section) {
    case SECTION_CONFIG.about.key: {
      const AboutSection = dynamic(() => import("@/sections/about"));
      return <AboutSection />;
    }
    case SECTION_CONFIG.skills.key: {
      const SkillsSection = dynamic(() => import("@/sections/skills"));
      return <SkillsSection />;
    }
    case SECTION_CONFIG.projects.key: {
      const ProjectsSection = dynamic(() => import("@/sections/projects"));
      return <ProjectsSection />;
    }
    default:
      return null;
  }
}

export default DynamicSectionWrap;
