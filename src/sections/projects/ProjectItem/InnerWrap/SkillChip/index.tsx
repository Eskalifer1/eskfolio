import { Typography } from "@/components/Typography";

import { SkillKeyValue, SKILLS } from "@/consts/skills";

interface PropsType {
  skillKeyValue: SkillKeyValue;
}

function SkillChip({ skillKeyValue }: PropsType) {
  const skill = SKILLS.find((s) => s.key === skillKeyValue);
  return (
    <div
      role="listitem"
      className="bg-primary shadow-soft text-secondary border-secondary hover:bg-accent hover:text-primary flex items-center justify-center gap-1 rounded-lg border p-1.5"
    >
      <Typography
        className="selection:!bg-secondary selection:!text-primary"
        variant="caption"
      >
        {skill?.projectDisplayName}
      </Typography>
    </div>
  );
}

export default SkillChip;
