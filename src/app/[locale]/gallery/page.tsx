import getProducts from '@/actions/get-products';
import Gallery from '@/components/Gallery';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    params: { locale: string };
};

const GalleryPage = async ({ params: { locale } }: Props) => {
    unstable_setRequestLocale(locale);
    const products = await getProducts();

    return <Gallery products={products} />;
};

export default GalleryPage;