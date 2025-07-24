export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '../src/module',
  ],
  imports: {
    dirs: ['stores'],
  },
  css: ['@/assets/style.css'],
  devtools: { enabled: true },

})
