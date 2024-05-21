'use client';

import { FC } from 'react';
import styles from './Manufacturing.module.scss';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ManufacturingSection: FC = () => {
    const t = useTranslations('translations.main.manufacturing');
    const isDesktop = useMediaQuery({ minWidth: 1200 });
    const isTablet = useMediaQuery({ minWidth: 757, maxWidth: 1199 });
    const isMobile = useMediaQuery({ maxWidth: 756, minWidth: 451 });
    const isSmallMobile = useMediaQuery({ maxWidth: 450 });

    const steps = [
        {
            url: '/manufacturing/11-step.webp',
            description: t('1-step'),
        },
        {
            url: '/manufacturing/2-step.webp',
            description: t('2-step'),
        },
        {
            url: '/manufacturing/3-step.webp',
            description: t('3-step'),
        },
        {
            url: '/manufacturing/4-step.webp',
            description: t('4-step'),
        },
        {
            url: '/manufacturing/5-step.webp',
            description: t('5-step'),
        },
        {
            url: '/manufacturing/6-step.webp',
            description: t('6-step'),
        },
        {
            url: '/manufacturing/7-step.webp',
            description: t('7-step'),
        },
    ];

    const renderCircles = () => {
        const circlePositions = isDesktop
            ? [
                { cx: -175, cy: 125, tx: 115, ty: 200 },
                { cx: 225, cy: 125, tx: 95, ty: 185 },
                { cx: 320, cy: 425, tx: 190, ty: 190 },
                { cx: -40, cy: 445, tx: 130, ty: 180 },
                { cx: -390, cy: 500, tx: 190, ty: 200 },
                { cx: -200, cy: 770, tx: 300, ty: -20 },
                { cx: 200, cy: 770, tx: 330, ty: 70 },
            ]
            : isTablet
                ? [
                    { cx: -115, cy: 125, tx: 125, ty: 140 },
                    { cx: 215, cy: 140, tx: 45, ty: 135 },
                    { cx: 215, cy: 380, tx: 105, ty: 135 },
                    { cx: -65, cy: 395, tx: 130, ty: 130 },
                    { cx: -300, cy: 500, tx: 190, ty: 115 },
                    { cx: -90, cy: 660, tx: 200, ty: -20 },
                    { cx: 135, cy: 670, tx: 215, ty: 50 },
                ]
                : isMobile
                    ? [
                        { cx: -60, cy: 125, tx: -15, ty: 90 },
                        { cx: 115, cy: 160, tx: -25, ty: 80 },
                        { cx: 115, cy: 280, tx: -60, ty: 15 },
                        { cx: -65, cy: 315, tx: -30, ty: -15 },
                        { cx: -135, cy: 385, tx: 120, ty: 20 },
                        { cx: -90, cy: 475, tx: 115, ty: -10 },
                        { cx: 65, cy: 485, tx: 125, ty: 30 },
                    ]
                    : [
                        { cx: -50, cy: 85, tx: -15, ty: 75 },
                        { cx: 115, cy: 120, tx: -25, ty: 80 },
                        { cx: 115, cy: 240, tx: -60, ty: 15 },
                        { cx: -65, cy: 275, tx: -30, ty: -15 },
                        { cx: -135, cy: 345, tx: 120, ty: 20 },
                        { cx: -90, cy: 425, tx: 95, ty: -10 },
                        { cx: 55, cy: 425, tx: 35, ty: 70 },
                    ];

        return steps.map((image, index) => (
            <motion.div
                initial={{
                    top: circlePositions[index].cy,
                    left: circlePositions[index].cx,
                }}
                whileInView={{
                    top: circlePositions[index].cy,
                    left: circlePositions[index].cx,
                }}
                key={Math.random() + index}
                className={styles.manufacturing_section_steps_step}
            >
                <div className={styles.manufacturing_section_steps_step_image_wrapper}>
                    <Image fill src={image.url} alt={image.description} />
                </div>
                <motion.p
                    className={styles.manufacturing_section_steps_step_descr}
                    initial={{
                        top: circlePositions[index].ty,
                        left: circlePositions[index].tx,
                    }}
                    whileInView={{
                        top: circlePositions[index].ty,
                        left: circlePositions[index].tx,
                    }}
                >
                    {image.description}
                </motion.p>
            </motion.div>
        ));
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.manufacturing_section}
        >
            <motion.h2
                initial={{ opacity: 0, translateX: '-80px' }}
                whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}
                transition={{ duration: 0.5 }}
                className={styles.manufacturing_section_title}
            >
                {t('title')}
            </motion.h2>
            <div className={styles.manufacturing_section_steps_wrapper}>
                <div className={styles.manufacturing_section_circles_wrapper}>
                    {renderCircles()}
                </div>
                <motion.svg
                    className={styles.manufacturing_section_steps}
                    width="100%"
                    height={isDesktop ? 747 : isTablet ? 637 : isMobile ? 459 : 459}
                    viewBox={
                        isDesktop
                            ? '0 0 1123 747'
                            : isTablet
                                ? '0 0 757 637'
                                : isMobile
                                    ? '0 0 356 459'
                                    : '0 0 356 459'
                    }
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isDesktop && (
                        <React.Fragment>
                            <path
                                d="M449.805 2.0345H800.288C907.179 0.701171 1120.96 37.5345 1120.96 195.535C1122.77 254.701 1061.16 373.035 800.288 373.035H321.536"
                                stroke="#7F5539"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M322.711 373.035C215.82 371.699 2.03848 408.602 2.03848 566.904C0.231875 626.183 61.8373 744.742 322.711 744.742H706.578"
                                stroke="#7F5539"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </React.Fragment>
                    )}
                    {isTablet && (
                        <React.Fragment>
                            <path
                                d="M303.35 2.28023H539.208C611.14 1.14519 755.005 32.5005 755.005 167.002C756.221 217.369 714.763 318.104 539.208 318.104H217.031"
                                stroke="#7F5539"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M217.823 318.104C145.891 316.967 2.02591 348.382 2.02591 483.14C0.810153 533.603 42.2675 634.53 217.823 634.53H476.146"
                                stroke="#7F5539"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </React.Fragment>
                    )}
                    {isMobile && (
                        <React.Fragment>
                            <path
                                d="M142.664 1.02123H253.541C287.356 0.200847 354.987 22.8639 354.987 120.079C355.559 156.484 336.07 229.293 253.541 229.293H102.086"
                                stroke="#7F5539"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M102.459 229.293C68.6433 228.471 1.01255 251.177 1.01255 348.578C0.441019 385.052 19.9301 458 102.459 458H223.896"
                                stroke="#7F5539"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </React.Fragment>
                    )}
                    {isSmallMobile && (
                        <React.Fragment>
                            <path
                                d="M142.664 1.02123H253.541C287.356 0.200847 354.987 22.8639 354.987 120.079C355.559 156.484 336.07 229.293 253.541 229.293H102.086"
                                stroke="#7F5539"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M102.459 229.293C68.6433 228.471 1.01255 251.177 1.01255 348.578C0.441019 385.052 19.9301 458 102.459 458H223.896"
                                stroke="#7F5539"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </React.Fragment>
                    )}
                </motion.svg>
            </div>
        </motion.section>
    );
};

export default ManufacturingSection;
