'use client'

interface Props {
  etapaNegocio: string
  tieneWeb: boolean | undefined
  urlWebActual: string
  cuandoEmpezar: string
  comoNosConocio: string
  onChange: (field: string, val: string | boolean) => void
}

const ETAPAS = [
  { id: 'Estoy empezando (nuevo negocio)', label: 'Estoy arrancando un negocio nuevo', desc: 'Todavía no tengo clientes, estoy en la etapa inicial' },
  { id: 'Tengo negocio pero sin presencia online', label: 'Tengo negocio pero no estoy en internet', desc: 'Mi negocio funciona pero no tengo web ni redes activas' },
  { id: 'Tengo presencia online pero quiero mejorarla', label: 'Estoy en internet pero quiero mejorar lo que tengo', desc: 'Tengo web o redes, pero no estoy consiguiendo los resultados que quiero' },
  { id: 'Ya tengo todo, quiero escalar', label: 'Ya tengo todo funcionando y quiero crecer más', desc: 'Mi negocio anda bien y quiero invertir para conseguir más clientes' },
]

const CUANDOEMPEZAR = [
  { id: 'Lo antes posible', label: 'Lo antes posible', desc: 'Quiero empezar esta semana o la que viene' },
  { id: 'En el próximo mes', label: 'En el próximo mes', desc: 'Estoy planificando para arrancar pronto' },
  { id: 'En 2 o 3 meses', label: 'En 2 o 3 meses', desc: 'No tengo urgencia, estoy evaluando opciones' },
  { id: 'Solo estoy investigando precios', label: 'Solo estoy viendo precios por ahora', desc: 'Quiero tener un número de referencia, sin compromiso' },
]

export default function Step5General({ etapaNegocio, tieneWeb, urlWebActual, cuandoEmpezar, comoNosConocio, onChange }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 5</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">Contanos sobre tu negocio</h2>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿En qué momento está tu negocio hoy? *</p>
        <div className="space-y-2">
          {ETAPAS.map(e => (
            <button key={e.id} onClick={() => onChange('etapaNegocio', e.id)}
              className={`w-full p-3 border text-left transition-all
                ${etapaNegocio === e.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
              <span className="flex items-center gap-3">
                <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${etapaNegocio === e.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                <span className={`text-sm font-medium ${etapaNegocio === e.id ? 'text-blue-700' : 'text-gray-800'}`}>{e.label}</span>
              </span>
              <p className="text-xs text-gray-400 mt-1 ml-7">{e.desc}</p>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Tenés página web actualmente? *</p>
        <div className="flex gap-3">
          {[{ val: true, label: 'Sí, tengo web' }, { val: false, label: 'No tengo web' }].map(o => (
            <button key={String(o.val)} onClick={() => onChange('tieneWeb', o.val)}
              className={`flex-1 py-2.5 text-sm border transition-all
                ${tieneWeb === o.val ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
              {o.label}
            </button>
          ))}
        </div>
        {tieneWeb && (
          <input
            type="url"
            placeholder="Pegá la dirección de tu web (ej: www.tunegocio.com)"
            value={urlWebActual}
            onChange={e => onChange('urlWebActual', e.target.value)}
            className="w-full mt-3 px-4 py-3 border border-gray-200 text-base text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 bg-white"
          />
        )}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Para cuándo necesitás esto? *</p>
        <div className="space-y-2">
          {CUANDOEMPEZAR.map(c => (
            <button key={c.id} onClick={() => onChange('cuandoEmpezar', c.id)}
              className={`w-full p-3 border text-left transition-all
                ${cuandoEmpezar === c.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
              <span className="flex items-center gap-3">
                <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${cuandoEmpezar === c.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                <span className={`text-sm font-medium ${cuandoEmpezar === c.id ? 'text-blue-700' : 'text-gray-800'}`}>{c.label}</span>
              </span>
              <p className="text-xs text-gray-400 mt-1 ml-7">{c.desc}</p>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cómo llegaste a VM Studio? *</p>
        <div className="space-y-2">
          {['Google', 'Instagram', 'Facebook', 'Recomendación de alguien', 'Otro'].map(c => (
            <button key={c} onClick={() => onChange('comoNosConocio', c)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${comoNosConocio === c ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${comoNosConocio === c ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
