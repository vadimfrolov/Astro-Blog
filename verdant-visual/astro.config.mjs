// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://vadimfrolov.github.io',
	base: '/Astro-Blog',
	integrations: [mdx(), sitemap()],
	// Prefetch links as they scroll into view so navigation feels instant
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
	// Keep HTML-aware whitespace handling (Astro 7 defaults to 'jsx')
	compressHTML: true,
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
	},
	experimental: {
		// Better developer experience with content collections
		contentIntellisense: true,
		// Chrome DevTools workspace integration for live editing
		chromeDevtoolsWorkspace: true,
	},
});
