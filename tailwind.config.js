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
        base: { DEFAULT: colors.gray[900] },
        light: { DEFAULT: colors.zinc[100] },
        primary: { DEFAULT: colors.orange[700] },
        secondary: { DEFAULT: colors.teal[900] },
        accent: { DEFAULT: colors.yellow[600] },
      },
    },
  },
  plugins: [],
} satisfies Config;
