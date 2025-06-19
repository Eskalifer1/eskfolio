import { useActiveSection } from "@/providers/section";

import BackgroundMusic from "@/components/BackgroundMusic";

import { MUSIC, MusicKeys } from "@/consts/music";
import { Section } from "@/consts/sections";

function SiteWrapMusic() {
  const { activeSection } = useActiveSection();

  const SectionMusic: Record<Section, MusicKeys> = {
    hero: "BACKGROUND_HERO",
    about: "BACKGROUND_ABOUT",
    skills: "BACKGROUND_SKILLS",
    projects: "BACKGROUND_PROJECTS",
  };

  const currentMusicKey = SectionMusic[activeSection];

  const currentMusic = MUSIC?.[currentMusicKey];
  return (
    <BackgroundMusic src={currentMusic.src} volume={currentMusic.volume} />
  );
}

export default SiteWrapMusic;
