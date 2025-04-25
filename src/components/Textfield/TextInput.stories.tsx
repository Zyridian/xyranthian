import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/font.css"

import  Textfield from './Textfield';

const meta = {
  title: 'Textfield',
  component: Textfield,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: "text",
    },
    width: {
      control: "text",
    }
  },
  args: {
    constraintText: "",
    disabled: false,
    error: false,
    label: "First name",
    placeholder: "Enter your name",
    readonly: false,
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextVariant: Story = {
  args: {
    constraintText: "First name is required"
  },
};

export const DisabledTextVariant: Story = {
  args: {
    disabled: true,
  },
};

export const ReadonlyTextVariant: Story = {
  args: {
    readonly: true,
    startIcon: "lock",
    value: "Kyle"
  },
};

export const ErrorTextVariant: Story = {
  args: {
    constraintText: "Name is required",
    error: true,
    value: ""
  },
};

export const PasswordVariant: Story = {
  args: {
    label: "Password",
    variant: "password",
    value: "test"
  },
};
