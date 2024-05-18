'use server';
import { messageSchema } from '@/utils/validation';
import nodemailer from 'nodemailer';

export type MessageDto = {
	name: string;
	email: string;
	phoneNumber: string;
	message: string;
};

const sendEmail = async (messageDto: MessageDto) => {
	const validatedMessageDto = await messageSchema.parseAsync(messageDto);
	if (!validatedMessageDto) {
		return {
			error: '',
		};
	}
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.MAILER_USER,
			pass: process.env.MAILER_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});
	try {
		const info = await transporter.sendMail({
			from: process.env.MAILER_USER,
			to: validatedMessageDto.email,
			subject: `Message<${process.env.MAILER_USER}>`,
			text: 'Message',
			html: '',
		});
		return {
			...info,
			success: `Message delivered to ${info.accepted}`,
		};
	} catch (error) {
		return {
			error: (error as Error)?.message,
		};
	}
};

export default sendEmail;
