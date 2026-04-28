// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for absolute URLs in OG meta tags and the sitemap.
  site: 'https://bhlonggul.vercel.app',
  integrations: [sitemap()],
});
