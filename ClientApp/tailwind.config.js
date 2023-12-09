/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'discord-500': "#110d0f",
        'discord-400': "#1c1d20",
        'discord-300': "#27272d",
        'discord-200': "#2d2d33",
        'discord-100': "#37363f"
      }
    },
  },
  plugins: [],
}
