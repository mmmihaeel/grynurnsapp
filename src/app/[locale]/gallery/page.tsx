import getProducts from '@/actions/get-products';
import Gallery from '@/components/Gallery';
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type MetadataProps = {
    params: { locale: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
    params,
}: MetadataProps): Promise<Metadata> {
    const t = await getTranslations({
        locale: params.locale,
        namespace: 'translations.Metadata',
    });
    return {
        colorScheme: 'light dark',
        title: t('gallery.title'),
        description: t('gallery.description'),
        applicationName: 'grynurnsapp',
        keywords: t('gallery.keywords'),
        referrer: 'strict-origin-when-cross-origin',
        themeColor: '#EDE0D4',
        viewport: 'width=device-width, initial-scale=1',
        creator: 'grynurns@gmail.com',
        publisher: 'grynurns@gmail.com',
        robots: 'index, follow',
        abstract: t('gallery.description'),
        assets: ['/manufacturing', '/favicon', '/products', '/fonts', '/previews'],
        category: 'Memorial',
        openGraph: {
            type: 'website',
            url: 'https://grynurns.com',
            title: t('gallery.title'),
            description: t('gallery.description'),
            siteName: 'Grynurns App',
            images: [
                {
                    url: 'https://grynurns.com/previews/gallery-preview.jpg',
                },
            ],
        },
        appleWebApp: {
            capable: true,
            title: t('gallery.title'),
            startupImage: 'https://grynurns.com/previews/gallery-preview.jpg',
            statusBarStyle: 'black-translucent',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@grynurnsapp',
            creator: '@grynurns@gmail.com',
            images: 'https://grynurns.com/previews/gallery-preview.jpg',
        },
        alternates: {
            canonical: 'https://grynurns.com/gallery',
        },
    };
}

type PageProps = {
    params: { locale: string };
};

const GalleryPage = async ({ params: { locale } }: PageProps) => {
    unstable_setRequestLocale(locale);
    const products = await getProducts();

    return <Gallery products={products} />;
};

export default GalleryPage;