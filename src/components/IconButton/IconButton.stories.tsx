import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/font.css"

import  IconButton from './IconButton';
import { palette } from '../../foundations/palette';
import { IconSizes } from '../Icon/Icon';
import { Icons } from '../../foundations/icons';

const meta = {
  title: 'IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: "color",
    },
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(Icons)
    }

  },
  args: {
    icon: "info-circle",
    size: IconSizes.LG,
    color: palette.neutral900,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultIconButton: Story = {
  args: {
    icon: 'info-circle',
  },
};
