<template>
	<div
		@mouseenter="isAccountMenu = true"
		@mouseleave="isAccountMenu = false"
		class="relative text-white gap-2 flex items-center hover:text-white h-full cursor-pointer"
		:class="
			isAccountMenu
				? 'bg-transparent border-none z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
				: 'border border-none'
		"
	>
		<Icon name="ph:user-thin" size="33" />
		Account
		<Icon name="mdi:chevron-down" size="15" />

		<div
			id="AccountMenu"
			v-if="isAccountMenu"
			class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b"
		>
			<div v-if="!user">
				<div class="text-semibold text-[15px] my-4 px-3">
					Welcome to AliExpress!
				</div>
				<div class="flex items-center gap-1 px-3 mb-3">
					<NuxtLink
						to="/auth"
						class="bg-[#FF4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
					>
						Login / Register
					</NuxtLink>
				</div>
			</div>
			<div class="border-b" />
			<ul class="bg-white">
				<li
					@click="navigateTo('/orders')"
					class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
				>
					My Orders
				</li>
				<li
					v-if="user"
					@click="client.auth.signOut()"
					class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
				>
					Sign out
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
let isAccountMenu = ref(false);
</script>
