import type { SanityProject } from "./queries";
import { urlFor } from "./image";
import type { Locale } from "@/i18n/types";

export interface NormalizedProject {
  slug: string;
  title: { en: string; he: string };
  category: { en: string; he: string };
  location: { en: string; he: string };
  year: string;
  coverImageUrl: string;
  imageUrls: string[];
  description: { en: string; he: string };
  tags: { en: string[]; he: string[] };
}

export function normalizeProject(p: SanityProject): NormalizedProject {
  return {
    slug: typeof p.slug === "string" ? p.slug : p.slug?.current ?? "",
    title: { en: p.title_en || "", he: p.title_he || "" },
    category: { en: p.category_en || "", he: p.category_he || "" },
    location: { en: p.location_en || "", he: p.location_he || "" },
    year: p.year || "",
    coverImageUrl: p.coverImage
      ? urlFor(p.coverImage).width(800).quality(80).url()
      : "",
    imageUrls: (p.images || []).map((img) =>
      urlFor(img).width(1600).quality(80).url()
    ),
    description: { en: p.description_en || "", he: p.description_he || "" },
    tags: {
      en: p.tags_en || [],
      he: p.tags_he || [],
    },
  };
}
