'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CotizadorModal() {
  const router = useRouter()

  // Bloquear scroll mientras el modal está visible
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    /* Overlay: fondo blury que cubre toda la pantalla */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(0,0,0,0.40)',
      }}
    >
      {/* Tarjeta — misma estética que el resto de la web: cuadrada, sin border-radius, sombra sutil */}
      <div className="bg-white shadow-xl max-w-md w-full p-10 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
          [ COTIZADOR ]
        </p>

        {/* Título */}
        <h2 className="text-2xl font-light text-gray-900 mb-3">
          El cotizador está en{' '}
          <strong className="font-semibold">funcionamiento...</strong>
        </h2>

        {/* Bajada */}
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          Si necesitás asesoría o calcular el presupuesto de tu proyecto,
          no dudes en consultarnos.
        </p>

        {/* Botones principales — estilo igual al CotizadorWizard */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mb-5">
          <a
            href="https://wa.me/541124508191"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-xs font-medium tracking-widest uppercase px-6 py-3 hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>

          <Link
            href="/contacto"
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-gray-50 transition-colors"
          >
            Formulario de contacto
          </Link>
        </div>

        {/* Volver atrás */}
        <button
          onClick={() => router.back()}
          className="text-xs text-gray-400 hover:text-gray-600 tracking-wider uppercase transition-colors"
        >
          ← Volver atrás
        </button>
      </div>
    </div>
  )
}
