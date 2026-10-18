import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arshnoor-singh.github.io',
  base: '/Portfolio',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
