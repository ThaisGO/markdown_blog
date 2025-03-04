// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true, // Certifique-se de que o SSR está ativado
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content']
})