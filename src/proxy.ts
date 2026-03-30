import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "he"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files, api routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.includes(".") // static files (images, fonts, etc.)
  ) {
    return;
  }

  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|studio|favicon.ico|projects/|textures/).*)"],
};
