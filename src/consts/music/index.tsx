import { playSoundOnce } from "@/helpers/playSoundOnce";

export interface Music {
  src: string;
  volume: number;
}

export const MUSIC = {
  BACKGROUND_HERO: { src: "/music/background_hero.mp3", volume: 0.5 },
  BACKGROUND_ABOUT: { src: "/music/background_about.mp3", volume: 0.5 },
  BACKGROUND_SKILLS: { src: "/music/background_skills.mp3", volume: 0.5 },
  BACKGROUND_PROJECTS: { src: "/music/background_projects.mp3", volume: 0.5 },
  SKELETON_DIE: { src: "/music/skeleton_dying.mp3", volume: 0.2 },
  HERO_DAMAGE: { src: "/music/hero_damage.mp3", volume: 0.6 },
  LAMP_TOGGLE: { src: "/music/lamp_toggle.mp3", volume: 0.5 },
  SKILL_HOVER: { src: "/music/skill_hover.mp3", volume: 0.2 },
  OPEN_BOOK: { src: "/music/open_book.mp3", volume: 0.4 },
  CLOSE_BOOK: { src: "/music/close_book.mp3", volume: 0.6 },
  ACHIEVEMENT_UNLOCK: { src: "/music/achievement_unlock.mp3", volume: 0.3 },
} satisfies { [key: string]: Music };

export type MusicKeys = keyof typeof MUSIC;

/**
 * Plays a predefined music/sound track from the MUSIC map using its key.
 *
 * @param {keyof typeof MUSIC} key - The key of the music/sound to play.
 *
 * @example
 * // Play lamp toggle sound
 * playMusic("LAMP_TOGGLE");
 */
export function playMusic(key: MusicKeys) {
  const { src, volume } = MUSIC[key];
  playSoundOnce(src, volume);
}
