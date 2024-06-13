/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",  // media - 브라우저의 설정을 따라감, class - 브라우저 설정과 상관없이 모드를 토글해야 함
  plugins: [],
}