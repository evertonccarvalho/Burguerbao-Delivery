<template>
	<div class="extra-checkbox">
		<input
			type="checkbox"
			:id="id"
			:checked="isChecked"
			@change="handleChange"
		/>
		<label :for="id">{{ name }} (+R$ {{ formattedPrice }} )</label>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Props
const props = defineProps(['id', 'name', 'price', 'isChecked']);

const formattedPrice = computed(() => {
	if (props.price) {
		// Convert centavos to reais and format to two decimal places
		return (props.price / 100).toFixed(2);
	} else {
		return '0.00';
	}
});

// Emit event when checkbox changes
const handleChange = () => {
	emit('change', !props.isChecked);
};
</script>
