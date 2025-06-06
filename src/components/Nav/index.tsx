"use client";

import Image from "next/image";

import { navItems } from "@/consts/nav-items";
import { SECTION_CONFIG } from "@/consts/sections";

import NavItem from "./NavItem";

function NavBar() {
  return (
    <header className="h-navbar max-w-section shadow-soft backdrop-supported fixed top-0 left-[50%] z-10 mx-auto mb-4 flex w-max translate-x-[-50%] items-center justify-center gap-2 rounded-b-3xl px-3 py-2 md:gap-4">
      <div className="relative h-12 w-12 sm:h-16 sm:w-16">
        <Image src="/logo.webp" alt="Logo" priority fill loading="eager" sizes="(max-width: 768px) 48px, 64px" />
      </div>
      <nav>
        <ul className="flex items-center gap-1 sm:gap-2 md:gap-3">
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
