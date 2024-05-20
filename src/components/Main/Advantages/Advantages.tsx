'use client';

import { FC } from 'react';
import styles from './Advantages.module.scss';
import { useTranslations } from 'next-intl';
import Advantage1 from '@/assets/icons/Advantage-1.svg';
import Advantage2 from '@/assets/icons/Advantage-2.svg';
import Advantage3 from '@/assets/icons/Advantage-3.svg';
import SmallAdvantage1 from '@/assets/icons/Small-advantage-1.svg';
import SmallAdvantage2 from '@/assets/icons/Small-advantage-2.svg';
import SmallAdvantage3 from '@/assets/icons/Small-advantage-3.svg';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


const AdvantagesSection: FC = () => {
    const t = useTranslations('translations.main.advantages');
    const isMobile = useMediaQuery({ maxWidth: '450px' });

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} id="advantages-section" className={styles.advantages_section}>
            <motion.div
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 1.5 }}
                className={styles.advantages_section_advantage}
            >
                {!isMobile && <Advantage1 className={styles.advantages_section_advantage_icon} />}
                {isMobile && <SmallAdvantage1 className={styles.advantages_section_advantage_icon} />}
                <p className={styles.advantages_section_advantage_text}>{t('1')}</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 1.5 }}
                className={styles.advantages_section_advantage}
            >
                {!isMobile && <Advantage2 className={styles.advantages_section_advantage_icon} />}
                {isMobile && <SmallAdvantage2 className={styles.advantages_section_advantage_icon} />}
                <p className={styles.advantages_section_advantage_text}>{t('2')}</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 1.5 }}
                className={styles.advantages_section_advantage}
            >
                {!isMobile && <Advantage3 className={styles.advantages_section_advantage_icon} />}
                {isMobile && <SmallAdvantage3 className={styles.advantages_section_advantage_icon} />}
                <p className={styles.advantages_section_advantage_text}>{t('3')}</p>
            </motion.div>
        </motion.section>
    );
};

export default AdvantagesSection;
