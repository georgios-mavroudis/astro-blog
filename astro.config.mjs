import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  adapter: netlify({
    edgeMiddleware: true,
  }),
  redirects: {
    '/old-page': '/about'
  },
  output: 'hybrid'
});