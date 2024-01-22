<template>
	<div
		class="w-full h-screen flex items-center relative bg-no-repeat bg-cover flex-col z-50"
		style="background-image: url('/BG.jpg')"
	>
		<div class="w-full h-screen flex items-center flex-col">
			<Header />
			<div class="pb-20" />
			<!-- Conteúdo principal da sua landing page aqui -->
			<Loading v-if="userStore.isLoading" />
			<slot />
			<div class="pb-20" />

			<Footer v-if="!userStore.isLoading" />
		</div>
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
