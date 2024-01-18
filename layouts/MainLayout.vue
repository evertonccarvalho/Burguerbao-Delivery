<template>
	<div id="MainLayout" class="w-full flex items-center flex-col z-50">
		<MainHeader />
		<TopMenu />
		<Loading v-if="userStore.isLoading" />

		<div class="container mx-auto p-4">
			<slot />
		</div>
		<Footer v-if="!userStore.isLoading" />
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
