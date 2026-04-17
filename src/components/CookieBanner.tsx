'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const CONSENT_KEY = 'vm_cookie_consent';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushConsentEvent(event: 'cookie_consent_accepted' | 'cookie_consent_rejected') {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function CookieBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const acceptBtnRef = useRef<HTMLButtonElement>(null);

  // On mount: check localStorage for existing consent
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (saved === 'accepted') {
        // Already accepted — notify GTM immediately so tags can fire
        pushConsentEvent('cookie_consent_accepted');
        setVisible(false);
      } else if (saved === 'rejected') {
        // Already rejected — notify GTM and keep banner hidden
        pushConsentEvent('cookie_consent_rejected');
        setVisible(false);
      } else {
        // No decision yet — show banner
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (private mode edge case) — show banner
      setVisible(true);
    }
  }, []);

  // Move focus to Accept button when banner appears (accessibility)
  useEffect(() => {
    if (visible) {
      acceptBtnRef.current?.focus();
    }
  }, [visible]);

  // Don't show on conversion page — avoid interrupting the thank-you experience
  if (pathname === '/agradecimiento') return null;

  if (!visible) return null;

  function handleAccept() {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch { /* ignore */ }
    pushConsentEvent('cookie_consent_accepted');
    setVisible(false);
  }

  function handleReject() {
    try {
      localStorage.setItem(CONSENT_KEY, 'rejected');
    } catch { /* ignore */ }
    pushConsentEvent('cookie_consent_rejected');
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-2xl"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

          {/* Text */}
          <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">
            Usamos cookies propias y de terceros para analizar el tráfico y mostrarte publicidad relevante.{' '}
            Podés aceptar, rechazar o conocer más en nuestra{' '}
            <Link
              href="/politica-de-privacidad"
              className="text-blue-600 hover:underline font-medium"
            >
              Política de Privacidad
            </Link>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 flex-shrink-0">
            {/* Secondary — Reject */}
            <button
              type="button"
              onClick={handleReject}
              aria-label="Rechazar cookies de seguimiento"
              className="
                px-5 py-2.5
                border border-gray-200
                text-gray-600
                text-sm font-medium tracking-wider
                hover:border-gray-400 hover:text-gray-900
                transition-all duration-200
                min-h-[44px]
              "
            >
              RECHAZAR
            </button>

            {/* Primary — Accept */}
            <button
              ref={acceptBtnRef}
              type="button"
              onClick={handleAccept}
              aria-label="Aceptar todas las cookies"
              className="
                px-5 py-2.5
                bg-gradient-to-r from-gray-900 to-blue-700
                text-white
                text-sm font-medium tracking-wider
                hover:opacity-90
                transition-all duration-200
                min-h-[44px]
              "
            >
              ACEPTAR COOKIES
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
