module.exports = {
	prefix: "",
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: ["./src/**/*.{html,ts}"]
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {
    colors:  {
      primary: '#ff6538',
      black: '#000',
      "black-50": 'rgba(0, 0, 0, .5)',
      "black-40": 'rgba(0, 0, 0, .4)',
      "black-30": 'rgba(0, 0, 0, .3)',
      "black-20": 'rgba(0, 0, 0, .2)',
      "black-10": 'rgba(0, 0, 0, .1)',
      "white-50": 'rgba(255, 255, 255, .5)',
      "white-40": 'rgba(255, 255, 255, .4)',
      "white-30": 'rgba(255, 255, 255, .3)',
      "white-20": 'rgba(255, 255, 255, .2)',
      "white-10": 'rgba(255, 255, 255, .1)',
      white: '#fff',
      whitesmoke: 'whitesmoke'
    },
		extend: {
      height: function (theme) {
        return {
          "160": "40rem",
          "screen-42": "42vh",
          "screen-63": "63vh",
          "screen-80": "80vh",
          "screen/2": "50vh",
          "screen/3": "calc(100vh / 3)",
          "screen/4": "calc(100vh / 4)",
          "screen/5": "calc(100vh / 5)",
        }
      },
      width: function (theme) {
        return {
          "160": "40rem",
          "70-percent": "70%",
          "65-percent": "65%",
          "60-percent": "60%",
          "screen/2": "50vw",
          "screen/2-spacing-10": "calc(50vw - 10px)",
          "screen/2-spacing-15": "calc(50vw - 15px)",
          "screen/2-spacing-20": "calc(50vw - 20px)",
          "screen/2-spacing-30": "calc(50vw - 30px)",
          "screen/3": "calc(100vw / 3)",
          "screen/3-spacing-12": "calc((100vw / 3) - 12px)",
          "screen/3-spacing-50": "calc((100vw / 3) - 50px)",
          "screen/3-spacing-40": "calc((100vw / 3) - 40px)",
          "screen/4": "calc(100vw / 4)",
          "screen/5": "calc(100vw / 5)",
          "screen/5-spacing-20": "calc((100vw / 5) - 20px)",
          "screen/5-spacing-30": "calc((100vw / 5) - 30px)",
          "screen/7-spacing-30": "calc((100vw / 7) - 30px)",
          "screen/9-spacing-30": "calc((100vw / 9) - 30px)"
        }
      },
      backgroundImage: {
        'banner-image': "url('/assets/banner/1.webp')",
        'promo-banner-image': "url('/assets/banner/2.webp')",
        'about-banner-image': "url('/assets/banner/3.webp')"
      }
    }
	},
	variants: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
