<!-- AddToCartButton.vue -->

<template>
	<Button @click="handleAddToCart" :disabled="isInCart">
		<div v-if="isInCart">Is Added</div>
		<div v-else>Add to Cart</div>
	</Button>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();

// Propriedades do componente
const props = defineProps(['product']);

// Lógica de adicionar ao carrinho
const isInCart = computed(() => {
	return userStore.cart.some((prod) => prod.id === props.product.data.id);
});

const handleAddToCart = () => {
	if (!isInCart.value) {
		// Execute a lógica para adicionar ao carrinho
		userStore.cart.push(props.product.data);
	}
};
</script>
