'use client'

interface Props {
  appTipo: string
  appRubro: string
  appExtras: string[]
  servicios: string[]
  onChange: (field: string, val: string | string[]) => void
}

const RUBROS = [
  'Comercio / Ventas',
  'Restaurante / Gastronomía',
  'Servicios profesionales',
  'Salud / Bienestar',
  'Educación',
  'Entretenimiento',
  'Logística / Transporte',
  'Inmobiliaria',
  'Otro',
]

const EXTRAS_APP = [
  { id: 'usuarios', label: 'Usuarios con cuenta propia', desc: 'Registro, login y perfil de usuario dentro de la app' },
  { id: 'push', label: 'Notificaciones push', desc: 'Avisos y alertas directo en la pantalla del celular' },
  { id: 'chat', label: 'Chat o mensajería interna', desc: 'Mensajes en tiempo real entre usuarios o con el negocio' },
  { id: 'pagos', label: 'Cobros en la app', desc: 'Tarjeta o MercadoPago sin salir de la aplicación' },
  { id: 'geo', label: 'Ubicación y mapas', desc: 'GPS, mapas y cálculo de distancias' },
  { id: 'dashboard', label: 'Panel con estadísticas', desc: 'Gráficos de ventas, usuarios y actividad' },
  { id: 'api', label: 'Integración con otro sistema', desc: 'Conexión con stock, CRM, facturación, etc.' },
  { id: 'admin', label: 'Panel de administración', desc: 'Gestión de usuarios y contenido sin código' },
  { id: 'reservas', label: 'Turnos o reservas', desc: 'Agenda automática de turnos con disponibilidad' },
  { id: 'ecommerce', label: 'Catálogo o tienda', desc: 'Ver y comprar productos desde la app' },
  { id: 'offline', label: 'Funciona sin internet', desc: 'Partes de la app disponibles sin conexión' },
]

const EXTRAS_SISTEMA = [
  { id: 'stock', label: 'Gestión de stock / inventario', desc: 'Control de productos, cantidades y alertas de bajo stock' },
  { id: 'clientes', label: 'CRM de clientes', desc: 'Historial, contactos y seguimiento de cada cliente' },
  { id: 'facturacion', label: 'Facturación / cotizaciones', desc: 'Generación de facturas, remitos o presupuestos' },
  { id: 'turnos', label: 'Gestión de turnos', desc: 'Agenda y disponibilidad del equipo' },
  { id: 'usuarios', label: 'Usuarios con roles y permisos', desc: 'Admin, operador, vendedor — cada uno ve lo suyo' },
  { id: 'reportes', label: 'Reportes y estadísticas', desc: 'Gráficos y exportaciones para tomar decisiones' },
  { id: 'api', label: 'Integración con otro sistema', desc: 'Conexión con software externo (contabilidad, e-commerce, etc.)' },
  { id: 'notif', label: 'Notificaciones y alertas', desc: 'Emails o avisos automáticos por eventos del sistema' },
  { id: 'mobile', label: 'Versión para celular', desc: 'Que también funcione bien desde el teléfono' },
]

export default function Step3App({ appTipo, appRubro, appExtras, servicios, onChange }: Props) {
  const tieneAppWeb = servicios.includes('app_web')
  const tieneAppMobile = servicios.includes('app_mobile')
  const tieneSistema = servicios.includes('sistema_gestion')

  // Determinar appTipo automáticamente si solo hay un tipo seleccionado
  const tipoForzado = (!tieneAppWeb && !tieneAppMobile && tieneSistema) ? 'sistema'
    : (tieneAppWeb && !tieneAppMobile && !tieneSistema) ? 'app_web'
    : (tieneAppMobile && !tieneAppWeb && !tieneSistema) ? 'app_mobile'
    : null

  const tipoEfectivo = tipoForzado ?? appTipo

  const TIPOS_DISPONIBLES = [
    tieneAppWeb && { id: 'app_web', label: 'Aplicación web', desc: 'Plataforma que funciona en el navegador, sin instalar nada.' },
    tieneAppMobile && { id: 'app_mobile', label: 'App mobile (Android + iOS)', desc: 'App para descargar en Play Store y App Store.' },
    tieneSistema && { id: 'sistema', label: 'Sistema de gestión', desc: 'Software interno para administrar tu empresa.' },
  ].filter(Boolean) as { id: string; label: string; desc: string }[]

  const extras = tipoEfectivo === 'sistema' ? EXTRAS_SISTEMA : EXTRAS_APP

  const toggleExtra = (id: string) => {
    const next = appExtras.includes(id) ? appExtras.filter(x => x !== id) : [...appExtras, id]
    onChange('appExtras', next)
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 3</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">
          {tieneSistema && !tieneAppWeb && !tieneAppMobile ? 'Contanos sobre tu sistema' : 'Contanos sobre tu aplicación'}
        </h2>
      </div>

      {TIPOS_DISPONIBLES.length > 1 && (
        <div>
          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Qué tipo necesitás desarrollar primero? *</p>
          <div className="space-y-3">
            {TIPOS_DISPONIBLES.map(t => (
              <button key={t.id} onClick={() => { onChange('appTipo', t.id); onChange('appExtras', []) }}
                className={`w-full p-4 border text-left transition-all
                  ${tipoEfectivo === t.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <p className={`text-sm font-medium ${tipoEfectivo === t.id ? 'text-blue-700' : 'text-gray-800'}`}>{t.label}</p>
                <p className="text-xs text-gray-400 mt-1">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿A qué rubro pertenece tu negocio? *</p>
        <div className="space-y-2">
          {RUBROS.map(r => (
            <button key={r} onClick={() => onChange('appRubro', r)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${appRubro === r ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${appRubro === r ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {r}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Qué funciones necesitás? (opcional)</p>
        <p className="text-xs text-gray-400 mb-3">Si no sabés todavía, podés dejarlo sin seleccionar</p>
        <div className="space-y-2">
          {extras.map(e => (
            <button key={e.id} onClick={() => toggleExtra(e.id)}
              className={`w-full p-3 border text-left transition-all
                ${appExtras.includes(e.id) ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className="flex items-center gap-3">
                <span className={`w-4 h-4 border-2 flex-shrink-0 ${appExtras.includes(e.id) ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                <span className="text-sm font-medium">{e.label}</span>
              </span>
              <p className="text-xs text-gray-400 mt-1 ml-7">{e.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
