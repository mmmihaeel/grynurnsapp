'use client';

import { FC, useCallback } from 'react';
import styles from './Exhibition.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useProductsContext } from '@/context/products.context';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product.type';
import dynamic from 'next/dynamic';
import { AngleciaProDisplay } from '@/app/fonts';
const Composition = dynamic(() => import('@/components/Composition/Composition'), { ssr: false });

const ExhibitionSection: FC = () => {
    const t = useTranslations('translations');
    const router = useRouter();
    const currentLocale = useLocale();
    const products = [
        useProductsContext().find(
            (product) => product.id === 'Gray-Elegant'
        ) as Product,
        useProductsContext().find(
            (product) => product.id === 'Heart-of-Memories'
        ) as Product,
        useProductsContext().find(
            (product) => product.id === 'Embrace-of-Eternity-(Red)'
        ) as Product,
        useProductsContext().find(
            (product) => product.id === 'Serenity-Stone'
        ) as Product,
        useProductsContext().find(
            (product) => product.id === 'Earth-Harmony'
        ) as Product,
        useProductsContext().find(
            (product) => product.id === 'Earthstone-Memory'
        ) as Product,
    ];

    const handleButtonCLick = useCallback(() => {
        router.push(`${currentLocale}/gallery`);
    }, [currentLocale, router]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id="exhibition-section"
            className={styles.exhibition_section}
        >
            <motion.h2
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 1 }}
                className={`${styles.exhibition_section_title} ${AngleciaProDisplay.className}`}
                dangerouslySetInnerHTML={{ __html: t.raw('main.h2-title') }}
            />
            <Composition
                products={products.map((p, i) => {
                    if (i == 4) {
                        return {
                            product: p,
                            textOrder: -1,
                            imageOrder: 1,
                        };
                    }
                    if (i == 2) {
                        return {
                            product: p,
                            textOrder: -1,
                            imageOrder: 4,
                        };
                    }
                    if (i == 1) {
                        return {
                            product: p,
                            textOrder: -1,
                            imageOrder: 1,
                        };
                    }
                    return {
                        product: p,
                        textOrder: 1,
                        imageOrder: 0,
                    };
                })}
            />
            <button
                className={styles.exhibition_section_button_more}
                type="button"
                onClick={handleButtonCLick}
            >
                {t('buttons.more')}
            </button>
        </motion.section>
    );
};

export default ExhibitionSection;
