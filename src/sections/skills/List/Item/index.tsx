import { LiHTMLAttributes } from "react";

import { Typography } from "@/components/Typography";

import { cn } from "@/lib/cn";

import { Skill } from "@/consts/skills";

interface PropsType extends LiHTMLAttributes<HTMLLIElement> {
  skill: Skill;
}

function SkillListItem({ skill, className, ...rest }: PropsType) {
  return (
    <li
      className={cn(
        "absolute flex h-[var(--item-size)] w-[var(--item-size)] min-w-[8rem] flex-col items-center justify-center gap-2 rounded-xl p-2 text-center",
        className,
        "bg-black",
      )}
      {...rest}
    >
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-sm">
        {skill.icon}
      </div>
      <Typography>{skill.name}</Typography>
    </li>
  );
}

export default SkillListItem;
