import type { Meta, StoryObj } from '@storybook/react';

import  PageContainer from './PageContainer';
import Text from '../Text';

const meta = {
  title: 'PageContainer',
  component: PageContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    baseElement: "div",
    horizontalPadding: "24px",
    maxWidth: "960px",
  },
} satisfies Meta<typeof PageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "PageContainer",
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
   )
  },
};
