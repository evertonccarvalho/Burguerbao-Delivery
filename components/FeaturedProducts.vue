<template>
	<section class="md:grid flex flex-col md:grid-cols-9 grid-cols-1 py-4 gap-4">
		<!-- **** -->
		<div
			class="w-full md:col-span-2 max-h-[620px] px-4 rounded-xl overflow-hidden bg-card/30"
		>
			<h1 class="text-2xl p-2 w-full text-center font-bold">Destaque</h1>

			<div class="w-full h-full flex flex-col">
				<div v-if="products" class="flex md:flex-col overflow-x-auto gap-4">
					<div v-for="product in products.data" :key="product.id">
						<ProductComponent :product="product" />
					</div>
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
					<div v-for="product in products.data" :key="product.id">
						<ProductComponent :product="product" />
					</div>
				</div>
				<div v-if="products" class="flex flex-row pb-4 overflow-x-auto gap-x-4">
					<div v-for="product in products.data" :key="product.id">
						<ProductComponent :product="product" />
					</div>
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
					<div v-for="product in products.data" :key="product.id">
						<ProductComponent :product="product" />
					</div>
				</div>
			</div>
		</div>
		<!-- **** -->
	</section>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

let products = ref(null);
onBeforeMount(async () => {
	products.value = await useFetch('/api/prisma/get-all-products');
	// setTimeout(() => (userStore.isLoading = false), 1000);
});
</script>
