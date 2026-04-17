'use client'

import { useState, useEffect } from 'react'
import StepIndicator from './StepIndicator'
import Step1Servicio from './steps/Step1Servicio'
import Step2Web from './steps/Step2Web'
import Step3App from './steps/Step3App'
import Step5General from './steps/Step5General'
import Step6Datos from './steps/Step6Datos'
import ResultadoCotizacion from './ResultadoCotizacion'

const LS_KEY = 'vm_cotizador_progress'

interface FormState {
  servicios: string[]
  webTipo: string
  webPaginas: string
  webContacto: string[]
  webExtras: string[]
  appTipo: string
  appRubro: string
  appExtras: string[]
  etapaNegocio: string
  tieneWeb: boolean | undefined
  urlWebActual: string
  cuandoEmpezar: string
  comoNosConocio: string
  nombre: string
  empresa: string
  email: string
  whatsapp: string
  aceptaContacto: boolean
  contactoInteres: string
  medioContacto: string
}

const INITIAL: FormState = {
  servicios: [],
  webTipo: '', webPaginas: '', webContacto: [], webExtras: [],
  appTipo: '', appRubro: '', appExtras: [],
  etapaNegocio: '', tieneWeb: undefined, urlWebActual: '',
  cuandoEmpezar: '', comoNosConocio: '',
  nombre: '', empresa: '', email: '', whatsapp: '',
  aceptaContacto: false,
  contactoInteres: '',
  medioContacto: '',
}

interface Resultado {
  total: number
  tiempoEstimado: { label: string }
  pdfUrl: string
  presupuestoNumber: string
}

// Paso 2: web o landing
// Paso 3: app_web, app_mobile, sistema_gestion
// Paso 4: general
// Paso 5: datos
const STEP_LABELS = ['Servicio', 'Web / Landing', 'App / Sistema', 'General', 'Datos']

function getActiveSteps(servicios: string[]) {
  const steps = [1]
  if (servicios.some(s => ['web', 'landing'].includes(s))) steps.push(2)
  if (servicios.some(s => ['app_web', 'app_mobile', 'sistema_gestion'].includes(s))) steps.push(3)
  steps.push(5, 6)
  return steps
}

