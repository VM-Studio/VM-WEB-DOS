'use client'

const SERVICIOS = [
  {
    id: 'web',
    label: 'Página web',
    desc: 'Sitio completo para mostrar tu negocio, servicios o vender productos online. Con múltiples secciones.',
  },
  {
    id: 'landing',
    label: 'Landing page',
    desc: 'Una sola página enfocada en convertir visitas en consultas o ventas. Ideal para campañas o un servicio puntual.',
  },
  {
    id: 'app_web',
    label: 'Aplicación web',
    desc: 'Una plataforma o sistema que funciona desde el navegador. Sin necesidad de instalar nada.',
  },
  {
    id: 'app_mobile',
    label: 'Aplicación mobile',
    desc: 'App para descargar en Android e iPhone. Aparece en Play Store y App Store.',
  },
  {
    id: 'sistema_gestion',
    label: 'Sistema de gestión',
    desc: 'Software a medida para administrar tu empresa: stock, clientes, facturación, turnos, reportes y más.',
    badge: 'Para empresas',
  },
  {
    id: 'seo',
    label: 'SEO — Posicionamiento en Google',
    desc: 'Optimizamos tu web para que aparezca primero cuando te buscan. Requiere tener una web o landing activa.',
    badge: 'Add-on',
  },
]

// IDs que implican tener presencia web propia
const REQUIERE_WEB = ['seo']
// IDs que "proveen" web (si seleccionás alguno, el SEO está habilitado)
const PROVEE_WEB = ['web', 'landing']

interface Props {
  selected: string[]
  onChange: (val: string[]) => void
}

export default function Step1Servicio({ selected, onChange }: Props) {
  const tieneWeb = selected.some(s => PROVEE_WEB.includes(s))

  const toggle = (id: string) => {
    // SEO solo habilitado si ya tienen web/landing seleccionada
    if (REQUIERE_WEB.includes(id) && !tieneWeb) return
    const next = selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]
    // Si deseleccionan web/landing y tienen SEO, quitamos SEO también
    if (PROVEE_WEB.includes(id) && !next.some(s => PROVEE_WEB.includes(s))) {
      onChange(next.filter(s => !REQUIERE_WEB.includes(s)))
    } else {
      onChange(next)
    }
  }

  return (
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 1</p>
      <h2 className="text-xl font-light text-gray-900 mb-2">¿Qué necesitás para tu negocio?</h2>
      <p className="text-xs text-gray-400 mb-6">Podés elegir más de una opción</p>
      <div className="grid grid-cols-1 gap-3">
        {SERVICIOS.map(s => {
          const bloqueado = REQUIERE_WEB.includes(s.id) && !tieneWeb
          const activo = selected.includes(s.id)
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              disabled={bloqueado}
              className={`flex items-start gap-4 p-4 border text-left transition-all
                ${activo ? 'border-blue-600 bg-blue-50'
                  : bloqueado ? 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                  : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <span className={`mt-0.5 w-4 h-4 flex-shrink-0 border-2 ${activo ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              <span className="flex-1">
                <span className={`block text-sm font-medium ${activo ? 'text-blue-700' : 'text-gray-800'}`}>{s.label}</span>
                <span className="block text-xs text-gray-400 mt-0.5">{s.desc}</span>
                {bloqueado && (
                  <span className="block text-xs text-amber-600 mt-1 font-medium">Requiere seleccionar Página web o Landing page primero</span>
                )}
              </span>
              {s.badge && (
                <span className={`text-xs px-2 py-0.5 flex-shrink-0 ${s.id === 'seo' ? 'bg-gray-700 text-white' : 'bg-blue-600 text-white'}`}>{s.badge}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
