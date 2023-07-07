import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { removeDoctype } from './npm-scripts/astro/removeDoctype.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    {
      name: 'replaceTags',
      hooks: {
        'astro:build:done': (options) => {
          removeDoctype(options)
        },
      },
    },
  ],
  // base: '/custom-tags',
})
