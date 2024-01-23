<template>
	<section class="md:grid flex flex-col md:grid-cols-9 grid-cols-1 py-4 gap-4">
		<!-- **** -->
		<div
			class="w-full md:col-span-2 max-h-[620px] px-4 rounded-xl overflow-hidden bg-card/30"
		>
			<h1 class="text-2xl p-2 w-full text-center font-bold">Destaque</h1>

			<div class="w-full h-full flex flex-col">
				<div v-if="products" class="flex md:flex-col overflow-x-auto gap-4">
					<ProductComponent
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</div>
			</div>
		</div>

		<!-- **** -->
		<div
			class="w-full col-span-4 max-h-[620px] px-4 rounded-xl overflow-hidden bg-card/30"
		>
			<h1 class="text-2xl p-2 w-full text-center bg font-bold">
				Mais Vendidos
			</h1>

			<div class="flex flex-col">
				<div v-if="products" class="flex flex-row pb-4 overflow-x-auto gap-x-4">
					<ProductComponent
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</div>
				<div v-if="products" class="flex flex-row pb-4 overflow-x-auto gap-x-4">
					<ProductComponent
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</div>
			</div>
		</div>
		<!-- **** -->
		<div
			class="w-full md:col-span-3 max-h-[620px] px-4 rounded-xl overflow-hidden bg-card/30"
		>
			<h1 class="text-2xl p-2 w-full text-center font-bold">Lançamentos</h1>

			<div class="w-full h-full flex flex-col">
				<div v-if="products" class="flex md:flex-col overflow-x-auto gap-4">
					<ProductComponent
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</div>
			</div>
		</div>
		<!-- **** -->
	</section>
</template>

<script setup>
import { useProductStore } from '~/stores/productStore';
import { useUserStore } from '~/stores/user';

const productStore = useProductStore();
// const products = ref([]);
const userStore = useUserStore();

const { fetchProducts } = productStore; // have all non reactiave stuff here
const { products } = storeToRefs(productStore);

const loadProducts = async () => {
	try {
		await fetchProducts();
		userStore.isLoading = false;
	} catch (error) {
		console.error('Erro ao carregar categorias:', error);
	} finally {
		userStore.isLoading = false;
	}
};

loadProducts();
</script>
