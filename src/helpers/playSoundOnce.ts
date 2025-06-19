/**
 * Plays a sound once with the given source and volume.
 *
 * This function creates a new Audio instance and attempts to play it once.
 * It’s useful for short sound effects triggered by user actions, like button clicks.
 * Browsers may block autoplay unless the sound is triggered by user interaction.
 *
 * @param {string} src - The path to the audio file (relative or absolute URL).
 * @param {number} [volume=1] - Volume level from 0.0 (muted) to 1.0 (max).
 *
 * @example
 * // Play a click sound at half volume
 * playSoundOnce("/sounds/click.mp3", 0.5);
 */
export const playSoundOnce = (src: string, volume: number = 1) => {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch((err) => {
    console.warn("User interaction required to play sound:", err);
  });
};
