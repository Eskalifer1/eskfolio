import dynamic from "next/dynamic";

import { ReactNode } from "react";

import BackgroundImage from "@/components/BackgroundImage";
import { Section } from "@/components/Section";

import { quicksand } from "@/lib/fonts/quicksand";

import { SECTION_CONFIG } from "@/consts/sections";

const SkillsSky = dynamic(() => import("./Sky").then((mod) => mod.default), {
  ssr: false,
  loading: () => null,
});

interface PropsType {
  children: ReactNode;
}

function SkillsWrap({ children }: PropsType) {
  return (
    <Section
      id={SECTION_CONFIG.skills.key}
      className={quicksand.className}
      aria-label={SECTION_CONFIG.skills.title}
    >
      <BackgroundImage
        imageProps={{
          src: "/star-sky.webp",
          alt: "Background with Stars",
          fill: true,
          className: "object-center",
        }}
      />
      <SkillsSky />
      {children}
    </Section>
  );
}

export default SkillsWrap;
