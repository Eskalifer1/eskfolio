"use client";

import { useAchievements } from "@/providers/achievements";

import { HTMLAttributes } from "react";

import { Sprite } from "@/components/Sprite";
import { useSpriteAnimation } from "@/components/Sprite/hooks/useSpriteAnimation";

import { ACHIEVEMENT_KEYS } from "@/consts/achievements";

import { SKELETON_SPRITE_CONFIG } from "./consts";

const SPRITE_SIZE = 32;
const PIXEL_SIZE = 4;
const MAX_COUNT_OF_FRAMES = 21;

export const SKELETON_CONTAINER_SIZE = SPRITE_SIZE * PIXEL_SIZE;

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}

function Skeleton({ onClick, ...props }: PropsType) {
  const { unlock } = useAchievements();
  const { animationType, playAnimationOnce, iterationCount, isFinalPlayed } =
    useSpriteAnimation(SKELETON_SPRITE_CONFIG.idle.key, SKELETON_SPRITE_CONFIG);

  const handleKillSkeleton = () => {
    if (isFinalPlayed) return;

    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      playAnimationOnce(SKELETON_SPRITE_CONFIG.die.key, true);
      unlock(ACHIEVEMENT_KEYS.firstBlood);
    }, 1000);
  };

  return (
    <Sprite
      spriteImage="/skeleton-mage-sprite.webp"
      shadowImage={isFinalPlayed ? undefined : "/hero-shadow.webp"}
      className={isFinalPlayed ? "cursor-default" : ""}
      shadowImageClassName="!left-[-11px]"
      animationType={animationType}
      animationConfig={SKELETON_SPRITE_CONFIG}
      pixelSize={PIXEL_SIZE}
      spriteSize={SPRITE_SIZE}
      maxFrames={MAX_COUNT_OF_FRAMES}
      style={{
        scale: "-1 1",
      }}
      onClick={handleKillSkeleton}
      animationName="skeleton-sprite-translate"
      iterationCount={iterationCount}
      {...props}
    />
  );
}

export default Skeleton;