export default function CotizadorWizard() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [resultado, setResultado] = useState<Resultado | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setForm(parsed.form ?? INITIAL)
        setCurrentStep(parsed.step ?? 1)
      }
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    if (resultado) return
    try { localStorage.setItem(LS_KEY, JSON.stringify({ form, step: currentStep })) }
    catch { /* ignore */ }
  }, [form, currentStep, resultado])

  const activeSteps = getActiveSteps(form.servicios)
  const currentIdx = activeSteps.indexOf(currentStep)
  const stepLabels = activeSteps.map(s => STEP_LABELS[s - 1])

  const setField = (field: string, val: string | boolean | string[]) =>
    setForm(prev => ({ ...prev, [field]: val }))

  const handleNext = () => {
    setError('')
    if (currentStep === 1 && form.servicios.length === 0) {
      setError('Seleccioná al menos un servicio para continuar.')
      return
    }
    if (currentStep === 2) {
      if (!form.webTipo) { setError('Seleccioná el tipo de web.'); return }
      const soloLanding = form.servicios.includes('landing') && !form.servicios.includes('web')
      if (!soloLanding && !form.webPaginas) { setError('Seleccioná la cantidad de páginas.'); return }
      if (form.webContacto.length === 0) { setError('Seleccioná al menos una forma de contacto.'); return }
    }
    if (currentStep === 3) {
      if (!form.appTipo) { setError('Seleccioná el tipo de aplicación.'); return }
      if (!form.appRubro) { setError('Seleccioná el rubro de tu negocio.'); return }
    }
    if (currentStep === 5) {
      if (!form.etapaNegocio) { setError('Seleccioná en qué etapa está tu negocio.'); return }
      if (form.tieneWeb === undefined) { setError('Indicá si ya tenés página web.'); return }
      if (!form.cuandoEmpezar) { setError('Seleccioná cuándo querés empezar.'); return }
      if (!form.comoNosConocio) { setError('Contanos cómo llegaste a VM Studio.'); return }
    }
    const nextIdx = currentIdx + 1
    if (nextIdx < activeSteps.length) {
      setCurrentStep(activeSteps[nextIdx])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setError('')
    const prevIdx = currentIdx - 1
    if (prevIdx >= 0) {
      setCurrentStep(activeSteps[prevIdx])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async () => {
    setError('')
    if (!form.nombre) { setError('Ingresá tu nombre completo.'); return }
    if (!form.empresa) { setError('Ingresá el nombre de tu empresa o negocio.'); return }
    if (!form.email) { setError('Ingresá tu email.'); return }
    if (!form.whatsapp) { setError('Ingresá tu número de WhatsApp.'); return }
    if (!form.aceptaContacto) {
      setError('Aceptá el checkbox para continuar.')
      return
    }
    setIsSubmitting(true)
    try {
      const API = process.env.NEXT_PUBLIC_APP_API_URL ?? 'https://app.vmstudioweb.online'
      const res = await fetch(`${API}/api/cotizador/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          servicios: form.servicios,
          web: {
            tipo: form.webTipo,
            paginas: form.webPaginas,
            contacto: form.webContacto,
            extras: form.webExtras,
          },
          app: {
            tipo: form.appTipo,
            rubro: form.appRubro,
            extras: form.appExtras,
          },
          general: {
            etapa: form.etapaNegocio,
            tieneWeb: form.tieneWeb,
            urlWeb: form.urlWebActual,
            cuandoEmpezar: form.cuandoEmpezar,
            comoNosConocio: form.comoNosConocio,
          },
          datos: {
            nombre: form.nombre,
            empresa: form.empresa,
            email: form.email,
            whatsapp: form.whatsapp,
            contactoInteres: form.contactoInteres,
            medioContacto: form.medioContacto,
          },
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Ocurrió un error. Intentá nuevamente.')
        return
      }
      localStorage.removeItem(LS_KEY)
      setResultado(data)
    } catch {
      setError('Error de conexión. Revisá tu internet e intentá nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setForm(INITIAL)
    setCurrentStep(1)
    setResultado(null)
    localStorage.removeItem(LS_KEY)
  }

  if (isSubmitting) return (
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-gray-500 font-light">Estamos calculando tu presupuesto... ⚡</p>
    </div>
  )

  if (resultado) return (
    <ResultadoCotizacion
      nombre={form.nombre}
      email={form.email}
      total={resultado.total}
      tiempoEstimado={resultado.tiempoEstimado.label}
      pdfUrl={resultado.pdfUrl}
      presupuestoNumber={resultado.presupuestoNumber}
      onReset={handleReset}
    />
  )

  return (
    <div className="bg-white p-6 sm:p-8 shadow-sm">
      <StepIndicator
        currentStep={currentIdx + 1}
        totalSteps={activeSteps.length}
        stepLabels={stepLabels}
      />
      <div className="min-h-[350px] mt-6">
        {currentStep === 1 && <Step1Servicio selected={form.servicios} onChange={val => setField('servicios', val)} />}
        {currentStep === 2 && <Step2Web webTipo={form.webTipo} webPaginas={form.webPaginas} webContacto={form.webContacto} webExtras={form.webExtras} servicios={form.servicios} onChange={setField} />}
        {currentStep === 3 && <Step3App appTipo={form.appTipo} appRubro={form.appRubro} appExtras={form.appExtras} servicios={form.servicios} onChange={setField} />}
        {currentStep === 5 && <Step5General etapaNegocio={form.etapaNegocio} tieneWeb={form.tieneWeb} urlWebActual={form.urlWebActual} cuandoEmpezar={form.cuandoEmpezar} comoNosConocio={form.comoNosConocio} onChange={setField} />}
        {currentStep === 6 && <Step6Datos nombre={form.nombre} empresa={form.empresa} email={form.email} whatsapp={form.whatsapp} aceptaContacto={form.aceptaContacto} contactoInteres={form.contactoInteres} medioContacto={form.medioContacto} onChange={setField} onSubmit={handleSubmit} isSubmitting={isSubmitting} />}
      </div>
      {error && <p className="text-sm text-red-500 mt-4">{error}</p>}
      {currentStep !== 6 && (
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button onClick={handleBack} disabled={currentIdx === 0}
            className="px-5 py-2.5 border border-gray-300 text-sm text-gray-600 tracking-wider hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            ← Anterior
          </button>
          <button onClick={handleNext}
            className="px-6 py-2.5 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity">
            Siguiente →
          </button>
        </div>
      )}
      {currentStep === 6 && currentIdx > 0 && (
        <button onClick={handleBack} className="mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors">
          ← Volver al paso anterior
        </button>
      )}
    </div>
  )
}
