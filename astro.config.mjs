// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://lewisw.net",
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Light and dark code themes follow the reader's system setting.
			themes: { light: "github-light", dark: "github-dark" },
		},
	},
	// Keep the whitespace handling Astro used before v7. The newer "jsx" mode
	// drops spaces between elements on separate lines (e.g. "posts or" -> "postsor").
	compressHTML: true,
	// The site is fully static, so it needs neither sessions (Cloudflare KV)
	// nor on-demand image processing (Cloudflare Images).
	session: false,
	adapter: cloudflare({
		imageService: "passthrough",
	}),
});
