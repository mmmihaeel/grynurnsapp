'use server';
import { defaultLocale } from '@/i18n.config';
import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
	const locale = defaultLocale;
	const t = await getTranslations({
		locale,
		namespace: 'translations.Manifest',
	});

	return {
		name: t('name'),
		start_url: '/',
		theme_color: '#EDE0D4',
	};
}
