
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        slynk: "#33C3F0",
        dark: "#101214",
        sidebar: "#181A1B",
        card: "#222325",
        muted: "#8e9196"
      },
      borderRadius: {
        lg: "1rem",
      },
      boxShadow: {
        card: "0 8px 24px 0 rgba(51,195,240,0.1)",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
