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
import {
	selectedCategory,
	categories,
	products,
	fetchCategories,
	fetchProducts,
	filteredProducts,
} from '~/lib/services/productService';

const userStore = useUserStore();
// userStore.isLoading = false;

const loadCategories = async () => {
	try {
		categories.value = await fetchCategories();
		// Carregamento das categorias concluído com sucesso
	} catch (error) {
		console.error('Erro ao carregar categorias:', error);
	} finally {
		userStore.isLoading = false; // Define isLoading como false independentemente do resultado do carregamento
	}
};

const loadProducts = async () => {
	try {
		products.value = await fetchProducts();
		// Carregamento dos produtos concluído com sucesso
	} catch (error) {
		console.error('Erro ao carregar produtos:', error);
	} finally {
		userStore.isLoading = false; // Define isLoading como false independentemente do resultado do carregamento
	}
};

const handleCategoryClick = (categoryId: number) => {
	selectedCategory.value = categoryId;
};

loadCategories(); // Carrega as categorias ao iniciar o componente
loadProducts(); // Carrega os produtos ao iniciar o componente
</script>
