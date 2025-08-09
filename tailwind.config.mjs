/** @type {import('tailwindcss').Config} */
import animatePlugin from 'tailwindcss-animate';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        colors: {
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            accent: "var(--color-accent)",
            background: "var(--color-background)",
            'custom-primary': "var(--color-primary)",
            'custom-secondary': "var(--color-secondary)",
            'custom-accent': "var(--color-accent)",
            'custom-background': "var(--color-background)"
        },
        fontFamily: {
            orbitron: ["Orbitron", "sans-serif"],
            dm: ["DM Sans", "sans-serif"]
        },
    }
  },
  plugins: [
    animatePlugin
  ]
};