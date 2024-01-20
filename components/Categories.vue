<template>
	<section class="flex gap-2 py-2 flex-col" id="Categories">
		<div
			:id="`ComponenteProduto${category.id}`"
			class="flex flex-col bg-card-foreground rounded-full bg-category-item-gradient h-20 w-20 items-center justify-center cursor-pointer shrink-0 overflow-hidden hover:bg-slate-200"
		>
			<div class="flex h-20 w-full items-center justify-center rounded-md">
				<img
					class="h-auto max-h-[80%] w-auto max-w-[90%]"
					:src="category.imageUrl"
					sizes="100vw"
					alt="category"
				/>
			</div>
		</div>
		<div class="whitespace-nowrap text-xs font-bold tracking-tight">
			<h3 class="text-center">{{ category.name }}</h3>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(['category']);
const { category } = toRefs(props);
</script>
