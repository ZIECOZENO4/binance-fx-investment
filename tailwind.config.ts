import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";


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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'track': "url('/images/track.jpg')",
        'bg-hero-pattern': "url(/images/herobg.png)",
        'bl': "url(/images/bl.jpeg)",
        'image1': "url('/images/1.png')",
        'image2': "url('/images/2.png')",
        'image3': "url('/images/3.png')",
        'image4': "url('/images/4.png')",
        'image5': "url('/images/11.png')",
        'image6': "url('/images/7.png')",
        'image7': "url('/images/5.png')",
        'image8': "url('/images/8.png')",
      },
      animation: {
        'background-change': 'backgroundChange 40s infinite',
      },
      keyframes: {
        backgroundChange: {
          '0%, 100%': { backgroundImage: 'var(--tw-bg-image1)' },
          '12.5%': { backgroundImage: 'var(--tw-bg-image2)' },
          '25%': { backgroundImage: 'var(--tw-bg-image3)' },
          '37.5%': { backgroundImage: 'var(--tw-bg-image4)' },
          '50%': { backgroundImage: 'var(--tw-bg-image5)' },
          '62.5%': { backgroundImage: 'var(--tw-bg-image6)' },
          '75%': { backgroundImage: 'var(--tw-bg-image7)' },
          '87.5%': { backgroundImage: 'var(--tw-bg-image8)' },
        },
      },
      clipPath: {
        'custom-circle': 'circle(180vh at 50% -80vh)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate"), addVariablesForColors], // Include your plugin here
};

export default config;

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}