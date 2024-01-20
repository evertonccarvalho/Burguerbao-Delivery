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
		<DropdownMenuContent>
			<DropdownMenuItem @click="navigateTo('/orders')"
				>Meus Pedidos</DropdownMenuItem
			>
			<DropdownMenuItem v-if="user" @click="client.auth.signOut()"
				>Sair</DropdownMenuItem
			>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
</script>
