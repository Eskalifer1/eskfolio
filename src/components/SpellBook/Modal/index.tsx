import { useAchievements } from "@/providers/achievements";
import { useActiveSection } from "@/providers/section";

import BackgroundImage from "@/components/BackgroundImage";
import { Typography } from "@/components/Typography";

import { ACHIEVEMENTS } from "@/consts/achievements";
import { SECTION_CONFIG } from "@/consts/sections";

interface PropsType {
  onClose: () => void;
  isOpen?: boolean;
}

function SpellBookModal({ onClose, isOpen }: PropsType) {
  const { unlocked } = useAchievements();

  const { activeSection } = useActiveSection();

  return (
    <div
      className={`fade-base fixed inset-0 z-20 flex items-center justify-center ${isOpen ? "fade-enter" : "fade-exit"}`}
    >
      <div
        aria-label="Modal overlay"
        className="absolute inset-0 -z-1 cursor-pointer bg-black/70"
        onClick={onClose}
        tabIndex={0}
        role="button"
      />
      <div
        className="absolute inset-[15%_10%] z-2 flex cursor-pointer justify-center pb-[10vh] md:inset-[20%]"
        onClick={onClose}
      >
        <ul
          className={`flex cursor-auto flex-col gap-4 overflow-auto ${activeSection === SECTION_CONFIG.hero.key && "mix-blend-exclusion"}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {Object.values(ACHIEVEMENTS).map((achievement) => (
            <li
              className={`text-secondary flex flex-col gap-2 ${unlocked[achievement.key] && "line-through"} border-secondary border-l-2 pl-2`}
              key={achievement.key}
            >
              <Typography variant="h6" as="p">
                {achievement.title}
              </Typography>
              <Typography variant="body2">{achievement.howToUnlock}</Typography>
            </li>
          ))}
        </ul>
        <div className="absolute inset-[-30%] -z-1">
          <BackgroundImage
            imageProps={{
              src: "/opened-spellbook.webp",
              alt: "Opened spellbook",
              fill: true,
              className:
                "[image-rendering:pixelated] object-cover md:object-contain",
            }}
            className="z-1"
          />
        </div>
      </div>
    </div>
  );
}

export default SpellBookModal;
