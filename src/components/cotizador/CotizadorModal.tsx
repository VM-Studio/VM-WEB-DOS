'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function CotizadorModal() {
  // Bloquear scroll mientras el modal está visible
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    /* Overlay: fondo blury que cubre toda la pantalla */
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.45)' }}
    >
      {/* Tarjeta */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center text-center gap-6">
        {/* Ícono decorativo */}
        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-3xl">
          🛠️
        </div>

        {/* Título */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            El cotizador está en funcionamiento...
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Si necesitás asesoría o calcular el presupuesto de tu proyecto,
            no dudes en consultarnos. ¡Estamos para ayudarte!
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <a
            href="https://wa.me/541124508191"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-3 px-5 rounded-xl transition-colors"
          >
            {/* WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.57a.75.75 0 00.918.919l5.77-1.46A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.952-1.355l-.355-.212-3.673.929.957-3.584-.231-.369A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            WhatsApp
          </a>

          <Link
            href="/contacto"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium py-3 px-5 rounded-xl transition-colors"
          >
            {/* Envelope icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
            </svg>
            Formulario de contacto
          </Link>
        </div>
      </div>
    </div>
  )
}
