'use server';

import { host } from '@/i18n.config';
import { Product } from '@/types/product.type';

const getProducts = async () => {
	const url = `${host}/products/products.json`;
	console.log(url);
	const res = await fetch(url, {
		cache: 'force-cache',
	});
	if (!res.ok) {
		throw new Error(
			`Failed to fetch data! Status code: ${res.status}, error message: ${res.text}`
		);
	}
	return res.json() as unknown as Product[];
};

export default getProducts;
