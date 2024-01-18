<template>
	<MainLayout>
		<div id="IndexPage" class="mt-4 container mx-auto px-2">
			<section id="HeroBanner"></section>
			<!-- PRODUTOS EM DESTAQUE -->
			<section
				class="md:grid flex flex-col md:grid-cols-9 grid-cols-1 py-4 gap-4"
			>
				<!-- **** -->
				<div
					class="w-full md:col-span-2 max-h-[620px] px-4 rounded-md overflow-hidden bg-gray-200"
				>
					<h1 class="text-2xl p-2 w-full text-center bg font-bold">Destaque</h1>

					<div class="w-full h-full flex flex-col md:overflow-y-scroll">
						<div
							v-if="products"
							class="flex md:flex-col overflow-x-scroll gap-4"
						>
							<div v-for="product in products.data" :key="product.id">
								<ProductComponent :product="product" />
							</div>
						</div>
					</div>
				</div>

				<!-- **** -->
				<div
					class="w-full col-span-4 max-h-[620px] px-4 rounded-md overflow-hidden bg-gray-200"
				>
					<h1 class="text-2xl p-2 w-full text-center bg font-bold">
						Mais Vendidos
					</h1>

					<div class="flex flex-col">
						<div
							v-if="products"
							class="flex flex-row pb-4 overflow-x-scroll gap-x-4"
						>
							<div v-for="product in products.data" :key="product.id">
								<ProductComponent :product="product" />
							</div>
						</div>
						<div
							v-if="products"
							class="flex flex-row pb-4 overflow-x-scroll gap-x-4"
						>
							<div v-for="product in products.data" :key="product.id">
								<ProductComponent :product="product" />
							</div>
						</div>
					</div>
				</div>
				<!-- **** -->
				<div
					class="w-full md:col-span-3 max-h-[620px] px-4 rounded-md overflow-hidden bg-yellow-200"
				>
					<h1 class="text-2xl p-2 w-full text-center bg font-bold">
						Lançamentos
					</h1>

					<div class="w-full h-full flex flex-col md:overflow-y-scroll">
						<div
							v-if="products"
							class="flex md:flex-col overflow-x-scroll gap-4"
						>
							<div v-for="product in products.data" :key="product.id">
								<ProductComponent :product="product" />
							</div>
						</div>
					</div>
				</div>
				<!-- **** -->
			</section>
			<!-- CATEGORIAS -->
			<section>
				<h1 class="text-2xl p-2 w-full text-center bg font-bold">
					Por Categoria
				</h1>
				<div
					v-if="categories"
					class="flex justify-center gap-2 p-2 items-center"
				>
					<div v-for="category in categories.data" :key="category.id">
						<Categories :category="category" />
					</div>
				</div>
			</section>
			<!-- CATEGORIAS -->
			<!-- PRODUTOS -->
			<section>
				<h1 class="text-2xl p-2 w-full text-center bg font-bold">Produtos</h1>
				<div
					v-if="products"
					class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
				>
					<div v-for="product in products.data" :key="product.id">
						<ProductComponent :product="product" />
					</div>
				</div>
			</section>
			<!-- PRODUTOS -->
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

let products = ref(null);
onBeforeMount(async () => {
	products.value = await useFetch('/api/prisma/get-all-products');
	setTimeout(() => (userStore.isLoading = false), 1000);
});

let categories = ref(null);
onBeforeMount(async () => {
	categories.value = await useFetch('/api/prisma/get-all-categories');
	setTimeout(() => (userStore.isLoading = false), 1000);
});
</script>
