import type { Meta, StoryObj } from '@storybook/react';

import  InlineCode from './InlineCode';
import { palette } from '../../foundations/palette';
import Text from '../Text';

const meta = {
  title: 'InlineCode',
  component: InlineCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      table: {
        summary: { default: '""'},
      }
    },
    backgroundColor: {
      control: "color",
    },
    color: {
      control: "color",
    }
  },
  args: {
    backgroundColor: palette.neutral100,
    color: palette.neutral800,
  },
} satisfies Meta<typeof InlineCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JavascriptInlineCode: Story = {
  args: {
    children: "const sum = a + b;"
  },
};
