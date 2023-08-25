import { NextResponse } from "next/server";

export type Locale = "en" | "ge";

let locales: Locale[] = ["en", "ge"];

import { cookies } from "next/headers";

// Get the preferred locale, similar to above or using a library
export function middleware(request: any) {
  const cookieStore = cookies();
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  let pathLocale = "en";
  const pathnameIsMissingLocale = locales.every((locale) => {
    if (!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`) {
      return true;
    }
    pathLocale = locale;
    return false;
  });

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = cookieStore.get("locale")?.value ?? "en";

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    const res = NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );

    res.cookies.set("locale", "en");
    return res;
  }

  const res = NextResponse.next();

  res.cookies.set("locale", pathLocale);

  return res;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
