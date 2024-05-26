import { Meta, StoryObj } from "@storybook/react";
import SunIcon from "@src/icons/sun-icon";

const meta = {
  title: "Origami Library/Icons/SunIcon",
  component: SunIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SunIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 50,
    height: 50,
    color: "#f0f0f0",
  },
};
