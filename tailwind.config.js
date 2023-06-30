/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
      integral: ["integral", "sans-serif"],
      "dm-sans": ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "img-1": "url('/public/img-1.png')",
        "img-2": "url('/public/img-2.png')",
        "img-3": "url('/public/img-3.png')",
        "img-main-1": "url('/public/top-main.png')",
      },

    },
  },
  plugins: [require("flowbite/plugin")],
  plugins: [require("daisyui")],
};
