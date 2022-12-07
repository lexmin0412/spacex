import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
	base: '/spacex/',
	server: {
		port: 5210,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './', 'src'),
		}
	},
})
