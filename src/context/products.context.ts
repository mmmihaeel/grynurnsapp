'use client';

import { Product } from '@/types/product.type';
import React from 'react';

export const ProductsContext = React.createContext<Product[] | undefined>(
	undefined
);

export const useProductsContext = () => {
	const productsContext = React.useContext(ProductsContext);
	if (productsContext === undefined) {
		throw new Error(
			'useProductsContext must be inside a ProductsContextProvider'
		);
	}
	return productsContext;
};
