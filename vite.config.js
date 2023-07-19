import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/Plugin.js",
      formats: ["es", "cjs"],
      name: "@alidogu/react-grid",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue", 'pinia'],
      output: {
        globals: {
          vue: "Vue",
          pinia: 'pinia',
        },
      },
    },
  },
})
