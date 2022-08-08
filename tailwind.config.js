const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
      },
      backgroundImage: {
        selectUrun: "url( https://i.hizliresim.com/tql0lcu.png)",
        selectBayi: "url(https://i.hizliresim.com/kydvx2v.jpg)",
        selectProje: "url(https://i.hizliresim.com/5c6f6qj.jpg)",
        footer:"linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('https://i.hizliresim.com/6hv6czz.jpg')"
        
        
      },
    },

    animation: {
      wiggle: "wiggle 3s ease-in-out",
    },
    keyframes: {
      wiggle: {
        "0%": {
          transform: "rotateY(0deg)",
          transformStyle: "preserve-3d",
          perspective: "1000px",
          backfaceVisibility: "hidden",
        },
        "100%": {
          transform: "rotateY(0deg)",
          transformStyle: "preserve-3d",
          perspective: "1000px",
          backfaceVisibility: "hidden",
        },
      },
    },
  },
  backgroundImage: (theme) => ({
    bghome:
      "linear-gradient(75deg, rgba(251,91,15,1) 32%, rgba(17,17,17,1) 0%)",
    bgcontact:
      "linear-gradient(110deg, rgba(17,17,17,1) 58%, rgba(251,91,15,1) 58%)",
    bgprojects:
      "linear-gradient(35deg,rgba(17,17,17,0.7) 10%,rgba(251,91,15,0.7)  90%)",
    bgskills:
      "linear-gradient(35deg,rgba(0,0,170,0.55) 20%, rgba(0,0,220,0.25) 40%)",
    freeBg:
      "url('https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg')",
    mobilBg:
      "url('https://content-tooling.spotifycdn.com/images/af63e367-ad10-4063-a8e2-5a50ae2a4b28_lie_circles-mobile.svg')",
    servicesBg: "url('https://i.hizliresim.com/t1vqh8n.jpg')",

    "contact-form-bg": "url('https://i.hizliresim.com/roswz0t.png')",
  }),
  plugins: [],
};
