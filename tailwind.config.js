/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': ['0.75rem'],
      'md': ['1rem'],
      'lg': ['1.125rem'],
      'xl': ['1.25rem'],
      '2xl': ['1.5rem'],
      '3xl': ['1.875rem'],
      '4xl': ['2.25rem'],
      '5xl': ['3rem'],
    },
    colors: {
      "default-background": "#F8F8F2",
      "default-background-d": "#262935",

      "primary": "#ff79c6",
      "secondary": "#bd93f9",
      "accent": "#ffb86c",
      "neutral": "#414558",
      "base-100": "#282a36",
      "base-content": "#f8f8f2",
      "info": "#8be9fd",
      "success": "#50fa7b",
      "warning": "#f1fa8c",
      "error": "#ff5555",
    },
    extend: {},
  },
  plugins: [],
}
