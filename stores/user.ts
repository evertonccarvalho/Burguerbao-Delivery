// stores/user.ts
import type { Favorites } from '@prisma/client';
import { defineStore } from 'pinia';

interface UserState {
	isMenuOverlay: boolean;
	isLoading: boolean;
	cart: any[]; // ajuste o tipo conforme necessário
	checkout: any[]; // ajuste o tipo conforme necessário
	favorites: Favorites[];
	isFavorite: boolean;
}

export const useUserStore = defineStore({
	id: 'user',
	state: (): UserState => ({
		isMenuOverlay: false,
		isLoading: false,
		cart: [],
		checkout: [],
		favorites: [],
		isFavorite: false,
	}),

	actions: {
		toggleFavorite(productId: number): void {
			const index = this.favorites.findIndex(
				(favorite) => favorite.productId === productId
			);

			if (index === -1) {
				this.favorites.push({ id: 0, userId: '', productId, created_at: null });
			} else {
				this.favorites.splice(index, 1);
			}
		},

		clearUser(): void {
			this.favorites = [];
			this.isFavorite = false;
			// ... outras propriedades para limpar
		},
	},

	persist: true,
});
