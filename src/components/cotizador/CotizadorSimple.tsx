'use client'

import { useState } from 'react'

/* ── Servicios ─────────────────────────────────────────────── */
const services = [
  {
    id: 'web-basica',
    label: 'Web Básica',
    description: 'Presencia online profesional, rápida y económica.',
    pdf: '/flyer-web-basica.pdf',
  },
  {
    id: 'web-profesional',
    label: 'Web Profesional',
    description: 'Diseño a medida, SEO y funcionalidades avanzadas.',
    pdf: '/flyer-web-profesional.pdf',
  },
  {
    id: 'landing',
    label: 'Landing Page',
    description: 'Página orientada a conversión para campañas y ventas.',
    pdf: '/flyer-landing.pdf',
  },
  {
    id: 'app-mobile',
    label: 'App Mobile',
    description: 'Aplicación nativa o híbrida para iOS y Android.',
    pdf: '/flyer-app-mobile.pdf',
  },
  {
    id: 'app-web',
    label: 'App Web',
    description: 'Plataforma web interactiva accesible desde cualquier dispositivo.',
    pdf: '/flyer-app-web.pdf',
  },
  {
    id: 'sistema-gestion',
    label: 'Sistema de Gestión',
    description: 'Software interno para gestionar tu negocio o empresa.',
    pdf: '/flyer-sistema-gestion.pdf',
  },
  {
    id: 'tienda-online',
    label: 'Tienda Online (E-Commerce)',
    description: 'Vendé tus productos en línea con carrito, pagos y gestión de stock.',
    pdf: '/flyer-tienda-online.pdf',
  },
]

/* ── Tipos ─────────────────────────────────────────────────── */
interface FormData {
  name: string
  email: string
  phone: string
  wantsContact: 'si' | 'no' | ''
  contactMethod: 'email' | 'whatsapp' | ''
}

const emptyForm: FormData = {
  name: '',
  email: '',
  phone: '',
  wantsContact: '',
  contactMethod: '',
}

