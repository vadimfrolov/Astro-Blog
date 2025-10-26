// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://vadimfrolov.github.io',
	base: '/Astro-Blog',
	integrations: [mdx(), sitemap()],
	experimental: {
		// Better developer experience with content collections
		contentIntellisense: true,
		// Chrome DevTools workspace integration for live editing
		chromeDevtoolsWorkspace: true,
		// Preserve script order for better performance
		preserveScriptOrder: true,
		// GitHub-compatible heading IDs
		headingIdCompat: true,
	},
});
