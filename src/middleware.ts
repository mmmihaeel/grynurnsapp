import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "fr", "pl", "uk"],

  // Used when no locale matches
  defaultLocale: "uk",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(uk|en|fr|pl|de)/:path*"],
};
