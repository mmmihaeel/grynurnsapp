import { FC } from 'react';
import styles from './Hero.module.scss';
import { useTranslations } from 'next-intl';

const HeroSection: FC = () => {
    const t = useTranslations('translations');

    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_section_line}></div>
            <h1 className={styles.hero_section_title}>
                {t.rich('main.h1-title', {
                    important: (chunks) => <strong>{chunks}</strong>,
                })}
            </h1>
            <div className={styles.hero_section_buttons}>
                <button className={styles.hero_section_order} type="button">
                    {t('buttons.order')}
                </button>
                <button className={styles.hero_section_view} type="button">
                    {t('buttons.view')}
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
