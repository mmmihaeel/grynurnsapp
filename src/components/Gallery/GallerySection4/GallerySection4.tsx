import React from 'react';
import { FC } from 'react';
import styles from './GallerySection4.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useLocale } from 'next-intl';
import { useProductsContext } from '@/context/products.context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CardImage from './CardImage/CardImage';
import { Product } from '@/types/product.type';
import SectionImage from './SectionImage/SectionImage';

const GallerySection4: FC = () => {
    const products = useProductsContext();
    const currentLocale = useLocale();
    const isDesktop = useMediaQuery({ minWidth: '671px' });
    const isMobile = useMediaQuery({ maxWidth: '670px' });

    return (
        <React.Fragment>
            {isMobile && (
                <React.Fragment>
                    <div className={styles.gallery_section_4_columns}>
                        <div className={styles.gallery_section_4_product_column}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 3, velocity: 3 }}
                                className={styles.gallery_section_4_product}
                            >
                                {/* <div className={styles.gallery_section_4_product_image}>
                                    <Image
                                        src={String(
                                            products?.find((p) => p.id === 'The-Heart-of-Nature')
                                                ?.images?.[0]
                                        )}
                                        alt={String(
                                            products?.find((p) => p.id === 'The-Heart-of-Nature')
                                                ?.description?.[currentLocale as 'en-GB']
                                        )}
                                        fill
                                    />
                                </div> */}
                                <CardImage product={products?.find((p) => p.id === 'The-Heart-of-Nature') as Product} />
                                <div className={styles.gallery_section_4_product_text}>
                                    <h3 className={styles.gallery_section_4_product_text_title}>
                                        {
                                            products?.find((p) => p.id === 'The-Heart-of-Nature')
                                                ?.title?.[currentLocale as 'uk-UA']
                                        }
                                    </h3>
                                    <p className={styles.gallery_section_4_product_text_descr}>
                                        {
                                            products?.find((p) => p.id === 'The-Heart-of-Nature')
                                                ?.description?.[currentLocale as 'uk-UA']
                                        }
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div className={styles.gallery_section_4_product_column}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 3, velocity: 3 }}
                                className={styles.gallery_section_4_product}
                            >
                                {/* <div className={styles.gallery_section_4_product_image}>
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
                                </div> */}
                                <CardImage product={products?.find((p) => p.id === 'Eternal-Rest-(Green)') as Product} />
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
                    </div>
                </React.Fragment>
            )}
            {isDesktop && (
                <React.Fragment>
                    <div className={styles.gallery_section_4}>
                        <div className={styles.gallery_section_4_block}>
                            <div className={styles.gallery_section_4_block_images}>
                                <SectionImage
                                    product={
                                        products?.find(
                                            (p) => p.id === 'The-Heart-of-Nature'
                                        ) as Product
                                    }
                                />
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
                                        products?.find((p) => p.id === 'Vault-of-Memories')
                                            ?.title?.[currentLocale as 'en-GB']
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
                            <CardImage
                                product={
                                    products?.find(
                                        (p) => p.id === 'Eternal-Rest-(Green)'
                                    ) as Product
                                }
                            />
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
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default GallerySection4;
