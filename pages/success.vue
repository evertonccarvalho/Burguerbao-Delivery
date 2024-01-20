<template>
	<MainLayout>
		<div
			id="SuccessPage"
			class="mt-4 container h-full mx-auto px-2 min-h-[50vh] w-full p-4"
		>
			<div class="bg-card w-full p-6 text-foreground min-h-[150px]">
				<div class="flex items-center text-xl">
					<Icon
						name="clarity:success-standard-line"
						color="#5FCB04"
						size="35"
					/>
					<span class="pl-4">Pagamento Bem-Sucedido</span>
				</div>
				<p class="text-sm pl-[50px]">Obrigado! Recebemos o seu pagamento.</p>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

onMounted(() => {
	setTimeout(() => (userStore.isLoading = false), 300);
});
</script>
