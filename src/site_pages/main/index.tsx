"use client";

import { useVisitedSections } from "@/providers/section";

import dynamic from "next/dynamic";

import HeroSection from "@/sections/hero";

import { SECTION_CONFIG } from "@/consts/sections";

const AboutSection = dynamic(() => import("@/sections/about"));
const SkillsSection = dynamic(() => import("@/sections/skills"));
const ProjectsSection = dynamic(() => import("@/sections/projects"));

function MainPage() {
  const { visitedSections } = useVisitedSections();

  return (
    <>
      <HeroSection />
      {visitedSections.has(SECTION_CONFIG.about.key) && <AboutSection />}
      {visitedSections.has(SECTION_CONFIG.skills.key) && <SkillsSection />}
      {visitedSections.has(SECTION_CONFIG.projects.key) && <ProjectsSection />}
    </>
  );
}

export default MainPage;
