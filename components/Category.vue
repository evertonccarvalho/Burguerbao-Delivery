<!-- Category.vue -->

<template>
	<div
		:id="`Category-${category.id}`"
		@click="handleClick"
		:class="{ selected: selected }"
		class="cursor-pointer flex items-center flex-col gap-1 justify-center text-center"
	>
		<div
			class="bg-category-item-gradient group rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center"
		>
			<img
				class="h-auto max-h-[80%] w-auto max-w-[90%] group-hover:rotate-6 transition-all duration-300"
				:src="category.imageUrl"
				alt="category"
			/>
		</div>
		<h3 class="text-center whitespace-nowrap text-xs font-bold tracking-tight">
			{{ category.name }}
		</h3>
	</div>
</template>

<script setup>
const props = defineProps(['category', 'selected']);
const { category, selected } = toRefs(props);
const emit = defineEmits(['click']);

const handleClick = () => {
	emit('click', category.id);
};
</script>
