import toast from "react-hot-toast";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import Toast from "@/components/Toast";

import { AchievementKey, ACHIEVEMENTS } from "@/consts/achievements";

type AchievementContextType = {
  unlocked: Readonly<Record<AchievementKey, boolean>>;
  unlock: (key: AchievementKey) => void;
  reset: () => void;
  isUnlocked: (key: AchievementKey) => boolean;
};

const AchievementContext = createContext<AchievementContextType | null>(null);

const initialAchievements = Object.fromEntries(
  Object.keys(ACHIEVEMENTS).map((key) => [key, false]),
) as Record<AchievementKey, boolean>;

export const AchievementProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [unlocked, setUnlocked] =
    useState<Record<AchievementKey, boolean>>(initialAchievements);

  const isUnlocked = useCallback(
    (key: AchievementKey) => !!unlocked[key],
    [unlocked],
  );

  const unlock = (key: AchievementKey) => {
    setUnlocked((prev) => {
      if (prev[key]) return prev;

      return { ...prev, [key]: true };
    });

    if (isUnlocked(key)) return;

    const { title, description } = ACHIEVEMENTS[key];

    toast.custom((t) => (
      <Toast
        title={title}
        description={description}
        visible={t.visible}
        id={t.id}
      />
    ));
  };

  const reset = useCallback(() => setUnlocked(initialAchievements), []);

  const value = useMemo(
    () => ({
      unlocked,
      unlock,
      reset,
      isUnlocked,
    }),
    [unlocked, unlock, reset, isUnlocked],
  );

  return (
    <AchievementContext.Provider value={value}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievements = () => {
  const ctx = useContext(AchievementContext);
  if (!ctx) {
    throw new Error(
      "useAchievementContext must be used within AchievementProvider",
    );
  }
  return ctx;
};
