"use client";

// import { useActiveSection } from "@/providers/active-session";
import dynamic from "next/dynamic";

import HeroSection from "@/sections/hero";
import SkillsSection from "@/sections/skills";

// import { SECTION_CONFIG } from "@/consts/sections";

const AboutSection = dynamic(() => import("@/sections/about"));

function MainPage() {
  // const { visitedSections } = useActiveSection();

  return (
    <>
      <HeroSection />
      {/* {visitedSections.has(SECTION_CONFIG.about.key) && <AboutSection />}
      {visitedSections.has(SECTION_CONFIG.skills.key) && <SkillsSection />} */}
      <AboutSection />
      <SkillsSection />
    </>
  );
}

export default MainPage;
