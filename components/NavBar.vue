<!-- Nav.vue -->
<template>
	<nav
		className="flex fixed gap-2 md:gap-4  bottom-0 md:static w-full md:w-fit items-center justify-between md:justify-center px-4 h-[60px]  bg-card md:bg-transparent "
	>
		<NuxtLink
			v-for="(link, index) in navData"
			:key="index"
			:to="link.path"
			:class="{ 'text-accent': link.path === currentPath }"
			class="relative flex flex-col md:flex-row gap-1 items-center justify-center hover:text-primary capitalize text-sm transition-all duration-300"
		>
			<Icon :name="link.icon" size="33" />

			{{ link.name }}
		</NuxtLink>

		<AccountMenu />
		<ShoppingCart />
	</nav>
</template>

<script setup>
const navData = ref([{ name: 'home', path: '/', icon: 'mdi:home' }]);
</script>
