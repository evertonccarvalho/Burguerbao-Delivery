// stores/user.js
import { defineStore } from 'pinia';
import type { Product } from '~/server/api/prisma/get-all-products';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [] as Product[], // Initialize products as an empty array of type Product
	}),

	actions: {
		async fetchProducts() {
			const { data: products } = await useFetch('/api/prisma/get-all-products');
			if (products.value) {
				this.products = products.value as Product[];
			}
		},
	},

	persist: true,
});
