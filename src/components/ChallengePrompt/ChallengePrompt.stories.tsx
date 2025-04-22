import type { Meta, StoryObj } from '@storybook/react';

import  ChallengePrompt from './ChallengePrompt';

const meta = {
  title: 'ChallengePrompt',
  component: ChallengePrompt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
    },
    header: {
      control: 'text',
    },
  },
  args: {
    width: "100%",
  },
} satisfies Meta<typeof ChallengePrompt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Challenge Prompt",
  args: {
    badgeText: "CHALLENGE",
    header: "Try it yourself!",
    content: "Navigate to ChatGPT and enter the prompt!"
  },
};
