import type { Meta, StoryObj } from '@storybook/react';

import  SideNavigation from './SideNavigation';

const meta = {
  title: 'SideNavigation',
  component: SideNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const navigationItems = [
  {
    content: "Home",
    href: "/home"
  },
  {
    content: "Courses",
    children: [
      {
        content: "HTML & CSS Basics",
        href: "/html-and-css"
      },
      {
        content: "Javascript for Beginners",
        href: "/javascript-for-beginners",
      }
    ]
  },
  {
    content: "Settings",
    href: "/settings"
  },
 ];

export const Default: Story = {
  name: "Side Navigation",
  args: {
    activePath: "/settings",
    collapsedByDefault: false,
    collapsible: true,
    items: navigationItems,
  },
};

