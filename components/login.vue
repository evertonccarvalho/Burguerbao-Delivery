<template>
	<section>
		<div
			class="flex flex-col rounded-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
		>
			<div class="pb-6">
				<HeaderLogo />
			</div>
			<div
				class="w-full bg-secondary rounded-xl shadow md:mt-0 sm:max-w-md xl:p-0"
			>
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1
						class="text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl"
					>
						Faça login em sua conta
					</h1>
					<button
						@click="login('google')"
						class="flex items-center border border-primary p-2 justify-center gap-3 w-full hover:bg-muted-foreground/30 rounded-md text-lg font-semibold"
					>
						<img class="w-full max-w-[30px]" src="/google-logo.png" />
						<div>Google</div>
					</button>
					<!-- <form class="space-y-4 md:space-y-6" action="#">
						<div>
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-foreground"
								>Email</label
							>
							<input
								type="email"
								name="email"
								id="email"
								class="bg-foreground border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
								placeholder="name@email.com"
								required=""
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-sm font-medium text-foreground"
								>Senha</label
							>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="bg-foreground border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
								required=""
							/>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-start">
								<div class="flex items-center h-5">
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										class="w-4 h-4 border border-primary rounded-md bg-foreground"
										required=""
									/>
								</div>
								<div class="ml-3 text-sm">
									<label for="remember" class="text-gray-500">Lembrar</label>
								</div>
							</div>
							<a
								href="#"
								class="text-sm font-medium text-primary-600 hover:underline d"
								>Esqueceu sua senha</a
							>
						</div>
						<button
							type="submit"
							class="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Entrar
						</button>
						<p class="text-sm font-light text-blue-600">
							Não tem uma conta ainda?
							<a
								href="#"
								class="font-medium text-primary-600 hover:underline text-primary"
								>Criar conta!</a
							>
						</p>
					</form> -->
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
