"use client";

import type { LottieRefCurrentProps } from "lottie-react";

import { useEffect, useRef } from "react";

import Meteors from "@/assets/lotties/simple-meteor.json";

import Lottie from "@/components/Lotties";

import { getRandomInt } from "@/helpers/getRandomInt";

function SkillsSkyMeteor() {
  const meteorRef = useRef<LottieRefCurrentProps | null>(null);
  const meteorContainerRef = useRef<HTMLDivElement | null>(null);

  const onMeteorAnimationLoopComplete = () => {
    const newLeft = getRandomInt(10, 80);
    const newTop = getRandomInt(0, 40);
    const newHeight = getRandomInt(140, 350);
    const flipped = Math.random() > 0.5;

    if (meteorContainerRef?.current) {
      meteorContainerRef.current.style.setProperty("--left", `${newLeft}%`);
      meteorContainerRef.current.style.setProperty("--top", `${newTop}%`);
      meteorContainerRef.current.style.setProperty(
        "--flip",
        flipped ? "-1" : "1",
      );
      meteorContainerRef.current.style.setProperty(
        "--height",
        `${newHeight}px`,
      );
    }
  };

  useEffect(() => {
    if (meteorRef?.current) {
      meteorRef.current.setSpeed(0.5);
    }
  }, [meteorRef?.current?.animationItem]);

  return (
    <div
      ref={meteorContainerRef}
      className="absolute top-[var(--top,10%)] left-[var(--left,50%)] -z-1 h-[min(350px,var(--height,220px))] scale-x-[var(--flip,1)]"
    >
      <Lottie
        lottieRef={meteorRef}
        animationData={Meteors}
        placeholder={<></>}
        onLoopComplete={onMeteorAnimationLoopComplete}
      />
    </div>
  );
}

export default SkillsSkyMeteor;
