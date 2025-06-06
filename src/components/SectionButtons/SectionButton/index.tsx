"use client";

import { useState } from "react";

import Button, { ButtonProps } from "@/components/Button";
import { LottiePropsType } from "@/components/Lotties";
import HoverLottie from "@/components/Lotties/hover";

export interface SectionButtonProps extends ButtonProps {
  lottieProps?: LottiePropsType;
}

function SectionButton({
  children,
  lottieProps,
  ...props
}: SectionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant="text"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      leftIcon={
        lottieProps?.animationData ? (
          <HoverLottie
            isHovered={isHovered}
            loop
            autoPlay={false}
            {...lottieProps}
          />
        ) : null
      }
      {...props}
    >
      {children}
    </Button>
  );
}

// SectionButton.whyDidYouRender = true;

export default SectionButton;
