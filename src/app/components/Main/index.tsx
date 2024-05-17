import dynamic from 'next/dynamic';
import { FC } from 'react';
const ManufacturingSection = dynamic(() => import('./Manufacturing/Manufacturing'), { ssr: false });
const HeroSection = dynamic(() => import('./Hero/Hero'), { ssr: false });

const Main: FC = () => {
    return <>
        <HeroSection />
        <ManufacturingSection />
    </>;
};

export default Main;