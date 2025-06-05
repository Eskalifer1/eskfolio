import React from "react";

import { cn } from "@/lib/cn";

interface WoodenFrameProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  borderImageSrc?: string;
  borderImageSlice?: string;
  borderImageRepeat?: string;
  borderColor?: string;
  brightness?: number; // 0..1
  insetShadow?: string;
  outerShadow?: string;
  height?: string;
}

const WoodenFrame: React.FC<WoodenFrameProps> = ({
  children,
  className = "aspect-[3/4]",
  borderWidth = 24,
  borderImageSrc = "/wooden-pattern.webp",
  borderImageSlice = "13% 4%",
  borderImageRepeat = "stretch",
  borderColor = "var(--color-secondary)",
  brightness = 0.75,
  insetShadow = "shadow-[inset_5px_0px_21px_rgba(0,0,0,0.75)]",
  outerShadow = "shadow-[7px_9px_20px_rgba(0,0,0,0.75)]",
  height = "md:h-[max(320px,70%)]",
}) => {
  return (
    <div
      className={cn(
        "relative",
        height,
        outerShadow,
        "light-off-box-shadow-none",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "light-off-box-shadow-inset-none",
          "pointer-events-none absolute inset-0 z-10",
          insetShadow,
        )}
        style={{
          borderWidth,
          borderStyle: "solid",
          borderColor,
          borderImageSource: `url(${borderImageSrc})`,
          borderImageSlice,
          borderImageRepeat,
          borderImageOutset: 0,
          filter: `brightness(${brightness})`,
        }}
      />
      {children}
    </div>
  );
};

export default WoodenFrame;
