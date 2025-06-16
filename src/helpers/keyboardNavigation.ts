let isLocked = false;

export const lockKeyboardNavigation = () => {
  isLocked = true;
};

export const unlockKeyboardNavigation = () => {
  isLocked = false;
};

export const isKeyboardNavigationLocked = () => isLocked;
