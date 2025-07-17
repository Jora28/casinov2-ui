export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  imports: {
    dirs: ["stores"],
  },
})
