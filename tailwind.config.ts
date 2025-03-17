import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: colors.teal[700] },
        secondary: { DEFAULT: colors.teal[900] },
        accent: { DEFAULT: colors.zinc[600] },
      },
    },
  },
  plugins: [],
} satisfies Config;
