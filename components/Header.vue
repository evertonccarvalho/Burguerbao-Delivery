<template>
	<header
		class="fixed z-30 w-full flex items-center bg-card xl:px-0 xl:h-[70px]"
	>
		<div class="container mx-auto">
			<div
				class="flex flex-col py-4 gap-4 md:flex-row justify-between items-center"
			>
				<HeaderLogo />

				<SearchInput />

				<NavBar />
			</div>
		</div>
	</header>
</template>
