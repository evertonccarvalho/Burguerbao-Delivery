<!-- ProductImages.vue -->

<template>
	<div v-if="product && product.data">

			<div class="flex md:h-[380px] h-[280px] w-full items-center justify-center rounded-md">
					<img
							v-if="currentImage"
							class="h-auto max-h-[90%] w-auto max-w-[90%]"
							style="max-width: 80%; max-height: 90%; object-fit: contain;"
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
