import type { Meta, StoryObj } from '@storybook/react';

import  ExpandableDropdown from './ExpandableDropdown';

const meta = {
  title: 'ExpandableDropdown',
  component: ExpandableDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    header: "What is Xyranthian?",
    content: "Xyranthian is a React design system and component library built to support educational platforms in the web.",
    expanded: false
},
  render: (args) => (
    <div style={{width: 500}}>
        <ExpandableDropdown {...args} />
    </div>
  )
} satisfies Meta<typeof ExpandableDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineVariant: Story = {
  args: {
    variant: "inline"
  },
};

export const BlockVariant: Story = {
  args: {
    variant: "block"
  },
};

export const Expanded: Story = {
    args: {
        expanded: true,
    }
};
