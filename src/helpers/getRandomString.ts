/**
 * A string containing the set of letters used for random string generation.
 * Note: Some letters from the English alphabet are intentionally excluded.
 */
const letters = "abcdefghijklnopstuvxyz";

/**
 * Generates a single random character from the predefined letters set.
 * @returns {string} A single random character.
 */
export function getRandomLetter(): string {
  return letters[Math.floor(Math.random() * letters.length)];
}

/**
 * Generates a random string of specified length using characters from the predefined set.
 * @param {number} length - The length of the random string to generate.
 * @returns {string} A randomly generated string of the specified length.
 * @example
 * // returns a 5-character random string like "abxzd"
 * getRandomString(5);
 */
export function getRandomString(length: number): string {
  return Array.from({ length }, getRandomLetter).join("");
}
