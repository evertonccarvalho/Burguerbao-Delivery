<template>
	<MainLayout>
		<div id="IndexPage" class="mt-4 text-foreground container mx-auto px-2">
			<HeroBanner />
			<!-- CATEGORIES -->
			<CategoriesList />

			<FeaturedProductsGRID />
			<!-- <ProductList /> -->
			<!-- PRODUTOS -->
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>
