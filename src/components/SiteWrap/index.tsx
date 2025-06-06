"use client";

import { useActiveSection } from "@/providers/section";
import { getSectionStyles } from "@/theme/palette";

import { ReactNode } from "react";

import { cn } from "@/lib/cn";

import LoadingScreen from "../LoadingScreen";
import SectionButtons from "../SectionButtons";

interface PropsType {
  children?: ReactNode;
}

function SiteWrap({ children }: PropsType) {
  const { activeSection } = useActiveSection();
  return (
    <>
      <LoadingScreen />
      <div
        className={cn(
          "text-primary h-screen w-screen snap-y snap-mandatory overflow-hidden",
          "font-default h-[100dvh]",
        )}
        style={getSectionStyles(activeSection)}
      >
        {children}
      </div>
      <SectionButtons />
    </>
  );
}

// SiteWrap.whyDidYouRender = true;

export default SiteWrap;
