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

export const localePrefix = 'never';

export const matcher = `/(${locales.join('|')})/:path*`;

export type AppPathnames = keyof typeof pathnames;

export type Locale = (typeof locales)[number];
