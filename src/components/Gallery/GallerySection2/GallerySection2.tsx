import { Product } from '@/types/product.type';
import { FC } from 'react';
import styles from './GallerySection2.module.scss';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

type Props = {
    product: Product;
};

const GallerySection2: FC<Props> = ({ product }) => {
    const currentLocale = useLocale();
    const isDesktop = useMediaQuery({ minWidth: '671px' });
    const isMobile = useMediaQuery({ maxWidth: '670px' });

    return (
        <React.Fragment>
            {isMobile && (
                <React.Fragment>
                    <div className={styles.gallery_section_2_columns}>
                        <div className={styles.gallery_section_2_product_column}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: 1, velocity: 1 }}
                                className={styles.gallery_section_2_large_image}
                            >
                                <Image
                                    fill
                                    src={String(product?.images?.[0])}
                                    alt={String(product?.title?.[currentLocale as 'en-GB'])}
                                />
                            </motion.div>
                        </div>
                        <div className={styles.gallery_section_2_product_column}>
                            <div className={styles.gallery_section_2_block}>
                                <motion.div
                                    initial={{ opacity: 0, translateY: '-80px' }}
                                    whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                                    transition={{ duration: 1 }}
                                    className={styles.gallery_section_2_block_text}
                                >
                                    <h3 className={styles.gallery_section_2_block_text_title}>
                                        {String(product?.title?.[currentLocale as 'en-GB'])}
                                    </h3>
                                    <p className={styles.gallery_section_2_block_text_descr}>
                                        {String(product?.description?.[currentLocale as 'en-GB'])}
                                    </p>
                                </motion.div>
                                <div className={styles.gallery_section_2_block_images}>
                                    <motion.div
                                        initial={{ opacity: 0, translateX: '-80px' }}
                                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                        transition={{ duration: 2, velocity: 2 }}
                                        className={styles.gallery_section_2_block_images_image}
                                    >
                                        <Image
                                            fill
                                            src={String(product?.images?.[2])}
                                            alt={String(product?.title?.[currentLocale as 'en-GB'])}
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
                                            src={String(product?.images?.[1])}
                                            alt={String(product?.title?.[currentLocale as 'en-GB'])}
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
            {isDesktop && (
                <React.Fragment>
                    <div className={styles.gallery_section_2}>
                        <motion.div
                            initial={{ opacity: 0, translateX: '-80px' }}
                            whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                            transition={{ duration: 1, velocity: 1 }}
                            className={styles.gallery_section_2_large_image}
                        >
                            <Image
                                fill
                                src={String(product?.images?.[0])}
                                alt={String(product?.title?.[currentLocale as 'en-GB'])}
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
                                        src={String(product?.images?.[2])}
                                        alt={String(product?.title?.[currentLocale as 'en-GB'])}
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
                                        src={String(product?.images?.[1])}
                                        alt={String(product?.title?.[currentLocale as 'en-GB'])}
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
                                    {String(product?.title?.[currentLocale as 'en-GB'])}
                                </h3>
                                <p className={styles.gallery_section_2_block_text_descr}>
                                    {String(product?.description?.[currentLocale as 'en-GB'])}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default GallerySection2;
