/**
 * Resuelve una ruta absoluta del proyecto para que incluya el BASE_URL 
 * configurado en astro.config.mjs.
 */
export const resolvePath = (path: string) => {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "");
	
	if (path.startsWith('http') || path.startsWith('#')) return path;
	
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	return `${base}${cleanPath}`;
};
