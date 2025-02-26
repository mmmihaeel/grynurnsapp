export const port = process.env.PORT || 3000;
export const host = process.env.CLIENT_URL
	? `${process.env.CLIENT_URL}`
	: `http://localhost:${port}`;
