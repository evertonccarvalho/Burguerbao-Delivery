<template>
	<div class="flex flex-col gap-8">
		<div
			:id="`ComponenteProduto${product.id}`"
			class="min-h-[266px] min-w-[184px] inline-block group bg-card/50 rounded-xl cursor-pointer"
		>
			<NuxtLink :to="`/item/${product.id}`">
				<div class="flex bg-re flex-col">
					<div
						class="flex h-40 w-full items-center justify-center rounded-xl bg-card"
					>
						<img
							class="h-auto max-h-[80%] group-hover:rotate-12 transition-all duration-300 w-auto max-w-[90%]"
							sizes="100vw"
							:src="product.imageUrls"
						/>
					</div>
				</div>
			</NuxtLink>

			<div id="DetalhesProduto" class="flex flex-col py-4 px-5">
				<span class="flex items-center justify-start gap-2 px-1">
					<span class="text-primary font-semibold"
						>R$ {{ oldPriceComputed }}
					</span>
					<span
						class="text-secondary-foreground text-xs text-light line-through"
						>R$ {{ priceComputed }}
					</span>
					<div
						@click="toggleFavorite"
						:class="{
							'bg-red-500 rounded-full p-0.5 flex': isFavorite,
							'p-0.5 flex': !isFavorite,
							'transition-colors duration-300': true, // Adiciona uma transição de cores
						}"
					>
						<Icon
							:name="isFavorite ? 'mdi:heart' : 'mdi:heart-outline'"
							size="20"
						/>
					</div>
				</span>
				<span class="px-1 relative text-primary text-xs font-semibold">
					Extra {{ discountPercentage }}% de desconto
				</span>

				<p class="px-1 pt-0.5 text-xs text-secondary-foreground">
					{{ product.title.substring(0, 60) }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
import { computed, onMounted, ref, toRefs } from 'vue';

const props = defineProps(['product']);
const { product } = toRefs(props);

const userStore = useUserStore();
const user = useSupabaseUser();
// const favorites = computed(() => userStore.favorites || []); // Certifique-se de que favorites seja uma matriz

const isFavorite = computed(() => {
	return userStore.favorites.includes(product.value.id);
});

onMounted(async () => {
	try {
		// Faça uma chamada para obter os favoritos do usuário do seu backend
		const response = await useFetch(
			`/api/prisma/get-all-favorites-by-user/${user.value.id}`,
			{
				method: 'GET',
			}
		);

		// Atualize a lista de favoritos localmente
		if (response && response.favorites) {
			userStore.setFavorites(response.favorites);
		}
	} catch (error) {
		console.error('Error fetching favorites:', error);
		// Lide com o erro, como exibir uma mensagem para o usuário
	}
});

const toggleFavorite = async () => {
	try {
		await useFetch('/api/prisma/add-favorite', {
			method: 'POST',
			body: {
				userId: user.value.id,
				productId: product.value.id,
			},
		});

		// Certifique-se de que this.favorites é uma matriz
		if (!Array.isArray(userStore.favorites)) {
			userStore.favorites = [];
		}

		// Verifique se o produto já está nos favoritos usando includes
		const isAlreadyFavorite = userStore.favorites.includes(product.value.id);

		if (isAlreadyFavorite) {
			// Se já estiver nos favoritos, remova-o
			userStore.favorites = userStore.favorites.filter(
				(id) => id !== product.value.id
			);
		} else {
			// Se não estiver nos favoritos, adicione-o
			userStore.favorites.push(product.value.id);
		}

		console.log('Product toggled in favorites:', product.value.id);
		console.log('Updated userStore.favorites:', userStore.favorites);
	} catch (error) {
		console.error('Error toggling favorite:', error);
		// Lide com o erro, como exibir uma mensagem para o usuário
	}
};

const priceComputed = computed(() => {
	return (product.value.price / 100).toFixed(2);
});

const discountPercentage = product.value.discountPercentage || 0;

const oldPriceComputed = computed(() => {
	const discountedPrice =
		product.value.price - (product.value.price * discountPercentage) / 100;
	return (discountedPrice / 100).toFixed(2);
});
</script>
