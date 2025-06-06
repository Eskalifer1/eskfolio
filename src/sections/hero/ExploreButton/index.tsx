"use client";

import { useSectionNavigation } from "@/providers/section";

import Button from "@/components/Button";

import { SECTION_CONFIG } from "@/consts/sections";

function HeroExploreButton() {
  const { transitionTo } = useSectionNavigation();

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
