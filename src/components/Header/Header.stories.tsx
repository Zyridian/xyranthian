import type { Meta, StoryObj } from '@storybook/react';

import  Header from './Header';
import { baseElementTags } from '../Text/constants';
import { palette } from '../../foundations/palette';

const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    baseElement: {
      control: "select",
      options: baseElementTags,
    },
  },
  args: {
   align: "left",
   baseElement: "h1",
   size: "LG",
   startIconColor: "#111827",
   subtext: "Course by Xyranthian",
   title: "Learn web development",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallSize: Story = {
  args: {
    size: "SM"
  },
};

export const MediumSize: Story = {
  args: {
    size: "MD"
  },
};

export const LargeSize: Story = {
  args: {
    size: "LG"
  },
};

export const ExtraLargeSize: Story = {
  args: {
    size: "XL"
  },
};

export const HeaderWithStartIcon: Story = {
  args: {
    startIcon: "checkmark-circle",
    startIconColor: palette.primary600,
  }
}
