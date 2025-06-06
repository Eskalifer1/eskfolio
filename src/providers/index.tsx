"use client";

import { ReactNode } from "react";

import { SectionProvider } from "./section";

interface PropsType {
  children: ReactNode;
}

function Providers({ children }: PropsType) {
  return <SectionProvider>{children}</SectionProvider>;
}

export default Providers;
