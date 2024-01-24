<!-- ProductImages.vue -->

<template>
	<div v-if="product && product.data">
		<div
			class="flex items-center justify-center w-full aspect-square max-h-[400px] bg-card rounded-lg overflow-hidden"
		>
			<img
				v-if="currentImage"
				class="rounded-md cursor-pointer h-fit w-fit"
				style="max-width: 100%; max-height: 100%"
				:src="currentImage"
				alt="Product Image"
			/>
		</div>

		<div
			v-if="product.data.imageUrls && product.data.imageUrls.length > 1"
			class="flex w-full items-center gap-2 justify-center mt-2"
		>
			<div
				class="flex gap-2 h-full w-full max-h-32 max-w-32 border-[3px] items-center bg-card justify-center rounded-md"
				v-for="image in product.data.imageUrls"
				:class="currentImage === image ? 'border-primary' : ''"
				:key="image"
			>
				<img
					@mouseover="setCurrentImage(image)"
					@click="setCurrentImage(image)"
					sizes="full"
					class="rounded-md cursor-pointer h-auto max-h-[80%] w-auto max-w-[90%]"
					:src="image"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['product', 'currentImage', 'setCurrentImage']);
</script>
