"use client";
import { Product } from "@/types/product.type";
import { FC } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Composition.module.scss';
import { useLocale } from "next-intl";

type Props = {
    products: {
        imageOrder: number;
        textOrder: number;
        product: Product;
    }[]
};

const Composition: FC<Props> = ({ products }) => {
    const currentLocale = useLocale();

    return <motion.div
        className={styles.composition}
        initial={{ opacity: 0, translateY: '-80px' }}
        whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
        transition={{ duration: 1 }}
    >
        {products.map((product, idx) => {
            return (
                <motion.div
                    initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: idx + 1, velocity: idx + 1 }}
                    className={styles.composition_product}
                    key={product?.product?.id}
                >
                    <div
                        style={{ order: product.imageOrder }}
                        className={styles.composition_product_image}
                    >
                        <Image
                            src={product?.product?.images?.[0]}
                            alt={product?.product?.title?.[currentLocale as 'uk-UA']}
                            fill
                        />
                    </div>
                    <div
                        style={{ order: product.textOrder }}
                        className={styles.composition_product_text}
                    >
                        <h3 className={styles.composition_product_text_title}>
                            {product?.product?.title?.[currentLocale as 'uk-UA']}
                        </h3>
                        <p className={styles.composition_product_text_descr}>
                            {product?.product?.description?.[currentLocale as 'uk-UA']}
                        </p>
                    </div>
                </motion.div>
            );
        })}
    </motion.div>;
};


export default Composition;

