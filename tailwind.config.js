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
        164: "164%",
        170: "170%",
      },
      colors: {
        "blue": "#33B6FF",
        "grey": "#FFFFFF1A",
        "rich-white": "#FCFCFC",
        "rich-grey": "#626262",
      },
      fontSize: {
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
