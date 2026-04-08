import { siteConfig as hyperSenseConfig } from '../data/tenants/hyper-sense';
import { siteConfig as nebulaPulseConfig } from '../data/tenants/nebula-pulse';
import type { SiteConfig } from '../types/config';

// Mapa de inquilinos (Tenants)
const TENANTS: Record<string, SiteConfig> = {
  'hyper-sense': hyperSenseConfig as SiteConfig,
  'nebula-pulse': nebulaPulseConfig as SiteConfig,
};


/**
 * Resuelve la configuración del sitio basada en una variable de entorno.
 * En un monorepo, cada despliegue pasará su TENANT_ID.
 */
export function getSiteConfig(): SiteConfig {
  const tenantId = import.meta.env.PUBLIC_TENANT_ID || 'hyper-sense';
  
  const config = TENANTS[tenantId];
  
  if (!config) {
    console.warn(`Tenant "${tenantId}" not found. Falling back to hyper-sense.`);
    return hyperSenseConfig as SiteConfig;
  }
  
  return config;
}
