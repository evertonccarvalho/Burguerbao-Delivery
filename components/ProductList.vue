<!-- ProductList.vue -->
<template>
	<div>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Produtos</h1>
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
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const selectedCategory = ref(userStore.selectedCategory);
const products = ref(null);
const categories = ref(null);

onBeforeMount(async () => {
	products.value = await useFetch('/api/prisma/get-all-products');
	categories.value = await useFetch('/api/prisma/get-all-categories');
	setTimeout(() => (userStore.isLoading = false), 1000);
});

const filteredProducts = computed(() => {
	if (!selectedCategory.value || !products.value) {
		return products.value?.data || [];
	}

	const categoryId = selectedCategory.value;
	return products.value.data.filter(
		(product) => product.categoryId === categoryId
	);
});
</script>
