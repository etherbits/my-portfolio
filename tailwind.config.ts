import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        "clamp-xl": "clamp(2rem, 2.25vw, 3rem)",
      },
      fontSize: {
        "clamp-lg": "clamp(.9rem, 1.25vw, 1.35rem)",
        "clamp-xl": "clamp(1rem, 1.39vw, 1.5rem)",
        "clamp-3xl": "clamp(2.4rem, 3.33vw, 3.6rem)",
        "clamp-4xl": "clamp(3.2rem, 4.45vw, 4.2rem)",
      },
      maxWidth: {
        "clamp-xs": "clamp(36rem, 45vw, 45rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
