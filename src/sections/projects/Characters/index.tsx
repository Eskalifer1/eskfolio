import React, { useRef } from "react";

import { HERO_SPRITE_CONFIG } from "@/components/Sprites/HeroAdventure/consts";

import ProjectsHero from "./Hero";
import ProjectSkeleton from "./Skeleton";
import { HeroAdventureRefAPI } from "./types";

interface PropsType {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function ProjectCharacters({ containerRef }: PropsType) {
  const heroApiRef = useRef<HeroAdventureRefAPI | null>(null);

  const handleAttackMonster = () => {
    if (!heroApiRef?.current) return;

    heroApiRef.current.playAnimationOnce(HERO_SPRITE_CONFIG.attack.key);
  };

  return (
    <>
      <ProjectsHero containerRef={containerRef} heroApiRef={heroApiRef} />
      <ProjectSkeleton onClick={handleAttackMonster} />
    </>
  );
}

export default ProjectCharacters;
