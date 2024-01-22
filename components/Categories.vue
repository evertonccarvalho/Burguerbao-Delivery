<template>
	<section class="flex gap-2 py-2 flex-col" id="Categories">
		<div
			:id="`ComponenteProduto${category.id}`"
			class="flex flex-col items-center justify-center cursor-pointer shrink-0 overflow-hidden"
		>
			<div
				class="flex bg-card-foreground group rounded-full bg-category-item-gradient h-12 w-12 md:h-16 md:w-16 items-center justify-center"
			>
				<img
					class="h-auto max-h-[80%] w-auto max-w-[90%] group-hover:rotate-6 transition-all duration-300"
					:src="category.imageUrl"
					sizes="100vw"
					alt="category"
				/>
			</div>
			<h3
				class="text-center whitespace-nowrap text-xs font-bold tracking-tight"
			>
				{{ category.name }}
			</h3>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(['category']);
const { category } = toRefs(props);
</script>
