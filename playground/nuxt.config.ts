import tailwinConfig from './tailwind.config'
export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/storybook',
  ],
  imports: {
    dirs: ['stores'],
  },
  casinov2Ui: {
    tailwindConfig: tailwinConfig
  },
  devtools: { enabled: true },

})