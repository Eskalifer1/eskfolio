import { SKILLS } from "@/consts/skills";

import "./index.css";
import SkillListItem from "./Item";

function SkillsList() {
  const skillsLength = SKILLS.length;

  const maskImage =
    "mask-[linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]";

  return (
    <div
      className={`h-full w-full overflow-hidden ${maskImage} flex items-center justify-center`}
    >
      <ul
        className="skills-list group relative flex h-[calc(var(--item-size)*1.2)] w-full items-center gap-6 py-4"
        aria-label="List of technologies and tools I use"
        style={{
          minWidth: `calc(var(--item-size) * ${skillsLength} * var(--coefficient))`,
          height: "270px",
        }}
      >
        {SKILLS.map((skill, index) => (
          <SkillListItem
            key={skill.name}
            skill={skill}
            style={{
              // @ts-expect-error CSS variable
              "--skill-color": skill.color,
              animationDelay: `calc((${index} * var(--coefficient) - 5) * 1s)`,
              animationDuration: `calc(${skillsLength} * var(--coefficient) * 1s)`,
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
