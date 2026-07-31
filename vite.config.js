import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // vite-react-ssg pre-rendering options
  ssgOptions: {
    // Render pages one at a time — parallel workers exhausted memory.
    concurrency: 1,
    // Skip critical-CSS inlining (memory heavy and unnecessary here).
    beastiesOptions: false,
    dirStyle: 'nested',
    formatting: 'none',
  },

  build: {
    // esbuild minify is lighter than terser for the SSR + client double build.
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Split the heavy animation lib out of the critical bundle (client only).
        manualChunks(id, { getModuleInfo }) {
          if (id.includes('node_modules/framer-motion')) return 'motion'
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react'
          }
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
