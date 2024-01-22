<template>
	<div class="z-[-1] w-full h-full">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const route = useRoute();

watch(
	() => route.fullPath,
	() => {
		userStore.isLoading = true;
	}
);
</script>
