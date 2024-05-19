'use server';
import { Product } from '@/types/product.type';
import fs from 'fs/promises';
import path from 'path';

const getProducts = async () => {
	// const url = `${host}/products/products.json`;
	// console.log(url);
	// const res = await fetch(url, {
	// 	cache: 'force-cache',
	// });
	const data = await fs.readFile(
		path.join(process.cwd(), '/public/products/products.json')
	);
	const json = JSON.parse(data.toString());
	// if (!res.ok) {
	// 	throw new Error(
	// 		`Failed to fetch data! Status code: ${res.status}, error message: ${res.text}`
	// 	);
	// }
	return json as unknown as Product[];
};

export default getProducts;
