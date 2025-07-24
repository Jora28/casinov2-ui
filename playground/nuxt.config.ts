export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],
  imports: {
    dirs: ['stores'],
  },
  devtools: { enabled: true },

})
