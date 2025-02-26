"use client";
import { defaultLocale } from '@/i18n/routing';
import { redirect, usePathname } from 'next/navigation';

export default function RootPage() {
    const pathname = usePathname();
    redirect(`/${defaultLocale}/${pathname}`);
}