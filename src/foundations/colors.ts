import { palette } from "./palette";

/**
 * Supported Xyranthian themes
 */
export type Theme = "light" | "dark";

/**
 * Fetches the current Xyranthian theme
 */
const getCurrentTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

/**
 * Fetches the expected color to match the theme
 * @param light - Light mode color
 * @param dark - Dark mode counterpart
 * @returns color that matches current theme
 */
const themeAware = (light: string, dark: string): string => {
  return getCurrentTheme() === "dark" ? dark : light;
};

/**
 * Xyranthian colors
 */
export const Colors = {
  primary100: themeAware(palette.neutral000, palette.neutral800),
  surface: themeAware(palette.neutral050, palette.neutral700),
  border: themeAware(palette.neutral200, palette.neutral600),
  textPrimary: themeAware(palette.neutral900, palette.neutral050),
  textSecondary: themeAware(palette.neutral500, palette.neutral400),

  /**
   * Default link color
   */
  textMuted: themeAware(palette.neutral500, palette.neutral500),
  /**
   * Hover link color
   */
  textDefault: themeAware(palette.neutral800, palette.neutral800),
  /**
   * Active/current page
   */
  textStrong: themeAware(palette.neutral900, palette.neutral900),

  accent100: palette.primary600,

  success: palette.success500,
  warning: palette.warning500,
  error: palette.error500,

  indigo: palette.indigo500,
  coral: palette.coral500,
  sky: palette.sky500,
  emerald: palette.emerald500,
};
