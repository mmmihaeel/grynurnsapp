'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    const t = useTranslations('translations.footer');
    const headerT = useTranslations('translations.header');

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id={headerT('contacts')}
            transition={{ duration: 0.2 }}
            className={styles.footer}
        >
            <motion.h2
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 0.3 }}
                className={styles.footer_title}
            >
                {t('contacts')}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, translateY: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 0.5 }}
                className={styles.footer_contacts}
            >
                <div className={styles.footer_contact}>
                    <label htmlFor="phonenumber" className={styles.footer_label}>
                        {t('socials')}
                    </label>

                    <Link
                        className={styles.footer_link}
                        href={'tel:+38 050 347 42 76'}
                        id="phonenumber"
                    >
                        {'+38 050 347 42 76'}
                    </Link>
                    <Link
                        className={styles.footer_link}
                        href={'tel:+38 050 762 77 40'}
                        id="phonenumber"
                    >
                        {'+38 050 762 77 40'}
                    </Link>
                    <Link
                        className={styles.footer_link}
                        href={'tel:+49 151 21 260 753'}
                        id="phonenumber"
                    >
                        {'+49 151 2126 07 53'}
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, translateY: '-80px' }}
                    whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}
                    transition={{ duration: 0.5 }}
                    className={styles.footer_contact}
                >
                    <label htmlFor="email" className={styles.footer_label}>
                        {t('email')}
                    </label>
                    <Link
                        className={styles.footer_link}
                        href={'mailto:grynurns@gmail.com'}
                        id="email"
                    >
                        {'grynurns@gmail.com'}
                    </Link>
                </motion.div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
