<template>
	<MainLayout>
		<div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
			<div class="md:flex gap-4 justify-between mx-auto w-full">
				<div class="md:w-[65%]">
					<div class="bg-white rounded-lg p-4">
						<div class="text-xl font-semibold mb-2">Endereço para envio</div>

						<div v-if="currentAddress && currentAddress.data">
							<NuxtLink
								to="/address"
								class="flex items-center pb-2 text-blue-500 hover:text-red-400"
							>
								<Icon name="mdi:plus" size="18" class="mr-2" />
								Atualizar ERndereço
							</NuxtLink>

							<div class="pt-2 border-t">
								<div class="underline pb-1">Endereço de entrega</div>
								<ul class="text-xs">
									<li class="flex items-center gap-2">
										<div>Contact name:</div>
										<div class="font-bold">{{ currentAddress.data.name }}</div>
									</li>
									<li class="flex items-center gap-2">
										<div>Address:</div>
										<div class="font-bold">
											{{ currentAddress.data.address }}
										</div>
									</li>
									<li class="flex items-center gap-2">
										<div>Zip Code:</div>
										<div class="font-bold">
											{{ currentAddress.data.zipcode }}
										</div>
									</li>
									<li class="flex items-center gap-2">
										<div>City:</div>
										<div class="font-bold">{{ currentAddress.data.city }}</div>
									</li>
									<li class="flex items-center gap-2">
										<div>Country:</div>
										<div class="font-bold">
											{{ currentAddress.data.country }}
										</div>
									</li>
								</ul>
							</div>
						</div>

						<NuxtLink
							v-else
							to="/address"
							class="flex items-center text-blue-500 hover:text-red-400"
						>
							<Icon name="mdi:plus" size="18" class="mr-2" />
							Adicionar novo endereço
						</NuxtLink>
					</div>

					<div id="Items" class="bg-white rounded-lg p-4 mt-4">
						<div v-for="product in userStore.checkout" :key="product.id">
							<CheckOutItem :product="product" />
						</div>
					</div>
				</div>

				<div class="md:hidden block my-4" />
				<div class="md:w-[35%]">
					<div id="PlaceOrder" class="bg-white rounded-lg p-4">
						<div class="text-2xl font-extrabold mb-2">Summary</div>

						<div class="flex items-center justify-between my-4">
							<div class="">Frete</div>
							<div class="">Gratis</div>
						</div>

						<div class="border-t" />

						<div class="flex items-center justify-between my-4">
							<div class="font-semibold">Total</div>
							<div class="text-2xl font-semibold">
								R$ <span class="font-extrabold">{{ total / 100 }}</span>
							</div>
						</div>

						<form @submit.prevent="pay()">
							<div
								class="border border-gray-500 p-2 rounded-sm"
								id="card-element"
							/>

							<p
								id="card-error"
								role="alert"
								class="text-red-700 text-center font-semibold"
							/>

							<button
								:disabled="isProcessing"
								type="submit"
								class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
								:class="isProcessing ? 'opacity-70' : 'opacity-100'"
							>
								<Icon v-if="isProcessing" name="eos-icons:loading" />
								<div v-else>Fazer Pedido</div>
							</button>
						</form>
					</div>

					<div class="bg-white rounded-lg p-4 mt-4">
						<div class="text-lg font-semibold mb-2 mt-2">BurguerBão</div>
						<p class="my-2">
							BurguerBão mantém suas informações e pagamento seguros
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
const userStore = useUserStore();
const user = useSupabaseUser();
const route = useRoute();

let selectedArray = ref([]);

let stripe = null;
let elements = null;
let card = null;
let form = null;
let total = ref(0);
let clientSecret = null;
let currentAddress = ref(null);
let isProcessing = ref(false);

onBeforeMount(async () => {
	if (userStore.checkout.length < 1) {
		return navigateTo('/shoppingcart');
	}

	total.value = 0.0;
	if (user.value) {
		currentAddress.value = await useFetch(
			`/api/prisma/get-address-by-user/${user.value.id}`
		);
		setTimeout(() => (userStore.isLoading = false), 200);
	}
});

watchEffect(() => {
	if (route.fullPath == '/checkout' && !user.value) {
		return navigateTo('/auth');
	}
});

onMounted(async () => {
	isProcessing.value = true;

	userStore.checkout.forEach((item) => {
		total.value += item.price;
	});
});

watch(
	() => total.value,
	() => {
		if (total.value > 0) {
			stripeInit();
		}
	}
);

const stripeInit = () => {};

const paypalInit = () => {};

const createOrder = async () => {};

const showError = (erroMsgText) => {};
</script>
