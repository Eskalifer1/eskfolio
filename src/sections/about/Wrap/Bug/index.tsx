import { useAchievements } from "@/providers/achievements";

import BugSrc from "@/assets/lotties/bug.json";

import Lottie from "@/components/Lotties";

import { ACHIEVEMENT_KEYS } from "@/consts/achievements";

function Bug() {
  const { isUnlocked, unlock } = useAchievements();

  if (isUnlocked(ACHIEVEMENT_KEYS.bugHunter)) return null;

  const handleUnlockBugAchievement = () => {
    unlock(ACHIEVEMENT_KEYS.bugHunter);
  };

  return (
    <button
      onClick={handleUnlockBugAchievement}
      aria-label="Bug"
      className="absolute right-1/6 bottom-1/5 h-10 w-10 cursor-pointer brightness-75 max-sm:right-1/12"
    >
      <Lottie animationData={BugSrc} />
    </button>
  );
}

export default Bug;
