import { Meta, StoryObj } from "@storybook/react";
import ThemeController from "@src/simple-components/theme-controller";

const meta = {
  title: "Origami Library/Simple Components/ThemeController",
  component: ThemeController,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
