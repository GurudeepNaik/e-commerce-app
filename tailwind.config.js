/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a CSS class
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003135",  // Default primary color (dark teal) for light mode
          dark: "#AFDDE5",     // Primary color for dark mode (very light teal)
        },
        secondary: {
          DEFAULT: "#024950",  // Default secondary color (blue-green) for light mode
          dark: "#003135",     // Secondary color for dark mode (dark teal)
        },
        accent: {
          DEFAULT: "#964734",  // Default accent color (reddish brown) for both modes
          dark: "#964734",     // Accent remains the same in dark mode
        },
        neutral: {
          DEFAULT: "#0FA4AF",  // Neutral color (light teal) for both modes
          dark: "#0FA4AF",     // Neutral remains the same in dark mode
        },
        background: {
          DEFAULT: "#AFDDE5",  // Background color (very light teal) for light mode
          dark: "#003135",     // Background color for dark mode (dark teal)
        },
        muted: {
          DEFAULT: "#024950",  // Muted color (blue-green) for both modes
          dark: "#024950",     // Muted remains the same in dark mode
        },
        "primary-foreground": {
          DEFAULT: "#AFDDE5",  // Primary foreground (light teal) for light mode
          dark: "#003135",     // Primary foreground for dark mode (dark teal)
        },
        "secondary-foreground": {
          DEFAULT: "#AFDDE5",  // Secondary foreground (light teal) for light mode
          dark: "#AFDDE5",     // Secondary foreground remains the same in dark mode
        },
        "accent-foreground": {
          DEFAULT: "#AFDDE5",  // Accent foreground (light teal) for light mode
          dark: "#AFDDE5",     // Accent foreground remains the same in dark mode
        },
        "muted-foreground": {
          DEFAULT: "#AFDDE5",  // Muted foreground (light teal) for light mode
          dark: "#AFDDE5",     // Muted foreground remains the same in dark mode
        },
        "neutral-foreground": {
          DEFAULT: "#003135",  // Neutral foreground (dark teal) for light mode
          dark: "#AFDDE5",     // Neutral foreground (light teal) for dark mode
        },
        "header-background": {
          DEFAULT: "#003135",  // Header background (dark teal) for light mode
          dark: "#003135",     // Header background remains the same in dark mode
        },
        "header-text": {
          DEFAULT: "#AFDDE5",  // Header text (light teal) for light mode
          dark: "#AFDDE5",     // Header text remains the same in dark mode
        },
        "icon":{
          DEFAULT: "#f3f4f6",  // Icon color (dark teal) for both modes
          dark: "#f3f4f6",  // Icon color (dark teal) for both modes
        }
      },
    },
  },
  plugins: [],
};
