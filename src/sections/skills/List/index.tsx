"use client";

import { useActiveSection } from "@/providers/section";

import { Typography } from "@/components/Typography";

import { SECTION_CONFIG } from "@/consts/sections";
import { SKILLS } from "@/consts/skills";

import SkillListItem from "./Item";
import styles from "./Skills.module.css";

function SkillsList() {
  const { activeSection } = useActiveSection();
  const skillsLength = SKILLS.length;

  const maskImage =
    "mask-[linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]";

  return (
    <div
      className={`h-full w-full overflow-hidden ${maskImage} flex flex-col items-center justify-center gap-4`}
    >
      <Typography variant="h2">My skills</Typography>
      <ul
        className={`${styles.skillsList} group relative flex h-[calc(var(--item-size)*1.2)] w-full items-center gap-6 py-4`}
        aria-label="List of technologies and tools I use"
        style={{
          minWidth: `calc(var(--item-size) * ${skillsLength} * var(--coefficient))`,
          height: "270px",
        }}
      >
        {SKILLS.map((skill, index) => (
          <SkillListItem
            key={skill.key}
            skill={skill}
            style={{
              // @ts-expect-error CSS variable
              "--skill-color": skill.color,
              animationDelay: `calc((${index} * var(--coefficient) - 5) * 1s)`,
              animationDuration: `calc(${skillsLength} * var(--coefficient) * 1s)`,
              animationPlayState:
                activeSection === SECTION_CONFIG.skills.key
                  ? "running"
                  : "paused",
              willChange: "left",
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
