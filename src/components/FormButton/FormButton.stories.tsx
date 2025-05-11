import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/font.css"

import  Button from './FormButton';

const meta = {
  title: 'FormButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
        control: 'text',
        table: {
            defaultValue: { summary: ''}
        }
    },
  },
  args: {
    disabled: false,
    size: "SM",
    text: 'Get started'
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Get started',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Get started',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Cancel',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    text: 'Delete',
    variant: 'destructive',
  },
};
