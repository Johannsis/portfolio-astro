import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import UnoCSS from 'unocss/astro';

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	experimental: {
		queuedRendering: {
			enabled: true,
		},
		rustCompiler: true,
	},
	fonts: [
		{
			cssVariable: '--font-montserrat',
			display: 'swap',
			name: 'Montserrat',
			provider: fontProviders.google(),
			weights: [300, 400, 500, 600, 700],
		},
	],
	integrations: [
		UnoCSS(),
		sitemap({
			changefreq: 'yearly',
			lastmod: new Date(),
			priority: 1,
		}),
	],
	markdown: {
		syntaxHighlight: 'prism',
	},
	security: {
		csp: {
			algorithm: 'SHA-512',
			directives: ["default-src 'self'"],
			scriptDirective: {
				resources: ["'self'"],
				strictDynamic: false,
			},
			styleDirective: {
				hashes: ['sha256-Yr0h/iwIuglsEgZPNO9J3lgYRyLvgYPx9+n6yRedyqs='],
				resources: ["'self'", "'unsafe-hashes'"],
			},
		},
	},
	site: 'https://johannsis.github.io/portfolio-astro',
});
