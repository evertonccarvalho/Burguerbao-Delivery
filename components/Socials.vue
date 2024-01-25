<!-- Nav.vue -->
<template>
	<nav
		className="flex fixed gap-2 md:gap-4  bottom-0 md:static w-full md:w-fit items-center justify-between md:justify-center px-4 h-[60px]  bg-card md:bg-transparent "
	>
		<NuxtLink
			v-for="(link, index) in navData"
			:key="index"
			target="_blank"
			:to="link.path"
			:class="{ 'text-primary': $route.path === link.path }"
			class="relative flex flex-col md:flex-row gap-1 items-center justify-center hover:text-primary capitalize text-sm transition-all duration-300"
		>
			<Icon :name="link.icon" size="28" />

			<!-- {{ link.name }} -->
		</NuxtLink>
	</nav>
</template>

<script setup>
const navData = ref([
	{
		name: 'Instagram',
		path: 'https://github.com/evertonccarvalho',
		icon: 'mdi:instagram',
	},
	{
		name: 'Whatsapp',
		path: 'https://api.whatsapp.com/send/?phone=%2B5588999082170&text&type=phone_number&app_absent=0',
		icon: 'mdi:whatsapp',
	},
	{
		name: 'Github',
		path: 'https://github.com/evertonccarvalho',
		icon: 'mdi:github',
	},
	{
		name: 'Linkedin',
		path: 'https://www.linkedin.com/in/everton-c-carvalho',
		icon: 'mdi:linkedin',
	},
]);
</script>
