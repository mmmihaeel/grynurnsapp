'use server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Mariupol } from '../fonts';
import { defaultLocale, locales } from '@/i18n/routing';


export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const MainLayout = async ({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) => {
    const messages = await getMessages();
    setRequestLocale(locale);

    console.log(locale, defaultLocale);

    return (
        <html lang={locale} className={Mariupol.className}>
            <head>
                <base href="/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="favicon/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="favicon/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="favicon/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="favicon/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="favicon/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="favicon/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="favicon/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="favicon/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="favicon/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="favicon/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="favicon/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="144x144"
                    href="favicon/android-icon-144x144.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="favicon/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="favicon/favicon-16x16.png"
                />
                <link rel="webmanifest" href="favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="favicon/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="format-detection"
                    content="telephone=no, date=no, email=no, address=no"
                />
            </head>
            <body className="app-wrapper">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default MainLayout;
