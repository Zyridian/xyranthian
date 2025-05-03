import type { Meta, StoryObj } from "@storybook/react";

import  Link from "./Link";
import { palette } from "../../foundations/palette";
import { baseElementTags } from "./constants";

const meta = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    baseElement: {
      control: "select",
      options: baseElementTags,
    },
    children: {
      control: "text",
    },
    href: {
      control: "text"
    }
  },
  args: {
    align: "left",
    color: palette.neutral700,
    baseElement: "a",
    children: "ChatGPT for Debugging & Exploration (Optional)",
    variant: "bodyS",
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CodeVariant: Story = {
  name: "Code Variant",
  args: {
    variant: "code"
  },
};

export const LabelVariant: Story = {
  name: "Label Variant",
  args: {
    variant: "label"
  },
};

export const H1Variant: Story = {
  name: "H1 Variant",
  args: {
    variant: "h1"
  },
};

export const H2Variant: Story = {
  name: "H2 Variant",
  args: {
    variant: "h2"
  },
};

export const H3Variant: Story = {
  name: "H3 Variant",
  args: {
    variant: "h3"
  },
};

export const BodySVariant: Story = {
  name: "Small Body Variant",
  args: {},
};

export const BodyLVariant: Story = {
  name: "Large Body Variant",
  args: {
    variant: "bodyL"
  },
};

export const SmallDisplay: Story = {
  name: "Small Display Variant",
  args: {
    variant: "displayS"
  },
};

export const MediumDisplay: Story = {
  name: "Medium Display Variant",
  args: {
    variant: "displayM"
  },
};

export const LargeDisplay: Story = {
  name: "Lage Display Variant",
  args: {
    variant: "displayL"
  },
};

export const ExtraLargeDisplay: Story = {
  name: "Extra Lage Display Variant",
  args: {
    variant: "displayXL"
  },
};
