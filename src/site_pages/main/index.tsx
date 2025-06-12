import dynamic from "next/dynamic";

import HeroSection from "@/sections/hero";
import ProjectsSection from "@/sections/projects";

const AboutSection = dynamic(() => import("@/sections/about"));
const SkillsSection = dynamic(() => import("@/sections/skills"));

function MainPage() {
  return (
    <>
      <HeroSection />
      {/* <DynamicSectionWrap section={SECTION_CONFIG.about.key}> */}
      <AboutSection />
      {/* </DynamicSectionWrap> */}
      {/* <DynamicSectionWrap section={SECTION_CONFIG.skills.key}> */}
      <SkillsSection />
      {/* </DynamicSectionWrap> */}
      <ProjectsSection />
    </>
  );
}

export default MainPage;
