"use client";

import { ReactNode } from "react";

import BackgroundImage from "@/components/BackgroundImage";
import { Section } from "@/components/Section";

import { spectral } from "@/lib/fonts/spectral";

import { SECTION_CONFIG } from "@/consts/sections";

import { useSpotlightEffect } from "../hooks/useSpotlightEffect";
import Bug from "./Bug";
import "./cursor-light.css";
import AboutLamp from "./Lamp";

interface PropsType {
  children: ReactNode;
}

function AboutWrap({ children }: PropsType) {
  const { cursorClassName, lightClassName, isLightOn, toggleLight, maskRef } =
    useSpotlightEffect(SECTION_CONFIG.about.key);

  return (
    <Section
      id={SECTION_CONFIG.about.key}
      className={`${spectral.className} overflow-auto`}
      sectionClassName={`${cursorClassName} ${lightClassName}`}
      aria-label={SECTION_CONFIG.about.title}
    >
      <BackgroundImage
        imageProps={{
          src: "/wooden-room.webp",
          alt: "Background room",
          fill: true,
        }}
      />
      <div
        ref={maskRef}
        className={`spotlight-mask max-md:hidden ${isLightOn ? "opacity-0" : "opacity-100"}`}
      />
      {children}
      <AboutLamp
        isLightOn={isLightOn}
        onClick={toggleLight}
        tabIndex={0}
        aria-label={isLightOn ? "Turn off the light" : "Turn on the light"}
        role="button"
      />
      <Bug />
    </Section>
  );
}

AboutWrap.whyDidYouRender = true;

export default AboutWrap;
