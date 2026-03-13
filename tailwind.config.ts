import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#F9FAFB",
        primary: {
          DEFAULT: "#0F172A"
        },
        secondary: {
          DEFAULT: "#4F46E5"
        },
        accent: {
          DEFAULT: "#22D3EE"
        },
        muted: {
          DEFAULT: "#111827"
        },
        border: "#1F2937"
      },
      fontFamily: {
        heading: ["Inter", "Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

