import { AnchorHTMLAttributes } from "react";

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
  return (
    <a target={target} {...props}>
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
