// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // La URL base de tu perfil de GitHub
  site: 'https://isaaca-dev.github.io',

  // El nombre exacto de la carpeta/repositorio de este nuevo proyecto
  base: '/hyper-sense-core',

  vite: {
    plugins: [tailwindcss()]
  }
});