import { resolve } from 'path'
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts'
import svgr from "vite-plugin-svgr";
export default defineConfig({
    build: {
        lib: {
            entry: [resolve(__dirname, './example/index.ts')],
            name: 'toast',
            fileName: (format) => `example.js`,
            formats: ['iife'],
          },
          outDir: 'example/dist',
          minify: true,
    },
    plugins: [
        svgr()
      ]
  })
