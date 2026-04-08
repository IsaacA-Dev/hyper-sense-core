// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Tu dominio real ahora
  site: 'https://isaaca-dev.me',

  // IMPORTANTE: Cambia esto a '/' para que las rutas sean relativas a la raíz
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  }
});