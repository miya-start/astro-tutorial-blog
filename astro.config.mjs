import preact from '@astrojs/preact'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-tutorial-blog-0.netlify.app/',
  integrations: [preact()],
})
