// stores/user.ts
import type { Favorites } from '@prisma/client';
import type { promises } from 'dns';
import { defineStore } from 'pinia';

interface UserState {
	isMenuOverlay: boolean;
	isLoading: boolean;
	cart: any[]; // Ajuste o tipo conforme necessário
	checkout: any[]; // Ajuste o tipo conforme necessário
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
		clearUser(): void {
			this.favorites = [];
			this.cart = [];
			this.isFavorite = false;
			// ... outras propriedades para limpar
		},
	},

	persist: true,
});
