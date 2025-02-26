import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

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
};

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const routing = defineRouting({
	locales,
	defaultLocale,
	pathnames,
	localePrefix: 'as-needed',
	domains: [
		{
			domain: String(process.env.VERCEL_URL),
			defaultLocale: 'en-GB',
			locales: ['en-GB'],
		},
		{
			domain: String(process.env.COM_DOMAIN),
			defaultLocale: 'en-GB',
			locales: ['en-GB'],
		},
		{
			domain: String(process.env.FR_DOMAIN),
			defaultLocale: 'fr-FR',
		},
		{
			domain: String(process.env.PL_DOMAIN),
			defaultLocale: 'pl-PL',
		},
		{
			domain: String(process.env.DE_DOMAIN),
			defaultLocale: 'de-DE',
		},
		{
			domain: String(process.env.EN_DOMAIN),
			defaultLocale: 'en-GB',
		},
		{
			domain: String(process.env.UK_DOMAIN),
			defaultLocale: 'uk-UA',
		},
	],
	alternateLinks: true,
	localeDetection: false,
	localeCookie: false,
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createNavigation(routing);
