'use client';

import styles from './Gallery.module.scss';
import { ProductsContext } from '@/context/products.context';
import { Product } from '@/types/product.type';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import React from 'react';
const GallerySection4 = dynamic(() => import('./GallerySection4/GallerySection4'), { ssr: false });
const GallerySection2 = dynamic(() => import('./GallerySection2/GallerySection2'), { ssr: false });
const GallerySection6 = dynamic(() => import('./GallerySection6/GallerySection6'), { ssr: false });
const Composition = dynamic(() => import('../Composition/Composition'), { ssr: false });
const AdvantagesSection = dynamic(() => import('./Advantages/Advantages'), { ssr: false });

type Props = {
    products: Product[];
};

const Gallery: FC<Props> = ({ products }) => {
    const t = useTranslations('translations.gallery');

    return (
        <ProductsContext.Provider value={products}>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id="gallery-section-1"
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
                    products={[
                        {
                            product: products.find(
                                (product) => product.id === 'Heart-of-Memories'
                            ) as Product,
                            textOrder: 1,
                            imageOrder: 0,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Eternal-Rest-(Red)'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Embrace-of-Eternity-(Red)'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 4,
                        },
                    ]}
                />
            </motion.section>
            <AdvantagesSection />
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id="gallery-section-1"
                className={styles.gallery}
            >
                <Composition
                    products={[
                        {
                            product: products.find(
                                (product) => product.id === 'Celestial-Peace'
                            ) as Product,
                            textOrder: 1,
                            imageOrder: 0,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Golden-Remembrance'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Earthstone-Memory'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 4,
                        },
                    ]}
                />
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id="gallery-section-2"
                className={styles.gallery}
            >
                <GallerySection2 product={products?.find((p) => p.id === 'Vault-of-Memories') as Product} />
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id="gallery-section-3"
                className={styles.gallery}
            >
                <Composition
                    products={[
                        {
                            product: products.find(
                                (product) => product.id === 'Eternal-Rest-(Blue)'
                            ) as Product,
                            textOrder: 1,
                            imageOrder: 0,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Blue-Harmony'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Talisman-of-the-Heart'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 4,
                        },
                    ]}
                />
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id="gallery-section-4"
                className={styles.gallery}
            >
                <GallerySection4 />
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id="gallery-section-5"
                className={styles.gallery}
            >
                <Composition
                    products={[
                        {
                            product: products.find(
                                (product) => product.id === 'Gray-Elegant'
                            ) as Product,
                            textOrder: 1,
                            imageOrder: 0,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Mysterious-Glare'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Peace-of-mind'
                            ) as Product,
                            textOrder: -1,
                            imageOrder: 4,
                        },
                    ]}
                />
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id="gallery-section-6"
                className={styles.gallery}
            >
                <GallerySection6 product={products?.find((p) => p.id === 'Black-and-red-elegance') as Product} />
            </motion.section>
        </ProductsContext.Provider >
    );
};

export default Gallery;
