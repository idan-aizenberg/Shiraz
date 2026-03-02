import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/types";
import type { Dictionary } from "@/i18n/types";
import { replaceYear } from "@/lib/utils";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/logo.png"
                alt="Shiraz Chen Azulay — Interior Design"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
              />
            </Link>
            <p className="text-xs tracking-[0.2em] uppercase text-muted">
              Shiraz Chen Azulay
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-muted/70">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-sm text-muted">
            <a
              href={`mailto:${dict.contact.info.email}`}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              {dict.contact.info.email}
            </a>
            <a
              href={`tel:${dict.contact.info.phone.replace(/[\s-]/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {dict.contact.info.phone}
            </a>
            <a
              href="https://www.instagram.com/shirazazulay/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              {dict.contact.info.instagram}
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2 text-sm text-muted">
            <Link
              href={`/${locale}`}
              className="hover:text-accent transition-colors duration-200"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="hover:text-accent transition-colors duration-200"
            >
              {dict.nav.projects}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hover:text-accent transition-colors duration-200"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted/60 tracking-wide">
            {replaceYear(dict.footer.copyright)}
          </p>
        </div>
      </div>
    </footer>
  );
}
