export default defineNuxtConfig({
	pages: true,
	modules: [
		'nuxt-icon',
		'nuxt-lodash',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/supabase',
		'shadcn-nuxt',
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui',
	},
	css: ['~/main.css'],
	ssr: false,
	supabase: {
		redirect: false,
	},
	build: {
		transpile: ['pinia-plugin-persistedstate'],
	},
	runtimeConfig: {
		public: {
			stripePk: process.env.STRIPE_PK_KEY,
		},
	},

	// app: {
	// 	head: {
	// 		script: [{ src: 'https://js.stripe.com/v3/', defer: true }],
	// 	},
	// },
});
