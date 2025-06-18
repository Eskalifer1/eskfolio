"use client";

import dynamic from "next/dynamic";

import { ReactNode } from "react";

import BackgroundImage from "@/components/BackgroundImage";
import { Section } from "@/components/Section";

import { quicksand } from "@/lib/fonts/quicksand";

import { useParallaxEffect } from "@/hooks/useParalaxEffect";

import { SECTION_CONFIG } from "@/consts/sections";

const SkillsSky = dynamic(() => import("./Sky"));

interface PropsType {
  children: ReactNode;
}

function SkillsWrap({ children }: PropsType) {
  const {
    ref: bgRef,
    handleMouseMove,
    handleMouseLeave,
  } = useParallaxEffect<HTMLDivElement>();

  return (
    <Section
      id={SECTION_CONFIG.skills.key}
      className={quicksand.className}
      aria-label={SECTION_CONFIG.skills.title}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 z-[-1] transition-transform duration-300 ease-linear will-change-transform"
      >
        <BackgroundImage
          imageProps={{
            src: "/star-sky.webp",
            alt: "Background with Stars",
            fill: true,
            className: "object-center",
          }}
          className="inset-[-60px]"
        />
      </div>
      <SkillsSky />
      {children}
    </Section>
  );
}

export default SkillsWrap;
