import { Product } from '@/types/product.type';
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from '../Composition.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    product: {
        imageOrder: number;
        textOrder: number;
        product: Product;
    };
};

const CardImage: FC<Props> = ({ product }) => {
    const currentLocale = useLocale();
    const [showSizes, setShowSizes] = useState<boolean>(false);

    const toggleSizesShown = () => setShowSizes((prev) => !prev);

    const t = useTranslations('translations.gallery');

    return (
        <div
            onMouseEnter={toggleSizesShown}
            onMouseLeave={toggleSizesShown}
            style={{ order: product?.imageOrder }}
            className={styles.composition_product_image}
        >
            <Image
                src={product?.product?.images?.[0]}
                alt={product?.product?.title?.[currentLocale as 'uk-UA']}
                fill
            />
            {product?.product?.sizes && <React.Fragment>
                <motion.div
                    initial={{
                        transform: 'translate(-50%, -50%)',
                        bottom: ' -75%',
                        left: '50%'
                    }}
                    animate={showSizes
                        ? {
                            transform: 'translate(-50%, -50%)',
                            bottom: '-25%',
                            left: '50%'
                        } : {
                            transform: 'translate(-50%, -50%)',
                            bottom: '-75%',
                            left: '50%'
                        }}
                    className={styles.composition_product_image_tooltip}
                >
                    {product?.product?.sizes?.map((size) => {
                        return <div
                            className={styles.composition_product_image_tooltip_size}
                            key={Math.random() + size?.size}
                        >
                            <p className={styles.composition_product_image_tooltip_label}>{size?.size}</p>
                            <motion.div
                                className={styles.composition_product_image_tooltip_image}
                                initial={{
                                    width: size?.width,
                                    height: size?.height,
                                }}
                            >
                                <Image
                                    src={size?.image}
                                    width={size?.width}
                                    height={size?.height}
                                    alt={product?.product?.title?.[currentLocale as 'uk-UA']}
                                />
                            </motion.div>
                        </div>;
                    })}
                </motion.div>
                <motion.p
                    initial={{
                        transform: 'translate(-50%, -50%)',
                        bottom: '2%',
                        right: currentLocale === 'en-GB' ? '10px' : '0px'
                    }}
                    animate={showSizes
                        ? {
                            bottom: '40%',
                            right: currentLocale === 'en-GB' ? '10px' : '0px'
                        } : {
                            bottom: '2%',
                            right: currentLocale === 'en-GB' ? '10px' : '0px'
                        }}
                    className={styles.composition_product_image_sizes}
                >
                    {t('sizes')}
                    <motion.svg
                        className={styles.composition_product_image_sizes_arrow}
                        transition={{ duration: 0.2, velocity: 2 }}
                        animate={
                            showSizes
                                ? {
                                    transform: `translate(-50%, -50%) rotate(-180deg)`,
                                    right: '-35px',
                                    top: '12px',
                                }
                                : {
                                    transform: `translate(-50%, -50%)`,
                                    right: '-35px',
                                    top: '12px',
                                }
                        }
                        width="19"
                        height="11"
                        viewBox="0 0 19 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L9.5 10L18 1"
                            stroke="#EDE0D4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </motion.svg>
                </motion.p>
                {showSizes && <div>
                </div>}
            </React.Fragment>}
        </div>
    );
};

export default CardImage;
