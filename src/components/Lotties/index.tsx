import DefaultLottie, { type LottieComponentProps } from "lottie-react";

import { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

import Loader from "../Loader";

export interface LottiePropsType
  extends Omit<LottieComponentProps, "placeholder"> {
  placeholder?: ReactNode;
}

function Lottie({
  className,
  animationData,
  placeholder,
  ...props
}: LottiePropsType) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className,
      )}
    >
      {isVisible ? (
        <DefaultLottie
          className="no-default-transition h-full"
          animationData={animationData}
          {...props}
        />
      ) : (
        placeholder || <Loader />
      )}
    </div>
  );
}

export default Lottie;
