"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/types";

interface LanguageSwitchProps {
  locale: Locale;
}

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const pathname = usePathname();

  function getLocalePath(targetLocale: Locale) {
    // Replace the current locale segment in the path
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  }

  return (
    <div className="flex items-center gap-1 text-sm tracking-widest uppercase">
      <Link
        href={getLocalePath("en")}
        className={`px-1.5 py-0.5 transition-colors duration-200 ${
          locale === "en"
            ? "text-accent font-medium"
            : "text-muted hover:text-text"
        }`}
        aria-label="Switch to English"
      >
        EN
      </Link>
      <span className="text-border">|</span>
      <Link
        href={getLocalePath("he")}
        className={`px-1.5 py-0.5 transition-colors duration-200 ${
          locale === "he"
            ? "text-accent font-medium"
            : "text-muted hover:text-text"
        }`}
        aria-label="עברית"
      >
        HE
      </Link>
    </div>
  );
}
