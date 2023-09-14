import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      configFile: 'svelte.config.js',
      compilerOptions: {
        name: 'name',
        // filename: "gros_nom_filename",
        immutable: true,
        cssHash: ({ hash, css, name, filename }) =>
          `prefix-${hash(name + Math.random().toString())}`,
      },
    }),
  ],
  root: './',
  build: {
    target: 'modules',
    outDir: 'vite-outdir',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'false',
    write: true,
    copyPublicDir: true,
    rollupOptions: {
      plugins: [
      ],
      input: {
        central: './app/index.html',
      },
      output: {
        dir: 'svelte-public',
        entryFileNames: 'main-[name].js',
        inlineDynamicImports: false,
        name: 'MyBundle',
        freeze: true,
      },
    },
  },
});
