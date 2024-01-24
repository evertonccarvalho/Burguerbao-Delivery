// stores/productStore.js
import type { Favorites } from '@prisma/client';
import { defineStore } from 'pinia';
import type { Category } from '~/server/api/prisma/get-all-categories';
import type { Products } from '~/server/api/prisma/get-all-products';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [] as Products[],
		categories: [] as Category[],
		// favorites: [] as Favorites[],
	}),

	actions: {
		async fetchProducts() {
			try {
				const { data: products } = await useFetch(
					'/api/prisma/get-all-products'
				);
				if (products.value) {
					this.products = products.value as Products[];
				}
			} catch (error) {
				console.error('Erro ao carregar produtos:', error);
			}
		},

		async fetchCategories() {
			try {
				const { data: categories } = await useFetch(
					'/api/prisma/get-all-categories'
				);
				if (categories.value) {
					this.categories = categories.value as Category[];
				}
			} catch (error) {
				console.error('Erro ao carregar categorias:', error);
			}
		},
	},

	persist: true,
});
