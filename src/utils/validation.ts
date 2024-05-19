import zod from 'zod';

export const MessageSchema = zod.object({
	name: zod.string().min(1, { message: 'invalid_name' }),
	email: zod.string().email({ message: 'invalid_email' }),
	phoneNumber: zod
		.string()
		.regex(
			/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
			'invalid_phonenumber'
		),
	message: zod.string().max(1000, { message: 'message_max' }),
});
