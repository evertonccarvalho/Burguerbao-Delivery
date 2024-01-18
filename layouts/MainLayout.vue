<template>
	<div id="MainLayout" class="w-full fixed z-50">
		<div id="MainHeader" class="flex items-center w-full bg-black">
			<div
				class="flex lg:justify-start items-center justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
			>
				<!-- Logo -->
				<NuxtLink to="/" class="w-10">
					<img src="/BurguerBao-logo.svg" />
				</NuxtLink>
				<!-- Logo -->

				<!-- SearchinInput -->
				<div class="w-full md:block">
					<div class="relative">
						<div
							class="flex items-center p-0 m-0 border-none bg-white rounded-full w-full"
						>
							<input
								class="w-full h-full bg-transparent text-black placeholder-gray-400 text-sm pl-3 focus:outline-none"
								placeholder="kitchen accessories"
								type="text"
								v-model="searchItem"
							/>
							<Icon
								v-if="isSearching"
								name="eos-icons:loading"
								size="25"
								class="mr-2"
							/>
							<button
								class="flex items-center w-14 h-8 p-1.5 px-4 m-1 rounded-full bg-black"
							>
								<Icon name="ph:magnifying-glass" size="20" color="#ffffff" />
							</button>
						</div>

						<div
							v-if="items && items.data"
							class="absolute bg-white max-w-[700px] rounded-3xl p-4 mt-0.5 h-auto w-full"
						>
							<div v-for="item in items.data" :key="item.id" class="p-1">
								<NuxtLink
									:to="`/item/${item.id}`"
									class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
								>
									<div class="flex items-center">
										<img class="rounded-md" width="40" :src="item.url" />
										<div class="truncate ml-2">{{ item.title }}</div>
									</div>
									<div class="truncate">R${{ item.price / 100 }}</div>
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
				<!-- SearchinInput -->

				<!-- ShopingCart -->
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
				<!-- ShopingCart -->

				<!-- ACCOUNT MENU -->
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
				<!-- ACCOUNT MENU -->
				<!-- MOBILE MENU -->
				<button
					@click="userStore.isMenuOverlay = true"
					class="md:hidden block rounded-full p-1.5 -mt-[4px] text-white hover:bg-white hover:text-black"
				>
					<Icon name="radix-icons:hamburger-menu" size="33" />
				</button>
				<!-- MOBILE MENU -->
			</div>
		</div>
		<!-- <div id="TopMenu" class="w-full bg-black border-b md:block hidden">
			<ul
				class="flex items-center justify-end text-sm font-normal text-white font-light px-2 h-10 bg-black max-w-[1200px]"
			>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
				>
					Sell on BurguerBão
				</li>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
				>
					Cookie Preferences
				</li>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
				>
					Help
				</li>
				<li
					class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
				>
					Buyer Protection
				</li>
				<li class="px-3 hover:text-[#FF4646] cursor-pointer">
					<Icon name="ic:sharp-install-mobile" size="17" />
					App
				</li>
			</ul>
		</div> -->
	</div>

	<Loading v-if="userStore.isLoading" />

	<div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
	<slot />

	<Footer v-if="!userStore.isLoading" />
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const client = useSupabaseClient();
const user = useSupabaseUser();

let isAccountMenu = ref(false);
let isCartHover = ref(false);
let isSearching = ref(false);
let searchItem = ref('');
let items = ref(null);

onMounted(() => (isSearching.value = false));

const searchByName = useDebounce(async () => {
	isSearching.value = true;
	items.value = await useFetch(
		`/api/prisma/search-by-name/${searchItem.value}`
	);
	isSearching.value = false;
}, 100);

watch(
	() => searchItem.value,
	async () => {
		if (!searchItem.value) {
			setTimeout(() => {
				items.value = '';
				isSearching.value = false;
				return;
			}, 500);
		}
		searchByName();
	}
);
</script>
