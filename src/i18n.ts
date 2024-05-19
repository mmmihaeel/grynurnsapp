import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './i18n.config';

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as Locale)) notFound();

	return {
		messages: (locale === 'uk-UA'
			? await import(`../localization/uk-UA.json`)
			: await import(`../localization/${locale}.json`)
		).default,
		now: new Date(),
	};
});
