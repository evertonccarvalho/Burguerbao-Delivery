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
							<NuxtLink
								class="flex items-center gap-3 p-1 hover:underline hover:text-blue-500"
								:to="`/item/${favorite.productId}`"
							>
								<div
									class="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-card"
								>
									<img
										class="rounded-md h-auto max-h-[80%]"
										sizes="100vw"
										:src="favorite.product.imageUrls"
									/>
								</div>
								{{ favorite.product.title }}
							</NuxtLink>
						</div>
					</div>
				</div>

				<div v-else class="flex items-center justify-center">
					Você não possui favoritos.
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const user = useSupabaseUser();

let favorites = ref(null);

onBeforeMount(async () => {
	if (user.value) {
		// Somente busca os favoritos se houver um usuário logado
		favorites.value = await useFetch(
			`/api/prisma/get-all-favorites-by-user/${user.value.id}`
		);
	}
});

onMounted(() => {
	if (!user.value) {
		// Se não houver usuário, redireciona para a página de autenticação
		return navigateTo('/auth');
	}

	setTimeout(() => (userStore.isLoading = false), 200);
});
</script>
