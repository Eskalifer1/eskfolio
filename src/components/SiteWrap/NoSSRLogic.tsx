"use client";

import { useSectionKeyboardNavigation } from "@/hooks/useSectionKeyboardNavigation";

import SiteWrapMusic from "./Music";

function NoSSRLogic() {
  useSectionKeyboardNavigation();
  return (
    <>
      <SiteWrapMusic />
    </>
  );
}

export default NoSSRLogic;
