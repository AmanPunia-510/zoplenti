/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        130: "130%",
        133: "133%",
        143: "143%",
        170: "170%",
      },
      colors: {
        "blue": "#33B6FF",
        "grey": "#FFFFFF1A",
        "rich-white": "#FCFCFC;"
      },
      backgroundImage: {
        timelineGradient: "linear-gradient(180deg, #33B6FF -1.9%, rgba(51, 182, 255, 0.52) 58.18%, rgba(11, 6, 42, 0) 100%)",
        iconGradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        borderGradient: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
      },
      fontSize: {
        "custom-lg": "28px",
        "custom-xl": "30px",
        "custom-2xl": "56px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
      backgroundImage: {
        hero: "url(../../public/assets/images/png/hero.png)",
      }
    },
  },
  plugins: [],
};
