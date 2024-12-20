// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-auth-sanctum',
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    darkMode: 'selector',
  },

  sanctum: {
    baseUrl: 'http://localhost:8000', // Laravel API
    redirect: {
      onAuthOnly: '/login',
      onGuestOnly: '/profile',
    },
    globalMiddleware: {
      enabled: true,
    },
  },
})