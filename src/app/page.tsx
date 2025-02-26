"use server";

import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/routing';


export default async function RootPage() {
    redirect(`/${defaultLocale}`);
}