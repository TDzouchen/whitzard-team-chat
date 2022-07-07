import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// @ts-ignore
const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), monacoEditorPlugin({ publicPath: isProd ? "./monaco" : "" })],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         jsonWorker: [`${prefix}/language/json/json.worker`],
  //         cssWorker: [`${prefix}/language/css/css.worker`],
  //         htmlWorker: [`${prefix}/language/html/html.worker`],
  //         tsWorker: [`${prefix}/language/typescript/ts.worker`],
  //         editorWorker: [`${prefix}/editor/editor.worker`],
  //       }
  //     }
  //   }
  // }
})
