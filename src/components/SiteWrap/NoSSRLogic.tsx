"use client";

import { useSectionKeyboardNavigation } from "@/hooks/useSectionKeyboardNavigation";

function NoSSRLogic() {
  useSectionKeyboardNavigation();
  return <div />;
}

export default NoSSRLogic;
