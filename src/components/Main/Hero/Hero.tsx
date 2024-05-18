"use client";
import { FC } from 'react';
import styles from './Hero.module.scss';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
    const t = useTranslations('translations');



    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} className={styles.hero_section}>
            <motion.h1
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 0.5 }}
                dangerouslySetInnerHTML={{ __html: t.raw('main.h1-title') }}
                className={styles.hero_section_title}
            />
            <div className={styles.hero_section_buttons}>
                <motion.button initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 0.5 }} className={styles.hero_section_buttons_order} type="button">
                    {t('buttons.order')}
                </motion.button>
                <motion.button initial={{ opacity: 0, translateX: '80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 0.5 }} className={styles.hero_section_buttons_view} type="button">
                    {t('buttons.view')}
                </motion.button>
            </div>
        </motion.section>
    );
};

export default HeroSection;
