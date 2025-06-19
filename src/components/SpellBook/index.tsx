import { useAchievements } from "@/providers/achievements";

import Image from "next/image";

import { useState } from "react";

import { ACHIEVEMENTS } from "@/consts/achievements";
import { playMusic } from "@/consts/music";

import SpellBookModal from "./Modal";

function SpellBook() {
  const { unlock } = useAchievements();
  const [isOpen, setIsOpen] = useState(false);

  const handleBookClick = () => {
    setIsOpen((prev) => !prev);

    if (isOpen) {
      playMusic("CLOSE_BOOK");
    } else {
      playMusic("OPEN_BOOK");
    }

    unlock(ACHIEVEMENTS.loreKeeper.key);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    playMusic("CLOSE_BOOK");
  };

  return (
    <>
      <div
        className="fixed bottom-20 left-4 z-25 cursor-pointer transition-all hover:scale-105"
        onClick={handleBookClick}
        aria-label="Open spellbook"
      >
        <Image
          src="/spellbook.webp"
          alt="Spellbook"
          sizes="64px"
          width={80}
          height={80}
          quality={100}
          className="[image-rendering:pixelated]"
        />
      </div>
      <div>
        <SpellBookModal onClose={handleCloseModal} isOpen={isOpen} />
      </div>
    </>
  );
}

export default SpellBook;
