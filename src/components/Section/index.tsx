import { useActiveSection } from "@/providers/section";

import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { useSectionMount } from "@/hooks/useSectionMount";

import { type Section as SectionType } from "@/consts/sections";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: SectionType;
  as?: React.ElementType;
  sectionClassName?: string;
  beforeMainContent?: ReactNode;
  innerWrapStyle?: CSSProperties;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      as: Tag = "section",
      className,
      sectionClassName,
      children,
      beforeMainContent,
      innerWrapStyle,
      ...props
    },
    ref,
  ) => {
    const { activeSection } = useActiveSection();
    useSectionMount(id, () => {
      if (activeSection === id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
      }
    }, [activeSection]);

    return (
      <Tag
        ref={ref}
        id={id}
        className={cn(
          "pt-section-padding-top relative mx-auto h-full min-h-screen w-full snap-center overflow-hidden",
          sectionClassName,
        )}
        {...props}
      >
        {beforeMainContent}
        <div
          className={cn(
            "max-w-section-max-width mx-auto flex h-full items-center justify-center px-2 pt-3 pb-[10vh] md:px-4",
            className,
          )}
          style={innerWrapStyle}
        >
          {children}
        </div>
      </Tag>
    );
  },
);

Section.displayName = "Section";

export { Section };

