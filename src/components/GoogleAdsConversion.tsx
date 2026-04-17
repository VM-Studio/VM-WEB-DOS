'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: any;
  }
}

/**
 * GoogleAdsConversion — fires the Google Ads conversion event on mount.
 * Used on /agradecimiento to track form submission conversions.
 * Renders no visible UI.
 */
export default function GoogleAdsConversion() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18011718561',
      });
    }
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
  }, []);

  return null;
}
