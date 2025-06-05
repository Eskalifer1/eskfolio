"use client";

import { useActiveSection } from "@/providers/active-session";

import { LiHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

import { Section } from "@/consts/sections";

interface PropsType extends LiHTMLAttributes<HTMLLIElement> {
  sectionLink: Section;
}

function NavItem({ sectionLink, className, children, ...props }: PropsType) {
  const { transitionTo } = useActiveSection();
  return (
    <li className={cn("", className)} {...props}>
      <button
        className="cursor-pointer capitalize hover:scale-110"
        onClick={() => transitionTo(sectionLink)}
      >
        {children}
      </button>
    </li>
  );
}

export default NavItem;
