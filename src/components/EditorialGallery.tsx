"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EditorialGalleryProps {
  images: string[];
  alt: string;
}

export function EditorialGallery({ images, alt }: EditorialGalleryProps) {
  return (
    <div className="space-y-6 md:space-y-10">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-bg2 to-border">
            {src ? (
              <Image
                src={src}
                alt={`${alt} — ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-heading text-muted/30 text-2xl tracking-[0.3em] uppercase">
                  SCA
                </span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
