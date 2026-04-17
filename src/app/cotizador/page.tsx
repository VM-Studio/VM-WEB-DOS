import type { Metadata } from 'next'
import CotizadorWizard from '@/components/cotizador/CotizadorWizard'
import CotizadorModal from '@/components/cotizador/CotizadorModal'

export const metadata: Metadata = {
  title: 'Cotizá tu proyecto digital | VM Studio',
  description: 'Calculá el precio estimado de tu página web, app o campaña publicitaria. Sin registrarte, sin compromiso.',
  alternates: {
    canonical: 'https://vmstudioweb.online/cotizador',
  },
}

export default function CotizadorPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] py-16 px-4">
      {/* Modal de suspensión — se abre automáticamente y bloquea el scroll */}
      <CotizadorModal />
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">[ COTIZADOR ]</p>
          <h1 className="text-3xl font-light text-gray-900 mb-3">
            Calculá el precio de <strong>tu proyecto</strong>
          </h1>
          <p className="text-sm text-gray-500">
            Sin registrarte. Sin compromiso. Recibís tu presupuesto por email.
          </p>
        </div>
        <CotizadorWizard />
      </div>
    </main>
  )
}
