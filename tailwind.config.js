/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
