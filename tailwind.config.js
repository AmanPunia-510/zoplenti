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
        90: "90%",
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
        timelineBg: "#040A26",
      },
      colors: {
        grey: "#FFFFFF1A",
        "rich-white": "#FCFCFC;",
        "bg-color": "#000c24",
        "rich-white": "#FCFCFC",
        "rich-grey": "#626262",
        "black-pearl": "#000C24",
        "curious-blue": "#2A95D7",
        "picton-blue": "#33B6FF",
        platinum: "#E0E0E0",
        "midnight-moss": "#020202",
        "bright-grey": "#333D50",
        "navy-blue": "#051D39",
        "core-value": "#132E50",
        "core-svg": "#081735",
        "seller-svg": "#0B2041",
      },
      dropShadow: {
        "core-text": "0px 2px 0px #33B6FF",
      },
      boxShadow: {
        "core-bottom": "0px 4px 0px 0px #33B6FF",
      },
      backgroundImage: {
        timelineGradient:
          "linear-gradient(180deg, #33B6FF -1.9%, rgba(51, 182, 255, 0.52) 58.18%, rgba(11, 6, 42, 0) 100%)",
        iconGradient:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        borderGradient:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        hero: "url(../../public/assets/images/png/hero.png)",
        verticleBorder:
          "linear-gradient(101deg, #000C24 0%, #33B6FF 10%, #33B6FF 90%, #000C24 100%)",
        topSeller:
          "linear-gradient(126.46deg, rgba(51, 182, 255, 0) 22.44%, rgba(51, 182, 255, 0.4) 107.08%)",
        sellerBox:
          "linear-gradient(127.82deg, rgba(51, 182, 255, 0.1) -17.21%, rgba(51, 182, 255, 0) 79.1%)",
      },
      fontSize: {
        "custom-3xl": "28px",
        "custom-xl": "30px",
        "custom-3sxl": "32px",
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
