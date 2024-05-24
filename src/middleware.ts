import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from './i18n.config';

export default createMiddleware({
	locales: locales,
	pathnames,
	localePrefix,
	defaultLocale: defaultLocale,
	alternateLinks: true,
	domains: [
		{
			domain: String(process.env.VERCEL_URL),
			defaultLocale: 'en-GB',
			locales: ['en-GB', 'de-DE', 'fr-FR', 'pl-PL', 'uk-UA'],
		},
		{
			domain: String(process.env.COM_DOMAIN),
			defaultLocale: 'en-GB',
			locales: ['en-GB', 'de-DE', 'fr-FR', 'pl-PL', 'uk-UA'],
		},
		{
			domain: String(process.env.FR_DOMAIN),
			defaultLocale: 'fr-FR',
			locales: ['fr-FR'],
		},
		{
			domain: String(process.env.PL_DOMAIN),
			defaultLocale: 'pl-PL',
			locales: ['pl-PL'],
		},
		{
			domain: String(process.env.DE_DOMAIN),
			defaultLocale: 'de-DE',
			locales: ['de-DE'],
		},
		{
			domain: String(process.env.EN_DOMAIN),
			defaultLocale: 'en-GB',
			locales: ['en-GB'],
		},
		{
			domain: String(process.env.UK_DOMAIN),
			defaultLocale: 'uk-UA',
			locales: ['uk-UA'],
		},
	],
});

// export const config = {
// 	matcher: [
// 		'/',
// 		`/(en-GB|de-DE|fr-FR|pl-PL|uk-UA)/:path*`,
// 		'/((?!_next|_vercel|.*\\..*).*)',
// 	],
// };
