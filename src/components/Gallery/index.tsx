"use client";
import styles from './Gallery.module.scss';
import { ProductsContext } from '@/context/products.context';
import { Product } from '@/types/product.type';
import { motion } from 'framer-motion';
import { FC } from 'react';
import Composition from '../Composition/Composition';
import { useTranslations } from 'next-intl';

type Props = {
    products: Product[];
};

const Gallery: FC<Props> = ({ products }) => {
    const t = useTranslations('translations.gallery');

    return <ProductsContext.Provider value={products}>
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id="exhibition-section"
            className={styles.gallery}
        >
            <motion.h2
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 1 }}
                className={styles.gallery_title}
                dangerouslySetInnerHTML={{ __html: t.raw('h1-title') }}
            />
            <Composition
                products={products.map((p) => {
                    return {
                        product: p,
                        textOrder: 1,
                        imageOrder: 0,
                    };
                })}
            />
        </motion.section>
    </ProductsContext.Provider>;
};

export default Gallery;