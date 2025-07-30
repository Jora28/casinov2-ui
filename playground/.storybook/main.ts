import { type StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';
const config: StorybookConfig = {
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  stories: ['../stories/**/*.stories.@(js|ts|vue)'],
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(vue());
    // config.css = style;
    return config;
  },
};

export default config;
