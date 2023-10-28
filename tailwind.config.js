/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF3811",

          secondary: "#151515",

          accent: "#1dcdbc",

          neutral: "#2b3440",

          "base-100": "#ffffff",

          "base-200": "#F3F3F3",

          "base-300": "#444",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
