<template>
	<div
		id="MainLayout"
		class="w-fullh h-screen flex bg-black items-center flex-col z-50"
		style="background-image: url('/BG.jpg')"
	>
		<MainHeader />
		<TopMenu />
		<Loading v-if="userStore.isLoading" />

		<slot />
		<Footer v-if="!userStore.isLoading" />
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
