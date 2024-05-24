import { Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: `http://localhost:${port}`;

export const defaultLocale = 'uk-UA' as const;
export const locales = ['en-GB', 'de-DE', 'fr-FR', 'pl-PL', 'uk-UA'] as const;

export const pathnames = {
	'/': '/',
	'/gallery': {
		'en-GB': '/gallery',
		'de-DE': '/galerie',
		'fr-FR': '/galerie',
		'pl-PL': '/galeria',
		'uk-UA': '/галерея',
	},
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always';

export const domains = [
	{
		domain: String(process.env.VERCEL_URL),
		defaultLocale: 'en-GB' as Locale,
		locales: ['en-GB', 'de-DE', 'fr-FR', 'pl-PL', 'uk-UA'] as Locale[],
	},
	{
		domain: String(process.env.COM_DOMAIN),
		defaultLocale: 'en-GB' as Locale,
		locales: ['en-GB', 'de-DE', 'fr-FR', 'pl-PL', 'uk-UA'] as Locale[],
	},
	{
		domain: String(process.env.FR_DOMAIN),
		defaultLocale: 'fr-FR' as Locale,
		locales: ['fr-FR'] as Locale[],
	},
	{
		domain: String(process.env.PL_DOMAIN),
		defaultLocale: 'pl-PL' as Locale,
		locales: ['pl-PL'] as Locale[],
	},
	{
		domain: String(process.env.DE_DOMAIN),
		defaultLocale: 'de-DE' as Locale,
		locales: ['de-DE'] as Locale[],
	},
	{
		domain: String(process.env.EN_DOMAIN),
		defaultLocale: 'en-GB' as Locale,
		locales: ['en-GB'] as Locale[],
	},
	{
		domain: String(process.env.UK_DOMAIN),
		defaultLocale: 'uk-UA' as Locale,
		locales: ['uk-UA'] as Locale[],
	},
];

export const matcher = `/(${locales.join('|')})/:path*`;

export type AppPathnames = keyof typeof pathnames;

export type Locale = (typeof locales)[number];
