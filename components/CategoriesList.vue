<template>
	<section>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Por Categoria</h1>
		<div
			v-if="categories && !loading"
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
				v-if="filteredProducts.length > 0"
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
import { useUserStore } from '~/stores/user';
import { useProductStore } from '~/stores/productStore';

const productStore = useProductStore();

const categories = ref([]);
const loading = ref(true);
const selectedCategory = ref(null);

// Utilize diretamente a propriedade reativa do store
const products = ref(productStore.products);

onBeforeMount(async () => {
	try {
		await productStore.fetchProducts();
		categories.value = productStore.categories;
		loading.value = false;
	} catch (error) {
		console.error('Erro ao carregar categorias:', error);
		loading.value = false;
	}
});

const handleCategoryClick = async (categoryId) => {
	console.log(`Categoria clicada no componente: ${categoryId}`);
	selectedCategory.value = categoryId;

	try {
		// Fetch produtos com base na categoria selecionada
		await productStore.fetchProducts(categoryId);
	} catch (error) {
		console.error('Erro ao carregar produtos da categoria:', error);
	}
};

const filteredProducts = computed(() => {
	const categoryId = selectedCategory.value;

	if (!categoryId || !productStore.products) {
		console.log('Sem filtro, mostrando todos os produtos.');
		return productStore.products || [];
	}

	console.log('Filtrando por categoria:', categoryId);
	return productStore.products.filter(
		(product) => product.categoryId === categoryId
	);
});
</script>
