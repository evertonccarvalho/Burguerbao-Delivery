<template>
	<section class="md:grid flex flex-col md:grid-cols-9 grid-cols-1 py-4 gap-4">
		<div
			class="w-full col-span-9 max-h-fullpx-4 rounded-xl overflow-hidden bg-card/30"
		>
			<div class="flex gap-2 flex-col">
				<!-- <h1 class="text-2xl p-2 w-full text-center bg font-bold">
					Mais Vendidos
				</h1> -->
				<template v-for="category in categories" :key="category.id">
					<div v-if="hasProductsForCategory(category.id)">
						<h2 class="text-xl p-2 w-full text-center bg font-bold">
							{{ category.name }}
						</h2>
						<div class="flex flex-row pb-1 overflow-x-auto gap-x-4">
							<ProductComponent
								v-for="product in getProductsForCategory(category.id)"
								:key="product.id"
								:product="product"
							/>
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import { type Products } from '@prisma/client';
import {
	categories,
	products,
	fetchProducts,
	filteredProducts,
} from '~/lib/services/productService';

const userStore = useUserStore();

const loadProducts = async () => {
	try {
		products.value = await fetchProducts();
	} catch (error) {
		console.error('Erro ao carregar produtos:', error);
	} finally {
		userStore.isLoading = false;
	}
};

const hasProductsForCategory = (categoryId: number): boolean => {
	return filteredProducts.value.some(
		(product) => product.categoryId === categoryId
	);
};

const getProductsForCategory = (categoryId: number): Products[] => {
	return filteredProducts.value.filter(
		(product) => product.categoryId === categoryId
	);
};
loadProducts();
</script>
