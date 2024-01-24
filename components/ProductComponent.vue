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

					<FavoriteButton :productId="product.id" :userId="user?.id" />
				</span>
				<span class="px-1 relative text-primary text-xs font-semibold">
					Extra {{ discountPercentage }}% de desconto
				</span>

				<p class="px-1 pt-0.5 text-xs text-secondary-foreground">
					{{ product.title.substring(0, 60) }}
				</p>
			</div>
			<!-- <AddToCartButton :product="product.id" /> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

interface Product {
	id: number;
	price: number;
	imageUrls: string;
	discountPercentage?: number;
	title: string;
}

const props = defineProps<{ product: Product }>();
const { product } = toRefs(props);

const userStore = useUserStore();
const user = useSupabaseUser();

const priceComputed = computed(() => {
	return (product.value.price / 100).toFixed(2);
});

const discountPercentage = product.value.discountPercentage || 0;

const oldPriceComputed = computed(() => {
	const discountedPrice =
		product.value.price - (product.value.price * discountPercentage) / 100;
	return (discountedPrice / 100).toFixed(2);
});

// const isInCart = computed(() => {
// 	let res = false;
// 	userStore.cart.forEach((prod) => {
// 		if (route.params.id == prod.id) {
// 			res = true;
// 		}
// 	});
// 	return res;
// });

// let favorite = ref(null);

// onBeforeMount(async () => {
// 	if (user.value?.id) {
// 		try {
// 			const response = await useFetch(
// 				`/api/prisma/get-isfavorite-by-user/${user.value.id}`
// 			);
// 			favorite.value = response.data.value; // Ou ajuste conforme a estrutura real da resposta
// 		} catch (error) {
// 			console.error('Error fetching favorites:', error);
// 			// Handle the error, such as displaying a message to the user
// 		}
// 	}
// });

// watchEffect(() => {
// 	if (favorite.value && favorite.value) {
// 		// Atualiza a variável currentImage com o valor de product.value.data.imageUrls
// 		favorite.value = favorite.value.data;
// 		userStore.isLoading = false;
// 	}
// });

// onMounted(async () => {
// 	if (user.value?.id) {
// 		try {
// 			// const response = await useFetch(
// 			// 	`/api/prisma/get-isfavorite-by-user/${user.value.id}`
// 			// );

// 			if (response.data) {
// 				userStore.favorites.push(response.data); // Assuming response.data is an array of favorite objects
// 			} else {
// 				// Handle the case where the response does not contain the expected data
// 			}
// 		} catch (error) {
// 			console.error('Error fetching favorites:', error);
// 			// Handle the error, such as displaying a message to the user
// 		}
// 	}
// });
</script>
