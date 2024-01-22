<template>
	<div>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Produtos</h1>
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
		<!-- TODO: REMOVER ESSA GAMBIARRA -->
		<div v-else>
			<div v-if="products" class="flex md:flex-col overflow-x-auto gap-4">
				<ProductComponent
					v-for="product in products.data"
					:key="product.id"
					:product="product"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const selectedCategory = ref(userStore.selectedCategory);

let products = ref(null);
onBeforeMount(async () => {
	products.value = await useFetch('/api/prisma/get-all-products');
	setTimeout(() => (userStore.isLoading = false), 1000);
});

const filteredProducts = computed(() => {
	const categoryId = selectedCategory.value;

	if (!categoryId || !products.value || !products.value.data) {
		console.log('Sem filtro, mostrando todos os produtos.');
		return products.value?.data || [];
	}

	console.log('Filtrando por categoria:', categoryId);
	return products.value.data.filter(
		(product) => product.categoryId === categoryId
	);
});

watch(
	() => userStore.selectedCategory,
	(newCategory) => {
		console.log('Selected category changed:', newCategory);
		selectedCategory.value = newCategory;
	}
);
</script>
