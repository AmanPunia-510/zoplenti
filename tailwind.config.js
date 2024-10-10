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
        115: "115%",
        125: "125%",
        170: "170%",
        177: "177%",
        142: "144%",
        144: "144%",
        150: "150%",
        160: "160%",
      },
      backgroundColor: {
        "timelineBg": "#040A26",
      },
      colors: {
        "grey": "#FFFFFF1A",
        "rich-white": "#FCFCFC",
        "rich-grey": "#626262",
        "black-pearl": "#000C24",
        "curious-blue": "#2A95D7",
        "picton-blue": "#33B6FF",
        platinum: "#E0E0E0",
        "midnight-moss": "#020202",
        "bright-grey": "#333D50",
        "navy-blue": "#051D39",
      },
      backgroundImage: {
        timelineGradient: "linear-gradient(180deg, #33B6FF -1.9%, rgba(51, 182, 255, 0.52) 58.18%, rgba(11, 6, 42, 0) 100%)",
        iconGradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        borderGradient: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        hero: "url(../../public/assets/images/png/hero.png)",
        verticleBorder: "linear-gradient(90deg, #000C24 0%, #33B6FF 10%, #33B6FF 90%, #000C24 100%)",
      },
      fontSize: {
        "custom-3xl": "28px",
        "custom-xl": "30px",
        "custom-5xl": "56px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
    },
  },
  plugins: [],
};

