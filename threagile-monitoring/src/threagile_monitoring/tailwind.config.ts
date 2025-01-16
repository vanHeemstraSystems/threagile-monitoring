import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./templates/**/*.html",
    "./static/**/*.{css,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    "./components/**/*.{ts,tsx}"
  ],

  plugins: [
    flowbitePlugin,
    require("flowbite/plugin")({
      datatables: true,
    }),
    require("tailwindcss-animate")
  ],

  darkMode: ["class"],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        neonBlue: "#33C3F0",
        darkGray: "#222222",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          // // flowbite-svelte
          // 50: "#FFF5F2",
          // 100: "#FFF1EE",
          // 200: "#FFE4DE",
          // 300: "#FFD5CC",
          // 400: "#FFBCAD",
          // 500: "#FE795D",
          // 600: "#EF562F",
          // 700: "#EB4F27",
          // 800: "#CC4522",
          // 900: "#A5371B",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  safelist: [
    'bg-darkGray'
  ],
} satisfies Config;
