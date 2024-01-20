<template>
	<div
		@mouseenter="isAccountMenu = true"
		@mouseleave="isAccountMenu = false"
		class="relative text-foreground gap-2 flex items-center justify-end rounded-full hover:text-foreground h-full cursor-pointer"
		:class="
			isAccountMenu
				? 'bg-transparen  z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
				: ''
		"
	>
		<Icon name="ph:user" size="33" />
		<Icon name="mdi:chevron-down" size="15" />

		<div
			id="AccountMenu"
			v-if="isAccountMenu"
			class="absolute w-[220px] text-foreground border border-primary z-40 bg-card p-2 top-[32px]"
		>
			<div v-if="!user">
				<div class="text-semibold text-[15px] my-4 px-3">
					Bem Vindo ao BurguerBão
				</div>
				<div class="flex items-center gap-1 px-3 mb-3">
					<NuxtLink
						to="/auth"
						class="bg-primary text-center w-full text-[16px] rounded-lg text-foreground font-semibold p-2"
					>
						Login / Register
					</NuxtLink>
				</div>
			</div>
			<ul class="bg-card rounded-lg">
				<li
					@click="navigateTo('/orders')"
					class="text-[13px] py-2 px-4 w-full rounded-lg hover:bg-muted"
				>
					Meus Pedidos
				</li>
				<li
					v-if="user"
					@click="client.auth.signOut()"
					class="text-[13px] py-2 px-4 w-full rounded-lg hover:bg-muted"
				>
					Sair
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
