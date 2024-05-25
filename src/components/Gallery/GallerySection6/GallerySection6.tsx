import { Product } from '@/types/product.type';
import React from 'react';
import { FC } from 'react';
import styles from './GallerySection6.module.scss';
import { useLocale } from 'next-intl';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AngleciaProDisplay } from '@/app/fonts';

type Props = {
    product: Product;
};

const GallerySection6: FC<Props> = ({ product }) => {
    const currentLocale = useLocale();
    const isDesktop = useMediaQuery({ minWidth: '671px' });
    const isMobile = useMediaQuery({ maxWidth: '670px' });

    return (
        <React.Fragment>
            {isMobile && (
                <React.Fragment>
                    <div className={styles.gallery_section_6_columns}>
                        <div className={styles.gallery_section_6_product_column}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 1, velocity: 1 }}
                                className={styles.gallery_section_6_large_image}
                            >
                                <Image
                                    fill
                                    src={String(product?.images?.[0])}
                                    alt={String(product?.title?.[currentLocale as 'en-GB'])}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                                transition={{ duration: 1 }}
                                className={styles.gallery_section_6_block_text}
                            >
                                <p className={styles.gallery_section_6_block_text_descr}>
                                    {String(product?.description?.[currentLocale as 'en-GB'])}
                                </p>
                            </motion.div>
                        </div>
                        <div className={styles.gallery_section_6_product_column}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 1 }}
                                className={styles.gallery_section_6_block_text}
                            >
                                <h3
                                    className={`${styles.gallery_section_6_block_text_title} ${AngleciaProDisplay.className}`}
                                >
                                    {String(product?.title?.[currentLocale as 'en-GB'])}
                                </h3>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 3, velocity: 3 }}
                                className={styles.gallery_section_6_large_image}
                            >
                                <Image
                                    fill
                                    src={String(product?.images?.[2])}
                                    alt={String(product?.title?.[currentLocale as 'en-GB'])}
                                />
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
                                        src={String(product?.images?.[1])}
                                        alt={String(product?.title?.[currentLocale as 'en-GB'])}
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
                                        src={String(product?.images?.[3])}
                                        alt={String(product?.title?.[currentLocale as 'en-GB'])}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
            {isDesktop && (
                <React.Fragment>
                    <div className={styles.gallery_section_6}>
                        <motion.div
                            initial={{ opacity: 0, translateX: '-80px' }}
                            whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                            transition={{ duration: 1, velocity: 1 }}
                            className={styles.gallery_section_6_large_image}
                        >
                            <Image
                                fill
                                src={String(product?.images?.[0])}
                                alt={String(product?.title?.[currentLocale as 'en-GB'])}
                            />
                        </motion.div>
                        <div className={styles.gallery_section_6_block}>
                            <motion.div
                                initial={{ opacity: 0, translateY: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                                transition={{ duration: 1 }}
                                className={styles.gallery_section_6_block_text}
                            >
                                <h3
                                    className={`${styles.gallery_section_6_block_text_title} ${AngleciaProDisplay.className}`}
                                >
                                    {String(product?.title?.[currentLocale as 'en-GB'])}
                                </h3>
                                <p className={styles.gallery_section_6_block_text_descr}>
                                    {String(product?.description?.[currentLocale as 'en-GB'])}
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
                                        src={String(product?.images?.[1])}
                                        alt={String(product?.title?.[currentLocale as 'en-GB'])}
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
                                        src={String(product?.images?.[3])}
                                        alt={String(product?.title?.[currentLocale as 'en-GB'])}
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
                                src={String(product?.images?.[2])}
                                alt={String(product?.title?.[currentLocale as 'en-GB'])}
                            />
                        </motion.div>
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default GallerySection6;
