<template>
	<MainLayout>
		<div id="IndexPage" class="mt-4 text-foreground container mx-auto px-2">
			<HeroBanner />
			<!-- CATEGORIES -->
			<!-- <div class="flex w-full">
				<Button @click="fetchAndHandleFavorites">FETCH</Button>
			</div> -->
			<CategoriesList />

			<FeaturedProductsGRID />
			<!-- <ProductList /> -->
			<!-- PRODUTOS -->
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
</script>
