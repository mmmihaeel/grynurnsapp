"use server";
import getProducts from '@/actions/get-products';
import Main from '@/components/Main';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    params: { locale: string };
};

const MainPage = async ({ params: { locale } }: Props) => {
    unstable_setRequestLocale(locale);
    const products = await getProducts();

    return <Main products={products} />;
};

export default MainPage;