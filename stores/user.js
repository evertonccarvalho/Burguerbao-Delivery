// stores/counter.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		isMenuOverlay: false,
		isLoading: false,
		cart: [],
		checkout: [],
		favorites: [], // New property to store liked items
	}),
	persist: true,
});
