import type { Meta, StoryObj } from '@storybook/react';

import  LoadingSkeleton from './LoadingSkeleton';
import { palette } from '../../foundations/palette';
import { Radii } from '../../foundations';
import Spacer from '../Spacer/Spacer';

const meta = {
  title: 'LoadingSkeleton',
  component: LoadingSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: "color",
    }
  },
  args: {
    "aria-hidden": true,
    color: palette.neutral300,
  },
} satisfies Meta<typeof LoadingSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarVariant: Story = {
  args: {
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    variant: "avatar"
  }
};

export const InlineTextVariant: Story = {
  args: {
    borderRadius: Radii.sm,
    height: "12px",
    width: "100px",
    variant: "inline-text"
  }
};

export const RectangleVariant: Story = {
  args: {
    borderRadius: Radii.md,
    height: "50px",
    width: "300px",
    variant: "rectangle"
  }
};

export const TextVariant: Story = {
  args: {
    borderRadius: Radii.md,
    height: "16px",
    width: "100px",
    variant: "text"
  }
};

export const LoadingSkeletonStack: Story = {
  render: (args) => {
    return (
      <Spacer size='spacing2'>
        <LoadingSkeleton variant="text" {...args} />
        <LoadingSkeleton variant="text" {...args} />
        <LoadingSkeleton variant="text" {...args} />
        <LoadingSkeleton variant="text" {...args} />
      </Spacer>
    )
  } 
};
