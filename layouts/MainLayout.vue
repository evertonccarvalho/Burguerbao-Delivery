<template>
	<div id="MainLayout" class="w-full fixed z-50">
		<div id="MainHeader" class="flex items-center w-full bg-black">
			<div
				class="flex lg:justify-start items-center justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
			>
				<!-- Logo -->
				<HeaderLogo />
				<!-- Logo -->
				<!-- SearchinInput -->
				<SearchInput />
				<!-- SearchinInput -->
				<!-- ShopingCart -->
				<ShoppingCart />
				<!-- ShopingCart -->
				<!-- ACCOUNT MENU -->
				<AccountMenu />
				<!-- ACCOUNT MENU -->
				<!-- MOBILE MENU -->
				<MobileMenuButton />
				<!-- MOBILE MENU -->
			</div>
		</div>
		<TopMenu />
	</div>

	<Loading v-if="userStore.isLoading" />

	<div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
	<slot />

	<Footer v-if="!userStore.isLoading" />
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
