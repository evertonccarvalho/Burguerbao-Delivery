<template>
	<div id="MenuOverlay" class="fixed z-50 bottom-0 h-full w-full bg-card px-3">
		<div class="flex items-center justify-between py-5">
			<NuxtLink to="/" @click="userStore.isMenuOverlay = false">
				<img height="50" src="/BurguerBao-logo.svg" />
			</NuxtLink>

			<button
				@click="userStore.isMenuOverlay = false"
				class="rounded-full p-1 hover:text-primary hover:bg-secondary"
			>
				<Icon name="mdi:close" size="28" />
			</button>
		</div>

		<div class="flex items-center justify-between pt-5">
			<ul class="w-full">
				<li
					@click="goTo('orders')"
					class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-secondary hover:text-primary cursor-pointer"
				>
					<div class="flex items-center text-[20px] font-semibold">
						<Icon name="ph:pen-light" size="28" />
						<span class="pl-4">Meus Pedidos</span>
					</div>
				</li>

				<li
					@click="goTo('shoppingcart')"
					class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-secondary hover:text-primary cursor-pointer"
				>
					<div class="flex items-center text-[20px] font-semibold">
						<Icon name="ph:shopping-cart-simple-light" size="28" />
						<span class="pl-4">Carrinho</span>
					</div>
					<div
						class="flex items-center justify-center bg-primary h-[35px] min-w-[35px] text-lg text-foreground rounded-full"
					>
						{{ userStore.cart.length }}
					</div>
				</li>

				<li
					v-if="user"
					@click="signOut()"
					class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-secondary hover:text-primary cursor-pointer"
				>
					<div class="flex items-center text-[20px] font-semibold">
						<Icon name="ph:sign-out-light" size="28" />
						<span class="pl-4">Sair</span>
					</div>
				</li>

				<li
					v-else
					@click="signIn()"
					class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-secondary hover:text-primary cursor-pointer"
				>
					<div class="flex items-center text-[20px] font-semibold">
						<Icon name="ph:sign-in-light" size="28" />
						<span class="pl-4">Entrar / Registrar</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const client = useSupabaseClient();
const user = useSupabaseUser();

const menuItems = [
	{
		id: 'orders',
		icon: 'ph:pen-light',
		text: 'Meus Pedidos',
		action: "goTo('orders')",
	},
	{
		id: 'shoppingcart',
		icon: 'ph:shopping-cart-simple-light',
		text: 'Carrinho',
		action: "goTo('shoppingcart')",
		badge: userStore.cart.length,
	},
	{
		id: 'signout',
		icon: 'ph:sign-out-light',
		text: 'Sair',
		action: 'signOut',
		show: user,
	},
	{
		id: 'signin',
		icon: 'ph:sign-in-light',
		text: 'Entrar / Registrar',
		action: 'signIn',
		show: !user,
	},
];

const goTo = (url) => {
	userStore.isMenuOverlay = false;
	return navigateTo(`/${url}`);
};

const signOut = () => {
	client.auth.signOut();
	userStore.isMenuOverlay = false;
	return navigateTo('/');
};

const signIn = () => {
	userStore.isMenuOverlay = false;
	return navigateTo('/auth');
};
</script>
