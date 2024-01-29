//tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#90BB3F",
        secondary: "#90BB3F",
        // You can add as many custom colors as needed
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
