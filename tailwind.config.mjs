/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}

module.exports = {
	theme: {
	  extend: {
		fontFamily: {
		  'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
		}
	  }
	},
	variants: {},
	plugins: [],
  }
