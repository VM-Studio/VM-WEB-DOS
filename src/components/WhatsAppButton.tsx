'use client';

import Image from 'next/image';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: any;
  }
}

function trackWhatsApp() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contacto',
      event_label: 'whatsapp',
    });
    window.gtag('event', 'conversion', {
      send_to: 'AW-18011718561',
    });
  }
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact');
  }
}

/**
 * WhatsAppButton — floating WhatsApp button rendered globally via layout.tsx.
 * Client Component so it can fire gtag tracking events on click.
 */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/541124508191"
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsApp}
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" width={56} height={56} />
    </a>
  );
}
