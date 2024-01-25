<template>
	<section>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Por Categoria</h1>
		<div
			v-if="categories && categories.length > 0"
			class="flex justify-center md:justify-center md:flex-row overflow-x-auto gap-2"
		>
			<Category
				v-for="category in categories"
				:key="category.id"
				:category="category"
				:selected="category.id === selectedCategory"
				@click="handleCategoryClick(category.id)"
			/>
		</div>

		<div>
			<h1 class="text-2xl p-2 w-full text-center font-bold"></h1>
			<div
				v-if="filteredProducts"
				class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
			>
				<ProductComponent
					v-for="product in filteredProducts"
					:key="product.id"
					:product="product"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const selectedCategory = ref<number | null>(null);
import { fetchCategories, fetchProducts } from '~/lib/services/productService';
const userStore = useUserStore();

import { type Category, type Products } from '@prisma/client';

const categories = ref<Category[]>([]);
const products = ref<Products[]>([]);

const loadCategories = async () => {
	try {
		categories.value = await fetchCategories();
		userStore.isLoading = false;
	} catch (error) {
		console.error('Erro ao carregar categorias:', error);
		userStore.isLoading = false;
	}
};

const loadProducts = async () => {
	try {
		products.value = await fetchProducts();
		userStore.isLoading = false;
	} catch (error) {
		console.error('Erro ao carregar produtos:', error);
		userStore.isLoading = false;
	}
};

loadCategories(); // Carrega as categorias ao iniciar o componente
loadProducts(); // Carrega os produtos ao iniciar o componente

const handleCategoryClick = (categoryId: number) => {
	selectedCategory.value = categoryId;
};

const filteredProducts = computed(() => {
	const categoryId = selectedCategory.value;
	if (!categoryId || !products.value) {
		return products.value || [];
	}
	return products.value.filter((product) => product.categoryId === categoryId);
});
</script>
