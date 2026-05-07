import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	devToolbar: {
		enabled: false
	},
	experimental: {
		queuedRendering: {
			enabled: true
		},
		rustCompiler: true
	},
	fonts: [
		{
			cssVariable: '--font-montserrat',
			display: 'swap',
			name: 'Montserrat',
			provider: fontProviders.google(),
			weights: [300, 400, 500, 600, 700]
		}
	],
	integrations: [
		sitemap({
			changefreq: 'yearly',
			lastmod: new Date(),
			priority: 1
		})
	],
	security: {
		csp: true
	},
	site: 'https://johannsis.github.io/portfolio'
});
