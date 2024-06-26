import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure your paths are correctly defined
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.serif],
        robotoSlab: ["var(--font-roboto-slab)", ...fontFamily.serif],
        robotoMono: ["var(--font-roboto-mono)", ...fontFamily.mono],
      },
      colors: {
        "primary-200": "#151619",
        "primary-150": "#1D1F22",
        "primary-100": "#2B2D31",
        "primary-50": "#35393F",
        "secondary-200": "#5A6069",
        "secondary-150": "#7C8187",
        "secondary-100": "#C1C4CB",
        "secondary-50": "#E4E4E4",
        "tertiary-150": "#E46643",
        "tertiary-100": "#F39765",
        "tertiary-50": "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
