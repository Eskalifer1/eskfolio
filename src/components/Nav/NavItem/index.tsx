"use client";

import { useSectionNavigation } from "@/providers/section";

import { LiHTMLAttributes } from "react";

import { Typography } from "@/components/Typography";

import { cn } from "@/lib/cn";

import { Section } from "@/consts/sections";

interface PropsType extends LiHTMLAttributes<HTMLLIElement> {
  sectionLink: Section;
}

function NavItem({ sectionLink, className, children, ...props }: PropsType) {
  const { transitionTo } = useSectionNavigation();
  return (
    <li className={cn("", className)} {...props}>
      <button
        className="cursor-pointer capitalize hover:scale-110"
        onClick={() => transitionTo(sectionLink)}
      >
        <Typography>{children}</Typography>
      </button>
    </li>
  );
}

export default NavItem;
