<!-- ProductDetails.vue -->

<template>
	<div v-if="product && product.data">
		<p class="mb-2">{{ product.data.title }}</p>
		<p class="font-light text-xs mb-2 text-balance">
			{{ product.data.description }}
		</p>

		<div class="flex items-center pt-1.5">
			<span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
				<Icon
					name="material-symbols:star-rounded"
					class="-mt-[17px]"
					size="12"
				/>
			</span>
			<p class="text-[#FF5353]">Extra off</p>
		</div>

		<div class="border-b" />

		<div class="flex items-center justify-start gap-2 my-2">
			<div class="text-xl font-bold">R$ {{ priceComputed }}</div>
			<AddToCartButton :product="product" />
		</div>
	</div>
</template>

<script setup>
// Propriedades do componente
const props = defineProps([
	'product',
	'priceComputed',
	// 'isInCart',
	// 'addToCart',
]);
</script>
