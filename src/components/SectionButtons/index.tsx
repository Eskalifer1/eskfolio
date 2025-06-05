"use client";

import { useActiveSection } from "@/providers/active-session";
import { getSectionStyles } from "@/theme/palette";

import { SectionButtonsIconsMap } from "@/consts/sections/section-buttons-icons";

import SectionButton from "./SectionButton";

function SectionButtons() {
  const {
    isFirstSection,
    isLastSection,
    activeSection,
    goToNextSection,
    goToPrevSection,
  } = useActiveSection();

  const next = SectionButtonsIconsMap[activeSection]?.next;
  const prev = SectionButtonsIconsMap[activeSection]?.prev;

  return (
    <div
      style={getSectionStyles(activeSection)}
      className="font-default border-primary backdrop-supported fixed right-0 bottom-0 z-10 flex flex-col gap-2 rounded-2xl border bg-transparent p-1"
    >
      <SectionButton
        disabled={isLastSection}
        onClick={goToNextSection}
        {...next?.buttonProps}
        lottieProps={next?.lottieProps}
      >
        Next Level
      </SectionButton>
      <SectionButton
        disabled={isFirstSection}
        onClick={goToPrevSection}
        {...prev?.buttonProps}
        lottieProps={prev?.lottieProps}
      >
        Previous Level
      </SectionButton>
    </div>
  );
}

export default SectionButtons;
