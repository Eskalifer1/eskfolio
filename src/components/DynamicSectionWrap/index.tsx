"use client";

import { useVisitedSections } from "@/providers/section";

import { ReactNode } from "react";

import { Section } from "@/consts/sections";

interface PropsType {
  children?: ReactNode;
  section: Section;
}

function DynamicSectionWrap({ children, section }: PropsType) {
  const { visitedSections } = useVisitedSections();

  if (!visitedSections.has(section)) {
    return null;
  }

  return <>{children}</>;
}

export default DynamicSectionWrap;
