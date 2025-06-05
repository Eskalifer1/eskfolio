import { TIMING } from "@/consts/timing";

/**
 * Delays execution for a specified duration from the TIMING constants.
 * This is a type-safe wrapper around setTimeout that ensures only valid TIMING values are used.
 *
 * @param {keyof typeof TIMING} timingKey - The key from TIMING object specifying the delay duration
 * @returns {Promise<void>} A promise that resolves after the specified delay
 *
 * @example
 * // Wait for the loading screen fade animation duration
 * await delay('LOADING_SCREEN_FADE_ANIMATION');
 */
export function delay(timingKey: keyof typeof TIMING): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, TIMING[timingKey]);
  });
}
