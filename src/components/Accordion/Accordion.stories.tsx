import type { Meta, StoryObj } from '@storybook/react';

import  Accordion from './Accordion';

const meta = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    gap: "spacing5",
    items: [
      {
          header: "Why choose Xyranthian?",
          content: "Xyranthian travels red and blue flag lights. Grocerry palace with green automobiles plugged in to palm.",
      },
      {
          header: "What is Xyranthian?",
          content: "Goose violet guitar while lidar, window, and go. Fast wheels jump, while zoom through and careful."
      },
      {
        header: "Why choose Xyranthian?",
        content: "Xyranthian travels red and blue flag lights. Grocerry palace with green automobiles plugged in to palm.",
      },
      {
          header: "What is Xyranthian?",
          content: "Goose violet guitar while lidar, window, and go. Fast wheels jump, while zoom through and careful."
      },
      {
        header: "Why choose Xyranthian?",
        content: "Xyranthian travels red and blue flag lights. Grocerry palace with green automobiles plugged in to palm.",
    },
    {
        header: "What is Xyranthian?",
        content: "Goose violet guitar while lidar, window, and go. Fast wheels jump, while zoom through and careful."
    }
  ]
} ,
  render: (args) => (
    <div style={{width: 500}}>
        <Accordion {...args} />
    </div>
  )
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

