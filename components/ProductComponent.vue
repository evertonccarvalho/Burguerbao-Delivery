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

					<FavoriteButton :productId="product.id" :userId="user.id" />
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

const props = defineProps(['product']);
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

onMounted(async () => {
	if (user.value) {
		try {
			// Only make the API call if the user is authenticated
			const response = await useFetch(
				`/api/prisma/get-all-favorites-by-user/${user.value.id}`,
				{
					method: 'GET',
				}
			);

			if (response && response.favorites) {
				userStore.setFavorites(response.favorites);
			}
		} catch (error) {
			console.error('Error fetching favorites:', error);
			// Handle the error, such as displaying a message to the user
		}
	}
});
</script>
