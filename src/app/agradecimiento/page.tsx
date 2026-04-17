import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import GoogleAdsConversion from '../../components/GoogleAdsConversion'

export const metadata: Metadata = {
  title: 'Gracias por contactarnos — VM Studio',
  description: 'Recibimos tu mensaje. Nos ponemos en contacto a la brevedad.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vmstudioweb.online/agradecimiento' },
}

export default function AgradecimientoPage() {
  return (
    <>
      {/* Google Ads conversion event — fires on mount, no visible UI */}
      <GoogleAdsConversion />
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">

          {/* Checkmark */}
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl text-green-600 font-light">✓</span>
          </div>

          {/* Label */}
          <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
            [ MENSAJE RECIBIDO ]
          </span>

          {/* Heading */}
          <h1 className="mt-4 text-[clamp(2rem,8vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] mb-4 text-black">
            ¡Gracias por{' '}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              contactarnos!
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-xl mx-auto mb-10 sm:mb-12">
            Recibimos tu mensaje y nos ponemos en contacto a la brevedad.
            <span className="block mt-2 text-sm">En menos de 24 horas hábiles te respondemos.</span>
          </p>

          {/* CTA back to home */}
          <Link
            href="/"
            className="inline-block px-8 sm:px-12 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-[0.98]"
          >
            VOLVER AL INICIO
          </Link>

        </div>
      </section>

      <Footer />
    </>
  )
}
