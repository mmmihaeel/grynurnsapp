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

const domains = [
	{
		domain: String(process.env.VERCEL_URL),
		defaultLocale: 'en-GB' as const,
		locales: ['en-GB' as const],
	},
	{
		domain: String(process.env.COM_DOMAIN),
		defaultLocale: 'en-GB' as const,
		locales: ['en-GB' as const],
	},
	{
		domain: String(process.env.FR_DOMAIN),
		defaultLocale: 'fr-FR' as const,
		locales: ['fr-FR' as const],
	},
	{
		domain: String(process.env.PL_DOMAIN),
		defaultLocale: 'pl-PL' as const,
		locales: ['pl-PL' as const],
	},
	{
		domain: String(process.env.DE_DOMAIN),
		defaultLocale: 'de-DE' as const,
		locales: ['de-DE' as const],
	},
	{
		domain: String(process.env.EN_DOMAIN),
		defaultLocale: 'en-GB' as const,
		locales: ['en-GB' as const],
	},
	{
		domain: String(process.env.UK_DOMAIN),
		defaultLocale: 'uk-UA' as const,
		locales: ['uk-UA' as const],
	},
];

export const routing = defineRouting({
	locales,
	defaultLocale,
	pathnames,
	localePrefix: 'as-needed',
	domains: domains,
	alternateLinks: true,
	localeDetection: true,
	localeCookie: true,
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createNavigation(routing);
