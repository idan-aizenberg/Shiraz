"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale, Dictionary } from "@/i18n/types";

function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-[0.5] blur-[3px] scale-105"
      aria-hidden="true"
    >
      <source src="/mainPageVideo.MP4" type="video/mp4" />
    </video>
  );
}

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative pt-44 md:pt-56 pb-20 md:pb-32 overflow-hidden">
      {/* Blurred background video */}
      <div className="absolute inset-0 -z-10">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center mt-12 md:mt-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/logo.png"
              alt="Shiraz Chen Azulay — Interior Design"
              width={200}
              height={200}
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              priority
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-muted text-base md:text-lg lg:text-xl tracking-wide leading-relaxed mt-12 max-w-3xl"
          >
            {dict.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-14"
          >
            <Button href={`/${locale}/projects`} variant="primary">
              {dict.hero.cta}
            </Button>
            <Button href={`/${locale}/contact`} variant="outline">
              {dict.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
