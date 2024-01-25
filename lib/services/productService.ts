import type { Category, Products } from '@prisma/client';

export async function fetchProducts(): Promise<Products[]> {
	try {
		const { data: products } = await useFetch('/api/prisma/get-all-products');
		return products.value as Products[];
	} catch (error) {
		console.error('Erro ao carregar produtos:', error);
		throw error; // Lança o erro para ser tratado onde a função for chamada
	}
}

export async function fetchCategories(): Promise<Category[]> {
	try {
		const { data: categories } = await useFetch(
			'/api/prisma/get-all-categories'
		);
		return categories.value as Category[];
	} catch (error) {
		console.error('Erro ao carregar categorias:', error);
		throw error; // Lança o erro para ser tratado onde a função for chamada
	}
}
