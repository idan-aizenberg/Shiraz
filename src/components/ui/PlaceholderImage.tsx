import Image from "next/image";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

// Warm-toned base64 placeholder (tiny 1x1 pixel)
const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AKwA//9k=";

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes,
}: PlaceholderImageProps) {
  // Use a warm gradient fallback div when no real image exists
  const isPlaceholder = src.includes("placeholder");

  if (isPlaceholder || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-bg2 to-border ${className}`}
        style={
          fill
            ? { position: "absolute", inset: 0 }
            : { width: width ?? "100%", height: height ?? 400 }
        }
        role="img"
        aria-label={alt}
      >
        {/* Replace with real images later */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-heading text-muted/30 text-2xl tracking-[0.3em] uppercase">
            SCA
          </span>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={`object-cover ${className}`}
      placeholder="blur"
      blurDataURL={blurDataURL}
      priority={priority}
      sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
    />
  );
}
