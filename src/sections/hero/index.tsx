import dynamic from "next/dynamic";

import { Section } from "@/components/Section";
import TextScrambler from "@/components/TextScrambler";

import { orbitron } from "@/lib/fonts/orbitron";

import { SECTION_CONFIG } from "@/consts/sections";

import HeroExploreButton from "./ExploreButton";

const RobotLottie = dynamic(() => import("@/sections/hero/Robot"));

function HeroSection() {
  return (
    <>
      <Section
        id={SECTION_CONFIG.hero.key}
        className={`${orbitron.className} flex-col gap-3 overflow-hidden md:flex-row`}
        aria-label={SECTION_CONFIG.hero.title}
        sectionClassName="bg-background"
      >
        <div className="flex flex-1 flex-col text-center">
          <TextScrambler variant="h1" text="Greetings, Traveler." />
          <TextScrambler
            variant="h3"
            as="h2"
            className="mt-5 font-normal"
            text="You've arrived at the threshold of an interactive world."
            speed={20}
          />
          <TextScrambler
            variant="h5"
            as="h3"
            className="mt-5 font-normal"
            text="Press onward, and the abyss will reveal its secrets..."
            speed={25}
          />
          <TextScrambler
            variant="h6"
            as="h4"
            className="mt-4 font-normal"
            text="But remember: every choice is a step deeper."
            speed={35}
          />
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
