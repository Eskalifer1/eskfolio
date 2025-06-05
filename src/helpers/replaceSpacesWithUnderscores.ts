/**
 * Replaces all spaces in a string with underscores.
 * @param {string} text - The input string to be processed.
 * @returns {string} A new string with all spaces replaced by underscores.
 */
function replaceSpacesWithUnderscores(text: string): string {
  return text.replace(/\s/g, "_");
}

export default replaceSpacesWithUnderscores;
