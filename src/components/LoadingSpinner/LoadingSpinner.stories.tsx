import type { Meta, StoryObj } from '@storybook/react';

import  LoadingSpinner from './LoadingSpinner';
import { palette } from '../../foundations/palette';

const meta = {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: "color"
    },
    size: {
      control: "text"
    }
  },
  args: {
   color: palette.primary600,
   size: "24px",
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLoadingSpinner: Story = {
  name: "Loading Spinner",
  args: {
  },
};
