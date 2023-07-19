import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        gradients: {
          "gradient-radial": {
            value: "radial-gradient(var(--gradient-stops))",
          },
          "gradient-conic": {
            value:
              "conic-gradient(from 180deg at 50% 50%, var(--gradient-stops))",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});

