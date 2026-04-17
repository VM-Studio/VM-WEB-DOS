'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * GTMPageView — notifica a GTM cada vez que cambia la ruta en el App Router.
 * Next.js 15 con App Router es una SPA: sin este componente, GTM solo
 * registra la primera página que carga y no detecta navegaciones posteriores.
 * Este componente no renderiza ningún elemento visual.
 */
export default function GTMPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
