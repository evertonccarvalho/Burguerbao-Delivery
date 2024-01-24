<template>
	<section>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Por Categoria</h1>
		<div
			v-if="categories && categories.length > 0"
			class="flex justify-start md:justify-center md:flex-row overflow-x-auto gap-2"
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

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useProductStore } from '~/stores/productStore';
const userStore = useUserStore();

const productStore = useProductStore();

const selectedCategory = ref(null);
const { fetchCategories } = productStore; // have all non reactiave stuff here
const { categories } = storeToRefs(productStore);

const loadCategories = async () => {
	try {
		await fetchCategories();
		userStore.isLoading = false;
	} catch (error) {
		console.error('Erro ao carregar categorias:', error);
	} finally {
		userStore.isLoading = false;
	}
};

loadCategories();

const handleCategoryClick = async (categoryId) => {
	selectedCategory.value = categoryId;
};

const filteredProducts = computed(() => {
	const categoryId = selectedCategory.value;

	if (!categoryId || !productStore.products) {
		return productStore.products || [];
	}

	return productStore.products.filter(
		(product) => product.categoryId === categoryId
	);
});
</script>
