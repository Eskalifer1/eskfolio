"use client";

import { useActiveSection } from "@/providers/active-session";

import Button from "@/components/Button";

import { SECTION_CONFIG } from "@/consts/sections";

function HeroExploreButton() {
  const { transitionTo } = useActiveSection();

  const handleGoToAboutSection = () => {
    transitionTo(SECTION_CONFIG.about.key);
  };

  return (
    <Button
      className="mt-8 px-6 py-4 text-2xl"
      aria-label="Next section"
      onClick={handleGoToAboutSection}
    >
      Explore the world
    </Button>
  );
}

export default HeroExploreButton;
