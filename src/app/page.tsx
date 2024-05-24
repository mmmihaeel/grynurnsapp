"use server";

// import { defaultLocale } from '@/i18n.config';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { domains } from '@/i18n.config';

export default function RootPage() {
    const headersList = headers();
    const domain = headersList.get('host');
    console.log(domain);
    const defaultLocale = domains.find((d) => d.domain === domain)?.defaultLocale;

    redirect(`/${defaultLocale}`);
}