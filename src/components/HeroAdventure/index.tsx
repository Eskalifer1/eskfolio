"use client";

import Image from "next/image";

import {
  animationSpriteTypeConfig,
  HERO_ANIMATION_TYPE_CONFIG,
} from "./consts";
import { useHeroAdventure } from "./hooks/useHeroAdventure";

const SPRITE_SIZE = 32;
const PIXEL_SIZE = 4;
const MAX_COUNT_OF_FRAMES = 13;

export const HERO_CONTAINER_SIZE = SPRITE_SIZE * PIXEL_SIZE;

interface PropsType {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function HeroAdventure({ containerRef }: PropsType) {
  const { animationType, playAnimationOnce, isScrollDown } = useHeroAdventure({
    containerRef,
  });

  const frameCount = animationSpriteTypeConfig[animationType].count;
  const rowPosition = animationSpriteTypeConfig[animationType].position;
  const animationSpeed = animationSpriteTypeConfig[animationType].speed;
  const imageWidth = HERO_CONTAINER_SIZE * MAX_COUNT_OF_FRAMES;
  const animationWidth = HERO_CONTAINER_SIZE * frameCount;
  const translateY = `-${rowPosition * HERO_CONTAINER_SIZE}px`;
  const animationDuration = `${frameCount / animationSpeed}s`;

  const animation = `spriteAnimation ${animationDuration} steps(${frameCount}) infinite forwards`;

  return (
    <div
      className="relative cursor-pointer overflow-hidden select-none"
      style={{
        width: HERO_CONTAINER_SIZE,
        height: HERO_CONTAINER_SIZE,
        scale: isScrollDown ? "1 1" : "-1 1",
      }}
      onClick={() => playAnimationOnce(HERO_ANIMATION_TYPE_CONFIG.cry.key)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={animationType}
        src="/hero-spread.webp"
        alt="Adventure hero"
        style={{
          width: imageWidth,
          maxWidth: "unset",
          animation,
          imageRendering: "pixelated",
          position: "absolute",
          top: translateY,
          left: 0,
          transition: "none",
        }}
      />
      <Image
        src="/hero-shadow.webp"
        alt="Hero shadow"
        fill
        className="!left-[-5px] [image-rendering:pixelated]"
      />

      <style jsx>{`
        @keyframes spriteAnimation {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${animationWidth}px);
          }
        }
      `}</style>
    </div>
  );
}

// HeroAdventure.whyDidYouRender = true;

export default HeroAdventure;
