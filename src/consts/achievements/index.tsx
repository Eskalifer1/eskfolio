export type Achievement = {
  key: AchievementKey;
  title: string;
  description: string;
  howToUnlock: string;
};

export const ACHIEVEMENT_KEYS = {
  bugHunter: "bugHunter",
  firstBlood: "firstBlood",
  lightBringer: "lightBringer",
  loreKeeper: "loreKeeper",
  touchOfLife: "touchOfLife",
  arrowKeysMaster: "arrowKeysMaster",
} as const;

export type AchievementKey = keyof typeof ACHIEVEMENT_KEYS;

export const ACHIEVEMENTS: Record<AchievementKey, Achievement> = {
  bugHunter: {
    key: "bugHunter",
    title: "Bug Hunter",
    description:
      "Some devs spend hours tracking down a bug.\nYou just clicked one",
    howToUnlock: "Click the beetle hiding in the 'About me' section",
  },
  firstBlood: {
    key: "firstBlood",
    title: "First Blood",
    description: "You’ve slain your first monster in this world",
    howToUnlock: "Click on skeleton inside the Projects area",
  },
  lightBringer: {
    key: "lightBringer",
    title: "The Lightbringer",
    description: "You brought light into the darkness.\nBrave soul!",
    howToUnlock: "Turn on the lamp in the dark section",
  },
  loreKeeper: {
    key: "loreKeeper",
    title: "Lore Keeper",
    description:
      "You opened the book of legends and revealed the secrets within",
    howToUnlock: "Click the achievement book icon to view your achievements",
  },
  touchOfLife: {
    key: "touchOfLife",
    title: "Critical Missclick",
    description: "You poked the hero... and they got hurt.\nWell done?",
    howToUnlock: "Click on the main character and watch them take damage.",
  },
  arrowKeysMaster: {
    key: "arrowKeysMaster",
    title: "Arrow Keys Master",
    description: "You've proven your worth with ancient directional magic",
    howToUnlock: "Move the character using arrow keys on your keyboard",
  },
};
