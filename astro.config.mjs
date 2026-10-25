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
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
