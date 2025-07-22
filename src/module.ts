import { defineNuxtModule, addComponentsDir, addPlugin, createResolver, installModule } from '@nuxt/kit'
import { defu } from 'defu'
import defaultTailwindConfig from './defaults/tailwind'
// Module options TypeScript interface definition
export interface ModuleOptions {
  tailwindConfig?: any
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'casinov2-ui-module',
    configKey: 'casinov2Ui',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    _nuxt.hook('nitro:config', async (nitroConfig) => {
      // if not already available, intialize as empty array
      nitroConfig.publicAssets ||= []
      nitroConfig.publicAssets.push({
        dir: resolver.resolve('./runtime/assets'), // path of assets
        maxAge: 60 * 60 * 24 * 365, // cache assets for 1 year
      })
    })
    // _nuxt.options.modules.push("@nuxtjs/tailwindcss",) // Ensure devtools are enabled
    const mergedTailwindConfig = defu(_options.tailwindConfig || {}, defaultTailwindConfig)

    await installModule('@nuxtjs/tailwindcss', {
      // module configuration
      exposeConfig: true,
      config: mergedTailwindConfig,
    })
    addPlugin(resolver.resolve('./runtime/plugin'))
    addComponentsDir({
      path: resolver.resolve('./runtime/components'), // path of components
      pathPrefix: false, // Prefix component name by its path.
      prefix: '', // Prefix all matched components.
      global: true, // Registers components to be globally available.
    })
  },
})
