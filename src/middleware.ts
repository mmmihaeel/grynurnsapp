import createMiddleware from 'next-intl/middleware';
import { defaultLocale, routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
	const locale = request.headers.get('x-custom-locale') || defaultLocale;
	if (request.method === 'POST') {
		const response = NextResponse.next();
		response.headers.set('x-custom-locale', defaultLocale);
		return response;
	}
	console.log(routing);
	const handleI18nRouting = createMiddleware(routing);
	const response = handleI18nRouting(request);
	response.headers.set('x-custom-locale', locale);
	return response;
}

export const config = {
	matcher: [
		'/',
		'/(en-GB|de-DE|fr-FR|pl-PL|uk-UA)/:path*',
		'/((?!_next|_vercel|.*\\..*).*)',
	],
};
