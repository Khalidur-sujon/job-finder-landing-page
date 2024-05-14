/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sections/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		// screens: {
		// 	xs: { min: "475px", max: "639px" },
		// 	sm: { min: "640px", max: "767px" },
		// 	md: { min: "768px", max: "1023px" },
		// 	lg: { min: "1024px", max: "1279px" },
		// 	xl: { min: "1280px", max: "1535px" },
		// 	"2xl": { min: "1536px" },
		// },
		screens: {
			xs: "475px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				"primary-white": "#FFFFFF",
				"secondary-white": "#909090",
				"primary-black": "#000000",
				"secondary-black": "#161815",
				"secondary-black-light": "#1E201D",
				"primary-green": "#6DE754",
				"secondary-green": "#1F392C",
			},
		},
	},
	plugins: [],
};
