<template>
	<section>
		<h1 class="text-2xl p-2 w-full text-center font-bold"></h1>
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
	</section>
</template>

<script setup lang="ts">
import {
	selectedCategory,
	categories,
	fetchCategories,
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

const handleCategoryClick = (categoryId: number) => {
	selectedCategory.value = categoryId;
};

loadCategories(); // Carrega as categorias ao iniciar o componente
</script>
