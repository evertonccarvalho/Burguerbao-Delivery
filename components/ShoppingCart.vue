<template>
	<NuxtLink to="/shoppingcart" class="flex items-center">
		<button
			class="relative"
			@mouseenter="isCartHover = true"
			@mouseleave="isCartHover = false"
		>
			<span
				class="absolute flex items-center justify-center -right-[3px] top-0 bg-white h-[17px] min-w-[17px] text-xs text-black px-0.5 rounded-full"
			>
				{{ userStore.cart.length }}
			</span>
			<div class="min-w-[40px]">
				<Icon
					name="ph:shopping-cart-simple-light"
					size="33"
					:color="isCartHover ? '#ffff' : '#ffff'"
				/>
			</div>
		</button>
	</NuxtLink>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
let isCartHover = ref(false);
</script>
