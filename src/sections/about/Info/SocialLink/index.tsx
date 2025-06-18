import { useActiveSection } from "@/providers/section";

import { AnchorHTMLAttributes } from "react";

import { useMagneticEffect } from "@/hooks/useMagneticEffect";

import { SECTION_CONFIG } from "@/consts/sections";

import WoodenFrame from "../../WoodenFrame";

interface PropsType extends AnchorHTMLAttributes<HTMLAnchorElement> {
  outerShadow: string;
}

function AboutSocialLink({
  target = "_blank",
  outerShadow,
  children,
  ...props
}: PropsType) {
  const { activeSection } = useActiveSection();

  const active = activeSection === SECTION_CONFIG.about.key;
  const ref = useMagneticEffect<HTMLAnchorElement>({
    radius: 60,
    strength: 0.5,
    active,
  });

  return (
    <a target={target} className="ease-linear" ref={ref} {...props}>
      <WoodenFrame
        borderWidth={4}
        height="h-16"
        className="text-primary flex aspect-square items-center justify-center p-3 backdrop-blur-sm"
        insetShadow="shadow-[inset_0px_0px_8px_rgba(0,0,0,0.75)]"
        outerShadow={outerShadow}
      >
        {children}
      </WoodenFrame>
    </a>
  );
}

export default AboutSocialLink;
