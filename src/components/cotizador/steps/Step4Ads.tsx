'use client'

interface Props {
  servicios: string[]
  googleInversion: string
  metaInversion: string
  tieneCuentaAds: boolean | undefined
  onChange: (field: string, val: string | boolean) => void
}

const GOOGLE_OPCIONES = [
  { id: '80-100', label: '$80.000 – $100.000 por mes', desc: 'Para empezar y ver resultados iniciales (monto mínimo recomendado)' },
  { id: '100-200', label: '$100.000 – $200.000 por mes', desc: 'Mayor volumen de búsquedas y más clientes potenciales' },
  { id: '200-500', label: '$200.000 – $500.000 por mes', desc: 'Campaña robusta para negocios con buena demanda' },
  { id: '500+', label: 'Más de $500.000 por mes', desc: 'Presupuesto alto para escalar o cubrir varias ciudades' },
  { id: 'indefinido', label: 'Todavía no lo tengo definido', desc: 'Podemos ayudarte a decidir el monto ideal en la reunión' },
]
const META_OPCIONES = [
  { id: '150', label: '$150.000 por mes', desc: 'Para empezar a mostrar anuncios en Instagram y Facebook (mínimo recomendado)' },
  { id: '150-300', label: '$150.000 – $300.000 por mes', desc: 'Mayor alcance y más personas que ven tus anuncios' },
  { id: '300-600', label: '$300.000 – $600.000 por mes', desc: 'Campaña más amplia para crecer más rápido' },
  { id: '600+', label: 'Más de $600.000 por mes', desc: 'Presupuesto alto para llegar a mucha más gente' },
  { id: 'indefinido', label: 'Todavía no lo tengo definido', desc: 'Podemos ayudarte a decidir el monto ideal en la reunión' },
]

export default function Step4Ads({ servicios, googleInversion, metaInversion, tieneCuentaAds, onChange }: Props) {
  const showGoogle = servicios.includes('google_ads') || servicios.includes('combo_ads')
  const showMeta = servicios.includes('meta_ads') || servicios.includes('combo_ads')

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 4</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">Contanos sobre tu publicidad</h2>
      </div>
      {showGoogle && (
        <div>
          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-1">¿Cuánto querés gastar en publicidad de Google por mes? *</p>
          <p className="text-xs text-gray-400 mb-3">Este dinero va directo a Google, no es el honorario de VM Studio. Es lo que Google cobra por mostrar tu anuncio.</p>
          <div className="space-y-2">
            {GOOGLE_OPCIONES.map(o => (
              <button key={o.id} onClick={() => onChange('googleInversion', o.id)}
                className={`w-full p-3 border text-left transition-all
                  ${googleInversion === o.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <span className="flex items-center gap-3">
                  <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${googleInversion === o.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                  <span className={`text-sm font-medium ${googleInversion === o.id ? 'text-blue-700' : 'text-gray-800'}`}>{o.label}</span>
                </span>
                <p className="text-xs text-gray-400 mt-1 ml-7">{o.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}
      {showMeta && (
        <div>
          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-1">¿Cuánto querés gastar en publicidad de Instagram/Facebook por mes? *</p>
          <p className="text-xs text-gray-400 mb-3">Este dinero va directo a Meta (Instagram/Facebook), no es el honorario de VM Studio.</p>
          <div className="space-y-2">
            {META_OPCIONES.map(o => (
              <button key={o.id} onClick={() => onChange('metaInversion', o.id)}
                className={`w-full p-3 border text-left transition-all
                  ${metaInversion === o.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <span className="flex items-center gap-3">
                  <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${metaInversion === o.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                  <span className={`text-sm font-medium ${metaInversion === o.id ? 'text-blue-700' : 'text-gray-800'}`}>{o.label}</span>
                </span>
                <p className="text-xs text-gray-400 mt-1 ml-7">{o.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Ya tenés cuenta de publicidad creada en Google o Meta? *</p>
        <p className="text-xs text-gray-400 mb-3">Si nunca pusiste publicidad online, seguramente no tenés cuenta todavía — eso está bien.</p>
        <div className="flex gap-3">
          {[
            { val: true, label: 'Sí, ya tengo cuenta', desc: 'Ya usé publicidad antes' },
            { val: false, label: 'No, necesito que me ayuden', desc: 'Es la primera vez' },
          ].map(o => (
            <button key={String(o.val)} onClick={() => onChange('tieneCuentaAds', o.val)}
              className={`flex-1 py-2.5 px-2 text-sm border transition-all text-center
                ${tieneCuentaAds === o.val ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
              <span className="block font-medium">{o.label}</span>
              <span className="block text-xs text-gray-400 mt-0.5">{o.desc}</span>
            </button>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 italic">
        El presupuesto publicitario va directo a Google o Meta. El servicio de VM Studio (gestión de campañas) se cobra por separado.
      </p>
    </div>
  )
}
