import dynamic from "next/dynamic";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import { orbitron } from "@/lib/fonts/orbitron";

import { SECTION_CONFIG } from "@/consts/sections";

import HeroExploreButton from "./ExploreButton";

const RobotLottie = dynamic(() => import("@/components/Lotties/Robot"));

function HeroSection() {
  return (
    <>
      <Section
        id={SECTION_CONFIG.hero.key}
        className={`${orbitron.className} flex-col gap-3 overflow-hidden md:flex-row`}
        sectionClassName="bg-background"
      >
        <div className="flex flex-1 flex-col text-center">
          <Typography variant="h1">Greetings, Traveler.</Typography>
          <Typography variant="h3" as="h2" className="mt-5 font-normal">
            You&apos;ve arrived at the threshold of an interactive world.
          </Typography>
          <Typography variant="h5" as="h3" className="mt-5 font-normal">
            Press onward, and the abyss will reveal its secrets...
          </Typography>
          <Typography variant="h6" as="h4" className="mt-4 font-normal">
            But remember: every choice is a step deeper.
          </Typography>
          <HeroExploreButton />
        </div>
        <div className="flex-1 max-md:overflow-hidden max-sm:hidden">
          <RobotLottie />
        </div>
      </Section>
    </>
  );
}

export default HeroSection;
