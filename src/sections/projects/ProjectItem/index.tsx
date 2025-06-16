import { HTMLAttributes } from "react";

import BackgroundImage from "@/components/BackgroundImage";

import { cn } from "@/lib/cn";

import { Project } from "@/consts/projects";

import ProjectItemInnerWrap from "./InnerWrap";

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  project: Project;
  onArrowClick: (value: string | number) => void;
}

function ProjectItem({
  className,
  project,
  onArrowClick,
  ...props
}: PropsType) {
  return (
    <div
      className={cn(
        "pt-section-padding-top relative flex h-screen w-screen shrink-0 items-center justify-center",
        className,
      )}
      {...props}
    >
      <BackgroundImage
        imageProps={{
          src: "/castle-room.webp",
          alt: "Castle room",
          className: "object-fill",
          fill: true,
          sizes: "(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 90vw",
        }}
      />

      <article
        id={project.key}
        className="2xl:max-w-[60%]-max-width relative mx-auto flex h-full w-full max-w-[calc(100%-40px)] items-center justify-center pt-[5vh] pb-[20vh] sm:max-w-[calc(100%-65px)] md:max-w-[70%] lg:max-w-[50%]"
      >
        <ProjectItemInnerWrap project={project} onArrowClick={onArrowClick} />
      </article>
    </div>
  );
}

export default ProjectItem;
