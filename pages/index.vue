<template>
	<MainLayout>
		<div id="IndexPage" class="mt-4 text-foreground container mx-auto px-2">
			<HeroBanner />
			<!-- CATEGORIES -->
			<!-- <div class="flex w-full">
				<Button @click="fetchAndHandleFavorites">FETCH</Button>
				<CategoriesList />
			</div> -->

			<FeaturedProductsGRID />
			<!-- <ProductList /> -->
			<!-- PRODUTOS -->
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const user = useSupabaseUser();
// onBeforeMount(async (productIds) => {
// 	try {
// 		const userId = user.value.id;
// 		// Fetch favorites
// 		console.log('Fetching favorites...');
// 		const favoritesAPI = await useFetch(
// 			`/api/prisma/get-all-favorites-by-user/${userId}`
// 		);

// 		console.log('Favorites API response:', favoritesAPI);

// 		const favorites = favoritesAPI.data?.value || []; // Assuming favoritesAPI.data is an array of favorite objects

// 		console.log('Fetched favorites:', favorites);

// 		if (!Array.isArray(favorites)) {
// 			userStore.favorites = [];
// 		} else {
// 			userStore.favorites = favorites.map((item) => item.productId);
// 		}

// 		// Check if productIds is an array before using forEach
// 		if (Array.isArray(productIds)) {
// 			// Iterate through the array of product IDs
// 			productIds.forEach((productId) => {
// 				const isAlreadyFavorite = userStore.favorites.includes(productId);

// 				if (isAlreadyFavorite) {
// 					console.log(
// 						`Product ${productId} is already a favorite. Removing from userStore.favorites.`
// 					);
// 					userStore.favorites = userStore.favorites.filter(
// 						(id) => id !== productId
// 					);
// 				} else {
// 					console.log(
// 						`Product ${productId} is not a favorite. Adding to userStore.favorites.`
// 					);
// 					userStore.favorites.push(productId);
// 				}
// 			});
// 		}

// 		console.log('Final userStore.favorites:', userStore.favorites);
// 	} catch (error) {
// 		console.error('Error fetching favorites:', error);
// 	}
// });
// const fetchAndHandleFavorites = async (productIds) => {
// 	try {
// 		const userId = user.value.id;

// 		// Fetch favorites
// 		console.log('Fetching favorites...');
// 		const favoritesAPI = await useFetch(
// 			`/api/prisma/get-all-favorites-by-user/${userId}`
// 		);

// 		console.log('Fetched favorites:', favoritesAPI.data?.value);

// 		userStore.favorites = Array.isArray(favoritesAPI.data?.value)
// 			? favoritesAPI.data.value.map((item) => item.productId)
// 			: [];

// 		// Check if productIds is an array before using forEach
// 		if (Array.isArray(productIds)) {
// 			// Iterate through the array of product IDs
// 			productIds.forEach((productId) => {
// 				const isAlreadyFavorite = userStore.favorites.includes(productId);

// 				if (isAlreadyFavorite) {
// 					console.log(
// 						`Product ${productId} is already a favorite. Removing from userStore.favorites.`
// 					);
// 					userStore.favorites = userStore.favorites.filter(
// 						(id) => id !== productId
// 					);
// 				} else {
// 					console.log(
// 						`Product ${productId} is not a favorite. Adding to userStore.favorites.`
// 					);
// 					userStore.favorites.push(productId);
// 				}
// 			});
// 		}

// 		console.log('Final userStore.favorites:', userStore.favorites);
// 	} catch (error) {
// 		console.error('Error fetching favorites:', error);
// 	}
// };

// Example usage with an array of product IDs
// const productIds = [1, 2, 3];
// fetchAndHandleFavorites(productIds);
</script>
