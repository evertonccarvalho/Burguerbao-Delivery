// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		isMenuOverlay: false,
		isLoading: false,
		cart: [],
		checkout: [],
		favorites: [], // Initialize favorites as an empty array
	}),
	persist: true,
});
