import type { Meta, StoryObj } from '@storybook/react';

import  Avatar from './Avatar';

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: 100,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithImage: Story = {
  args: {
    src: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676"
  },
};

export const AvatartWithoutImage: Story = {
  args: {
  },
};

export const AvatartWithCustomPlaceholder: Story = {
  args: {
  },
  render: (args) => (
    <Avatar
      {...args}
      placeholderImage={
        <img
          style={{
            objectFit: "cover",
            height: args.size,
            width: args.size,
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
        />
      }
    />
  )
};

