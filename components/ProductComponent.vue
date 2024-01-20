<template>
	<div class="flex flex-col gap-8">
		<div
			:id="`ComponenteProduto${product.id}`"
			class="min-h-[266px] min-w-[184px] inline-block group bg-secondary/50 rounded-xl cursor-pointer"
		>
			<NuxtLink :to="`/item/${product.id}`">
				<div className="flex bg-re  flex-col">
					<div
						className="flex h-40 w-full items-center justify-center rounded-xl bg-secondary"
					>
						<img
							class="h-auto max-h-[80%] group-hover:rotate-12 transition-all duration-300 w-auto max-w-[90%]"
							sizes="100vw"
							:src="product.imageUrls"
						/>
					</div>
				</div>

				<div id="DetalhesProduto" class="flex flex-col py-4 px-5">
					<span class="flex items-center justify-start gap-2 px-1">
						<span class="text-primary font-semibold"
							>R$ {{ priceComputed }}</span
						>
						<span
							class="text-secondary-foreground text-sm text-light line-through"
							>R$ {{ oldPriceComputed }}</span
						>
					</span>

					<span class="px-1 relative text-primary text-xs font-semibold">
						Extra {{ discountPercentage }}% de desconto
					</span>

					<!-- <div class="flex items-center gap-1 px-1 relative -top-1">
						<span
							class="bg-primary text-foreground text-[9px] font-semibold px-1.5 rounded-sm"
							>Oferta de Boas-Vindas</span
						>
						<span
							class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm"
							>Mais Vendido</span
						>
					</div> -->

					<!-- <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
						5.000+ vendidos
						<Icon
							name="material-symbols:star-rate"
							color="#757575"
							class="ml-1.5"
						/>
						4.7
					</p> -->

					<p class="px-1 pt-0.5 text-xs text-secondary-foreground">
						{{ product.title.substring(0, 60) }}
					</p>

					<!-- <p class="px-1 pb-1">
						<span class="text-[#009A66] text-xs font-semibold"
							>Frete Grátis</span
						>
					</p> -->
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['product']);
const { product } = toRefs(props);

const priceComputed = computed(() => {
	return (product.value.price / 100).toFixed(2);
});
const discountPercentage = product.value.discountPercentage || 0;
const oldPriceComputed = computed(() => {
	const discountPercentage = product.value.discountPercentage || 0; // Se discountPercentage não estiver definido, assume 0%
	const discountedPrice =
		product.value.price - (product.value.price * discountPercentage) / 100;
	return (discountedPrice / 100).toFixed(2);
});
</script>
