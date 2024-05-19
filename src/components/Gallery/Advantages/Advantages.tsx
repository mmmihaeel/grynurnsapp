'use client';
import { FC, useCallback } from 'react';
import styles from './Advantages.module.scss';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import LargeUrn from '@/assets/icons/large-urn.svg';
import SmallUrn from '@/assets/icons/small-urn.svg';
import { publishEvent } from '@/utils/custom-events';

const AdvantagesSection: FC = () => {
    const t = useTranslations('translations');

    const handleOrderButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        publishEvent('showModal');
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id="advantages-section"
            className={styles.advantages_section}
        >
            <div className={styles.advantages_section_text}>
                <motion.p
                    initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 0.5 }}
                    className={styles.advantages_section_text_descr}
                >
                    {t('gallery.advantages.1')}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 0.8 }}
                    className={styles.advantages_section_text_descr}
                >
                    {t('gallery.advantages.2')}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 1 }}
                    className={styles.advantages_section_text_descr}
                >
                    {t('gallery.advantages.3')}
                </motion.p>
            </div>
            <div className={styles.advantages_section_order}>
                <LargeUrn className={styles.advantages_section_largeUrn} />
                <SmallUrn className={styles.advantages_section_smallUrn} />
                <motion.p
                    initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 1 }}
                    className={styles.advantages_section_order_descr}
                >
                    {t('gallery.contact-us')}
                </motion.p>
                <motion.button
                    onClick={handleOrderButtonClick}
                    initial={{ opacity: 0, translateX: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                    transition={{ duration: 0.5 }}
                    className={styles.advantages_section_order_button}
                    type="button"
                >
                    {t('buttons.order')}
                </motion.button>
            </div>
        </motion.section>
    );
};

export default AdvantagesSection;
