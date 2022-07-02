/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [ './src/**/*.{html,js}', '/src/index.html' ],
	theme: {
		extend: {
			color: {
				laranja: '#f44336'
			}
		}
	},
	plugins: []
};
