"use client";

import Image from "next/image";

import Arrow from "@/assets/svg/arrow.svg";

import BackgroundImage from "@/components/BackgroundImage";
import { Typography } from "@/components/Typography";

import { Project, PROJECTS, PROJECTS_LENGTH } from "@/consts/projects";

import SkillChip from "./SkillChip";

interface PropsType {
  project: Project;
  onArrowClick: (value: "forward" | "backward") => void;
}

function ProjectItemInnerWrap({ project, onArrowClick }: PropsType) {
  const currentIndex = PROJECTS.findIndex((p) => p.key === project.key);

  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS_LENGTH - 1 ? PROJECTS[currentIndex + 1] : null;

  const handleLeftArrowClick = () => {
    if (!prevProject) return;
    onArrowClick("backward");
  };
  const handleRightArrowClick = () => {
    if (!nextProject) return;
    onArrowClick("forward");
  };

  return (
    <div className="backdrop-supported relative flex h-full w-full items-center justify-center px-6 pt-4 pb-2">
      {!!prevProject && (
        <Arrow
          className="absolute top-1/2 left-0 z-3 h-20 w-20 -translate-y-1/2 rotate-90 cursor-pointer md:-left-12"
          aria-label="Scroll to previous project"
          onClick={handleLeftArrowClick}
        />
      )}
      {!!nextProject && (
        <Arrow
          className="absolute top-1/2 right-0 z-3 h-20 w-20 -translate-y-1/2 -scale-y-100 rotate-90 cursor-pointer md:-right-16"
          aria-label="Scroll to next project"
          onClick={handleRightArrowClick}
        />
      )}
      <BackgroundImage
        className="inset-[-27%_-13%] z-1 sm:inset-[-27%_-15%] md:inset-[-27%_-17%] 2xl:inset-[-27%_-20%]"
        imageProps={{
          src: "/project-border.webp",
          alt: "frame",
          className:
            "object-fill [image-rendering:pixelated] drop-shadow-[0px_0px_10px] drop-shadow-black",
          fill: true,
          sizes: "(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 90vw",
        }}
      />
      <div className="relative z-1 flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="text-center">
          <a href={project.url} target="_blank" className="hover:underline">
            <Typography variant="h2">{project.name}</Typography>
          </a>
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
