"use client";

import Image from "next/image";

import { navItems } from "@/consts/nav-items";
import { SECTION_CONFIG } from "@/consts/sections";

import NavItem from "./NavItem";

function NavBar() {
  return (
    <header className="h-navbar max-w-section shadow-soft backdrop-supported fixed top-0 left-[50%] z-10 mx-auto mb-4 flex w-max translate-x-[-50%] items-center justify-center gap-4 rounded-b-3xl px-3 py-2">
      <Image
        width={64}
        height={64}
        src="/logo.webp"
        alt="Logo"
        priority
        loading="eager"
      />
      <nav>
        <ul className="flex items-center gap-3">
          {navItems.map((sectionLink) => (
            <NavItem sectionLink={sectionLink} key={sectionLink}>
              {SECTION_CONFIG[sectionLink].title}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
