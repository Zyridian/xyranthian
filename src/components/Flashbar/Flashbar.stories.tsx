import type { Meta, StoryObj } from '@storybook/react';

import  Flashbar from './Flashbar';
import { useCallback, useState } from 'react';

const meta = {
  title: 'Flashbar',
  component: Flashbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Flashbars are used to display contextual feedback messages—such as errors, warnings, or confirmations—to guide or inform users within the UI."
      }
    }
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
    "aria-live": "assertive",
    role: 'Flashbar',
    width: "100%",
  },
} satisfies Meta<typeof Flashbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorVariant: Story = {
  args: {
    variant: "error",
    header: "Access denied",
    content: "You are not authorized to delete resource. Contact an administrator for further help."
  },
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
    content: "You can only change your username once every 30 days."
  },
}

export const WarningVariant: Story = {
  args: {
    variant: "warning",
    header: "Verify your email",
    content: "Your email has not been verified. Verify your email to keep your account secure."
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    header: "Account has been deleted"
  },
};

export const FlashbarWithDismissButton: Story = {
  args: {
    dismissable: true,
    variant: "success",
    header: "Account has been deleted"
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = useCallback(() => {
      setIsVisible(false);
    }, []);

    return (
      <>
        {isVisible && (
          <Flashbar onDismiss={handleDismiss} {...args}/>
        )}
      </>
    )
  }
};

