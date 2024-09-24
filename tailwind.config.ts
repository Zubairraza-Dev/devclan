import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(115deg, hsl(208deg 76% 7%) 0%, hsl(219deg 92% 22%) 65%, hsl(219deg 93% 30%) 79%, hsl(219deg 94% 37%) 85%, hsl(219deg 94% 42%) 90%, hsl(219deg 94% 47%) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
