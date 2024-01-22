<!-- CategoriesList.vue -->
<template>
	<section>
		<h1 class="text-2xl p-2 w-full text-center font-bold">Por Categoria</h1>
		<div
			v-if="categories"
			class="flex justify-start md:justify-center md:flex-row overflow-x-auto gap-2"
		>
			<Category
				v-for="category in categories.data"
				:key="category.id"
				:category="category"
				:selected="category.id === userStore.selectedCategory"
				@click="handleCategoryClick(category.id)"
			/>
		</div>
	</section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const categories = ref(null);

onBeforeMount(async () => {
	categories.value = await useFetch('/api/prisma/get-all-categories');
	setTimeout(() => (userStore.isLoading = false), 1000);
});

const handleCategoryClick = (categoryId) => {
	console.log(`Categoria clicada no componente: ${categoryId}`);
	userStore.selectCategory(categoryId);
};
</script>
