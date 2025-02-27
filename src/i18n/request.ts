import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !routing.locales.includes(locale as 'uk-UA')) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (locale === 'uk-UA'
			? await import(`../../localization/uk-UA.json`)
			: await import(`../../localization/${locale}.json`)
		).default,
		now: new Date(),
	};
});
