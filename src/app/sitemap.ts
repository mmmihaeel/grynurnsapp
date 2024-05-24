import { defaultLocale, locales, pathnames } from '@/i18n.config';
import { getPathname } from '@/navigation';
import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function sitemap(): MetadataRoute.Sitemap {
	const headersList = headers();
	const currentHost = headersList.get('host');

	const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

	function getUrl(
		key: keyof typeof pathnames,
		locale: (typeof locales)[number]
	) {
		const pathname = getPathname({ locale, href: key });

		const host =
			locale === defaultLocale ? currentHost : getLocaleSpecificHost(locale);

		return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
	}

	function getLocaleSpecificHost(locale: string): string {
		switch (locale) {
			case 'fr-FR':
				return String(process.env.FR_DOMAIN);
			case 'pl-PL':
				return String(process.env.PL_DOMAIN);
			case 'uk-UA':
				return String(process.env.UK_DOMAIN);
			case 'en-GB':
				return String(process.env.EN_DOMAIN);
			case 'de-DE':
				return String(process.env.DE_DOMAIN);
			default:
				return String(currentHost);
		}
	}

	return keys.map((key) => ({
		url: getUrl(key, defaultLocale),
		alternates: Object.fromEntries(
			locales.map((locale) => [locale, getUrl(key, locale)])
		),
	}));
}
