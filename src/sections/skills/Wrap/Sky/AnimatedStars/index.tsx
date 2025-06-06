"use client";

import type { LottieRefCurrentProps } from "lottie-react";

import { useEffect, useRef } from "react";

import Stars from "@/assets/lotties/stars.json";

import Lottie from "@/components/Lotties";

function SkillsSkyAnimatedStars() {
  const starsRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (starsRef?.current) {
      starsRef.current.setSpeed(0.5);
    }
  }, [starsRef?.current?.animationItem]);

  return (
    <>
      <div className="absolute top-0 right-1/2 bottom-1/4 left-0 -z-1 max-sm:hidden">
        <Lottie
          lottieRef={starsRef}
          animationData={Stars}
          loop
          placeholder={<></>}
        />
      </div>
      <div className="absolute top-0 right-0 bottom-1/4 left-1/2 -z-1 max-sm:left-0">
        <Lottie
          lottieRef={starsRef}
          animationData={Stars}
          loop
          placeholder={<></>}
        />
      </div>
    </>
  );
}

export default SkillsSkyAnimatedStars;