/* ── Componente ────────────────────────────────────────────── */
export default function CotizadorSimple() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedService, setSelectedService] = useState<string>('')
  const [form, setForm] = useState<FormData>(emptyForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const service = services.find((s) => s.id === selectedService)

  /* ── Handlers ──────────────────────────────────────────── */
  function handleServiceSelect(id: string) {
    setSelectedService(id)
  }

  function handleStep1Next() {
    if (!selectedService) return
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.wantsContact) {
      setError('Por favor completá todos los campos.')
      return
    }
    if (form.wantsContact === 'si' && !form.contactMethod) {
      setError('Indicá por qué medio preferís que te contactemos.')
      return
    }
    setError('')
    setLoading(true)

    try {
      await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: service?.label ?? selectedService,
          wantsContact: form.wantsContact,
          contactMethod: form.contactMethod,
        }),
      })
    } catch {
      // No bloqueamos el flujo si falla el envío
    }

    setStep(3)
    setLoading(false)
  }

  /* ── Render ────────────────────────────────────────────── */
  return (
    <div className="max-w-2xl mx-auto">

      {/* ── Header ── */}
      <div className="text-center mb-10">
        <p className="text-[11px] font-medium tracking-[0.2em] text-gray-500 mb-3">
          [ COTIZADOR ]
        </p>
        <h1 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
          Calculá el precio de{' '}
          <strong className="font-semibold">tu proyecto</strong>
        </h1>
        <p className="text-sm text-gray-500 font-light">
          Sin registrarte. Sin compromiso. Recibís tu presupuesto al instante.
        </p>
      </div>

      {/* ── Step indicator ── */}
      {step !== 3 && (
        <div className="flex items-center justify-center gap-3 mb-10">
          {[1, 2].map((n) => (
            <div key={n} className="flex items-center gap-3">
              <div
                className={`w-7 h-7 flex items-center justify-center text-[11px] font-medium border transition-colors duration-200 ${
                  step === n
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : step > n
                    ? 'border-gray-900 bg-gray-900 text-white opacity-50'
                    : 'border-gray-300 text-gray-400'
                }`}
              >
                {n.toString().padStart(2, '0')}
              </div>
              <span
                className={`text-xs font-medium tracking-wide ${
                  step === n ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                {n === 1 ? 'SERVICIO' : 'TUS DATOS'}
              </span>
              {n < 2 && <div className="w-8 h-px bg-gray-200 mx-1" />}
            </div>
          ))}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          STEP 1 — Elegir servicio
      ══════════════════════════════════════════════════════ */}
      {step === 1 && (
        <div>
          <p className="text-sm text-gray-500 font-light mb-6 text-center">
            ¿Qué servicio estás buscando?
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleServiceSelect(s.id)}
                className={`text-left p-5 border transition-all duration-200 group ${
                  selectedService === s.id
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white hover:border-gray-400 text-gray-900'
                }`}
              >
                <p
                  className={`text-sm font-medium mb-1 ${
                    selectedService === s.id ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {s.label}
                </p>
                <p
                  className={`text-xs font-light leading-relaxed ${
                    selectedService === s.id ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {s.description}
                </p>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleStep1Next}
            disabled={!selectedService}
            className="w-full py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-widest uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
          >
            CONTINUAR
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          STEP 2 — Datos personales
      ══════════════════════════════════════════════════════ */}
      {step === 2 && (
        <form onSubmit={handleSubmit} noValidate>
          {/* Servicio seleccionado */}
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 px-5 py-3 mb-7">
            <div>
              <p className="text-[10px] font-medium tracking-[0.15em] text-gray-400 mb-0.5">
                SERVICIO SELECCIONADO
              </p>
              <p className="text-sm font-medium text-gray-900">{service?.label}</p>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-gray-400 underline hover:text-gray-600 transition-colors"
            >
              Cambiar
            </button>
          </div>

          <div className="space-y-4 mb-7">
            {/* Nombre */}
            <div>
              <label className="block text-[10px] font-medium tracking-[0.15em] text-gray-500 mb-2 uppercase">
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Juan García"
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors font-light"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-medium tracking-[0.15em] text-gray-500 mb-2 uppercase">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="juan@email.com"
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors font-light"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-[10px] font-medium tracking-[0.15em] text-gray-500 mb-2 uppercase">
                Número de teléfono *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+54 11 1234-5678"
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors font-light"
              />
            </div>

            {/* ¿Quiere contacto? */}
            <div>
              <label className="block text-[10px] font-medium tracking-[0.15em] text-gray-500 mb-3 uppercase">
                ¿Te interesa que te contactemos? *
              </label>
              <div className="flex gap-3">
                {(['si', 'no'] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() =>
                      setForm((p) => ({
                        ...p,
                        wantsContact: v,
                        contactMethod: v === 'no' ? '' : p.contactMethod,
                      }))
                    }
                    className={`flex-1 py-3 text-sm font-medium tracking-wider uppercase border transition-all duration-200 ${
                      form.wantsContact === v
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {v === 'si' ? 'SÍ' : 'NO'}
                  </button>
                ))}
              </div>
            </div>

            {/* ¿Por dónde? — solo si wantsContact === 'si' */}
            {form.wantsContact === 'si' && (
              <div>
                <label className="block text-[10px] font-medium tracking-[0.15em] text-gray-500 mb-3 uppercase">
                  ¿Por dónde preferís que te contactemos? *
                </label>
                <div className="flex gap-3">
                  {(['email', 'whatsapp'] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, contactMethod: v }))}
                      className={`flex-1 py-3 text-sm font-medium tracking-wider uppercase border transition-all duration-200 ${
                        form.contactMethod === v
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {v === 'email' ? 'EMAIL' : 'WHATSAPP'}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {error && (
            <p className="text-xs text-red-500 mb-4 text-center">{error}</p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-4 border border-gray-300 text-gray-600 text-sm font-medium tracking-wider uppercase hover:bg-gray-50 transition-all duration-200"
            >
              ATRÁS
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              {loading ? 'ENVIANDO...' : 'VER MI PRESUPUESTO'}
            </button>
          </div>
        </form>
      )}

      {/* ══════════════════════════════════════════════════════
          STEP 3 — Visor de presupuesto
      ══════════════════════════════════════════════════════ */}
      {step === 3 && service && (
        <div>
          {/* Encabezado */}
          <div className="text-center mb-8">
            <p className="text-[11px] font-medium tracking-[0.2em] text-gray-500 mb-3">
              [ TU PRESUPUESTO ]
            </p>
            <h2 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
              Aquí está tu cotización de{' '}
              <strong className="font-semibold">{service.label}</strong>
            </h2>
            {form.wantsContact === 'si' && (
              <p className="text-sm text-gray-500 font-light">
                Te contactaremos a la brevedad por{' '}
                <strong className="font-medium text-gray-700">
                  {form.contactMethod === 'email' ? 'email' : 'WhatsApp'}
                </strong>
                .
              </p>
            )}
          </div>

          {/* Botones encima del visor */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={service.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-xs font-medium tracking-widest uppercase text-center hover:opacity-90 transition-all duration-200"
            >
              ABRIR COTIZACIÓN
            </a>
            <a
              href={service.pdf}
              download={`cotizacion-${service.id}.pdf`}
              className="flex-1 py-3 border border-gray-300 text-gray-700 text-xs font-medium tracking-widest uppercase text-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              DESCARGAR COTIZACIÓN
            </a>
          </div>

          {/* Visor PDF embebido */}
          <div className="border border-gray-200 bg-gray-50 overflow-hidden" style={{ height: '70vh' }}>
            <iframe
              src={service.pdf}
              className="w-full h-full"
              title={`Cotización ${service.label}`}
            />
          </div>

          {/* Botón cotizar otro */}
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => {
                setStep(1)
                setSelectedService('')
                setForm(emptyForm)
              }}
              className="text-sm text-gray-400 underline hover:text-gray-600 transition-colors"
            >
              Cotizar otro servicio
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
