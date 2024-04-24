// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: false},
	$development: {
		devServer: {
			host: "127.0.0.1",
		},
	},
	modules: [
		"nuxt-mongoose", //
		"@nuxtjs/color-mode",
		"@nuxtjs/tailwindcss",
	],
})
