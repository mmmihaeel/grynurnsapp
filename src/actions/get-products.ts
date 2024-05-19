'use server';
import { Product } from '@/types/product.type';
import fs from 'fs/promises';
import path from 'path';

const getProducts = async () => {
	const data = await fs.readFile(
		path.join(process.cwd(), '/public/products/products.json')
	);
	const json = JSON.parse(data.toString());
	return json as unknown as Product[];
};

export default getProducts;
