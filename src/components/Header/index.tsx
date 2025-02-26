'use client';

import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Logo from '../../assets/icons/logo.svg';
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import { Link } from '@/i18n/routing';
import NextLink from 'next/link';
import { useMediaQuery } from 'react-responsive';
import SmallLogo from '@/assets/icons/small-logo.svg';

const Header = () => {
    const isDesktop = useMediaQuery({ minWidth: '751px' });
    const isTablet = useMediaQuery({ maxWidth: '750px' });

    const router = useRouter();
    const headerRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('translations.header');
    const currentLocale = useLocale();
    const pathname = usePathname();

    useEffect(() => {
        const header = headerRef?.current;
        if (header && (pathname === `/${currentLocale}` || pathname === `/`)) {
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
                    pathname === `/${currentLocale}` || pathname === `/`
                        ? {
                            borderBottom: '1px solid #EDE0D4',
                            padding: '10px 0 0 0'
                        }
                        : {}
                }
                id="header-section"
                className={styles.header_wrapper}
            >
                {isDesktop && <Logo onClick={handleLogoClick} className={styles.header_logo} />}
                {isTablet && <SmallLogo onClick={handleLogoClick} className={styles.header_logo} />}
                <nav className={styles.header_nav}>
                    <NextLink
                        className={styles.header_nav_link}
                        href={`/${currentLocale}/#about-us`}
                        locale={currentLocale as 'uk-UA'}
                    >
                        {t('about')}
                    </NextLink>
                    <Link
                        className={styles.header_nav_link}
                        href={`/gallery`}
                        locale={currentLocale as 'uk-UA'}
                    >
                        {t('gallery')}
                    </Link>
                    <NextLink
                        className={styles.header_nav_link}
                        href={`${pathname}/#${t('contacts')}`}
                        locale={currentLocale}
                    >
                        {t('contacts')}
                    </NextLink>
                </nav>
                <LocaleSwitcher />
            </div>
        </motion.header>
    );
};

export default Header;
