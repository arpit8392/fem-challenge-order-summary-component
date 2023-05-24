/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-red-hat-display)'],
			},
			backgroundImage: {
				desktop: "url('/images/pattern-background-desktop.svg')",
				mobile: "url('/images/pattern-background-mobile.svg')",
			},
			colors: {
				paleBlue: '#E0E8ff',
				brightBlue: '#766CF1',
				lightPaleBlue: '#F7F9FF',
				desaturatedBlue: '#717FA6',
				darkBlue: '#1F2E55',
				ctaBlue: '#382AE1'
			},
		},
	},
	plugins: [],
}
