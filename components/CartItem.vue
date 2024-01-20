<template>
	<div class="flex justify-start my-2">
		<div class="my-auto">
			<div
				@mouseenter="isHover = true"
				@mouseleave="isHover = false"
				class="flex items-center justify-start p-0.5 cursor-pointer"
			>
				<div
					@click="isSelected = !isSelected"
					class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
					:class="[
						isHover ? 'border-primary' : 'border-gray-300',
						isSelected ? 'bg-primary' : '',
					]"
				>
					<div class="h-[8px] w-[8px] rounded-full bg-white" />
				</div>
			</div>
		</div>

		<div
			class="flex h-[90px] w-[90px] items-center justify-center rounded-xl bg-card"
		>
			<img
				class="rounded-md h-auto max-h-[80%]"
				sizes="100vw"
				:src="product.imageUrls"
			/>
		</div>

		<div class="overflow-hidden pl-2 w-full">
			<div class="flex items-center justify-between w-full">
				<div class="flex items-center justify-between truncate">
					<span
						class="sm:block hidden bg-primary text-foreground text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"
						>Oferta de Boas-Vindas
					</span>
					<div class="truncate sm:pl-2">{{ product.title }}</div>
				</div>
				<button
					@click="removeFromCart()"
					class="mx-3 sm:block hidden -mt-0.5 hover:primary"
				>
					<Icon name="material-symbols:delete-outline" size="20" />
				</button>
			</div>

			<div class="text-xl font-semibold">
				R$ <span class="font-bold">{{ product.price / 100 }}</span>
			</div>

			<p class="text-[#009A66] text-xs font-semibold pt-1">
				Entrega gratuita acima de R$ 100,00
			</p>

			<p class="text-[#009A66] text-xs font-semibold pt-1">Frete Grátis</p>

			<div class="flex items-center justify-end">
				<button
					@click="removeFromCart()"
					class="sm:hidden block -mt-0.5 hover:primary"
				>
					<Icon name="material-symbols:delete-outline" size="20" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const props = defineProps(['product', 'selectedArray']);
const { product, selectedArray } = toRefs(props);

const emit = defineEmits(['selectedRadio']);

let isHover = ref(false);
let isSelected = ref(false);

const removeFromCart = () => {
	userStore.cart.forEach((prod, index) => {
		if (prod.id === product.value.id) {
			userStore.cart.splice(index, 1);
		}
	});
};

watch(
	() => isSelected.value,
	(val) => {
		emit('selectedRadio', { id: product.value.id, val: val });
	}
);
</script>
