export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/storybook',
  ],
  imports: {
    dirs: ['stores'],
  },
  devtools: { enabled: true },

})