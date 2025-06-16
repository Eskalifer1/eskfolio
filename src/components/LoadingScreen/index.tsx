"use client";

import { useLoadingSection } from "@/providers/section";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

import { SECTION_CONFIG } from "@/consts/sections";
import { TIMING } from "@/consts/timing";

function LoadingScreen() {
  const { isTransitioning, loadingSection } = useLoadingSection();
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShowBar(true);
    } else {
      const timeout = setTimeout(
        () => setShowBar(false),
        TIMING.LOADING_SCREEN_FADE_ANIMATION * 2,
      );
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

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
            "mt-4 h-2 rounded bg-green-400 duration-600",
            showBar ? "w-full" : "w-0",
          )}
          style={{
            transitionTimingFunction: "linear",
            transitionProperty: "width",
          }}
        />
      </div>
    </div>
  );
}

LoadingScreen.whyDidYouRender = true;

export default LoadingScreen;
