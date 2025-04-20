import type { Meta, StoryObj } from '@storybook/react';

import  ModuleCard from './ModuleCard';

const meta = {
  title: 'ModuleCard',
  component: ModuleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    maxWidth: "360px",
    minHeight: "180px",
    timeLabel: {
      icon: "clock",
      content: "15 mins",
    },
    title: "Getting Started with ChatGPT",
    summary: "In this module, you'll learn what ChatGPT is, how to use it, and how to ask questions that actually get you useful answers.",
  },
} satisfies Meta<typeof ModuleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompletedVariant: Story = {
  args: {
    locked: false,
    progress: "100%",
    statusLabel: {
      status: "completed"
    }
  },
};

export const InProgressVariant: Story = {
  args: {
    locked: false,
    progress: "75%",
    statusLabel: {
      status: "in-progress"
    }
  },
};

export const LockedVariant: Story = {
  args: {
    locked: true,
  },
};

export const UnlockedVariant: Story = {
  args: {
    locked: false,
  },
};
