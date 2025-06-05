"use client";

import { ReactNode } from "react";
import { ActiveSectionProvider } from "./active-session";

interface PropsType {
  children: ReactNode;
}

function Providers({ children }: PropsType) {
  return <ActiveSectionProvider>{children}</ActiveSectionProvider>;
}

export default Providers;
