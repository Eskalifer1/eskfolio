"use client";

import { useActiveSection } from "@/providers/active-session";
import type { LottieComponentProps, LottieRefCurrentProps } from "lottie-react";

import { useEffect, useRef } from "react";

import robotLottieSrc from "@/assets/lotties/robot-lottie.json";

import Loader from "@/components/Loader";

import { SECTION_CONFIG } from "@/consts/sections";

import Lottie from "..";

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
