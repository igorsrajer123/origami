import { Meta, StoryObj } from "@storybook/react";
import MoonIcon from "@src/icons/moon-icon";

const meta = {
  title: "Origami Library/Icons/MoonIcon",
  component: MoonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MoonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 50,
    height: 50,
    color: "#f0f0f0",
  },
};
