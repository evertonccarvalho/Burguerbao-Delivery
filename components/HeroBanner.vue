<template>
	<div
		class="bg-cover bg-center w-full md:h-[500px] content-center flex items-center"
	>
		<div class="mx-auto flex items-center py-4 flex-col">
			<div
				class="flex flex-col-reverse md:flex-row gap-2 py-2 items-center justify-center md:gap-6"
			>
				<div
					class="flex flex-col items-center cursor-pointer justify-center w-[300px] md:w-full max-h-[400px]"
				>
					<img
						src="/promotion/text.png"
						width="full"
						height="full"
						class="hover:drop-shadow-2xl hover:scale-110 hover:rotate-0 -rotate-3 transition-all duration-600"
					/>
					<router-link
						to="/menu"
						class="flex items-center max-w-[300px] justify-center bg-primary hover:text-foreground hover:shadow-lg hover:drop-shadow-2xl transition-all duration-300 w-full text-[#43200e] text-[21px] font-semibold p-3 rounded-full mt-4"
					>
						Explore Nosso Cardápio
					</router-link>
				</div>

				<div>
					<div class="w-[200px] h-fit cursor-pointer">
						<img
							src="/promotion/discount.png"
							width="full"
							height="full"
							class="hover:drop-shadow-2xl hover:scale-110 transition-all duration-600"
						/>
					</div>
				</div>

				<div class="w-[300px] cursor-pointer md:w-full max-h-[400px]">
					<img
						src="/promotion/Burguer.png"
						width="full"
						height="full"
						class="hover:drop-shadow-2xl hover:scale-110 hover:-rotate-3 transition-all duration-600"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// Your script goes here
</script>

<style scoped>
/* Your styles go here */
</style>
