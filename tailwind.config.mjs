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
        'custom-primary': "var(--color-primary)",
        'custom-secondary': "var(--color-secondary)",
        'custom-accent': "var(--color-accent)",
        'custom-background': "var(--color-background)"
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"]
      },
    }
  },
  plugins: [
    animatePlugin
  ]
};