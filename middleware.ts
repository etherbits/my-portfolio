import { NextResponse } from "next/server";

export type Locale = "en" | "ge";

let locales: Locale[] = ["en", "ge"];

// Get the preferred locale, similar to above or using a library
function getLocale(request: any) {
  return "en";
}

export function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
