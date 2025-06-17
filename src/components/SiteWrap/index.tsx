"use client";

import { useActiveSection } from "@/providers/section";
import { getSectionStyles } from "@/theme/palette";
import { Toaster } from "react-hot-toast";

import dynamic from "next/dynamic";

import { ReactNode } from "react";

import { cn } from "@/lib/cn";

import DevTools from "../DevTools";
import LoadingScreen from "../LoadingScreen";
import SectionButtons from "../SectionButtons";

const NoSSRLogic = dynamic(() => import("./NoSSRLogic"), { ssr: false });
interface PropsType {
  children?: ReactNode;
}

function SiteWrap({ children }: PropsType) {
  const { activeSection } = useActiveSection();

  return (
    <>
      <DevTools />
      <NoSSRLogic />
      <LoadingScreen />
      <div
        className={cn(
          "text-primary h-screen w-screen snap-y snap-mandatory overflow-hidden",
          "font-default h-[100dvh]",
        )}
        style={getSectionStyles(activeSection)}
      >
        {children}
        <Toaster
          toastOptions={{ duration: 5000, position: "top-right" }}
          gutter={24}
        />
      </div>
      <SectionButtons />
    </>
  );
}

// SiteWrap.whyDidYouRender = true;

export default SiteWrap;
