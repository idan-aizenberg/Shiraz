"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import type { Locale } from "@/i18n/types";
import type { Dictionary } from "@/i18n/types";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [locale]);

  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.about, href: `/${locale}#about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Shiraz Chen Azulay — Interior Design"
            width={36}
            height={36}
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-text leading-tight">
              Shiraz Chen Azulay
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted leading-tight">
              {dict.footer.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-muted hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:start-0 after:h-px after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitch locale={locale} />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitch locale={locale} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px bg-text transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-text transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="px-6 pt-4 pb-6 flex flex-col gap-4 bg-bg/95 backdrop-blur-md border-b border-border"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wide text-muted hover:text-accent transition-colors duration-200 py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
