export interface Project {
  slug: string;
  title: { en: string; he: string };
  category: { en: string; he: string };
  location: { en: string; he: string };
  year: string;
  coverImage: string;
  images: string[];
  description: { en: string; he: string };
  tags: { en: string[]; he: string[] };
}

// Placeholder image paths — replace with real images later
const img = (n: number) => `/projects/placeholder-${n}.jpg`;

export const projects: Project[] = [
  {
    slug: "urban-serenity",
    title: {
      en: "Urban Serenity",
      he: "שלווה עירונית",
    },
    category: {
      en: "Residential",
      he: "מגורים",
    },
    location: {
      en: "Tel Aviv",
      he: "תל אביב",
    },
    year: "2024",
    coverImage: img(1),
    images: [img(1), img(2), img(3), img(4), img(5), img(6)],
    description: {
      en: "A serene two-bedroom apartment in central Tel Aviv, transformed into a light-filled sanctuary. The design balances warm oak floors, micro-cement walls, and curated vintage pieces to create a space that feels both modern and timeless.",
      he: "דירת שני חדרים שקטה במרכז תל אביב, שהפכה למקלט מלא אור. העיצוב משלב רצפות אלון חמות, קירות מיקרו-צמנט ופריטי וינטג' נבחרים ליצירת חלל מודרני ועל-זמני.",
    },
    tags: {
      en: ["Residential", "Renovation", "Minimal"],
      he: ["מגורים", "שיפוץ", "מינימלי"],
    },
  },
  {
    slug: "coastal-light",
    title: {
      en: "Coastal Light",
      he: "אור חופי",
    },
    category: {
      en: "Penthouse",
      he: "פנטהאוז",
    },
    location: {
      en: "Herzliya",
      he: "הרצליה",
    },
    year: "2024",
    coverImage: img(2),
    images: [img(2), img(3), img(4), img(5), img(6), img(7), img(8)],
    description: {
      en: "A panoramic penthouse overlooking the Mediterranean, designed to dissolve the boundary between interior and horizon. Floor-to-ceiling glass, linen textures, and a muted coastal palette bring the sea inside.",
      he: "פנטהאוז פנורמי עם נוף לים התיכון, שעוצב כדי לטשטש את הגבול בין הפנים לאופק. זכוכית מרצפה עד תקרה, מרקמי פשתן ופלטה חופית מאופקת מכניסים את הים פנימה.",
    },
    tags: {
      en: ["Penthouse", "Luxury", "Coastal"],
      he: ["פנטהאוז", "יוקרה", "חופי"],
    },
  },
  {
    slug: "earth-tones",
    title: {
      en: "Earth Tones",
      he: "גווני אדמה",
    },
    category: {
      en: "Residential",
      he: "מגורים",
    },
    location: {
      en: "Jerusalem",
      he: "ירושלים",
    },
    year: "2023",
    coverImage: img(3),
    images: [img(3), img(4), img(5), img(6), img(7), img(8), img(9)],
    description: {
      en: "A Jerusalem stone residence reimagined with earthy warmth. Natural plaster, terracotta accents, and handcrafted ceramics complement the existing architecture, creating a dialogue between old and new.",
      he: "בית אבן ירושלמי שעוצב מחדש עם חמימות אדמתית. טיח טבעי, גוונים של טרקוטה וקרמיקה בעבודת יד משלימים את האדריכלות הקיימת ויוצרים דיאלוג בין ישן לחדש.",
    },
    tags: {
      en: ["Residential", "Heritage", "Natural Materials"],
      he: ["מגורים", "מורשת", "חומרים טבעיים"],
    },
  },
  {
    slug: "minimal-warmth",
    title: {
      en: "Minimal Warmth",
      he: "חמימות מינימלית",
    },
    category: {
      en: "Family Home",
      he: "בית משפחה",
    },
    location: {
      en: "Ramat Gan",
      he: "רמת גן",
    },
    year: "2023",
    coverImage: img(4),
    images: [img(4), img(5), img(6), img(7), img(8), img(9), img(10)],
    description: {
      en: "A family home stripped back to essentials — clean lines, warm wood, and soft textiles. Every element was chosen for both beauty and function, creating rooms that invite presence and calm.",
      he: "בית משפחתי שחזר ליסודות — קווים נקיים, עץ חם וטקסטיל רך. כל אלמנט נבחר גם ליופי וגם לפונקציה, ויוצר חדרים שמזמינים נוכחות ושלווה.",
    },
    tags: {
      en: ["Family", "Minimal", "Warm"],
      he: ["משפחה", "מינימלי", "חם"],
    },
  },
  {
    slug: "soft-geometry",
    title: {
      en: "Soft Geometry",
      he: "גיאומטריה רכה",
    },
    category: {
      en: "Studio",
      he: "סטודיו",
    },
    location: {
      en: "Haifa",
      he: "חיפה",
    },
    year: "2023",
    coverImage: img(5),
    images: [img(5), img(6), img(7), img(8), img(9), img(10)],
    description: {
      en: "A compact studio in the Carmel neighborhood, designed around curves and arches. Rounded niches, soft plaster finishes, and warm lighting transform a small footprint into a space that feels expansive and inviting.",
      he: "סטודיו קומפקטי בשכונת הכרמל, שעוצב סביב עקומות וקשתות. נישות מעוגלות, גימורי טיח רכים ותאורה חמה הופכים שטח קטן למרחב שמרגיש מזמין ופתוח.",
    },
    tags: {
      en: ["Studio", "Arches", "Compact"],
      he: ["סטודיו", "קשתות", "קומפקטי"],
    },
  },
  {
    slug: "golden-hour",
    title: {
      en: "Golden Hour",
      he: "שעת הזהב",
    },
    category: {
      en: "Villa",
      he: "וילה",
    },
    location: {
      en: "Caesarea",
      he: "קיסריה",
    },
    year: "2022",
    coverImage: img(6),
    images: [img(6), img(7), img(8), img(9), img(10), img(1), img(2), img(3)],
    description: {
      en: "A seaside villa designed to capture golden-hour light in every room. Travertine floors, brass detailing, and floor-to-ceiling windows frame views of the garden and sea beyond.",
      he: "וילה על חוף הים שתוכננה ללכוד את אור שעת הזהב בכל חדר. רצפות טרוורטין, פרטי פליז וחלונות מרצפה עד תקרה ממסגרים נופים של הגינה והים מעבר.",
    },
    tags: {
      en: ["Villa", "Luxury", "Coastal"],
      he: ["וילה", "יוקרה", "חופי"],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
