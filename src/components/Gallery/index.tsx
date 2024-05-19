'use client';

import styles from './Gallery.module.scss';
import { ProductsContext } from '@/context/products.context';
import { Product } from '@/types/product.type';
import { motion } from 'framer-motion';
import { FC } from 'react';
import Composition from '../Composition/Composition';
import { useLocale, useTranslations } from 'next-intl';
import AdvantagesSection from './Advantages/Advantages';
import Image from 'next/image';

type Props = {
    products: Product[];
};

const Gallery: FC<Props> = ({ products }) => {
    const t = useTranslations('translations.gallery');
    const currentLocale = useLocale();

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
                            imageOrder: 0,
                            textOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Eternal-Rest-(Red)'
                            ) as Product,
                            imageOrder: 1,
                            textOrder: 0,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Embrace-of-Eternity-(Red)'
                            ) as Product,
                            imageOrder: 1,
                            textOrder: 0,
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
                id="gallery-section-2"
                className={styles.gallery}
            >
                <div className={styles.gallery_section_2}>
                    <motion.div
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 1, velocity: 1 }}
                        className={styles.gallery_section_2_large_image}
                    >
                        <Image
                            fill
                            src={String(
                                products?.find((p) => p.id === 'Vault-of-Memories')?.images?.[0]
                            )}
                            alt={String(
                                products?.find((p) => p.id === 'Vault-of-Memories')?.title?.[
                                currentLocale as 'en-GB'
                                ]
                            )}
                        />
                    </motion.div>
                    <div className={styles.gallery_section_2_block}>
                        <div className={styles.gallery_section_2_block_images}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 2, velocity: 2 }}
                                className={styles.gallery_section_2_block_images_image}
                            >
                                <Image
                                    fill
                                    src={String(
                                        products?.find((p) => p.id === 'Vault-of-Memories')
                                            ?.images?.[2]
                                    )}
                                    alt={String(
                                        products?.find((p) => p.id === 'Vault-of-Memories')
                                            ?.title?.[currentLocale as 'en-GB']
                                    )}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 3, velocity: 3 }}
                                className={styles.gallery_section_2_block_images_image}
                            >
                                <Image
                                    fill
                                    src={String(
                                        products?.find((p) => p.id === 'Vault-of-Memories')
                                            ?.images?.[1]
                                    )}
                                    alt={String(
                                        products?.find((p) => p.id === 'Vault-of-Memories')
                                            ?.title?.[currentLocale as 'en-GB']
                                    )}
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, translateY: '-80px' }}
                            whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                            transition={{ duration: 1 }}
                            className={styles.gallery_section_2_block_text}
                        >
                            <h3 className={styles.gallery_section_2_block_text_title}>
                                {String(
                                    products?.find((p) => p.id === 'Vault-of-Memories')?.title?.[
                                    currentLocale as 'en-GB'
                                    ]
                                )}
                            </h3>
                            <p className={styles.gallery_section_2_block_text_descr}>
                                {String(
                                    products?.find((p) => p.id === 'Vault-of-Memories')
                                        ?.description?.[currentLocale as 'en-GB']
                                )}
                            </p>
                        </motion.div>
                    </div>
                </div>
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
                            imageOrder: 0,
                            textOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Blue-Harmony'
                            ) as Product,
                            imageOrder: 0,
                            textOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Talisman-of-the-Heart'
                            ) as Product,
                            imageOrder: 0,
                            textOrder: 1,
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
                <div className={styles.gallery_section_4}>
                    <div className={styles.gallery_section_4_block}>
                        <div className={styles.gallery_section_4_block_images}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 2, velocity: 2 }}
                                className={styles.gallery_section_4_block_images_image}
                            >
                                <Image
                                    fill
                                    src={String(
                                        products?.find((p) => p.id === 'The-Heart-of-Nature')
                                            ?.images?.[0]
                                    )}
                                    alt={String(
                                        products?.find((p) => p.id === 'The-Heart-of-Nature')
                                            ?.title?.[currentLocale as 'en-GB']
                                    )}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 3, velocity: 3 }}
                                className={styles.gallery_section_4_block_images_image}
                            >
                                <Image
                                    fill
                                    src={String(
                                        products?.find((p) => p.id === 'The-Heart-of-Nature')
                                            ?.images?.[1]
                                    )}
                                    alt={String(
                                        products?.find((p) => p.id === 'The-Heart-of-Nature')
                                            ?.title?.[currentLocale as 'en-GB']
                                    )}
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, translateY: '-80px' }}
                            whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                            transition={{ duration: 1 }}
                            className={styles.gallery_section_4_block_text}
                        >
                            <h3 className={styles.gallery_section_4_block_text_title}>
                                {String(
                                    products?.find((p) => p.id === 'Vault-of-Memories')?.title?.[
                                    currentLocale as 'en-GB'
                                    ]
                                )}
                            </h3>
                            <p className={styles.gallery_section_4_block_text_descr}>
                                {String(
                                    products?.find((p) => p.id === 'Vault-of-Memories')
                                        ?.description?.[currentLocale as 'en-GB']
                                )}
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 3, velocity: 3 }}
                        className={styles.gallery_section_4_product}
                    >
                        <div className={styles.gallery_section_4_product_image}>
                            <Image
                                src={String(
                                    products?.find((p) => p.id === 'Eternal-Rest-(Green)')
                                        ?.images?.[0]
                                )}
                                alt={String(
                                    products?.find((p) => p.id === 'Eternal-Rest-(Green)')
                                        ?.description?.[currentLocale as 'en-GB']
                                )}
                                fill
                            />
                        </div>
                        <div className={styles.gallery_section_4_product_text}>
                            <h3 className={styles.gallery_section_4_product_text_title}>
                                {
                                    products?.find((p) => p.id === 'Eternal-Rest-(Green)')
                                        ?.title?.[currentLocale as 'uk-UA']
                                }
                            </h3>
                            <p className={styles.gallery_section_4_product_text_descr}>
                                {
                                    products?.find((p) => p.id === 'Eternal-Rest-(Green)')
                                        ?.description?.[currentLocale as 'uk-UA']
                                }
                            </p>
                        </div>
                    </motion.div>
                </div>
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
                            imageOrder: 0,
                            textOrder: 1,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Mysterious-Glare'
                            ) as Product,
                            imageOrder: 1,
                            textOrder: 0,
                        },
                        {
                            product: products.find(
                                (product) => product.id === 'Peace-of-mind'
                            ) as Product,
                            imageOrder: 0,
                            textOrder: 1,
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
                <div className={styles.gallery_section_6}>
                    <motion.div
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 1, velocity: 1 }}
                        className={styles.gallery_section_6_large_image}
                    >
                        <Image
                            fill
                            src={String(
                                products?.find((p) => p.id === 'Black-and-red-elegance')?.images?.[0]
                            )}
                            alt={String(
                                products?.find((p) => p.id === 'Black-and-red-elegance')?.title?.[
                                currentLocale as 'en-GB'
                                ]
                            )}
                        />
                    </motion.div>


                    <div className={styles.gallery_section_6_block}>
                        <motion.div
                            initial={{ opacity: 0, translateY: '-80px' }}
                            whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                            transition={{ duration: 1 }}
                            className={styles.gallery_section_6_block_text}
                        >
                            <h3 className={styles.gallery_section_6_block_text_title}>
                                {String(
                                    products?.find((p) => p.id === 'Black-and-red-elegance')?.title?.[
                                    currentLocale as 'en-GB'
                                    ]
                                )}
                            </h3>
                            <p className={styles.gallery_section_6_block_text_descr}>
                                {String(
                                    products?.find((p) => p.id === 'Black-and-red-elegance')
                                        ?.description?.[currentLocale as 'en-GB']
                                )}
                            </p>
                        </motion.div>
                        <div className={styles.gallery_section_6_block_images}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 2, velocity: 2 }}
                                className={styles.gallery_section_6_block_images_image}
                            >
                                <Image
                                    fill
                                    src={String(
                                        products?.find((p) => p.id === 'Black-and-red-elegance')
                                            ?.images?.[1]
                                    )}
                                    alt={String(
                                        products?.find((p) => p.id === 'Black-and-red-elegance')
                                            ?.title?.[currentLocale as 'en-GB']
                                    )}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 3, velocity: 3 }}
                                className={styles.gallery_section_6_block_images_image}
                            >
                                <Image
                                    fill
                                    src={String(
                                        products?.find((p) => p.id === 'Black-and-red-elegance')
                                            ?.images?.[3]
                                    )}
                                    alt={String(
                                        products?.find((p) => p.id === 'Black-and-red-elegance')
                                            ?.title?.[currentLocale as 'en-GB']
                                    )}
                                />
                            </motion.div>
                        </div>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 3, velocity: 3 }}
                        className={styles.gallery_section_6_large_image}
                    >
                        <Image
                            fill
                            src={String(
                                products?.find((p) => p.id === 'Black-and-red-elegance')?.images?.[2]
                            )}
                            alt={String(
                                products?.find((p) => p.id === 'Black-and-red-elegance')?.title?.[
                                currentLocale as 'en-GB'
                                ]
                            )}
                        />
                    </motion.div>
                </div>
            </motion.section>
        </ProductsContext.Provider>
    );
};

export default Gallery;
