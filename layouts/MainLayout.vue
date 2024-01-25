<template>
	<div
		class="w-full h-screen flex items-center relative bg-no-repeat bg-cover flex-col z-50 overflow-auto"
		style="background-image: url('/BG.jpg')"
	>
		<div class="w-full h-screen flex items-center flex-col">
			<Header />
			<Loading v-if="userStore.isLoading" />
			<div class="py-14 my-auto w-full">
				<!-- Conteúdo principal da  landing page aqui -->
				<slot />
			</div>

			<Footer v-if="!userStore.isLoading" />
		</div>
	</div>
</template>

<script setup lagn="ts">
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
