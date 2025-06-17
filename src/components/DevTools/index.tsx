import { useAchievements } from "@/providers/achievements";

import Button from "../Button";

const DevTools = () => {
  const { reset } = useAchievements();

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed top-1/2 left-4 z-10">
      <Button onClick={reset} className="mt-4 text-sm text-red-500 underline">
        Reset Achievements
      </Button>
    </div>
  );
};

export default DevTools;
