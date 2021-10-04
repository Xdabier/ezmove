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
      white: '#fff'
    },
		extend: {
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
	},
	variants: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
