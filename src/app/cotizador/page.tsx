import type { Metadata } from 'next'
import CotizadorSimple from '@/components/cotizador/CotizadorSimple'

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
      <CotizadorSimple />
    </main>
  )
}
