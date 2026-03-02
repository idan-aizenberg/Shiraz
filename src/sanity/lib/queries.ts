import { client } from "./client";

export interface SanityProject {
  _id: string;
  title_en: string;
  title_he: string;
  slug: { current: string };
  category_en: string;
  category_he: string;
  location_en: string;
  location_he: string;
  year: string;
  description_en: string;
  description_he: string;
  coverImage: SanityImage;
  images: SanityImage[];
  tags_en: string[];
  tags_he: string[];
  order: number;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

const projectFields = `
  _id,
  title_en,
  title_he,
  "slug": slug.current,
  category_en,
  category_he,
  location_en,
  location_he,
  year,
  description_en,
  description_he,
  coverImage,
  images,
  tags_en,
  tags_he,
  order
`;

export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc, year desc) { ${projectFields} }`
  );
}

export async function getProjectBySlug(
  slug: string
): Promise<SanityProject | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] { ${projectFields} }`,
    { slug }
  );
}

export async function getAllSlugs(): Promise<string[]> {
  return client.fetch(`*[_type == "project"].slug.current`);
}
