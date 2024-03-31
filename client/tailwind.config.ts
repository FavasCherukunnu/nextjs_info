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
        primaryy: {
          '000': '#F7F2E2', // 10% lighter
          '100': '#FDF6EE', // 20% lighter
          '200': '#FFFFF4', // 30% lighter
          '300': '#FFFFFF', // White (optional)
          '400': '#E8C872', // Base color
          '500': '#D7B962', // 10% darker
          '600': '#C6AD52', // 20% darker
          '700': '#B5A242', // 30% darker
          '800': '#A49732', // 40% darker
          '900': '#938C22', // 50% darker
          '1000': '#828112', // 60% darker
          '1100': '#717002', // 70% darker
          '1200': '#000000', // Black
        },
      },
    },
  },
  plugins: [],
};
export default config;
