<template>
	<button
		@click="userStore.isMenuOverlay = true"
		class="md:hidden block rounded-full text-foreground hover:bg-white hover:text-foreground"
	>
		<Icon name="radix-icons:hamburger-menu" size="33" />
	</button>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
