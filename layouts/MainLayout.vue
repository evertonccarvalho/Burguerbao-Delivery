<template>
	<div
		class="w-full h-screen flex items-center relative bg-no-repeat bg-cover flex-col z-50"
		style="background-image: url('/BG.jpg')"
	>
		<div class="w-full h-screen flex items-center flex-col">
			<Header />
			<Loading v-if="userStore.isLoading" />
			<div class="pt-14 my-auto w-full overflow-auto">
				<!-- Conteúdo principal da  landing page aqui -->
				<slot />
				<Footer v-if="!userStore.isLoading" />
			</div>
		</div>
	</div>
</template>

<script setup lagn="ts">
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
