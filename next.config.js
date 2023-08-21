/** @type {import('next').NextConfig} */

const API_URL = 'http://127.0.0.1:8000'

module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:8000/api/:path*',
			},
		]
	},
}