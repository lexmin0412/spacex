/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
			lineHeight: {
				'16': '4rem',
			},
			padding: {
				'100px': '25rem'
			},
			fontSize: {
				'24px': '6rem'
			}
		},
  },
  plugins: [],
}
