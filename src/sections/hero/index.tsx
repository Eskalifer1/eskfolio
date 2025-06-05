import RobotLottie from "@/components/Lotties/Robot";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import { orbitron } from "@/lib/fonts/orbitron";

import { SECTION_CONFIG } from "@/consts/sections";

import HeroExploreButton from "./ExploreButton";

function HeroSection() {
  return (
    <>
      <Section
        id={SECTION_CONFIG.hero.key}
        className={`${orbitron.className} gap-3`}
        sectionClassName="bg-background"
      >
        <div className="flex flex-1 flex-col text-center">
          <Typography variant="h1">Greetings, Traveler.</Typography>
          <Typography variant="h3" className="mt-5 font-normal">
            You&apos;ve arrived at the threshold of an interactive world.
          </Typography>
          <Typography variant="h5" className="mt-5 font-normal">
            Press onward, and the abyss will reveal its secrets...
          </Typography>
          <Typography variant="h6" className="mt-4 font-normal">
            But remember: every choice is a step deeper.
          </Typography>
          <HeroExploreButton />
        </div>
        <div className="flex-1">
          <RobotLottie />
        </div>
      </Section>
    </>
  );
}

export default HeroSection;
