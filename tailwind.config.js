/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				heather: "#ECEDEE",
				stone: "#464B4C",
				"dark-stone": "#6E7274",
				bronze: "#CCA48A",
				gold: "#DFD5B0",
				"yellow-gold": "#E9DFBA",
				"soft-yellow": "#FFF6D7",
				dark: {
					box: {
						1: "#24292A",
						2: "#232829",
						3: "#202526",
						4: "#1D2223",
						5: "#202526",
					},
					darkest: "#202426",
					gallery: "#1D2021",
				},
			},
			fontFamily: {
				"novecento-wide": "novecento-sans-wide, sans-serif",
				novecento: "novecento-sans, sans-serif",
				avenir: "Avenir Next, sans-serif",
				nova: "Nova Cut, cursive",
			},
			animation: {
				slidefade: "slidefade 1s ease-out",
				'delayed-opacity-in': "fadein-opacity 1s ease-in 1400ms",
				'delayed-opacity-out': "fadeout-opacity 1s ease-out 1200ms",
				'sudden-flex-reveal': "flex-reveal 1s linear 1400ms",
				'sudden-flex-hide': "flex-hide 1s linear 1200ms"
			},
			keyframes: {
				slidefade: {
					"0%": { opacity: "0" },
					"1%": { opacity: "1" },
					"35%": { transform: "translateY(0)" },
					"90%": { opacity: "0" },
					"100%": { opacity: "0", transform: "translateY(-100%)" },
				},
				'fadeout-opacity': {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				'fadein-opacity': {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				'flex-reveal': {
					"0%": { display: "hidden" },
					"99%":  { display: "hidden" },
					"100%": { display: "flex" },
				},
				'flex-hide': {
					"0%": { display: "flex" },
					"99%":  { display: "flex" },
					"100%": { display: "hidden" },
				},
			},
		},
	},
	plugins: [],
};
