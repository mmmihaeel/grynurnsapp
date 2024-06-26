export type Product = {
	id: string;
	title: {
		'uk-UA': string;
		'pl-PL': string;
		'de-DE': string;
		'en-GB': string;
		'fr-FR': string;
	};
	description: {
		'uk-UA': string;
		'pl-PL': string;
		'de-DE': string;
		'en-GB': string;
		'fr-FR': string;
	};
	images: string[];
	sizes?: {
		size: string;
		width: number;
		height: number;
		image: string;
	}[];
};
