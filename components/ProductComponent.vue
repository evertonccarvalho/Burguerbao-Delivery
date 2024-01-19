<template>
	<div class="flex flex-col gap-8">
		<div
			:id="`ComponenteProduto${product.id}`"
			class="min-h-[266px] min-w-[184px] inline-block rounded-md hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] bg-slate-300 cursor-pointer"
		>
			<NuxtLink :to="`/item/${product.id}`">
				<div className="flex bg-re flex-col">
					<div
						className="flex h-40 w-full items-center justify-center rounded-md bg-slate-200"
					>
						<img
							class="h-auto max-h-[80%] w-auto max-w-[90%]"
							sizes="100vw"
							:src="product.url"
						/>
					</div>
				</div>

				<div id="DetalhesProduto" class="flex flex-col py-4 px-5">
					<span class="flex items-center justify-start gap-2 px-1">
						<span class="text-[#ff840b] font-semibold"
							>R$ {{ priceComputed }}</span
						>
						<span class="text-gray-500 text-sm text-light line-through"
							>R$ {{ oldPriceComputed }}</span
						>
					</span>

					<span class="px-1 relative text-[#ff840b] text-xs font-semibold">
						Extra 5% de desconto
					</span>

					<!-- <div class="flex items-center gap-1 px-1 relative -top-1">
						<span
							class="bg-[#ff840b] text-white text-[9px] font-semibold px-1.5 rounded-sm"
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

					<p class="px-1 pt-0.5 text-xs text-[#252525]">
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

const oldPriceComputed = computed(() => {
	const res = ((product.value.price + product.value.price / 20) / 100).toFixed(
		2
	);
	return res;
});
</script>
