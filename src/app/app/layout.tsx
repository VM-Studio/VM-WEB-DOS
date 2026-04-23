import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VM App — Seguimiento de tu proyecto en tiempo real',
  description: 'Descargá la app de VM Studio y seguí el avance de tu proyecto web desde tu celular o computadora. Gestioná cambios, revisá previews y mantenete al tanto de cada etapa.',
  alternates: {
    canonical: 'https://vmstudioweb.online/app',
  },
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children
}
