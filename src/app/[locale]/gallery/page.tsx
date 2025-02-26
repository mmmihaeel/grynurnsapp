import getProducts from '@/actions/get-products';
import Gallery from '@/components/Gallery';
import { Metadata, Viewport } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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
        title: t('gallery.title'),
        description: t('gallery.description'),
        applicationName: 'grynurnsapp',
        keywords: t('gallery.keywords'),
        referrer: 'strict-origin-when-cross-origin',
        creator: 'grynurns@gmail.com',
        publisher: 'grynurns@gmail.com',
        robots: 'index, follow',
        abstract: t('gallery.description'),
        assets: ['/manufacturing', '/favicon', '/products', '/fonts', '/previews'],
        category: 'Memorial',
        openGraph: {
            type: 'website',
            url: String(process.env.COM_DOMAIN),
            title: t('gallery.title'),
            description: t('gallery.description'),
            siteName: 'Grynurns App',
            images: [
                {
                    url: `${String(process.env.COM_DOMAIN)}/previews/gallery-preview.jpg`,
                },
            ],
        },
        appleWebApp: {
            capable: true,
            title: t('gallery.title'),
            startupImage: `${String(process.env.COM_DOMAIN)}/previews/gallery-preview.jpg`,
            statusBarStyle: 'black-translucent',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@grynurnsapp',
            creator: '@grynurns@gmail.com',
            images: `${String(process.env.COM_DOMAIN)}/previews/gallery-preview.jpg`,
        },
        alternates: {
            canonical: `${String(process.env.COM_DOMAIN)}/gallery`,
        },
    };
}

export async function generateViewport(): Promise<Viewport> {
    return {
        colorScheme: 'light dark',
        themeColor: '#EDE0D4',
    };
}

type PageProps = {
    params: { locale: string };
};

const GalleryPage = async ({ params: { locale } }: PageProps) => {
    setRequestLocale(locale);
    const products = await getProducts();

    return <Gallery products={products} />;
};

export default GalleryPage;