import zod from 'zod';

export const messageSchema = zod.object({
	name: zod.string().min(1, { message: 'Name is required' }),
	email: zod.string().email({ message: 'Invalid email format' }),
	phoneNumber: zod
		.string()
		.regex(
			/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
			'Invalid Number!'
		),
	message: zod
		.string()
		.max(1000, { message: 'Message cannot exceed 1000 characters' }),
});
