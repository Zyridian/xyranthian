import type { Meta, StoryObj } from '@storybook/react';

import  Toast from './Toast';
import { ToastProvider, useToast } from './ToastProvider';
import { JSX } from 'react';
import Button from '../Button';

const meta = {
  title: 'Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
    },
  },
  args: {
    "aria-live": "assertive",
    role: 'alert',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorVariant: Story = {
  args: {
    variant: "error",
    content: "Failed to load projects."
  },
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
    content: "Saved"
  },
}

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    content: "Account has been deleted"
  },
};

export const ToastProviderStory: Story = {
  args: {
    variant: "success",
    content: "Account has been deleted"
  },
  render: () => {
    return (
        <ToastProvider>
          <MockApp />
        </ToastProvider>
    )
  }
};

function MockApp(): JSX.Element {
  const toastManager = useToast();
  return (
    <div
      style={{height: 400, width: 800}}
    >
      <Button text="Tap me" onClick={() => {
        toastManager.showToast({
          content: "Hello World",
          variant: "success",
        })
      }}/>
    </div>
  )
}
