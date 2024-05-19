import { FC, useCallback, useState } from 'react';
import styles from './LocaleSwitcher.module.scss';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { locales } from '@/i18n.config';
import { motion } from 'framer-motion';

const show = {
    opacity: 1,
    scale: 1,
    display: 'block',
};

const hide = {
    opacity: 0,
    scale: 0,
    transitionEnd: {
        display: 'none',
    },
};

const LocaleSwitcher: FC = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [showLocales, setShowLocales] = useState<boolean>(false);

    const pathname = usePathname();
    const params = useParams();

    const handleLocaleChange = useCallback(
        (nextLocale: string) => {
            startTransition(() => {
                router.replace(
                    // @ts-expect-error -- TypeScript will validate that only known `params`
                    // are used in combination with a given `pathname`. Since the two will
                    // always match for the current route, we can skip runtime checks.
                    { pathname, params },
                    { locale: nextLocale }
                );
            });
        },
        [params, pathname, router]
    );

    const toggleLocalesShown = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            if (isPending) {
                return;
            }
            return setShowLocales((prev) => !prev);
        },
        [isPending]
    );

    const currentLocale = useLocale();

    return (
        <motion.aside className={styles.localeSwitcher}>
            <div onClick={toggleLocalesShown} className={styles.localeSwitcher_label}>
                <p className={styles.localeSwitcher_label_locale}>{currentLocale}</p>
                <motion.svg
                    className={styles.localeSwitcher_label_arrow}
                    transition={{ duration: 0.2, velocity: 2 }}
                    animate={
                        showLocales
                            ? {
                                transform: 'translate(-50%, -50%) rotate(-180deg)',
                                top: '12px',
                            }
                            : { transform: 'translate(-50%, -50%)' }
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
            </div>
            {showLocales && (
                <motion.ul
                    className={styles.localeSwitcher_locales}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    animate={showLocales ? show : hide}
                >
                    {locales
                        .filter((locale) => locale !== currentLocale)
                        .map((locale) => {
                            return (
                                <li
                                    className={styles.localeSwitcher_locales_locale}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        return handleLocaleChange(locale);
                                    }}
                                    key={locale}
                                >
                                    {locale}
                                </li>
                            );
                        })}
                </motion.ul>
            )}
        </motion.aside>
    );
};

export default LocaleSwitcher;
