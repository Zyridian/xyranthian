import type { Meta, StoryObj } from '@storybook/react';

import  Card from './Card';
import Text from '../Text';

const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    backgroundColor: "#FFFFFF",
    maxWidth:  "200px",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Card",
  args: {
   children: (
    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
      <Text variant="h2">Welcome back, Kyle</Text>
      <Text variant="bodyS">You're 80% through the Javascript module!</Text>
    </div>
   )
  },
};

