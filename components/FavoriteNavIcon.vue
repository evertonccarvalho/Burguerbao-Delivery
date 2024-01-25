<template>
	<NuxtLink to="/favorites" class="flex gap-2 flex-row items-center">
		<button
			:class="{ 'text-primary': $route.path === '/favorites' }"
			class="relative flex flex-col md:flex-row gap-1 items-center justify-center hover:text-primary capitalize text-sm transition-all duration-300"
		>
			<div class="relative">
				<span
					class="absolute flex items-center justify-center -right-[3px] top-0 bg-red-600 h-[17px] min-w-[17px] text-xs text-foreground px-0.5 rounded-full"
				>
					{{ userStore.favorites.length }}
				</span>

				<Icon name="mdi:heart" size="28" />
			</div>
			Favoritos
		</button>
	</NuxtLink>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const user = useSupabaseUser();

const fetchFavorites = async (userId) => {
	try {
		const favoritesAPI = await useFetch(
			`/api/prisma/get-all-favorites-by-user/${userId}`
		);
		console.log('Fetched favorites:', favoritesAPI.data);
		return favoritesAPI.data || [];
	} catch (error) {
		console.error('Error fetching favorites:', error);
		return [];
	}
};

onMounted(async () => {
	if (user.value) {
		try {
			const userId = user.value.id;
			console.log('User ID:', userId);

			const favoritesResponse = await fetchFavorites(userId);
			console.log('Fetched favorites:', favoritesResponse);

			// Acessa o array de favoritos dentro do _value
			const favorites = favoritesResponse._value;
			console.log('Favorites:', favorites);

			// Mapeia os favoritos corretamente antes de atribuí-los ao userStore
			userStore.favorites = favorites
				.map((favorite) => {
					return favorite.favoriteItem.map((item) => item.productId);
				})
				.flat();
			console.log('Updated userStore with favorites:', userStore.favorites);
		} catch (error) {
			console.error('Error during component setup:', error);
		}
	}
});
</script>
