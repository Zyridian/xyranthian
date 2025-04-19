import type { Meta, StoryObj } from '@storybook/react';

import  Section from './Section';
import Text from '../Text';

const meta = {
  title: 'Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    baseElement: "div",
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Box: Story = {
  args: {
   children: (
    <div>
      <Text variant="h2">When to prompt engineer</Text>
      <Text variant="bodyS">
        This guide focuses on success criteria that are controllable through prompt engineering.
        Not every success criteria or failing eval is best solved by prompt engineering. For example,
        latency and cost can be sometimes more easily improved by selecting a different model
      </Text>
    </div>
   ),
   variant: "box",
  },
};

export const Inline: Story = {
  args: {
   children: (
    <div>
      <Text variant="h2">When to prompt engineer</Text>
      <Text variant="bodyS">
        This guide focuses on success criteria that are controllable through prompt engineering.
        Not every success criteria or failing eval is best solved by prompt engineering. For example,
        latency and cost can be sometimes more easily improved by selecting a different model
      </Text>
    </div>
   ),
   variant: "inline",
  },
};
