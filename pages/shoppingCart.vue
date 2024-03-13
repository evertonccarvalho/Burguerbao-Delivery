<template>
	<MainLayout>
		<div
			id="ShoppingCartPage"
			class="mt-4 container  justify-center w-full flex p-4 h-screen mx-auto px-2"
		>
			<div
				v-if="!userStore.cart.length"
				class="h-[500px] flex items-center justify-center"
			>
				<div class="pt-20">
					<img class="mx-auto" width="250" src="/cart-empty.png" />

					<div class="text-xl text-center mt-4">Nenhum item ainda?</div>

					<div v-if="!user" class="flex text-center">
						<NuxtLink
							to="/auth"
							class="bg-primary w-full text-foreground text-[21px] font-semibold p-1.5 rounded-full mt-4"
						>
							Sign in
						</NuxtLink>
					</div>
				</div>
			</div>

			<div v-else class="md:flex gap-4 justify-between mx-auto w-full">
				<div class="md:w-[65%]">
					<div class="bg-card rounded-lg p-4">
						<div class="text-2xl font-bold mb-2">
							Carrinho de Compras ({{ userStore.cart.length }})
						</div>
					</div>

					<div id="Items" class="bg-card rounded-lg p-4 mt-4">
						<div v-for="product in userStore.cart" :key="product.id">
							<CartItem
								:product="product"
								:selectedArray="selectedArray"
								@selectedRadio="selectedRadioFunc"
							/>
						</div>
					</div>
				</div>

				<div class="md:hidden block my-4" />

				<div class="md:w-[35%] w-full bg-card">
					<div id="Summary" class="bg-card rounded-lg p-4">
						<div class="text-2xl font-extrabold mb-2">Resumo</div>
						<div class="flex items-center justify-between my-4">
							<div class="font-semibold">Total</div>
							<div class="text-2xl font-semibold">
								R$ <span class="font-extrabold">{{ totalPriceComputed }}</span>
							</div>
						</div>
						<button
							@click="goToCheckout"
							class="flex items-center justify-center bg-primary w-full text-foreground text-[21px] font-semibold p-1.5 rounded-full mt-4"
						>
							Checkout
						</button>
					</div>

					<div id="PaymentProtection" class="bg-card rounded-lg p-4 mt-4">
						<div class="text-lg font-semibold mb-2">Payment methods</div>
						<div class="flex items-center justify-start gap-8 my-4">
							<div v-for="card in cards" :key="card.id">
								<img class="h-6" :src="card" />
							</div>
						</div>

						<div class="border-b" />

						<div class="text-lg font-semibold mb-2 mt-2">Buyer Protection</div>
						<p class="my-2">
							Receba reembolso total se o item não for conforme descrito ou não
							for entregue
						</p>
					</div>
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();
const user = useSupabaseUser();

let selectedArray = ref([]);

onMounted(() => {
	userStore.isLoading = false;
});

const cards = ref(['visa.png', 'mastercard.png', 'paypal.png', 'applepay.png']);

const totalPriceComputed = computed(() => {
	console.log('userStore:', userStore);

	let price = 0;

	if (userStore.cart) {
		userStore.cart.forEach((prod) => {
			price += prod.price;
		});
	}

	return price / 100;
});

const selectedRadioFunc = (e) => {
	if (!selectedArray.value.length) {
		selectedArray.value.push(e);
		return;
	}

	selectedArray.value.forEach((item, index) => {
		if (e.id != item.id) {
			selectedArray.value.push(e);
		} else {
			selectedArray.value.splice(index, 1);
		}
	});
};

const goToCheckout = () => {
	let ids = [];
	userStore.checkout = [];

	selectedArray.value.forEach((item) => ids.push(item.id));

	let res = userStore.cart.filter((item) => {
		return ids.indexOf(item.id) != -1;
	});

	res.forEach((item) => userStore.checkout.push(toRaw(item)));

	return navigateTo('/checkout');
};
</script>
