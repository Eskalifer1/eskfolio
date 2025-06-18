/**
 * Inserts zero-width space (soft break) characters into a string at regular intervals.
 * This helps with text wrapping for long unbroken strings.
 *
 * @param {string} str - The input string to process.
 * @param {number} [every=5] - The interval at which to insert soft breaks (default: 5 characters).
 * @returns {string} The string with zero-width spaces inserted at the specified intervals.
 *
 * @example
 * // returns "abcde\u200Bfghij\u200Bk"
 * insertSoftBreaks("abcdefghijk");
 *
 * @example
 * // returns "abcd\u200Befgh\u200Bijk"
 * insertSoftBreaks("abcdefghijk", 4);
 */
export function insertSoftBreaks(str: string, every: number = 5): string {
  return str
    .split("")
    .map((char, i) => (i > 0 && i % every === 0 ? "\u200B" : "") + char)
    .join("");
}
