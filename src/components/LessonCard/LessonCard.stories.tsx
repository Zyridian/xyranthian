import type { Meta, StoryObj } from '@storybook/react';

import  LessonCard from './LessonCard';

const meta = {
  title: 'LessonCard',
  component: LessonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    compact: false,
    timeLabel: {
      icon: "clock",
      content: "15 mins",
    },
    title: "1.1 What is ChatGPT?",
    statusLabel: {
      status: "locked"
    },
    summary: "Learn what ChatGPT is, how it works, and how it can help you as a coding assistant",
  },
} satisfies Meta<typeof LessonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardVariant: Story = {
  args: {
    href: "https://youtube.com",
    variant: "dashboard"
  },
};

export const ModuleVariant: Story = {
  args: {
    variant: "module"
  },
};

export const CompletedStatus: Story = {
  args: {
    statusLabel: { status: "completed" }
  },
};

export const InProgressStatus: Story = {
  args: {
    statusLabel: { status: "in-progress" }
  },
};

export const LockedStatus: Story = {
  args: {
    statusLabel: { status: "locked" }
  },
};

export const NotStartedStatus: Story = {
  args: {
    statusLabel: { status: "not-started" }
  },
};
