'use server';

import { MessageDto } from '@/types/message.type';
import emailTemplate from '@/utils/email-template';
import { MessageSchema } from '@/utils/validation';
import nodemailer from 'nodemailer';

const sendEmail = async (messageDto: MessageDto) => {
	console.log(process.env);

	const validatedMessageDto = await MessageSchema.safeParseAsync(messageDto);
	if (!validatedMessageDto.success) {
		return {
			message: 'Validation failed!',
			error: 'error',
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
			to: process.env.MAILER_USER,
			subject: `Message<${process.env.MAILER_USER}>`,
			text: 'Message',
			html: emailTemplate(validatedMessageDto?.data as MessageDto),
		});
		return {
			...info,
			message: `Message delivered to ${info.accepted}`,
			success: 'success',
			error: null,
		};
	} catch (error) {
		console.log(error);
		return {
			message: (error as Error)?.message,
			error: 'error',
			success: null,
		};
	}
};

export default sendEmail;
