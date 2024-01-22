// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		isMenuOverlay: false,
		isLoading: false,
		cart: [],
		checkout: [],
		favorites: [], // Initialize favorites as an empty array
		isFavorite: false, // Add isFavorite to the state
		selectedCategory: [],
	}),

	actions: {
		toggleFavorite(productId) {
			const index = this.favorites.indexOf(productId);

			if (index === -1) {
				// Adiciona o produto aos favoritos se ainda não estiver lá
				this.favorites.push(productId);
			} else {
				// Remove o produto dos favoritos se já estiver lá
				this.favorites.splice(index, 1);
			}
		},
		setFavorites(favorites) {
			// Define a lista completa de favoritos
			this.favorites = favorites;
		},
		selectCategory(categoryId) {
			this.selectedCategory = categoryId;
		},
		clearUser() {
			// Clear user-related information when the user logs out
			this.favorites = [];
			this.isFavorite = false;
			// ... other properties to clear
		},
	},

	persist: true,
});
