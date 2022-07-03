/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [ './src/**/*.{html,js}', '/src/index.html' ],
	theme: {
		extend: {
			color: {
				color1: '#f46868',
				color2: '#fca8a0',
				color3: '#7b0909',
				color4: '#8e0a0a',
				color5: '#941104'
			}
		},
		spacing: {
			'1': '8px',
			'2': '12px',
			'3': '16px',
			'4': '24px',
			'5': '32px',
			'6': '48px'
		}
	},
	plugins: []
};
