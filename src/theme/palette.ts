import { Section } from "@/consts/sections";

type Palette = {
  "--color-background": string;
  "--color-primary": string;
  "--color-secondary": string;
  "--color-accent": string;
  "--color-border": string;
  "--font-family": string;
  "--shadow-soft": string;
  "--shadow-hard": string;
};

export const palette: Record<Section, Palette> = {
  hero: {
    "--color-background": "#e0e0e0",
    "--color-primary": "#001f3f",
    "--color-secondary": "#e0e0e0",
    "--color-accent": "#bebebe",
    "--color-border": "#eaeaea",
    "--font-family": "'Orbitron', sans-serif",

    "--shadow-soft": "-5px 5px 10px #989898, 5px -5px 10px #ffffff",
    "--shadow-hard": "5px -5px 10px #989898, -5px 5px 10px #ffffff",
  },
  about: {
    "--color-background": "#f3e7d3",
    "--color-primary": "#fdf6e3",
    "--color-secondary": "#331504",
    "--color-accent": "#d6b98c",
    "--color-border": "#7b4b27",
    "--font-family": "'Spectral', 'Orbitron', sans-serif",

    "--shadow-soft": "0 4px 12px rgba(0, 0, 0, 0.5)",
    "--shadow-hard": "0 -4px 12px rgba(0, 0, 0, 0.5)",
  },
  skills: {
    "--color-background": "#0a0e1a",
    "--color-primary": "#ffffff",
    "--color-secondary": "#1e2a38",
    "--color-accent": "#6c9bd2",
    "--color-border": "#2c3e50",

    "--font-family": "'Quicksand', 'Orbitron', sans-serif",

    "--shadow-soft": "0 4px 20px rgba(108, 155, 210, 0.2)",
    "--shadow-hard": "0 0 16px rgba(108, 155, 210, 0.4)",
  },
  // @ts-expect-error eslint-disable-next-line
  projects: {},
};

/**
 * Retrieves CSS styles for a given section, converting custom CSS properties
 * to a format compatible with React's style prop.
 *
 * @param {Section} section - The section identifier (e.g., 'hero', 'about', etc.)
 * @returns {React.CSSProperties} React-compatible style object
 *
 * @description
 * This function was created to solve the TypeScript error:
 * "Type 'Palette' has no properties in common with type 'Properties<string | number, string & {}>'"
 * which occurs when trying to use CSS custom properties (variables) directly in React's style object.
 *
 * The function performs type assertion to ensure our palette configuration (which contains
 * CSS variables like '--color-background') is treated as valid React CSS properties.
 *
 * @example
 * // Usage in a component
 * <div style={getSectionStyles('hero')}>
 *   Section content
 * </div>
 *
 * @see {@link Palette} for the source type containing CSS custom properties
 * @see {@link https://reactjs.org/docs/dom-elements.html#style React style documentation}
 */
export function getSectionStyles(section: Section): React.CSSProperties {
  return palette[section] as React.CSSProperties;
}
