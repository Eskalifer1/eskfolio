"use client";

import { useAchievements } from "@/providers/achievements";

import { RefObject, useImperativeHandle } from "react";

import { HeroAdventureRefAPI } from "@/sections/projects/Characters/types";

import { ACHIEVEMENT_KEYS } from "@/consts/achievements";

import { Sprite } from "../../Sprite";
import { HERO_SPRITE_CONFIG } from "./consts";
import { useHeroAdventure } from "./hooks/useHeroAdventure";

const SPRITE_SIZE = 32;
const PIXEL_SIZE = 4;
const MAX_COUNT_OF_FRAMES = 13;

export const HERO_CONTAINER_SIZE = SPRITE_SIZE * PIXEL_SIZE;

interface PropsType {
  containerRef: React.RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HeroAdventureRefAPI | null>;
}

function HeroAdventure({ containerRef, heroRef }: PropsType) {
  const { unlock } = useAchievements();
  const { animationType, playAnimationOnce, isScrollDown } = useHeroAdventure({
    containerRef,
  });

  const handleHurtHero = () => {
    playAnimationOnce(HERO_SPRITE_CONFIG.cry.key);
    unlock(ACHIEVEMENT_KEYS.touchOfLife);
  };

  useImperativeHandle(heroRef, () => ({
    playAnimationOnce,
  }));

  return (
    <Sprite
      spriteImage="/hero-spread.webp"
      shadowImage="/hero-shadow.webp"
      shadowImageClassName="!left-[-5px]"
      animationType={animationType}
      animationConfig={HERO_SPRITE_CONFIG}
      pixelSize={PIXEL_SIZE}
      spriteSize={SPRITE_SIZE}
      maxFrames={MAX_COUNT_OF_FRAMES}
      style={{
        scale: isScrollDown ? "1 1" : "-1 1",
      }}
      onClick={handleHurtHero}
      animationName="hero-sprite-translate"
    />
  );
}

export default HeroAdventure;
