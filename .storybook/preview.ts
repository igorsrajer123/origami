import type { Preview } from "@storybook/react";
import "@src/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "custom-color",
      values: [
        {
          name: "custom-color",
          value: "#E14A88",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
