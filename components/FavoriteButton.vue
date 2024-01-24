<!-- FavoriteButton.vue -->
<template>
	<div
		id="FavoriteButton"
		@click="toggleFavorite"
		:class="{
			'bg-red-500 rounded-full p-0.5 flex': isFavorite,
			'p-0.5 flex': !isFavorite,
			'transition-colors hover:bg-red-500 rounded-full duration-300': true,
		}"
	>
		<Icon :name="isFavorite ? 'mdi:heart' : 'mdi:heart-outline'" size="20" />
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const props = defineProps(['productId', 'userId']);

const userStore = useUserStore();

const isFavorite = computed(() => {
	return userStore.favorites.includes(props.productId);
});

const toggleFavorite = async () => {
	try {
		const { userId, productId } = props;
		console.log(userId);
		if (!userId) {
			console.warn('User not authenticated. Cannot toggle favorite.');
			return;
		}

		await addOrRemoveFavorite(userId, productId);

		updateFavoritesInStore(productId);
	} catch (error) {
		console.error('Error toggling favorite:', error);
	}
};

const addOrRemoveFavorite = async (userId, productId) => {
	const method = 'POST'; // Assuming it's always a POST request
	const url = '/api/prisma/add-favorite';

	await useFetch(url, {
		method,
		body: { userId, productId },
	});
};

const updateFavoritesInStore = (productId) => {
	const { favorites } = userStore;

	if (!Array.isArray(favorites)) {
		userStore.favorites = [];
		return;
	}

	const isAlreadyFavorite = favorites.includes(productId);

	if (isAlreadyFavorite) {
		userStore.favorites = favorites.filter((id) => id !== productId);
	} else {
		userStore.favorites.push(productId);
	}
};
</script>
