import { resolve } from 'path'
import {defineConfig} from 'vite';
import svgr from "vite-plugin-svgr";
export default defineConfig({
    build: {
        lib: {
            entry: [resolve(__dirname, './docs/index.ts')],
            name: 'toast',
            fileName: (_) => `demo.js`,
            formats: ['iife'],
          },
          outDir: 'docs/dist',
          minify: true,
    },
    plugins: [
        svgr()
      ]
  })
