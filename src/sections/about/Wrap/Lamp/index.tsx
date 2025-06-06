import { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  isLightOn: boolean;
}

function AboutLamp({ isLightOn, ...props }: PropsType) {
  return (
    <div
      className="absolute top-0 left-40 z-1 flex cursor-pointer flex-col items-center"
      {...props}
    >
      <div className="bg-secondary pointer-events-none h-2 w-1 brightness-50" />
      <div className="flex flex-col items-center">
        <div className="bg-secondary h-6 w-10 rounded-t-[40px] brightness-50" />
        <div
          className={cn(
            "light-off-box-shadow-inset-none",
            `pointer border-secondary -mt-1.5 flex h-16 w-32 items-center justify-center rounded-t-[100px] border-2 bg-[url(/wooden-pattern.webp)] bg-no-repeat shadow-[0_-10px_19px_0px_#f2d241_inset] brightness-50`,
            isLightOn && "brightness-105",
          )}
        >
          {!isLightOn && "Turn on!"}
        </div>
        <div
          className={cn(
            "border-primary relative -z-1 -mt-4.5 h-10 w-10 rounded-full border-1",
            isLightOn ? "bg-yellow-400" : "bg-primary",
          )}
        >
          <div className="shadow-lamp light-off-box-shadow-none absolute inset-0 z-0 rounded-full" />
        </div>
      </div>
    </div>
  );
}

AboutLamp.whyDidYouRender = true;

export default AboutLamp;
