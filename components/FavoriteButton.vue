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
		// Assuming productId is passed as a prop
		await useFetch('/api/prisma/add-favorite', {
			method: 'POST',
			body: {
				userId: props.userId,
				productId: props.productId,
			},
		});

		if (!Array.isArray(userStore.favorites)) {
			userStore.favorites = [];
		}

		const isAlreadyFavorite = userStore.favorites.includes(props.productId);

		if (isAlreadyFavorite) {
			userStore.favorites = userStore.favorites.filter(
				(id) => id !== props.productId
			);
		} else {
			userStore.favorites.push(props.productId);
		}
	} catch (error) {
		console.error('Error toggling favorite:', error);
	}
};
</script>
