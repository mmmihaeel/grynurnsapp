'use client';

import { FC, useEffect, useState, useTransition } from 'react';
import styles from './OrderModal.module.scss';
import { subscribeToEvent, unsubscribeToEvent } from '@/utils/custom-events';
import { motion } from 'framer-motion';
import Close from '@/assets/icons/close.svg';
import { MessageSchema } from '@/utils/validation';
import { MessageDto } from '@/types/message.type';
import { useTranslations } from 'next-intl';
import sendEmail from '@/actions/send-email';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const show = {
    opacity: 1,
    scale: 1,
    transform: 'translate(-50%, -50%)',
    display: 'flex',
};

const hide = {
    opacity: 0,
    scale: 0,
    transitionEnd: {
        display: 'none',
    },
};

const OrderModal: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<null | string>(null);
    const [success, setSuccess] = useState<null | string>(null);
    const toggleModalShown = () => setShowModal((prev) => !prev);
    const t = useTranslations('translations.order-modal');

    useEffect(() => {
        const body = document.querySelector('body.app-wrapper') as HTMLBodyElement;
        if (body && showModal) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'scroll';
        }
    }, [showModal]);

    useEffect(() => {
        subscribeToEvent('showModal', toggleModalShown);
        return () => unsubscribeToEvent('showModal', toggleModalShown);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowModal(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (
            (e.ctrlKey || e.metaKey) &&
            (e.key === 'Enter' || e.key === 'NumpadEnter')
        ) {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit();
        }
    };

    const messageForm = useForm<MessageDto>({
        mode: 'onChange',
        resolver: zodResolver(MessageSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            phoneNumber: '',
        },
    });

    const onSubmit: SubmitHandler<MessageDto> = async (dto: MessageDto) => {
        setError(null);
        setSuccess(null);
        startTransition(async () => {
            const data = await sendEmail(dto);
            setTimeout(() => {
                setError(null);
                setSuccess(null);
                setShowModal(false);
            }, 6000);
            if (data?.error) {
                console.error(data?.message);
                return setError(data?.error);
            }
            if (data?.success) {
                messageForm.reset();
                console.log(data?.success);
                return setSuccess(data?.success);
            }
        });
    };

    return (
        <div className={styles.orderModal}>
            {showModal && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={showModal ? show : hide}
                        className={styles.orderModal_background}
                        onClick={toggleModalShown}
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={showModal ? show : hide}
                        className={styles.orderModal_modal}
                    >
                        <Close
                            className={styles.orderModal_modal_close}
                            onClick={toggleModalShown}
                        />

                        <h2 className={styles.orderModal_modal_title}>{t('title')}</h2>
                        <FormProvider {...messageForm}>
                            <form
                                onSubmit={messageForm.handleSubmit(onSubmit)}
                                className={styles.orderModal_form}
                            >
                                <div className={styles.orderModal_modal_field}>
                                    <div className={styles.orderModal_modal_field_input}>
                                        <label htmlFor="name">{t('name_label')}</label>
                                        <input
                                            {...messageForm.register('name')}
                                            placeholder={t('name_placeholder')}
                                            name="name"
                                            type="text"
                                            id="name"
                                            style={
                                                messageForm?.formState?.errors?.name
                                                    ? { border: '1px solid #B85400' }
                                                    : {}
                                            }
                                            required
                                        />
                                    </div>
                                    <span className={styles.orderModal_modal_field_error}>
                                        {messageForm?.formState?.errors?.name?.message &&
                                            t(messageForm?.formState.errors?.name?.message)}
                                    </span>
                                </div>
                                <div className={styles.orderModal_modal_field}>
                                    <div className={styles.orderModal_modal_field_input}>
                                        <label htmlFor="email">{t('email_label')}</label>
                                        <input
                                            {...messageForm.register('email')}
                                            name="email"
                                            placeholder={t('email_placeholder')}
                                            type="text"
                                            id="email"
                                            style={
                                                messageForm?.formState?.errors?.email
                                                    ? { border: '1px solid #B85400' }
                                                    : {}
                                            }
                                            required
                                        />
                                    </div>
                                    <span className={styles.orderModal_modal_field_error}>
                                        {messageForm?.formState?.errors?.email?.message &&
                                            t(messageForm?.formState?.errors?.email?.message)}
                                    </span>
                                </div>
                                <div className={styles.orderModal_modal_field}>
                                    <div className={styles.orderModal_modal_field_input}>
                                        <label htmlFor="phoneNumber">
                                            {t('phonenumber_label')}
                                        </label>
                                        <input
                                            {...messageForm.register('phoneNumber')}
                                            name="phoneNumber"
                                            placeholder={t('phonenumber_placeholder')}
                                            type="text"
                                            id="phoneNumber"
                                            style={
                                                messageForm?.formState?.errors?.phoneNumber
                                                    ? { border: '1px solid #B85400' }
                                                    : {}
                                            }
                                            required
                                        />
                                    </div>
                                    <span className={styles.orderModal_modal_field_error}>
                                        {messageForm?.formState?.errors?.phoneNumber?.message &&
                                            t(messageForm?.formState?.errors?.phoneNumber?.message)}
                                    </span>
                                </div>
                                <div className={styles.orderModal_modal_field}>
                                    <div className={styles.orderModal_modal_field_input}>
                                        <label htmlFor="message">{t('message_label')}</label>
                                        <textarea
                                            {...messageForm.register('message')}
                                            id="message"
                                            placeholder={t('message_placeholder')}
                                            title="message"
                                            name="message"
                                            onKeyDown={handleKeyDown}
                                            style={
                                                messageForm?.formState?.errors?.message
                                                    ? { border: '1px solid #B85400' }
                                                    : {}
                                            }
                                            required
                                        />
                                    </div>
                                    <span className={styles.orderModal_modal_field_error}>
                                        {messageForm?.formState?.errors?.message?.message && t(messageForm?.formState?.errors?.message?.message)}
                                    </span>
                                </div>
                                <button
                                    disabled={isPending}
                                    type="submit"
                                    name="submit"
                                    className={styles.orderModal_sendButton}
                                >
                                    {t('send')}
                                </button>
                            </form>
                        </FormProvider>
                        {success && <div className={styles.orderModal_success}>{t(success)}</div>}
                        {error && <div className={styles.orderModal_error}>{t(error)}</div>}
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default OrderModal;
