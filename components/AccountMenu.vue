<template>
	<DropdownMenu>
		<DropdownMenuTrigger class="relative">
			<div
				class="relative flex flex-col md:flex-row gap-1 items-center justify-center hover:text-primary capitalize text-sm transition-all duration-300"
			>
				<Icon name="mdi:account" size="33" />
				Conta
			</div>
		</DropdownMenuTrigger>
		<DropdownMenuContent v-if="!user">
			<DropdownMenuLabel>Bem Vindo ao BurguerBão</DropdownMenuLabel>

			<DropdownMenuItem>
				<NuxtLink
					to="/auth"
					class="bg-primary text-center w-full text-[16px] rounded-lg text-foreground font-semibold p-2"
				>
					Login / Register
				</NuxtLink>
			</DropdownMenuItem>
		</DropdownMenuContent>
		<DropdownMenuContent v-if="user">
			<DropdownMenuItem @click="navigateTo('/orders')"
				>Meus Pedidos</DropdownMenuItem
			>
			<DropdownMenuItem @click="handleLogout">Sair</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script setup lang="ts">
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const client = useSupabaseClient();
const user = useSupabaseUser();
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const handleLogout = async () => {
	try {
		await client.auth.signOut();

		// Clear the userStore when the user logs out
		userStore.clearUser(); // Assuming there's a method in your user store to clear user information
	} catch (error) {
		console.error('Error during logout:', error);
		// Handle the error, such as displaying a message to the user
	}
};
</script>
