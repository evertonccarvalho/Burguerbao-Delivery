<template>
	<section>
		<div
			class="w-full h-screen flex items-center relative bg-no-repeat bg-cover flex-col z-50"
			style="background-image: url('/BG.jpg')"
		>
			<div
				class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
			>
				<div class="flex flex-row items-center justify-center">
					<Login />
					<!-- <register /> -->
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(() => {
	if (user.value) {
		return navigateTo('/');
	}
});

const login = async (prov) => {
	const { data, error } = await client.auth.signInWithOAuth({
		provider: prov,
		redirectTo: window.location.origin,
	});
};
</script>

<style lang="scss" scoped></style>
