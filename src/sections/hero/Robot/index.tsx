"use client";

import { useActiveSection } from "@/providers/section";
import type { LottieComponentProps, LottieRefCurrentProps } from "lottie-react";

import { useEffect, useRef } from "react";

import robotLottieSrc from "@/assets/lotties/hero-robot.json";

import Loader from "@/components/Loader";
import Lottie from "@/components/Lotties";

import { SECTION_CONFIG } from "@/consts/sections";

function RobotLottie(props: Omit<LottieComponentProps, "animationData">) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const { activeSection } = useActiveSection();

  useEffect(() => {
    if (lottieRef.current) {
      if (activeSection === SECTION_CONFIG.hero.key) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
      }
    }
  }, [activeSection]);

  return (
    <Lottie
      animationData={robotLottieSrc}
      lottieRef={lottieRef}
      placeholder={<Loader className="h-1/2 w-1/2" />}
      {...props}
    />
  );
}

export default RobotLottie;
