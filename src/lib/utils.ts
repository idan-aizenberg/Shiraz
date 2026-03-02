import type { Locale } from "@/i18n/types";

/**
 * Simple email validation regex
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Get the direction for a locale
 */
export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "he" ? "rtl" : "ltr";
}

/**
 * Replace {year} placeholder in a string with current year
 */
export function replaceYear(str: string): string {
  return str.replace("{year}", new Date().getFullYear().toString());
}
