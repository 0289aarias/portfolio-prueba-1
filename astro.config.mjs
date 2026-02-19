// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-prueba-1.github.io',
  base: '/0289aarias',
  adapter: edgeoneAdapter(),
  output: 'static',
  integrations: [react()]
});
