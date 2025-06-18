import { useActiveSection } from "@/providers/section";

import { useRef, useState } from "react";

import { useSharedEventListener } from "@/hooks/useSharedEventListener";

import { Section } from "@/consts/sections";

export function useSpotlightEffect(sectionKey: Section) {
  const { activeSection } = useActiveSection();
  const [isLightOn, setIsLightOn] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);

  const isActive = activeSection === sectionKey;

  const handleMouseMove = (e: Event) => {
    if (!(e instanceof MouseEvent)) return;
    const x = `${e.clientX}px`;
    const y = `${e.clientY}px`;

    if (maskRef.current) {
      maskRef.current.style.setProperty("--x", x);
      maskRef.current.style.setProperty("--y", y);
    }
  };

  useSharedEventListener(
    window,
    "mousemove",
    handleMouseMove,
    isActive && !isLightOn,
    { passive: true },
  );

  const toggleLight = () => setIsLightOn((prev) => !prev);

  const cursorClassName = isLightOn ? "cursor-auto" : "cursor-lantern";
  const lightClassName = isLightOn ? "light-on" : "light-off";
  const spotlightOpacityClass = isLightOn ? "opacity-0" : "opacity-100";

  return {
    isLightOn,
    toggleLight,
    maskRef,
    cursorClassName,
    lightClassName,
    spotlightOpacityClass,
  };
}
