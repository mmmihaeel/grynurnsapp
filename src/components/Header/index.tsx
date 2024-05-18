'use client';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

const Header = () => {
    const router = useRouter();
    const locale = useLocale();
    const headerRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('translations.header');
    const currentLocale = useLocale();
    const pathname = usePathname();

    useEffect(() => {
        const header = headerRef?.current;
        if (header && pathname === `/${currentLocale}`) {
            header.style.background = ``;
        } else if (header) {
            header.style.background = `#C29D86`;
        }
    }, [currentLocale, pathname]);

    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        router.push('/');
    };

    return (
        <motion.header
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.header}
            id="header"
            ref={headerRef}
        >
            <div
                style={
                    pathname === `/${currentLocale}`
                        ? {
                            borderBottom: '1px solid #EDE0D4',
                            padding: '10px 0 0 0'
                        }
                        : {}
                }
                id="header-section"
                className={styles.header_wrapper}
            >
                <Logo onClick={handleLogoClick} className={styles.header_logo} />
                <nav className={styles.header_nav}>
                    <Link
                        className={styles.header_nav_link}
                        href={`/${locale}/#about-us`}
                        locale={locale}
                    >
                        {t('about')}
                    </Link>
                    <Link
                        className={styles.header_nav_link}
                        href={`/${locale}/gallery`}
                        locale={locale}
                    >
                        {t('gallery')}
                    </Link>
                    <Link
                        className={styles.header_nav_link}
                        href={`/${locale}/#contacts`}
                        locale={locale}
                    >
                        {t('contacts')}
                    </Link>
                </nav>
                <LocaleSwitcher />
            </div>
        </motion.header>
    );
};

export default Header;
