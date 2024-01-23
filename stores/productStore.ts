// stores/user.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		PRODUCTS_DATA: [],
	}),

	actions: {
		async fetch() {
			await $fetch('/api/prisma/get-all-products'),
				(this.PRODUCTS_DATA = this.PRODUCTS_DATA);
		},
	},

	persist: true,
});
