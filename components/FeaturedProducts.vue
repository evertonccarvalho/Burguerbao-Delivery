<template>
	<div>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Produtos</h1>

		<div
			class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
		>
			<ProductComponent
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>

<script setup>
import { useProductStore } from '~/stores/productStore';
// const { fetchProducts, products } = useProductStore();

const store = useProductStore();
const { fetchProducts } = store; // have all non reactiave stuff here
const { products } = storeToRefs(store);

await fetchProducts();
console.log(products);
</script>
