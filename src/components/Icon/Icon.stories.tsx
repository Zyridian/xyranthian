import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/font.css"

import  Icon, { IconSizes } from './Icon';
import { Icons } from '../../foundations/icons';
import { palette } from '../../foundations/palette';

const meta = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Icons are used to visually represent actions, objects, or statuses across the interface."
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: Object.keys(Icons)
    }

  },
  args: {
    variant: "info-circle",
    size: IconSizes.LG,
    color: palette.neutral900
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoCircleVariant: Story = {
  args: {
    variant: 'info-circle',
  },
};

