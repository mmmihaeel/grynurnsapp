import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from './i18n.config';

export default createMiddleware({
	locales: locales,
	pathnames,
	localePrefix,
	defaultLocale: defaultLocale,
	// domains: [
	// 	{
	// 		domain: 'grynurns.com',
	// 		defaultLocale: 'en-GB',
	// 		locales: ['en-GB'],
	// 	},
	// 	{
	// 		domain: 'grynurns.fr',
	// 		defaultLocale: 'fr-FR',
	// 		locales: ['fr-FR'],
	// 	},
	// 	{
	// 		domain: 'grynurns.pl',
	// 		defaultLocale: 'pl-PL',
	// 		locales: ['pl-PL'],
	// 	},
	// 	{
	// 		domain: 'grynurns.de',
	// 		defaultLocale: 'de-DE',
	// 		locales: ['de-DE'],
	// 	},
	// 	{
	// 		domain: 'grynurns.uk',
	// 		defaultLocale: 'en-GB',
	// 		locales: ['en-GB'],
	// 	},
	// 	{
	// 		domain: 'grynurns.com.ua',
	// 		defaultLocale: 'uk-UA',
	// 		locales: ['uk-UA'],
	// 	},
	// ],
});

export const config = {
	matcher: [
		'/',
		`/(en-GB|de-DE|fr-FR|pl-PL|uk-UA)/:path*`,
		'/((?!_next|_vercel|.*\\..*).*)',
	],
};
