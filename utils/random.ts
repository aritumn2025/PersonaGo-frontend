/**
 * Utility functions for random number generation and selection.
 */

/**
 * Generate a random integer between min and max (inclusive).
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random integer between min and max.
 */
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random float between min and max.
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random float between min and max.
 */
function randFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Select a specified number of random items from an array.
 * @param items The array of items to choose from.
 * @param count The number of items to select.
 * @returns An array of randomly selected items.
 */
function randomChoice<T>(items: T[], count: number): T[] {
  if (items.length === 0) return [];
  const shuffled = items.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export { randInt, randFloat, randomChoice };
