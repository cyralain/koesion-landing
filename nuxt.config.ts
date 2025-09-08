// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,

  // Nitro configuration for server
  nitro: {
    experimental: {
      wasm: true,
    },
    preset: 'netlify',
    prerender: {
      // Disable prerender during build to avoid hitting runtime endpoints or assets
      crawlLinks: false,
      routes: [],
      ignore: ['/**'],
      failOnError: false
    }
  },


})
