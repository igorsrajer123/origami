import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@src/simple-components/button";
import MoonIcon from "@src/icons/moon-icon";

const meta = {
  title: "Origami Library/Simple Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click me please",
  },
};

export const IconButton: Story = {
  args: {
    variant: "primary",
    children: "Click me please",
    icon: MoonIcon,
  },
};
