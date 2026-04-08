import type { CloudinaryConfig } from '../types/config';

/**
 * Genera una URL de Cloudinary con transformaciones optimizadas.
 */
export function getCloudinaryUrl(
  publicId: string, 
  config?: CloudinaryConfig, 
  transform: string = 'c_fill,g_auto'
): string {
  if (!config) return publicId; // Si no hay config, devolvemos el publicId (asumiendo que es una URL local o externa)

  const { cloudName, folder } = config;
  const path = folder ? `${folder}/${publicId}` : publicId;
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${path}`;
}
