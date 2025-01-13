import { resolve } from 'path'
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts'
import svgr from "vite-plugin-svgr";
export default defineConfig({
    build: {
        lib: {
            entry: [resolve(__dirname, './src/index.ts')],
            name: 'toast',
            fileName: (format) => `toast.${format}.js`,
          },
    },
    plugins: [
        dts(),
        svgr()
      ]
  })
