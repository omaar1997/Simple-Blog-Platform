/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["RobotoRegular", "Segoe UI", "sans-serif"],
        mainBold: ["RobotoBold", "Segoe UI", "sans-serif"],
      },
      backdropBlur: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [
    flowbite, 
    lineClamp,
    // Add the built-in backdrop plugin explicitly
    function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-sm': {
          'backdrop-filter': 'blur(4px)',
        },
        '.backdrop-blur': {
          'backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(12px)',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(16px)',
        },
        '.backdrop-blur-xl': {
          'backdrop-filter': 'blur(24px)',
        },
        '.backdrop-blur-2xl': {
          'backdrop-filter': 'blur(40px)',
        },
        '.backdrop-blur-3xl': {
          'backdrop-filter': 'blur(64px)',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    }
  ],
};