export const SECTION_CONFIG = {
  hero: {
    title: "Home",
    key: "hero",
  },
  about: {
    title: "About Me",
    key: "about",
  },
  skills: {
    title: "Skills",
    key: "skills",
  },
  projects: {
    title: "Projects",
    key: "projects",
  },
} as const;

export type Section = keyof typeof SECTION_CONFIG;

export const SECTIONS = Object.keys(SECTION_CONFIG) as Section[];
