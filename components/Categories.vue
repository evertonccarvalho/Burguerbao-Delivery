<!-- <template>
	<section class="my-4 flex gap-4 flex-col" id="Categories">
		<div
			class="flex flex-row gap-1 items-center md:justify-center justify-between md:gap-8 overflow-x-auto"
		>
			<div
				:id="`ComponenteProduto${category.id}`"
				class="flex flex-col rounded-md bg-gray-200 h-16 w-16 items-center justify-center p-3 cursor-pointer shrink-0 overflow-hidden hover:bg-slate-200"
			>
				<img :src="category.imageUrl" width="60" height="60" alt="category" />
				<div class="whitespace-nowrap text-sm">
					<h3 class="text-center">{{ category.name }}</h3>
				</div>
			</div>
		</div>
	</section>
</template> -->

<template>
	<section class="flex flex-col" id="Categories">
		<div
			:id="`ComponenteProduto${category.id}`"
			class="flex flex-col rounded-full bg-gray-200 h-32 w-32 items-center justify-center cursor-pointer shrink-0 overflow-hidden hover:bg-slate-200"
		>
			<div
				class="flex h-20 w-full items-center justify-center rounded-md bg-slate-200"
			>
				<img
					class="h-auto max-h-[80%] w-auto max-w-[90%]"
					:src="category.imageUrl"
					sizes="100vw"
					alt="category"
				/>
			</div>
			<div class="whitespace-nowrap text-xs font-bold tracking-tight">
				<h3 class="text-center">{{ category.name }}</h3>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(['category']);
const { category } = toRefs(props);

// const categoriesData = [
// 	{
// 		desc: 'Fresh greens, crisp veggies, and delectable dressings for a light and healthy start.',
// 		id: 'cln364xd200006ulsx6i55j5i',
// 		title: 'Burgers',
// 		imageSrc: '/img/categories/burger.png',
// 	},
// 	{
// 		title: 'Pizzas',
// 		desc: 'Juicy, flavorful patties served in a bun with various toppings and condiments.',
// 		id: 'cln3677fn00016uls4vp6dahx1',
// 		imageSrc: '/img/categories/pizza.png',
// 	},
// 	{
// 		desc: 'Italian classics featuring various pasta shapes paired with rich sauces and ingredients.',
// 		id: 'cln367ea600026uls7jfp2oh3',
// 		title: 'Drinks',
// 		imageSrc: '/img/categories/drink.png',
// 	},
// 	{
// 		desc: 'Fresh catches of the day, prepared in diverse styles, from grilled to fried.',
// 		id: 'cln367k2g00036ulsnpzje4lb',
// 		title: 'Sushi',
// 		imageSrc: '/img/categories/sushi.png',
// 	},
// 	{
// 		desc: 'Premium cuts of meat, cooked to perfection, served with complementary sauces.',
// 		id: 'cln367py300046uls02met36p',
// 		title: 'Fast Food',
// 		imageSrc: '/img/categories/fast-food.png',
// 	},
// 	{
// 		desc: 'Thin or thick crusts topped with an array of savory ingredients and melted cheese.',
// 		id: 'cln367vh100056ulsp11ktr38',
// 		title: 'Chicken',
// 		imageSrc: '/img/categories/chicken.png',
// 	},
// 	{
// 		desc: 'Plant-based dishes showcasing the flavors and textures of vegetables and legumes.',
// 		id: 'cln36833f00066ulsvje412h6',
// 		title: 'Pasta',
// 		imageSrc: '/img/categories/pasta.png',
// 	},
// 	{
// 		desc: 'Artful, bite-sized delights featuring fresh fish, rice, and other exquisite ingredients.',
// 		id: 'cln3688yr00076ulsgiydrs53',
// 		title: 'Steak',
// 		imageSrc: '/img/categories/steak.png',
// 	},
// 	{
// 		desc: 'Spicy and vibrant dishes like tacos, burritos, and enchiladas with bold flavors.',
// 		id: 'cln368eyq00086ulsvtqpi1ur',
// 		title: 'Vegan',
// 		imageSrc: '/img/categories/vegan.png',
// 	},
// ];
</script>
