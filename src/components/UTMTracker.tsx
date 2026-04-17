'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function UTMTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const utmParams = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ]

    const captured: Record<string, string> = {}
    let hasUtm = false

    utmParams.forEach(param => {
      const value = searchParams.get(param)
      if (value) {
        captured[param] = value
        hasUtm = true
      }
    })

    if (hasUtm) {
      sessionStorage.setItem('utm_data', JSON.stringify(captured))

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'utm_captured', {
          ...captured,
        })
      }
    }
  }, [searchParams])

  return null
}
