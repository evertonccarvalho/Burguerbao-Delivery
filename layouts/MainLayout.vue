<template>
	<div
		id="MainLayout"
		class="w-screen flex bg-background items-center flex-col z-50"
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
