import type { Meta, StoryObj } from '@storybook/react';

import  AvatarGroup from './AvatarGroup';

const meta = {
  title: 'AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    gap: "spacing5",
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAvatarGroup: Story = {
  args: {
    size: 100,
    items: [
      {
        src: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676"
      },
      {
        src: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676"
      },
      {
        src: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676"
      },
      {},
      {}
    ]
  },
};
