<template>
	<MainLayout>
		<div
			id="FavoritesPage"
			class="mt-4 container w-full flex p-4 h-screen mx-auto px-2"
		>
			<div class="bg-card/30 w-full p-6 min-h-[150px]">
				<div class="flex items-center text-xl">
					<Icon name="carbon:delivery" color="#5FCB04" size="35" />
					<span class="pl-4">Favoritos</span>
				</div>

				<div v-if="favorites && favorites.data">
					<div
						v-for="favorite in favorites.data"
						:key="favorite.id"
						class="text-sm pl-[50px]"
					>
						<div class="border-b py-1">
							<div v-for="item in favorite.favoriteItems" :key="item.id">
								<NuxtLink
									class="flex items-center gap-3 p-1 hover:underline hover:text-blue-500"
									:to="`/item/${item.productId}`"
								>
									<div
										class="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-card"
									>
										<img
											class="rounded-md h-auto max-h-[80%]"
											sizes="100vw"
											:src="item.product.imageUrls"
										/>
									</div>
									{{ item.product.title }}
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import MainLayout from '~/layouts/MainLayout.vue';

const userStore = useUserStore();
const user = useSupabaseUser();
// const favorites = ref(null);

const favorites = ref();

onBeforeMount(async () => {
	{
		if (user.value)
			try {
				// Fetch favorites
				favorites.value = await useFetch(
					`/api/prisma/get-all-favorites-by-user/${user.value.id}`
				);
				console.log('FAVORITEPAGE', favorites.value);
			} catch (error) {
				console.error('Error fetching favorites:', error);
				// Handle the error, e.g., show a message to the user
			}
	}
});

onMounted(() => {
	if (!user.value) {
		// Redirect to the authentication page
		return navigateTo('/auth');
	}
	// If there is a user, indicate that loading is complete
	userStore.isLoading = false;
});
</script>
