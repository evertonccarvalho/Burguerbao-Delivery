<template>
	<div>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Produtos</h1>
		<div v-if="pending">
			<p>Loading...</p>
		</div>
		<div v-else-if="error">
			<p>Erro Code {{ error.statusCode }}</p>
			<p>Erro Message {{ error.message }}</p>
		</div>
		<div
			v-else
			class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
		>
			<ProductComponent
				v-for="product in PRODUCTS_DATA.products"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>

<script setup>
const {
	pending,
	data: PRODUCTS_DATA,
	refresh,
	error,
} = await useAsyncData(
	'PRODUCTS_DATA',
	async () => {
		const [products, categories] = await Promise.all([
			$fetch('/api/prisma/get-all-products'),
			$fetch('/api/prisma/get-all-categories'),
		]);
		return {
			products,
			categories,
		};
	},
	{
		lazy: false,
	}
);
</script>
