import type { Preview } from "@storybook/vue3-vite";

// Registers the msw addon

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;