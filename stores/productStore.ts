// stores/user.js
import { defineStore } from 'pinia';
import type { Category } from '~/server/api/prisma/get-all-categories';
import type { Products } from '~/server/api/prisma/get-all-products';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [] as Products[], // Initialize products as an empty array of type Product
		categories: [] as Category[], // Initialize products as an empty array of type Product
	}),

	actions: {
		async fetchProducts() {
			const { data: products } = await useFetch('/api/prisma/get-all-products');
			const { data: categories } = await useFetch(
				'/api/prisma/get-all-categories'
			);
			if (products.value) {
				this.products = products.value as Products[];
			}
			if (categories.value) {
				this.categories = categories.value as Category[];
			}
		},
	},

	persist: true,
});
