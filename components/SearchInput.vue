<template>
	<div class="w-full block z-10">
		<div class="relative">
			<div class="flex items-center p-0 m-0 bg-foreground rounded-full w-full">
				<input
					class="w-full h-full bg-transparent text-black placeholder-gray-400 text-sm pl-3 focus:outline-none"
					placeholder="Burguerbão"
					type="text"
					v-model="searchItem"
				/>
				<Icon
					v-if="isSearching"
					name="eos-icons:loading"
					size="28"
					class="mr-2"
				/>
				<button
					class="flex items-center w-14 h-8 p-1.5 b px-4 m-1 rounded-full bg-card"
				>
					<Icon name="ph:magnifying-glass" size="20" />
				</button>
			</div>

			<div
				v-if="items && items.data"
				class="absolute bg-foreground text-black rounded-3xl p-4 mt-0.5 h-auto w-full"
			>
				<div v-for="item in items.data" :key="item.id" class="p-1">
					<NuxtLink
						:to="`/item/${item.id}`"
						class="flex items-center justify-between w-full rounded-full cursor-pointer hover:bg-primary"
					>
						<div class="flex items-center mx-2">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl"
							>
								<img
									class="rounded-md h-auto max-h-[80%]"
									sizes="100vw"
									:src="item.imageUrls"
								/>
							</div>
							<div class="truncate ml-2">{{ item.title }}</div>
						</div>
						<div class="truncate mr-2">R${{ item.price / 100 }}</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
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
