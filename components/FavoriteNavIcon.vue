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

				<Icon name="mdi:heart" size="33" />
			</div>
			Carrinho
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
		return favoritesAPI.data?.value || [];
	} catch (error) {
		console.error('Error fetching favorites:', error);
		return [];
	}
};

onMounted(async () => {
	try {
		const userId = user.value.id;
		const favorites = await fetchFavorites(userId);

		userStore.favorites = favorites.map((item) => item.productId);
	} catch (error) {
		console.error('Error during component setup:', error);
	}
});
</script>
