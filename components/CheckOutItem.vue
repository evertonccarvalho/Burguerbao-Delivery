<template>
	<div class="flex justify-start my-2">
		<div
			class="flex h-[90px] w-[90px] items-center justify-center rounded-xl bg-card"
		>
			<img
				class="rounded-md h-auto max-h-[80%]"
				sizes="100vw"
				:src="product.imageUrls"
			/>
		</div>

		<div class="overflow-hidden pl-2">
			<div class="flex items-center">
				<span
					class="bg-primary text-foreground text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"
					>Oferta de Boas-Vindas</span
				>
				<div class="truncate pl-2">{{ product.title }}</div>
			</div>

			<div class="text-lg font-semibold mt-2">
				R$ <span class="font-bold">{{ product.price / 100 }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['product']);
const { product } = toRefs(props);
</script>
