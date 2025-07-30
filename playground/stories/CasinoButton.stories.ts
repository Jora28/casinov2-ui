
import CasinoButton from '../../src/runtime/components/CasinoButton.vue';
import '../../src/output.css';
export const ActionsData = {
  // onPinTask: fn(),
  // onArchiveTask: fn(),
};

export default {
  component: CasinoButton,
  title: 'CasinoButton',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData
  }
};

export const Default = {
  args: {
    text: 'Deposit Now',
  },
};