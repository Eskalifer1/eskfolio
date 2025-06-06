"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { type Section as SectionType } from "@/consts/sections";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: SectionType;
  as?: React.ElementType;
  sectionClassName?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      as: Tag = "section",
      className,
      sectionClassName,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Tag
        ref={ref}
        id={id}
        className={cn(
          "relative mx-auto h-full min-h-screen w-full snap-center overflow-hidden pt-[calc(var(--navbar-height)+1rem)]",
          sectionClassName,
        )}
        {...props}
      >
        <div
          className={cn(
            "mx-auto flex h-full max-w-[min(var(--spacing-section),95%)] items-center justify-center px-2 pt-3 pb-[10vh] md:px-4",
            className,
          )}
        >
          {children}
        </div>
      </Tag>
    );
  },
);

Section.displayName = "Section";

export { Section };

