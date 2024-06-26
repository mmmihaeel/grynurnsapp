'use client';

import { FC } from 'react';
import styles from './About-us.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useProductsContext } from '@/context/products.context';
import { Product } from '@/types/product.type';
import { useMediaQuery } from 'react-responsive';

const AboutUsSection: FC = () => {
    const t = useTranslations('translations.main.about-us');
    const products = useProductsContext();
    const eternalRest = products?.find(
        (product) => product.id === 'Eternal-Rest-(Blue)'
    ) as Product;
    const talismanOfTheHeart = products?.find(
        (product) => product.id === 'Talisman-of-the-Heart'
    ) as Product;
    const currentLocale = useLocale();

    const isTablet = useMediaQuery({ maxWidth: '900px' });

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id="about-us"
            className={styles.about_us_section}
        >
            <div className={styles.about_us_section_wrapper}>
                <motion.div
                    initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 0.5 }}
                    className={styles.about_us_section_rigthAside}
                >
                    <Image
                        fill
                        alt={talismanOfTheHeart?.title?.[currentLocale as 'en-GB']}
                        src={talismanOfTheHeart?.images?.[0]}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={styles.about_us_section_text}
                >
                    <motion.h2
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 0.5 }}
                        className={styles.about_us_section_text_title}
                    >
                        {t('h2-title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 0.5 }}
                        className={styles.about_us_section_text_description}
                    >
                        {t('p-1')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 0.8 }}
                        className={styles.about_us_section_text_description}
                    >
                        {t('p-2')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, translateX: '-80px' }}
                        whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                        transition={{ duration: 1 }}
                        className={styles.about_us_section_text_description}
                    >
                        {t('p-3')}
                    </motion.p>
                    <motion.div
                        initial={{
                            opacity: 0,
                            bottom: isTablet ? '145px' : '745px',
                            right: isTablet ? '200px' : '-500px',
                        }}
                        whileInView={{
                            opacity: 1,
                            bottom: isTablet ? '115px' : '145px',
                            right: isTablet ? 'auto' : '-400px',
                            left: isTablet ? '-90px' : 'auto'
                        }}
                        transition={{ duration: 0.5 }}
                        className={styles.about_us_section_leftAside}
                    >
                        <Image
                            fill
                            alt={eternalRest?.title?.[currentLocale as 'en-GB']}
                            src={eternalRest?.images?.[0]}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutUsSection;
