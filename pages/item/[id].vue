<!-- ItemPage.vue -->
<template>
	<MainLayout>
		<div
			id="ItemPage"
			class="mt-4 md:mt-8 container p-4 mx-auto sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
		>
			<div class="md:flex gap-4 justify-between mx-auto w-full">
				<div class="md:w-[40%] rounded-lg bg-card/50 p-2">
					<ProductImages
						:product="product"
						:currentImage="currentImage"
						:setCurrentImage="setCurrentImage"
					/>
				</div>
				<div class="md:w-[60%] bg-card/50 w-full p-3 rounded-lg">
					<ProductDetails
						:product="product"
						:priceComputed="priceComputed"
						:isInCart="isInCart"
						:addToCart="addToCart"
					/>
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
		// discountPercentage.value = product.value.data.discountPercentage;
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
