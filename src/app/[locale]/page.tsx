'use server';
import getProducts from '@/actions/get-products';
import Main from '@/components/Main';
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
        title: t('main.title'),
        description: t('main.description'),
        applicationName: 'grynurnsapp',
        keywords: t('main.keywords'),
        referrer: 'strict-origin-when-cross-origin',
        creator: 'grynurns@gmail.com',
        publisher: 'grynurns@gmail.com',
        robots: 'index, follow',
        abstract: t('main.description'),
        assets: ['/manufacturing', '/favicon', '/products', '/fonts', '/previews'],
        category: 'Memorial',
        openGraph: {
            type: 'website',
            url: String(process.env.COM_DOMAIN),
            title: t('main.title'),
            description: t('main.description'),
            siteName: 'Grynurns App',
            images: [
                {
                    url: `${String(process.env.COM_DOMAIN)}/previews/main-preview.jpg`,
                },
            ],
        },
        appleWebApp: {
            capable: true,
            title: t('main.title'),
            startupImage: `${String(process.env.COM_DOMAIN)}/previews/main-preview.jpg`,
            statusBarStyle: 'black-translucent',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@grynurnsapp',
            creator: '@grynurns@gmail.com',
            images: `${String(process.env.COM_DOMAIN)}/previews/main-preview.jpg`,
        },
        alternates: {
            canonical: `${String(process.env.COM_DOMAIN)}`,
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

const MainPage = async ({ params: { locale } }: PageProps) => {
    setRequestLocale(locale);
    const products = await getProducts();
    return <Main products={products} />;
};

export default MainPage;
