import Image from "next/image";

import BackgroundImage from "@/components/BackgroundImage";
import { Typography } from "@/components/Typography";

import { Project } from "@/consts/projects";

import SkillChip from "./SkillChip";

interface PropsType {
  project: Project;
}

function ProjectItemInnerWrap({ project }: PropsType) {
  return (
    <div className="backdrop-supported relative flex h-full w-full items-center justify-center px-6 pt-4 pb-2">
      <BackgroundImage
        className="inset-[-27%_-10%] z-1 sm:inset-[-27%_-15%] md:inset-[-27%_-17%] 2xl:inset-[-27%_-20%]"
        imageProps={{
          src: "/project-border.webp",
          alt: "frame",
          className:
            "object-fill [image-rendering:pixelated] drop-shadow-[0px_0px_10px] drop-shadow-black",
          fill: true,
        }}
      />
      <div className="relative z-1 flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="text-center">
          <Typography variant="h2">{project.name}</Typography>
        </div>
        <div className="flex flex-1 gap-2 overflow-auto py-1.5 max-sm:flex-col">
          <div className="flex flex-1 flex-col items-center justify-center gap-2">
            <div className="w-full px-4 lg:px-10 xl:px-14">
              <div className="relative flex aspect-square w-full max-w-full items-center justify-center overflow-hidden rounded-lg drop-shadow-[0px_4px_6px] drop-shadow-black">
                <Image
                  fill
                  className="[image-rendering:pixelated]"
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 p-1.5" role="list">
              {project.skills.map((skill) => (
                <SkillChip key={skill} skillKeyValue={skill} />
              ))}
            </div>
          </div>
          <div className="flex flex-1">
            <div className="border-primary shadow-soft flex-1 overflow-auto rounded-lg border-2 p-2">
              <Typography className="whitespace-pre-wrap">
                {project.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItemInnerWrap;
