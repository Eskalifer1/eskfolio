"use client";

import { useLoadingSection } from "@/providers/section";

import { cn } from "@/lib/cn";

import { SECTION_CONFIG } from "@/consts/sections";

function LoadingScreen() {
  const { isTransitioning, loadingSection } = useLoadingSection();
  // animation-duration is 1 times less than duration of delay for change section
  const animation = `animate-[animation-full-width_linear_600ms_forwards]`;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black text-xl text-white",
        isTransitioning ? "opacity-100" : "opacity-0",
        !isTransitioning && "pointer-events-none",
      )}
    >
      <div className="text-center text-2xl">
        <p>
          🗺️ Loading{" "}
          {loadingSection ? SECTION_CONFIG[loadingSection].title : ""} realm...
        </p>
        <div
          className={cn(
            `mt-4 h-2 w-full rounded bg-green-400`,
            isTransitioning && animation,
          )}
        />
      </div>
    </div>
  );
}

LoadingScreen.whyDidYouRender = true;

export default LoadingScreen;
