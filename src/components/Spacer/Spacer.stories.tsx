import type { Meta, StoryObj } from '@storybook/react';

import  Spacer from './Spacer';
import Text from '../Text';

const meta = {
  title: 'Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutSpacer: Story = {
  args: {
    baseElement: "div",
    direction: "column",
    size: "spacing5",
    children: (
      <>
        <Text variant="h2">When to prompt engineer</Text>
        <Text variant="bodyS">
          This guide focuses on success criteria that are controllable through prompt engineering.
          Not every success criteria or failing eval is best solved by prompt engineering. For example,
          latency and cost can be sometimes more easily improved by selecting a different model
        </Text>
      </>
    )
  },
};

export const StandaloneSpacer: Story = {
  args: {
    baseElement: "div",
    size: "spacing5",
  },
  render: (args) => (
    <>
      <Text variant="h2">When to prompt engineer</Text>
      <Spacer {...args}/>
      <Text variant="bodyS">
        This guide focuses on success criteria that are controllable through prompt engineering.
        Not every success criteria or failing eval is best solved by prompt engineering. For example,
        latency and cost can be sometimes more easily improved by selecting a different model
      </Text>
    </>
   )
};
