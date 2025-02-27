'use client';

import { Product } from '@/types/product.type';
import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './Composition.module.scss';
import { useLocale } from 'next-intl';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import CardImage from './CardImage/CardImage';
import { AngleciaProDisplay } from '@/app/fonts';

type Props = {
    products: {
        imageOrder: number;
        textOrder: number;
        product: Product;
    }[];
};

const Composition: FC<Props> = ({ products }) => {
    const currentLocale = useLocale();
    const isDesktop = useMediaQuery({ minWidth: '671px' });
    const isMobile = useMediaQuery({ maxWidth: '670px' });

    const [product1, product2, product3, product4] = products;

    return (
        <motion.div
            className={styles.composition}
            initial={{ opacity: 0, translateY: '-80px' }}
            whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
            transition={{ duration: 1 }}
        >
            {isDesktop && (
                <React.Fragment>
                    {products.map((product, idx) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, translateX: '-80px' }}
                                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                                transition={{ duration: idx + 1, velocity: idx + 1 }}
                                className={styles.composition_product}
                                key={product?.product?.id}
                            >
                                <CardImage product={product} />
                                <div
                                    style={{ order: product.textOrder }}
                                    className={styles.composition_product_text}
                                >
                                    <h3
                                        className={`${styles.composition_product_text_title} ${AngleciaProDisplay.className}`}
                                    >
                                        {product?.product?.title?.[currentLocale as 'uk-UA']}
                                    </h3>
                                    <p className={styles.composition_product_text_descr}>
                                        {product?.product?.description?.[currentLocale as 'uk-UA']}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </React.Fragment>
            )}
            {isMobile && (
                <React.Fragment>
                    <div className={styles.composition_product_column}>
                        {/* <div
                            style={{ order: 1 }}
                            className={styles.composition_product_image}
                        >
                            <Image
                                src={product1?.product?.images?.[0]}
                                alt={product1?.product?.title?.[currentLocale as 'uk-UA']}
                                fill
                            />
                        </div> */}
                        <CardImage product={product1} />
                        <div
                            style={{ order: 2 }}
                            className={styles.composition_product_text}
                        >
                            <h3 className={styles.composition_product_text_title} style={{ textAlign: 'right' }}>
                                {product2?.product?.title?.[currentLocale as 'uk-UA']}
                            </h3>
                            <p className={styles.composition_product_text_descr} style={{ textAlign: 'right' }}>
                                {product2?.product?.description?.[currentLocale as 'uk-UA']}
                            </p>
                        </div>
                        {/* <div
                            style={{ order: 3 }}
                            className={styles.composition_product_image}
                        >
                            <Image
                                src={product3?.product?.images?.[0]}
                                alt={product3?.product?.title?.[currentLocale as 'uk-UA']}
                                fill
                            />
                        </div> */}
                        <CardImage product={product3} />
                        {product4 &&
                            <div
                                style={{ order: 5 }}
                                className={styles.composition_product_text}
                            >
                                <h3 className={styles.composition_product_text_title} style={{ textAlign: 'right' }}>
                                    {product4?.product?.title?.[currentLocale as 'uk-UA']}
                                </h3>
                                <p className={styles.composition_product_text_descr} style={{ textAlign: 'right' }}>
                                    {product4?.product?.description?.[currentLocale as 'uk-UA']}
                                </p>
                            </div>
                        }
                    </div>
                    <div className={styles.composition_product_column}>
                        <div
                            style={{ order: 1 }}
                            className={styles.composition_product_text}
                        >
                            <h3 className={styles.composition_product_text_title}>
                                {product1?.product?.title?.[currentLocale as 'uk-UA']}
                            </h3>
                            <p className={styles.composition_product_text_descr}>
                                {product1?.product?.description?.[currentLocale as 'uk-UA']}
                            </p>
                        </div>
                        {/* <div
                            style={{ order: 2 }}
                            className={styles.composition_product_image}
                        >
                            <Image
                                src={product2?.product?.images?.[0]}
                                alt={product2?.product?.title?.[currentLocale as 'uk-UA']}
                                fill
                            />
                        </div> */}
                        <CardImage product={product2} />
                        <div
                            style={{ order: 3, justifySelf: 'flex-end' }}
                            className={styles.composition_product_text}
                        >
                            <h3 className={styles.composition_product_text_title}>
                                {product3?.product?.title?.[currentLocale as 'uk-UA']}
                            </h3>
                            <p className={styles.composition_product_text_descr}>
                                {product3?.product?.description?.[currentLocale as 'uk-UA']}
                            </p>
                            {product4 && <CardImage product={product4} />}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </motion.div>
    );
};

export default Composition;

