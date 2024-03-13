<template>
<div class="w-full min-h-dvh flex items-center relative bg-no-repeat bg-cover flex-col z-50" style="background-image: url('/BG.jpg'); background-size: cover;">
		<!-- <div class="w-full h-svh flex items-center flex-col"> -->
			<Header />
			<Loading v-if="userStore.isLoading" />
			<div class="pt-14 my-auto w-full ">
				<!-- Conteúdo principal da  landing page aqui -->
				<slot />
			</div>
			<Footer />
		<!-- </div> -->
	</div>
</template>

<script setup lagn="ts">
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
