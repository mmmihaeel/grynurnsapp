"use client";

import { ProductsContext } from '@/context/products.context';
import { Product } from '@/types/product.type';
import dynamic from 'next/dynamic';
import { FC } from 'react';
const ManufacturingSection = dynamic(() => import('./Manufacturing/Manufacturing'), { ssr: true });
const HeroSection = dynamic(() => import('./Hero/Hero'), { ssr: true });
const AdvantagesSection = dynamic(() => import('./Advantages/Advantages'), { ssr: true });
const AboutUsSection = dynamic(() => import('./About-us/About-us'), { ssr: true });
const ExhibitionSection = dynamic(() => import('./Exhibition/Exhibition'), { ssr: true });

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