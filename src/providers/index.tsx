"use client";

import { ReactNode } from "react";

import { AchievementProvider } from "./achievements";
import { SectionProvider } from "./section";

interface PropsType {
  children: ReactNode;
}

function Providers({ children }: PropsType) {
  return (
    <SectionProvider>
      <AchievementProvider>{children}</AchievementProvider>
    </SectionProvider>
  );
}

export default Providers;
