import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad — VM Studio',
  description: 'Conocé cómo VM Studio recopila, usa y protege tu información personal.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vmstudioweb.online/politica-de-privacidad' },
}

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
            [ LEGAL ]
          </span>
          <h1 className="mt-3 sm:mt-4 text-[clamp(2rem,8vw,4rem)] font-light leading-[1.05] sm:leading-[0.95] tracking-[-0.02em] mb-3 sm:mb-4 text-black">
            Política de{' '}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Privacidad
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-xl">
            Última actualización: 5 de abril de 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-20 lg:pb-32 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="pt-4 border-t border-gray-100 space-y-10">

            {/* 1. Quiénes somos */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                01 — QUIÉNES SOMOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                VM Studio es una agencia de desarrollo web, aplicaciones móviles y publicidad digital con dominio{' '}
                <a
                  href="https://vmstudioweb.online"
                  className="text-blue-600 hover:underline"
                >
                  vmstudioweb.online
                </a>
                , radicada en Argentina. Nos especializamos en crear páginas web optimizadas, campañas de Google Ads y Meta Ads, y soluciones digitales para empresas que quieren crecer.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Para consultas relacionadas a esta política, podés contactarnos en{' '}
                <a
                  href="mailto:vmstudio.online@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  vmstudio.online@gmail.com
                </a>
                .
              </p>
            </div>

            {/* 2. Qué datos recopilamos */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                02 — QUÉ DATOS RECOPILAMOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
                Recopilamos información de tres formas distintas:
              </p>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-1">Datos que vos nos proporcionás</p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Cuando completás un formulario de contacto o cotización en nuestro sitio, nos ingresás tu nombre, dirección de correo electrónico, número de teléfono y una descripción de tu proyecto o consulta.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-1">Datos de navegación recopilados automáticamente</p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Nuestro sitio recopila automáticamente información técnica como tu dirección IP, el tipo y versión de tu navegador, el sistema operativo, las páginas que visitás dentro del sitio, el tiempo que pasás en cada página y la URL desde donde llegaste.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-1">Datos recopilados por terceros</p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Utilizamos herramientas de terceros —Google Analytics, Google Ads y Meta Pixel— que recopilan datos de comportamiento de navegación de forma agregada y anonimizada, con fines de análisis y publicidad. Estas herramientas tienen sus propias políticas de privacidad.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Para qué usamos esos datos */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                03 — PARA QUÉ USAMOS TUS DATOS
              </h2>
              <ul className="space-y-2">
                {[
                  'Responder a tus consultas, presupuestos y solicitudes de contacto.',
                  'Enviarte información sobre los servicios que nos solicitaste.',
                  'Mejorar el funcionamiento, diseño y contenido de nuestro sitio web.',
                  'Mostrar publicidad relevante a través de Google Ads y Meta Ads a usuarios que visitaron nuestro sitio.',
                  'Analizar el comportamiento de navegación de forma agregada para optimizar la experiencia del usuario.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Cookies */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                04 — COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
                Nuestro sitio utiliza cookies propias y de terceros. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitás un sitio web.
              </p>
              <div className="space-y-3">
                <div className="pl-4 border-l-2 border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-1">Google Analytics</p>
                  <p className="text-sm text-gray-600 font-light">Mide el tráfico, páginas visitadas y comportamiento de navegación para ayudarnos a mejorar el sitio.</p>
                </div>
                <div className="pl-4 border-l-2 border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-1">Google Ads</p>
                  <p className="text-sm text-gray-600 font-light">Registra conversiones y permite mostrar anuncios relevantes en la Red de Display y búsqueda de Google.</p>
                </div>
                <div className="pl-4 border-l-2 border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-1">Meta Pixel (Facebook/Instagram)</p>
                  <p className="text-sm text-gray-600 font-light">Registra visitas y conversiones para optimizar campañas publicitarias en Facebook e Instagram.</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                Podés desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que deshabilitar cookies puede afectar el funcionamiento de algunas partes del sitio. Para más información sobre cómo gestionar cookies según tu navegador:{' '}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  aboutcookies.org
                </a>
                .
              </p>
            </div>

            {/* 5. Terceros */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                05 — COMPARTIMOS TUS DATOS CON TERCEROS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                VM Studio <strong className="font-medium text-gray-900">no vende ni cede datos personales</strong> a terceros con fines comerciales propios. Sin embargo, algunos datos de comportamiento de navegación son procesados por:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  { name: 'Google LLC', url: 'https://policies.google.com/privacy', label: 'Google Analytics y Google Ads' },
                  { name: 'Meta Platforms, Inc.', url: 'https://www.facebook.com/privacy/policy/', label: 'Meta Pixel / Facebook e Instagram Ads' },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>
                      <strong className="font-medium text-gray-900">{item.name}</strong> ({item.label}) —{' '}
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        ver política de privacidad
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                Estos proveedores actúan como encargados del tratamiento y están sujetos a sus propias políticas de privacidad y cumplimiento normativo.
              </p>
            </div>

            {/* 6. Retención */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                06 — POR CUÁNTO TIEMPO GUARDAMOS TUS DATOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Los datos personales que ingresás en los formularios de contacto y cotización se conservan durante el tiempo necesario para responder tu consulta y gestionar la relación comercial. Una vez cumplida esa finalidad, los datos son eliminados o anonimizados.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Los datos recopilados por Google Analytics se almacenan según la configuración de retención establecida en la cuenta de GA4 (por defecto, 14 meses). Los datos de cookies de Google Ads y Meta Pixel siguen las políticas de retención de cada plataforma respectivamente.
              </p>
            </div>

            {/* 7. Derechos */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                07 — TUS DERECHOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
                De conformidad con la <strong className="font-medium text-gray-900">Ley 25.326 de Protección de los Datos Personales de Argentina</strong>, tenés derecho a:
              </p>
              <ul className="space-y-2">
                {[
                  { title: 'Acceso', desc: 'Solicitar información sobre los datos personales que tenemos sobre vos.' },
                  { title: 'Rectificación', desc: 'Pedirnos que corrijamos datos incorrectos o desactualizados.' },
                  { title: 'Supresión', desc: 'Solicitar la eliminación de tus datos cuando ya no sean necesarios para la finalidad para la que fueron recopilados.' },
                  { title: 'Oposición', desc: 'Oponerte al tratamiento de tus datos para fines de publicidad o marketing.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>
                      <strong className="font-medium text-gray-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                Para ejercer cualquiera de estos derechos, escribinos a{' '}
                <a href="mailto:vmstudio.online@gmail.com" className="text-blue-600 hover:underline">
                  vmstudio.online@gmail.com
                </a>{' '}
                indicando tu nombre, el derecho que querés ejercer y los datos involucrados. Respondemos en un plazo máximo de 30 días hábiles, conforme a la normativa vigente.
              </p>
              <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">
                También podés presentar una reclamación ante la{' '}
                <a
                  href="https://www.argentina.gob.ar/aaip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Agencia de Acceso a la Información Pública (AAIP)
                </a>
                , organismo de control en Argentina.
              </p>
            </div>

            {/* 8. Cambios */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                08 — CAMBIOS EN ESTA POLÍTICA
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                VM Studio puede actualizar esta Política de Privacidad en cualquier momento para reflejar cambios en nuestras prácticas, nuevas herramientas o actualizaciones normativas. La fecha de última actualización siempre estará indicada al comienzo de esta página. Te recomendamos revisarla periódicamente. El uso continuado del sitio tras la publicación de cambios implica la aceptación de la nueva versión.
              </p>
            </div>

            {/* 9. Contacto */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                09 — CONTACTO
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Si tenés preguntas, dudas o solicitudes relacionadas con esta política o con el tratamiento de tus datos personales, podés contactarnos por cualquiera de estos medios:
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-6">
                <a
                  href="mailto:vmstudio.online@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-500">●</span> vmstudio.online@gmail.com
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-500">●</span> Formulario de contacto
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
