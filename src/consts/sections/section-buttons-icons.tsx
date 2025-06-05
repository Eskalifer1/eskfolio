import CupOfTeaSrc from "@/assets/lotties/cup-of-tea.json";
import MagicCatSrc from "@/assets/lotties/mage-cat.json";
import FirstRobotSrc from "@/assets/lotties/robot-1.json";
import SecondRobotSrc from "@/assets/lotties/robot-2.json";
import FirstStarSrc from "@/assets/lotties/star-1.json";
import SecondStarSrc from "@/assets/lotties/star-2.json";

import { LottiePropsType } from "@/components/Lotties";
import { SectionButtonProps } from "@/components/SectionButtons/SectionButton";

import { Section } from ".";

type Value = {
  lottieProps?: LottiePropsType;
  buttonProps?: Omit<SectionButtonProps, "children">;
};

type ObjectValue = {
  next: Value | null;
  prev: Value | null;
};

export const SectionButtonsIconsMap: Record<Section, ObjectValue> = {
  hero: {
    next: {
      buttonProps: {
        leftIconClassName: "group-hover:scale-115",
      },
      lottieProps: {
        animationData: FirstRobotSrc,
      },
    },
    prev: {
      lottieProps: {
        animationData: SecondRobotSrc,
      },
    },
  },
  about: {
    next: {
      buttonProps: {
        leftIconClassName: "scale-130 group-hover:scale-150 translate-y-[-15%]",
      },
      lottieProps: {
        animationData: CupOfTeaSrc,
      },
    },
    prev: {
      buttonProps: {
        leftIconClassName: "group-hover:scale-130",
      },
      lottieProps: {
        animationData: MagicCatSrc,
      },
    },
  },
  skills: {
    next: {
      buttonProps: {
        leftIconClassName: "group-hover:scale-150",
      },
      lottieProps: {
        animationData: FirstStarSrc,
      },
    },
    prev: {
      buttonProps: {
        leftIconClassName: "group-hover:scale-130",
      },
      lottieProps: {
        animationData: SecondStarSrc,
      },
    },
  },
  projects: { next: null, prev: null },
};
