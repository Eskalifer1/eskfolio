"use client";

import { animationSpriteTypeConfig } from "./consts";
import { useHeroAdventure } from "./hooks/useHeroAdventure";

const SPRITE_SIZE = 32;
const PIXEL_SIZE = 4;
const MAX_COUNT_OF_FRAMES = 13;

interface PropsType {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function HeroAdventure({ containerRef }: PropsType) {
  const { animationType, playAnimationOnce, isScrollDown } = useHeroAdventure({
    containerRef,
  });

  console.log("render");

  const containerSize = SPRITE_SIZE * PIXEL_SIZE;
  const frameCount = animationSpriteTypeConfig[animationType].count;
  const rowPosition = animationSpriteTypeConfig[animationType].position;
  const animationSpeed = animationSpriteTypeConfig[animationType].speed;
  const imageWidth = containerSize * MAX_COUNT_OF_FRAMES;
  const animationWidth = containerSize * frameCount;
  const translateY = `-${rowPosition * containerSize}px`;
  const animationDuration = `${frameCount / animationSpeed}s`;

  return (
    <div
      className="relative cursor-pointer overflow-hidden select-none"
      style={{
        width: containerSize,
        height: containerSize,
        scale: isScrollDown ? "1 1" : "-1 1",
      }}
      onClick={() => playAnimationOnce("cry")}
    >
      <img
        src="/hero-spread.png"
        alt="Adventure hero"
        style={{
          width: imageWidth,
          maxWidth: "unset",
          animation: `spriteAnimation ${animationDuration} steps(${frameCount}) infinite forwards`,
          imageRendering: "pixelated",
          position: "absolute",
          top: translateY,
          left: 0,
          transition: "none",
        }}
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
