"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import BackgroundImage from "@/components/BackgroundImage";
import { Section } from "@/components/Section";

import { spectral } from "@/lib/fonts/spectral";

import { SECTION_CONFIG } from "@/consts/sections";

import "./cursor-light.css";
import AboutLamp from "./Lamp";

interface PropsType {
  children: ReactNode;
}

function AboutWrap({ children }: PropsType) {
  const [isLightOn, setIsLightOn] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const x = `${e.clientX}px`;
    const y = `${e.clientY}px`;

    if (maskRef.current) {
      maskRef.current.style.setProperty("--x", x);
      maskRef.current.style.setProperty("--y", y);
    }
  };

  useEffect(() => {
    if (isLightOn) return;
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isLightOn]);

  const handleToggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  const cursorClassName = isLightOn ? "cursor-auto" : "cursor-lantern";
  const lightClass = isLightOn ? "light-on" : "light-off";

  return (
    <Section
      id={SECTION_CONFIG.about.key}
      className={`${spectral.className}`}
      sectionClassName={`${cursorClassName} ${lightClass}`}
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
        className={`spotlight-mask ${isLightOn ? "opacity-0" : "opacity-100"}`}
      />
      {children}
      <AboutLamp
        isLightOn={isLightOn}
        onClick={handleToggleLight}
        tabIndex={0}
        aria-label={isLightOn ? "Turn light off" : "Turn light on"}
        role="button"
      />
    </Section>
  );
}

export default AboutWrap;
