import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/font.css"

import  Breadcrumbs from './Breadcrumbs';
import Icon from '../Icon';

const meta = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Breadcrumbs provide a navigational trail, showing users where they are and how they got there."
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
   

  },
  args: {
   
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbsWithPlainText: Story = {
  args: {
    items: [
      {
        content: "Home"
      },
      {
        content: "HTML Basics"
      },
      {
        content: "Tags"
      },
    ]
  },
};

export const BreadcrumbsWithIcons: Story = {
  args: {
    items: [
      {
        content: <Icon variant="home" size="20px"/>
      },
      {
        content: "HTML Basics"
      },
      {
        content: "Tags"
      },
    ]
  },
};
