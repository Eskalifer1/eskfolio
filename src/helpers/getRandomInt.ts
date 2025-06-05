/**
 * Generates a random integer between the specified minimum (inclusive) and maximum (exclusive).
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (exclusive).
 * @returns {number} A random integer between min (inclusive) and max (exclusive).
 * @throws {RangeError} If min is greater than or equal to max.
 *
 * @example
 * // Returns a random integer between 0 (inclusive) and 10 (exclusive)
 * const randomNum = getRandomInt(0, 10);
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
