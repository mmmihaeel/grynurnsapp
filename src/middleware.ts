import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n.config';

export default createMiddleware({
	locales: locales,

	defaultLocale: defaultLocale,
});

export const config = {
	matcher: ['/', `/(en-GB|de-DE|fr-FR|pl-PL|uk-UA)/:path*`],
};
