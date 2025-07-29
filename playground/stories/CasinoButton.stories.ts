import type { Meta, StoryObj } from '@storybook/vue3'
import CasinoButton from "../../src/runtime/components/CasinoButton.vue";

const meta = {
  title: 'CasinoButton',
  component: CasinoButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
//   tags: ['autodocs'],

} satisfies Meta<typeof CasinoButton>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtWelcomeStory: Story = {
  args: {},
}