"use client";

import Image from "next/image";

import { CSSProperties, HTMLAttributes, useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

import { SpriteAnimationConfig } from "./types";

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  spriteImage: string;
  shadowImage?: string;
  shadowImageClassName?: string;
  animationType: string;
  animationConfig: SpriteAnimationConfig;
  pixelSize: number;
  spriteSize: number;
  maxFrames: number;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  animationName: string;
  iterationCount?: CSSProperties["animationIterationCount"];
}

export const Sprite = ({
  spriteImage,
  shadowImage,
  shadowImageClassName,
  animationType,
  animationConfig,
  pixelSize,
  spriteSize,
  maxFrames,
  className = "",
  style,
  onClick,
  animationName,
  iterationCount = "infinite",
  ...props
}: PropsType) => {
  const frameCount = animationConfig[animationType]?.count;
  const rowPosition = animationConfig[animationType]?.position;
  const animationSpeed = animationConfig[animationType]?.speed;

  const SPRITE_PIXEL_SIZE = spriteSize * pixelSize;
  const imageWidth = SPRITE_PIXEL_SIZE * maxFrames;
  const animationWidth = SPRITE_PIXEL_SIZE * frameCount;
  const translateY = `-${rowPosition * SPRITE_PIXEL_SIZE}px`;
  const animationDuration = `${frameCount / animationSpeed}s`;

  const animation = `${animationName} ${animationDuration} steps(${frameCount}) ${iterationCount} forwards`;

  const imgRef = useRef<HTMLImageElement>(null);
  const prevAnimationType = useRef<string | null>(null);

  // Start animation from the start when it changes
  // using key will lead to network requests
  useEffect(() => {
    if (
      prevAnimationType.current !== null &&
      prevAnimationType.current !== animationType
    ) {
      const img = imgRef.current;
      if (img) {
        img.style.animation = "none";

        void img.offsetHeight;

        img.style.animation = animation;
      }
    }
    prevAnimationType.current = animationType;
  }, [animationType, animation]);

  return (
    <div
      className={`relative cursor-pointer overflow-hidden select-none ${className}`}
      style={{
        width: SPRITE_PIXEL_SIZE,
        height: SPRITE_PIXEL_SIZE,
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      {/* eslint-disable-next-line */}
      <img
        ref={imgRef}
        // key={animationType}
        src={spriteImage}
        alt="Sprite"
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
      {shadowImage && (
        <Image
          src={shadowImage}
          alt="Shadow"
          fill
          className={cn("[image-rendering:pixelated]", shadowImageClassName)}
        />
      )}

      <style jsx>{`
        @keyframes ${animationName} {
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
};
