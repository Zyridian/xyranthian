import type { Meta, StoryObj } from '@storybook/react';

import  Grid from './Grid';
import Card from '../Card';

const meta = {
  title: 'Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    gap: "spacing5",
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridWithOneColumn: Story = {
  args: {
    alignItems: "center",
    columns: 1,
    justifyContent: "center",
  },
  render: (args) => (
    <Grid {...args}>
      <Card maxWidth='15px'>A</Card>
      <Card maxWidth='15px'>B</Card>
      <Card maxWidth='15px'>C</Card>
      <Card maxWidth='15px'>D</Card>
      <Card maxWidth='15px'>E</Card>
      <Card maxWidth='15px'>F</Card>
      <Card maxWidth='15px'>G</Card>
    </Grid>
  )
};

