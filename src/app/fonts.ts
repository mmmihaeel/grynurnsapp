import localFont from 'next/font/local';

export const Mariupol = localFont({
	src: [
		{
			path: '../assets/fonts/Mariupol-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/Mariupol-Regular.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../assets/fonts/Mariupol-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/Mariupol-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	adjustFontFallback: 'Times New Roman',
});

export const AngleciaProDisplay = localFont({
	src: [
		{
			path: '../assets/fonts/Anglecia-Pro-Display.otf',
			weight: '400',
			style: 'normal',
		},
	],
	display: 'swap',
	adjustFontFallback: 'Times New Roman',
});
