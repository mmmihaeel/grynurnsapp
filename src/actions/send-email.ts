'use server';
import { MessageDto } from '@/types/message.type';
import { MessageSchema } from '@/utils/validation';
import nodemailer from 'nodemailer';

const sendEmail = async (messageDto: MessageDto) => {
	const validatedMessageDto = await MessageSchema.safeParseAsync(messageDto);
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
	console.log('here');
	try {
		const info = await transporter.sendMail({
			from: process.env.MAILER_USER,
			to: validatedMessageDto.data?.email,
			subject: `Message<${process.env.MAILER_USER}>`,
			text: 'Message',
			html: '',
		});
		return {
			...info,
			message: `Message delivered to ${info.accepted}`,
			success: ' ',
			error: null,
		};
	} catch (error) {
		console.log(error);
		return {
			message: (error as Error)?.message,
			error: ' ',
			success: null,
		};
	}
};

export default sendEmail;
