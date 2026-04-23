'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

const APP_URL = 'https://app.vmstudioweb.online'

const features = [
  {
    number: '01',
    title: 'Seguimiento en tiempo real',
    description:
      'Mirá cómo avanza tu proyecto día a día. Cada cambio que hacemos se refleja en tu panel de inmediato.',
  },
  {
    number: '02',
    title: 'Preview de tu web en vivo',
    description:
      'Visualizá cómo va quedando tu página web o proyecto antes de que salga al aire. Sin esperas, sin sorpresas.',
  },
  {
    number: '03',
    title: 'Gestioná tus modificaciones',
    description:
      'Pedí ajustes, enviá ideas y aprobá cambios directamente desde la app, sin necesidad de llamadas ni emails.',
  },
  {
    number: '04',
    title: 'Tu proyecto en Google',
    description:
      'Monitoreá cómo aparece tu sitio en los resultados de búsqueda y seguí el progreso de tu posicionamiento.',
  },
]

export default function AppPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* blue glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ─ Text ─ */}
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
                [ VM APP ]
              </span>
              <h1 className="mt-4 text-[clamp(2rem,7vw,4.5rem)] font-light leading-[0.95] tracking-[-0.02em] mb-6 text-black">
                Tu proyecto,{' '}
                <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  en tus manos.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-light mb-10 max-w-lg leading-relaxed">
                Descargá la app de VM Studio y seguí cada etapa de tu proyecto
                web en tiempo real — desde el diseño hasta el lanzamiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-wider text-center overflow-hidden hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span className="relative z-10">DESCARGAR LA APP</span>
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
                <Link
                  href="/contacto"
                  className="px-8 py-4 border border-gray-300 text-gray-700 text-sm font-medium tracking-wider text-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  HABLAR CON UN ASESOR
                </Link>
              </div>
            </div>

            {/* ─ Floating screenshots ─ */}
            <div className="relative h-[480px] hidden lg:block">
              {/* vmapp3 — panel de cliente, fondo, inclinado */}
              <div
                className="absolute top-10 left-0 w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                style={{ transform: 'perspective(900px) rotateY(8deg) rotateX(3deg)', zIndex: 1 }}
              >
                <Image
                  src="/vmapp3.png"
                  alt="Panel de cliente VM App"
                  width={340}
                  height={220}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* vmapp1 — portada, centro, elevada */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] rounded-3xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(0,0,0,0.25)] border border-gray-100"
                style={{ transform: 'perspective(900px) rotateY(-4deg) rotateX(4deg) translateY(-16px)', zIndex: 3 }}
              >
                <Image
                  src="/vmapp1.png"
                  alt="Portada VM App"
                  width={220}
                  height={420}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* vmapp2 — auth, derecha, inclinado */}
              <div
                className="absolute top-16 right-0 w-[200px] rounded-3xl overflow-hidden shadow-xl border border-gray-100"
                style={{ transform: 'perspective(900px) rotateY(-10deg) rotateX(2deg)', zIndex: 2 }}
              >
                <Image
                  src="/vmapp2.png"
                  alt="Inicio de sesión VM App"
                  width={200}
                  height={380}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Mobile: stacked screenshots */}
            <div className="flex lg:hidden gap-4 justify-center">
              <div className="w-[140px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image src="/vmapp1.png" alt="Portada VM App" width={140} height={260} className="w-full h-auto" />
              </div>
              <div className="w-[140px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 mt-8">
                <Image src="/vmapp2.png" alt="Login VM App" width={140} height={260} className="w-full h-auto" />
              </div>
              <div className="w-[140px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image src="/vmapp3.png" alt="Panel VM App" width={140} height={260} className="w-full h-auto" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ FUNCIONALIDADES ]
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,5vw,3.2rem)] font-light leading-[1] tracking-[-0.02em] text-black">
              Todo lo que necesitás,{' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                en un solo lugar.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {features.map((f) => (
              <div key={f.number} className="bg-white p-8 hover:bg-gray-50 transition-colors duration-200 group">
                <span className="text-[11px] font-medium tracking-[0.2em] text-gray-400 group-hover:text-blue-500 transition-colors">
                  {f.number}
                </span>
                <h3 className="mt-4 text-lg font-light text-black mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENS SHOWCASE ─────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Row 1 — portada */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
                [ PANTALLA DE INICIO ]
              </span>
              <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.8rem)] font-light leading-[1.05] tracking-[-0.02em] text-black mb-4">
                Una bienvenida diseñada{' '}
                <strong className="font-semibold">para vos.</strong>
              </h2>
              <p className="text-gray-600 text-base font-light leading-relaxed mb-8 max-w-md">
                Al abrir la app te encontrás con un panel limpio y profesional.
                Todo lo que necesitás saber de tu proyecto, de un vistazo.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-wider hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                DESCARGAR LA APP
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center">
              <div
                className="w-[260px] sm:w-[300px] rounded-3xl overflow-hidden border border-gray-100"
                style={{ boxShadow: '0 40px 100px -20px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04)', transform: 'perspective(1000px) rotateY(-6deg) rotateX(4deg)' }}
              >
                <Image src="/vmapp1.png" alt="Portada VM App" width={300} height={560} className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Row 2 — auth */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="lg:order-2">
              <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
                [ ACCESO SEGURO ]
              </span>
              <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.8rem)] font-light leading-[1.05] tracking-[-0.02em] text-black mb-4">
                Tu cuenta,{' '}
                <strong className="font-semibold">protegida.</strong>
              </h2>
              <p className="text-gray-600 text-base font-light leading-relaxed mb-8 max-w-md">
                Ingresá o registrate en segundos. Acceso exclusivo para cada
                cliente, con toda tu información segura y privada.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 text-sm font-medium tracking-wider hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                INGRESAR A LA APP
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center lg:order-1">
              <div
                className="w-[260px] sm:w-[300px] rounded-3xl overflow-hidden border border-gray-100"
                style={{ boxShadow: '0 40px 100px -20px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04)', transform: 'perspective(1000px) rotateY(6deg) rotateX(4deg)' }}
              >
                <Image src="/vmapp2.png" alt="Inicio de sesión VM App" width={300} height={560} className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Row 3 — panel de cliente */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
                [ PANEL DE CLIENTE ]
              </span>
              <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.8rem)] font-light leading-[1.05] tracking-[-0.02em] text-black mb-4">
                Tu proyecto,{' '}
                <strong className="font-semibold">en tiempo real.</strong>
              </h2>
              <p className="text-gray-600 text-base font-light leading-relaxed mb-8 max-w-md">
                Desde el panel de cliente podés ver el preview de tu web, el
                estado del proyecto, enviar modificaciones y seguir cómo va
                quedando todo antes del lanzamiento.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-wider hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                DESCARGAR LA APP
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center">
              <div
                className="w-full max-w-[480px] rounded-2xl overflow-hidden border border-gray-100"
                style={{ boxShadow: '0 40px 100px -20px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04)', transform: 'perspective(1200px) rotateY(-5deg) rotateX(3deg)' }}
              >
                <Image src="/vmapp3.png" alt="Panel de cliente VM App" width={480} height={320} className="w-full h-auto" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ CÓMO FUNCIONA ]
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,5vw,3.2rem)] font-light tracking-[-0.02em] text-black">
              Simple, transparente,{' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                sin fricciones.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Descargá la app', body: 'Ingresá a app.vmstudioweb.online desde tu celular o computadora y creá tu cuenta en menos de un minuto.' },
              { step: '2', title: 'Accedé a tu proyecto', body: 'Una vez que arranca tu proyecto, te damos acceso a tu panel privado con todo el seguimiento en tiempo real.' },
              { step: '3', title: 'Gestioná y aprobá', body: 'Enviá cambios, aprobá etapas y mirá cómo va quedando tu web antes de que salga al aire.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-gray-200 text-gray-400 text-xs font-medium tracking-[0.2em] mb-6">
                  {s.step.padStart(2, '0')}
                </div>
                <h3 className="text-lg font-light text-black mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-blue-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] text-blue-300">
            [ TU PROYECTO ]
          </span>
          <h2 className="mt-4 text-[clamp(2rem,6vw,4rem)] font-light leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Empezá a seguir tu proyecto{' '}
            <strong className="font-semibold">hoy.</strong>
          </h2>
          <p className="text-lg text-blue-100 font-light mb-10 max-w-xl mx-auto">
            Descargá la app y tené control total sobre cada etapa
            del desarrollo de tu página web o proyecto digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-white text-gray-900 text-sm font-medium tracking-widest uppercase hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              DESCARGAR LA APP
            </a>
            <Link
              href="/contacto"
              className="px-10 py-4 border border-white/30 text-white text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-all duration-200"
            >
              CONTACTAR UN ASESOR
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
