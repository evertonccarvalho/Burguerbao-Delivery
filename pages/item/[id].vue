<template>
	<MainLayout>
		<div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
			<div class="md:flex gap-4 justify-between mx-auto w-full">
				<div
					v-if="product && product.data"
					class="md:w-[40%] rounded-lg bg-slate-200 p-2"
				>
					<div
						class="flex h-[400px] w-full items-center justify-center rounded-lg bg-slate-300"
					>
						<img
							v-if="currentImage"
							class="rounded-lg object-fit h-auto max-h-[80%] w-auto max-w-[90%]"
							sizes="100vw"
							:src="currentImage"
						/>
					</div>
					<div
						v-if="product.data.imageUrls && product.data.imageUrls.length > 1"
						class="flex items-center gap-2 justify-center mt-2"
					>
						<div
							class="flex gap-2 h-32 w-32 border-[3px] items-center bg-slate-300 justify-center rounded-md"
							v-for="image in product.data.imageUrls"
							:class="currentImage === image ? 'border-[#ff840b]' : ''"
							:key="image"
						>
							<img
								@mouseover="setCurrentImage(image)"
								@click="setCurrentImage(image)"
								sizes="full"
								class="rounded-md cursor-pointer h-auto max-h-[80%] w-auto max-w-[90%]"
								:src="image"
							/>
						</div>
					</div>
				</div>

				<div class="md:w-[60%] bg-white p-3 rounded-lg">
					<div v-if="product && product.data">
						<p class="mb-2">{{ product.data.title }}</p>
						<p class="font-light text-[12px] mb-2">
							{{ product.data.description }}
						</p>
					</div>

					<div class="flex items-center pt-1.5">
						<span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
							<Icon
								name="material-symbols:star-rounded"
								class="-mt-[17px]"
								size="12"
							/>
						</span>
						<p class="text-[#FF5353]">Extra 5% off</p>
					</div>

					<div class="flex items-center justify-start my-2">
						<Icon name="ic:baseline-star" color="#FF5353" />
						<Icon name="ic:baseline-star" color="#FF5353" />
						<Icon name="ic:baseline-star" color="#FF5353" />
						<Icon name="ic:baseline-star" color="#FF5353" />
						<Icon name="ic:baseline-star" color="#FF5353" />
						<span class="text-[13px] font-light ml-2"
							>5 213 Reviews 1,000+ orders</span
						>
					</div>

					<div class="border-b" />

					<div class="flex items-center justify-start gap-2 my-2">
						<div class="text-xl font-bold">R$ {{ priceComputed }}</div>
						<span
							class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm"
							>70% off</span
						>
					</div>

					<p class="text-[#009A66] text-xs font-semibold pt-1">
						Free 11-day delivery over ￡8.28
					</p>

					<p class="text-[#009A66] text-xs font-semibold pt-1">Free Shipping</p>

					<div class="py-2" />

					<button
						@click="addToCart()"
						:disabled="isInCart"
						class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#FF851A] to-[#FFAC2C]"
					>
						<div v-if="isInCart">Is Added</div>
						<div v-else>Add to Cart</div>
					</button>
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const route = useRoute();

let product = ref(null);
let currentImage = ref(null);
const setCurrentImage = (image) => {
	currentImage.value = image;
};

onBeforeMount(async () => {
	product.value = await useFetch(
		`/api/prisma/get-product-by-id/${route.params.id}`
	);
});

watchEffect(() => {
	if (product.value && product.value.data) {
		// Atualiza a variável currentImage com o valor de product.value.data.imageUrls
		currentImage.value = product.value.data.imageUrls;

		// Atribui o primeiro elemento do array product.value.data.imageUrls a ele mesmo
		// Isso pode não ter o efeito desejado, pois está substituindo o primeiro elemento pelo array completo
		product.value.data.imageUrls = product.value.data.imageUrls;

		// Define userStore.isLoading como falso
		userStore.isLoading = false;
	}
});

const isInCart = computed(() => {
	let res = false;
	userStore.cart.forEach((prod) => {
		if (route.params.id == prod.id) {
			res = true;
		}
	});
	return res;
});

const priceComputed = computed(() => {
	if (product.value && product.value.data) {
		return product.value.data.price / 100;
	}
	return '0.00';
});

const addToCart = () => {
	userStore.cart.push(product.value.data);
};
</script>
