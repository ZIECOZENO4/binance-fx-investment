import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'track' : "url('/images/track.jpg')",
          'bg-hero-pattern': "url(/images/herobg.png)",
          'bl': "url(/images/bl.jpeg)"
      },
      clipPath: {
        'custom-circle': 'circle(180vh at  50% -80vh)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")]
}
export default config;
