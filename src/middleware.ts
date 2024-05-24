import createMiddleware from 'next-intl/middleware';
import {
	defaultLocale,
	domains,
	localePrefix,
	locales,
	pathnames,
} from './i18n.config';

export default createMiddleware({
	locales: locales,
	pathnames,
	localePrefix,
	defaultLocale: defaultLocale,
	alternateLinks: true,
	domains,
});

export const config = {
	matcher: [
		'/',
		`/(en-GB|de-DE|fr-FR|pl-PL|uk-UA)/:path*`,
		'/((?!_next|_vercel|.*\\..*).*)',
	],
};
