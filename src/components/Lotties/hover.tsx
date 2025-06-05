import { LottieRefCurrentProps } from "lottie-react";

import { useEffect, useRef } from "react";

import Lottie, { LottiePropsType } from ".";

interface HoverLottieProps extends LottiePropsType {
  isHovered: boolean;
}

function HoverLottie({ animationData, isHovered, ...props }: HoverLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    if (isHovered) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [isHovered]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop
      autoplay={false}
      {...props}
    />
  );
}

export default HoverLottie;
