'use client'

import { useState } from 'react'

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

interface Props {
  nombre: string
  email: string
  total: number
  tiempoEstimado: string
  pdfUrl: string
  presupuestoNumber: string
  onReset: () => void
}

export default function ResultadoCotizacion({ nombre, email, total, tiempoEstimado, pdfUrl, presupuestoNumber, onReset }: Props) {
  const [quiereContacto, setQuiereContacto] = useState<'si' | 'no' | null>(null)
  const [medioContacto, setMedioContacto] = useState<string>('')

  const fmt = (n: number) => `$${n.toLocaleString('es-AR')} ARS`
  const waText = encodeURIComponent(`Hola! Acabo de generar el presupuesto ${presupuestoNumber} en vmstudioweb.online y quiero más información`)
  const waUrl = `https://wa.me/541124508191?text=${waText}`
  const pdfFullUrl = pdfUrl.startsWith('http') ? pdfUrl : `https://app.vmstudioweb.online${pdfUrl}`

  return (
    <div className="bg-white p-6 sm:p-8 shadow-sm text-center">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl text-green-600 font-light">✓</span>
      </div>
      <h2 className="text-2xl font-light text-gray-900 mb-1">¡Tu presupuesto está listo!</h2>
      <p className="text-sm text-gray-500 mb-8">Hola <strong>{nombre}</strong>, este es el precio de tu proyecto.</p>

      <div className="bg-[#0F172A] p-6 mb-3">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">El precio de tu proyecto es</p>
        <p className="text-3xl font-light text-white">{fmt(total)}</p>
      </div>
      <div className="bg-green-50 border border-green-100 px-4 py-3 mb-6 text-center">
        <p className="text-xs text-green-700 font-medium">✓ Precio fijo garantizado — sin costos adicionales.</p>
      </div>

      {/* Sección de contacto adicional */}
      <div className="border border-gray-200 p-5 mb-6 text-left">
        <p className="text-sm font-medium text-gray-800 mb-4">¿Querés que te contactemos para más asesoramiento?</p>
        <div className="flex gap-3 mb-4">
          {[
            { val: 'si' as const, label: 'Sí, me interesa' },
            { val: 'no' as const, label: 'No por ahora' },
          ].map(o => (
            <button
              key={o.val}
              onClick={() => { setQuiereContacto(o.val); setMedioContacto('') }}
              className={`flex-1 py-2.5 text-sm border transition-all
                ${quiereContacto === o.val
                  ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
            >
              {o.label}
            </button>
          ))}
        </div>

        {quiereContacto === 'si' && (
          <div>
            <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Por qué medio preferís que te contactemos?</p>
            <div className="flex gap-3">
              {[
                { id: 'whatsapp', label: 'WhatsApp' },
                { id: 'email', label: 'Email' },
                { id: 'llamada', label: 'Llamada' },
              ].map(o => (
                <button
                  key={o.id}
                  onClick={() => setMedioContacto(o.id)}
                  className={`flex-1 py-2.5 text-sm border transition-all
                    ${medioContacto === o.id
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
            {medioContacto && (
              <p className="text-xs text-green-700 bg-green-50 border border-green-100 px-3 py-2 mt-3">
                ✓ Perfecto, ¡nos comunicamos por <strong>{medioContacto === 'whatsapp' ? 'WhatsApp' : medioContacto === 'email' ? 'Email' : 'llamada'}</strong> a la brevedad!
              </p>
            )}
          </div>
        )}

        {quiereContacto === 'no' && (
          <p className="text-xs text-gray-500">
            ¡Está bien! Si en algún momento cambiás de opinión, podés escribirnos por WhatsApp.
          </p>
        )}
      </div>

      <div className="bg-gray-50 p-4 mb-6 text-left">
        <p className="text-sm text-gray-600"><strong>Tiempo de entrega:</strong> {tiempoEstimado}</p>
      </div>

      <p className="text-xs text-gray-400 mb-6">
        Te enviamos el presupuesto a <strong>{email}</strong>. Revisá también tu carpeta de spam.
      </p>

      <div className="space-y-3">
        <a href={pdfFullUrl} target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity">
          DESCARGAR PRESUPUESTO PDF
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
          className="w-full flex items-center justify-center gap-2 py-3.5 border border-gray-300 text-gray-700 text-sm font-medium tracking-widest uppercase hover:bg-gray-50 transition-colors">
          HABLAR POR WHATSAPP
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Nuestro equipo te contactará en menos de 24 horas hábiles.
      </p>

      <button onClick={onReset} className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline transition-colors">
        Hacer otra cotización
      </button>
    </div>
  )
}
