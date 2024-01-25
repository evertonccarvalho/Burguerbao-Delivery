<template>
	<MainLayout>
		<div
			id="OrdersPage"
			class="mt-4 container w-full flex p-4 h-screen mx-auto px-2"
		>
			<div class="bg-card/30 w-full p-6 min-h-[150px]">
				<div class="flex items-center text-xl">
					<Icon name="carbon:delivery" color="#5FCB04" size="35" />
					<span class="pl-4">Pedidos</span>
				</div>

				<div v-if="orders && orders.data">
					<div
						v-for="order in orders.data"
						:key="order.id"
						class="text-sm pl-[50px]"
					>
						<div class="border-b py-1">
							<p>Stripe ID: {{ order.stripeId }}</p>

							<div class="pt-2"></div>

							<div v-for="item in order.orderItem" :key="item.id">
								<NuxtLink
									class="flex items-center gap-3 p-1 hover:underline hover:text-blue-500"
									:to="`/item/${item.productId}`"
								>
									<div
										class="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-card"
									>
										<img
											class="rounded-md h-auto max-h-[80%]"
											sizes="100vw"
											:src="item.product.imageUrls"
										/>
									</div>
									{{ item.product.title }}
								</NuxtLink>
							</div>

							<div class="pt-2 pb-5 flex gap-4">
								<div>
									<p>Nome: {{ order.name }}</p>
									<p>Rua: {{ order.address }}</p>
									<div class="flex flex-row gap-4">
										<p>Cidade: {{ order.city }}</p>
										<p>Cep: {{ order.zipcode }}</p>
										<p>Pais: {{ order.country }}</p>
									</div>
								</div>
								<div></div>
							</div>
						</div>
					</div>
				</div>

				<div v-else class="flex items-center justify-center">
					Você não possui histórico de pedidos.
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

const orders = ref();

onBeforeMount(async () => {
	if (user.value)
		try {
			orders.value = await useFetch(
				`/api/prisma/get-all-orders-by-user/${user.value.id}`
			);
			console.log(orders.value);
		} catch (error) {
			console.error('Error fetching orders:', error);
		}
});

onMounted(() => {
	if (!user.value) {
		return navigateTo('/auth');
	}

	setTimeout(() => (userStore.isLoading = false), 200);
});
</script>
