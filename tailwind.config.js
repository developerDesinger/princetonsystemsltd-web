/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ['"General Sans"', 'sans-serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        motionYellow: '#ffc506',
      }
    },
  },
  plugins: [],
}
