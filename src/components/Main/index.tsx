"use client";

import { ProductsContext } from '@/context/products.context';
import { Product } from '@/types/product.type';
import dynamic from 'next/dynamic';
import { FC } from 'react';
const ManufacturingSection = dynamic(() => import('./Manufacturing/Manufacturing'), { ssr: false });
const HeroSection = dynamic(() => import('./Hero/Hero'), { ssr: false });
const AdvantagesSection = dynamic(() => import('./Advantages/Advantages'), { ssr: false });
const AboutUsSection = dynamic(() => import('./About-us/About-us'), { ssr: false });
const ExhibitionSection = dynamic(() => import('./Exhibition/Exhibition'), { ssr: false });

type Props = {
    products: Product[];
};

const Main: FC<Props> = ({ products }) => {
    return <ProductsContext.Provider value={products}>
        <HeroSection />
        <AboutUsSection />
        <AdvantagesSection />
        <ManufacturingSection />
        <ExhibitionSection />
    </ProductsContext.Provider>;
};

export default Main;