import { defineNuxtModule, addComponentsDir, addPlugin, createResolver, installModule } from '@nuxt/kit'
import { _ } from 'vitest/dist/chunks/reporters.d.BFLkQcL6.js';

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'casinov2-ui-module',
    configKey: 'casinov2Ui',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    _nuxt.hook("nitro:config", async (nitroConfig) => {
      // if not already available, intialize as empty array
      nitroConfig.publicAssets ||= [];
      nitroConfig.publicAssets.push({
        dir: resolver.resolve("./runtime/assets"),  // path of assets
        maxAge: 60 * 60 * 24 * 365, // cache assets for 1 year
      });
    });
    // _nuxt.options.modules.push("@nuxtjs/tailwindcss",) // Ensure devtools are enabled
    installModule('@nuxtjs/tailwindcss', {
      // module configuration
      exposeConfig: true,
      config: {
        theme: {
          screens: {
            xs: '475px',
            sm: "640px",
            md: "850px",
            lg: "1024px",
            hg: "1050px",
            xl: "1280px",
          },
          animation: {
            wiggle: 'scale 2s cubic-bezier(0,0,.2,1) infinite',
            opacity: 'opacity 2s cubic-bezier(0,0,.2,1)',
            openedWithBounce: 'bounceIn 0.5s both 0.1s',
            opacityback: 'opasitybg 0.5s both 0.1s',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            fadeOut: {
              '0%': { opacity: '1' },
              '100%': { opacity: '0' },
            },
          },
          extend: {
            colors: {
              'lucky-card-1': '#B580FF',
              'lucky-card-2': '#0FA2C6',
              'marque': '#5D5CFD33',
              'main-background': '#000000',
              'promotions': '#5D5CFD',
              'transparent': 'transparent',
              'black': '#0c0d0f',
              'black-light': '#101113',
              'black-light-100': '#131b1d',
              'gray': '#4b5054',
              'gray-dark': '#151a1d',
              'gray-light': '#252525',
              'gray-light-100': 'rgba(37,37,37,0.3)',
              'blue-light': '#6f68ff',
              'blue-dark': '#5b58fd',
              'white': '#feffff',
              'primary': '#ffe600',
              'button-active': '#5d5cfd',
              'primary-button': '#ffe600',
              'primary-button-hover': '#004e82',
              'primary-button-text': '#151a1d',
              'primary-text': '#ffffff',
              'primary-text-hover': '#ffe600',
              'primary-text-active': '#ffe600',
              'primary-text-light': '#B5BEC6',
              'neutrals-background-1': '#0C0D0F',
              'neutrals-background-2': '#0F1113',
              'neutrals-dark-1': '#171A1C',
              'neutrals-dark-2': '#22262C',
              'neutrals-dark-3': '#2C3135',
              'neutrals-dark-4': '#6B747B',
              'neutrals-white': '#FFFFFF',
              'neutrals-light-1': '#F5F5F7',
              'neutrals-light-2': '#EDEDF0',
              'neutrals-light-3': '#E9E9EA',
              'neutrals-light-4': '#CED7DE',
              'neutrals-light-5': '#B5BEC6',
              'error': '#F65050',
              'blog-gradient-1': '#AF46FE',
              'blog-gradient-2': '#CF5CFF',
              'tournamnet1': 'rgba(23, 29, 36, 47%)',
              'tournamnet2': 'rgba(20, 89, 217, 47%)',
              'tournamnet3': 'rgba(5, 53, 145, 47%)',
              'errorPage-textColor': '#ffffff',
              'additional-error': '#F65066',
              'violet-1': '#774FF6',
              'violet-2': '#9177E9',
              'bronze': '#F2A347',
              'gold': '#F1C733',
              'color-meadow': '#18A34A',
              'outer-space': '#323840',
            },
            gridColumn: {
              'span-13': 'span 13 / span 13',
              'span-14': 'span 14 / span 14',
              'span-15': 'span 15 / span 15',
              'span-16': 'span 16 / span 16',
              'span-17': 'span 17 / span 17',
              'span-18': 'span 18 / span 18',
              'span-19': 'span 19 / span 19',
              'span-20': 'span 20 / span 20',
              'span-21': 'span 21 / span 21',
              'span-22': 'span 22 / span 22',
              'span-23': 'span 23 / span 23',
              'span-24': 'span 24 / span 24',
              'span-25': 'span 25 / span 25',
              'span-26': 'span 26 / span 26',
              'span-27': 'span 27 / span 27',
              'span-28': 'span 28 / span 28',
              'span-29': 'span 29 / span 29',
              'span-30': 'span 30 / span 30',
              'span-31': 'span 31 / span 31',
              'span-32': 'span 32 / span 32',
            },
            gridTemplateColumns: {
              // Simple 16 column grid
              '32': 'repeat(32, minmax(0, 1fr))',

              // Complex site-specific column configuration
              'footer': '400px minmax(900px, 1fr) 100px',
            }
          },
        },
      }
    })
    addPlugin(resolver.resolve('./runtime/plugin'));
    addComponentsDir({
      path: resolver.resolve("./runtime/components"), // path of components
      pathPrefix: false, // Prefix component name by its path.
      prefix: "", // Prefix all matched components.
      global: true, // Registers components to be globally available.
    });
  },
})
