import type { Meta, StoryObj } from '@storybook/react';

import  CodeBlock from './CodeBlock';
import IconButton from '../IconButton';
import { IconSizes } from '../Icon';

const meta = {
  title: 'CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JavascriptCodeBlock: Story = {
  args: {
    actions: [
      <IconButton icon="copy" size={IconSizes.SM} />,
      <IconButton icon="arrow-up-right" size={IconSizes.SM} />
    ],
    code:    
`function add(a, b) {
  return a + b;
}

console.log(add(7,7));
// Output: 14`,
    label: "Javascript",
    language: "javascript",
    maxWidth: "800px",
    minWidth: "320px",
    width: "100%",
  },
};

export const HTMLCodeBlock: Story = {
  args: {
    actions: [
      <IconButton icon="copy" size={IconSizes.SM} />,
      <IconButton icon="arrow-up-right" size={IconSizes.SM} />
    ],
    code:    
`
<html>
    <p>Hello World</p>
</html>
`,
    label: "HTML",
    language: "html",
  },
};
