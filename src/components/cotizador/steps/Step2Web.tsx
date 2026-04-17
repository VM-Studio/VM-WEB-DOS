'use client'

interface Props {
  webTipo: string
  webPaginas: string
  webContacto: string[]
  webExtras: string[]
  servicios: string[]
  onChange: (field: string, val: string | string[]) => void
}

const TIPOS = [
  {
    id: 'landing',
    label: 'Una sola página para vender o conseguir clientes',
    desc: 'Ideal para un producto, servicio o campaña puntual. Página única con botón de contacto.',
  },
  {
    id: 'informativa',
    label: 'Página para mostrar mi negocio o empresa',
    desc: 'Presentás quiénes son, qué ofrecen, cómo contactarlos. Con secciones como "Sobre nosotros", "Servicios" y "Contacto".',
  },
  {
    id: 'catalogo',
    label: 'Mostrar mis productos o servicios (sin venta online)',
    desc: 'Un catálogo visual donde la gente ve lo que ofrecés, pero el cierre de venta es por WhatsApp, llamado o local.',
  },
  {
    id: 'ecommerce',
    label: 'Tienda online con carrito y pago en la web',
    desc: 'Los clientes eligen productos, los agregan al carrito y pagan directo en tu sitio (tipo MercadoShops o SHEIN).',
  },
  {
    id: 'reservas',
    label: 'Web con sistema de turnos o reservas online',
    desc: 'Los clientes eligen día y hora desde la web, como en una peluquería, consultorio o restaurant.',
  },
]

const PAGINAS = [
  { id: '1-3', label: '1 a 3', desc: 'Inicio, Servicios y Contacto' },
  { id: '4-7', label: '4 a 7', desc: 'Más secciones' },
  { id: '8+', label: '8 o más', desc: 'Sitio grande' },
]

const CONTACTO = [
  { id: 'whatsapp', label: 'WhatsApp', desc: 'Botón que abre una conversación directo' },
  { id: 'formulario', label: 'Formulario de contacto', desc: 'Un formulario que llega a tu email' },
]

const EXTRAS = [
  {
    id: 'blog',
    label: 'Blog o sección de noticias',
    desc: 'Para publicar artículos, novedades o contenido que ayude a posicionarte en Google',
  },
  {
    id: 'reservas',
    label: 'Turnos o reservas online',
    desc: 'Tus clientes eligen día y hora desde la web sin llamarte',
  },
  {
    id: 'carrito',
    label: 'Carrito de compras',
    desc: 'Para que los clientes puedan agregar productos y comprar en tu sitio',
  },
  {
    id: 'catalogo',
    label: 'Catálogo de productos sin compra online',
    desc: 'Mostrás tus productos pero el cierre de venta es por otro medio (WhatsApp, llamado, etc.)',
  },
  {
    id: 'pagos',
    label: 'Cobro online con MercadoPago',
    desc: 'Los clientes pagan directo desde tu web con tarjeta, transferencia o Mercado Pago',
  },
  {
    id: 'login',
    label: 'Área privada para clientes',
    desc: 'Zona con usuario y contraseña donde cada cliente puede ver su historial, pedidos o contenido exclusivo',
  },
  {
    id: 'panel_admin',
    label: 'Panel para gestionar tu contenido',
    desc: 'Un panel propio para que vos (sin saber programar) puedas editar textos, precios o productos',
  },
  {
    id: 'seo',
    label: 'Optimización para aparecer en Google',
    desc: 'Trabajo técnico para que tu web aparezca más arriba cuando alguien busca lo que ofrecés',
  },
  {
    id: 'multiidioma',
    label: 'Web en más de un idioma',
    desc: 'Para que tu sitio esté disponible en español e inglés (u otro idioma)',
  },
  {
    id: 'redes',
    label: 'Integración con redes sociales',
    desc: 'Mostrar tus publicaciones de Instagram, botones de compartir o login con Facebook/Google',
  },
  {
    id: 'analytics',
    label: 'Seguimiento de visitas y estadísticas',
    desc: 'Ver cuánta gente entra a tu web, desde dónde vienen y qué páginas miran más',
  },
  {
    id: 'chat',
    label: 'Chat en vivo en la web',
    desc: 'Un widget de chat para que los visitantes te escriban en tiempo real mientras navegan tu sitio',
  },
]

export default function Step2Web({ webTipo, webPaginas, webContacto, webExtras, servicios, onChange }: Props) {
  const soloLanding = servicios.includes('landing') && !servicios.includes('web')

  const toggleArr = (field: string, arr: string[], id: string) => {
    const next = arr.includes(id) ? arr.filter(x => x !== id) : [...arr, id]
    onChange(field, next)
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 2</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">
          {soloLanding ? 'Contanos sobre tu landing page' : 'Contanos sobre tu web'}
        </h2>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Para qué va a servir tu web?</p>
        <div className="space-y-2">
          {TIPOS.map(t => (
            <button key={t.id} onClick={() => onChange('webTipo', t.id)}
              className={`w-full p-3 border text-left transition-all
                ${webTipo === t.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
              <span className={`flex items-center gap-3`}>
                <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${webTipo === t.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                <span className={`text-sm font-medium ${webTipo === t.id ? 'text-blue-700' : 'text-gray-800'}`}>{t.label}</span>
              </span>
              <p className="text-xs text-gray-400 mt-1 ml-7">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>
      {!soloLanding && (
        <div>
          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cuántas secciones o páginas tiene tu web? *</p>
          <p className="text-xs text-gray-400 mb-3">Cada sección es una parte diferente del sitio: Inicio, Servicios, Nosotros, Contacto, etc.</p>
          <div className="flex gap-3">
            {PAGINAS.map(p => (
              <button key={p.id} onClick={() => onChange('webPaginas', p.id)}
                className={`flex-1 py-2.5 px-2 text-sm border transition-all text-center
                  ${webPaginas === p.id ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                <span className="block font-medium">{p.label}</span>
                <span className="block text-xs text-gray-400 mt-0.5">{p.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cómo querés que te contacten los clientes? *</p>
        <p className="text-xs text-gray-400 mb-3">Podés elegir las dos opciones</p>
        <div className="flex gap-3">
          {CONTACTO.map(c => (
            <button key={c.id} onClick={() => toggleArr('webContacto', webContacto, c.id)}
              className={`flex-1 py-2.5 px-2 text-sm border transition-all text-center
                ${webContacto.includes(c.id) ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
              <span className="block font-medium">{c.label}</span>
              <span className="block text-xs text-gray-400 mt-0.5">{c.desc}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Necesitás algo más en tu web? (opcional)</p>
        <p className="text-xs text-gray-400 mb-3">Si no sabés qué necesitás, no pasa nada — podés dejarlo sin seleccionar</p>
        <div className="space-y-2">
          {EXTRAS.map(e => (
            <button key={e.id} onClick={() => toggleArr('webExtras', webExtras, e.id)}
              className={`w-full p-3 border text-left transition-all
                ${webExtras.includes(e.id) ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className="flex items-center gap-3">
                <span className={`w-4 h-4 border-2 flex-shrink-0 ${webExtras.includes(e.id) ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
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
