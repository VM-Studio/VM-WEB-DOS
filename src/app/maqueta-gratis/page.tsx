import Footer from '../../components/Footer';

const WA_NUMBER = '541124508191';
const WA_TEXT = encodeURIComponent('Hola! Quiero solicitar mi maqueta web gratis.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

const PASOS = [
  {
    num: '01',
    title: 'Nos contás tu negocio',
    desc: 'En menos de 5 minutos por WhatsApp nos explicás qué hacés, quiénes son tus clientes y qué objetivos tenés para tu web.',
    icon: '01',
    duration: 'HOY',
  },
  {
    num: '02',
    title: 'Diseñamos tu maqueta',
    desc: 'Nuestro equipo estudia tu rubro, analiza a tu competencia y arma una maqueta real y personalizada — no un template genérico.',
    icon: '02',
    duration: '48 HORAS',
  },
  {
    num: '03',
    title: 'Te la mostramos',
    desc: 'Te presentamos la maqueta y la revisamos juntos. Si te gusta, empezamos. Si no, no te cobramos nada. Así de simple.',
    icon: '03',
    duration: 'SIN COSTO',
  },
];

const INCLUYE = [
  { label: 'Diseño personalizado para tu rubro', check: true },
  { label: 'Paleta de colores y tipografías adaptadas a tu marca', check: true },
  { label: 'Estructura de secciones optimizada para convertir', check: true },
  { label: 'Versión desktop y mobile', check: true },
  { label: 'Sin templates genéricos — 100% hecho para vos', check: true },
  { label: 'Entregado en menos de 48 horas hábiles', check: true },
];

const NO_INCLUYE = [
  'Ningún costo oculto',
  'Nada de compromiso',
  'Nada de contratos',
];

const FAQS = [
  {
    q: '¿De verdad es gratis?',
    a: 'Sí, 100%. La maqueta no tiene costo. Si después de verla decidís avanzar con el proyecto, ahí hablamos de precio. Pero la maqueta, siempre gratis.',
  },
  {
    q: '¿Qué es exactamente una maqueta web?',
    a: 'Es un diseño visual de cómo quedaría tu web: la estructura de secciones, los colores, las imágenes de referencia y los textos. No es el sitio funcionando, pero se ve exactamente como va a quedar.',
  },
  {
    q: '¿En cuánto tiempo me la envían?',
    a: 'En menos de 48 horas hábiles desde que nos mandás la información de tu negocio.',
  },
  {
    q: '¿Qué pasa si no me gusta la maqueta?',
    a: 'No pasa nada. Podemos hacer ajustes hasta que quede como lo imaginaste, o simplemente no seguimos — sin presión y sin costo.',
  },
  {
    q: '¿Necesito tener contenido listo (textos, fotos)?',
    a: 'No hace falta. Nosotros usamos contenido de referencia para la maqueta. Cuando avancemos con el proyecto, lo trabajamos juntos.',
  },
];

export default function MaquetaGratis() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ SIN COSTO · SIN COMPROMISO · EN 48 HS ]
            </span>

            <h1 className="mt-6 text-[2.6rem] sm:text-[clamp(2.4rem,7vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] mb-8">
              <span className="text-black">Mirá cómo quedaría </span>
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                tu web nueva
              </span>
              <span className="text-black block mt-1">antes de invertir un peso.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">
              Te diseñamos una maqueta real y personalizada para tu negocio —{' '}
              <strong className="text-black font-normal">gratis</strong>. Así sabés exactamente qué vas a recibir antes de tomar cualquier decisión.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">SOLICITAR MI MAQUETA WEB GRATIS</span>
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>

            <p className="mt-4 text-xs text-gray-400 tracking-wider">
              Respondemos en menos de 2 horas en horario hábil
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue-600 to-transparent" />
        </div>
      </section>

      {/* ── QUÉ ES UNA MAQUETA — visual diagram ── */}
      <section className="py-20 sm:py-28 bg-[#0F172A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-medium tracking-[0.2em] text-blue-400">[ ¿QUÉ ES UNA MAQUETA WEB? ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light text-white tracking-tight">
              No un template.{' '}
              <span className="font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Tu web.
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg font-light max-w-xl mx-auto">
              Una maqueta es el diseño visual completo de tu futuro sitio — antes de que escribamos una sola línea de código.
            </p>
          </div>

          {/* Diagrama visual tipo wireframe */}
          <div className="max-w-3xl mx-auto">
            <div className="border border-gray-700 bg-gray-900/60 rounded-sm overflow-hidden shadow-2xl">
              {/* Barra de browser */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 mx-4 h-6 bg-gray-700 rounded-sm flex items-center px-3">
                  <span className="text-[11px] text-gray-400 tracking-wider">tunegocio.com</span>
                </div>
              </div>

              {/* Contenido del wireframe */}
              <div className="p-6 space-y-4">
                {/* Nav */}
                <div className="flex items-center justify-between">
                  <div className="h-5 w-24 bg-blue-600/40 rounded-sm" />
                  <div className="flex gap-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-3 w-12 bg-gray-700 rounded-sm" />
                    ))}
                  </div>
                </div>

                {/* Hero */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-sm">
                  <div className="grid grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                      <div className="h-3 w-20 bg-blue-500/50 rounded-sm" />
                      <div className="h-7 w-full bg-gray-600 rounded-sm" />
                      <div className="h-7 w-4/5 bg-gray-600 rounded-sm" />
                      <div className="h-4 w-full bg-gray-700 rounded-sm mt-2" />
                      <div className="h-4 w-3/4 bg-gray-700 rounded-sm" />
                      <div className="flex gap-3 mt-4">
                        <div className="h-9 w-36 bg-blue-600/60 rounded-sm" />
                        <div className="h-9 w-28 border border-gray-600 rounded-sm" />
                      </div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-blue-900/40 to-gray-800 border border-gray-700 rounded-sm flex items-center justify-center">
                      <span className="text-xs text-gray-500 tracking-wider">IMAGEN / VIDEO</span>
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Servicio 1', color: 'from-blue-900/30' },
                    { label: 'Servicio 2', color: 'from-gray-700/60' },
                    { label: 'Servicio 3', color: 'from-gray-700/60' },
                  ].map((card, i) => (
                    <div key={i} className={`bg-gradient-to-b ${card.color} to-gray-900 border border-gray-700 p-4 rounded-sm`}>
                      <div className="h-10 w-10 bg-gray-700 rounded-sm mb-3" />
                      <div className="h-3 w-3/4 bg-gray-600 rounded-sm mb-2" />
                      <div className="h-2 w-full bg-gray-700 rounded-sm" />
                      <div className="h-2 w-2/3 bg-gray-700 rounded-sm mt-1" />
                    </div>
                  ))}
                </div>

                {/* CTA strip */}
                <div className="bg-blue-900/20 border border-blue-800/30 p-4 rounded-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-3 w-40 bg-gray-600 rounded-sm" />
                    <div className="h-2 w-56 bg-gray-700 rounded-sm" />
                  </div>
                  <div className="h-9 w-32 bg-blue-600/50 rounded-sm" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4 tracking-wider">
              Así se ve una maqueta web — con tus colores, tu logo y tu contenido real
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ LO QUE RECIBÍS ]</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-black mb-8">
                Tu maqueta{' '}
                <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  incluye todo esto
                </span>
              </h2>
              <div className="space-y-3">
                {INCLUYE.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors duration-200">
                    <span className="text-blue-600 font-medium text-lg flex-shrink-0 mt-0.5">—</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#0F172A] p-8">
                <p className="text-[11px] font-medium tracking-[0.2em] text-blue-400 mb-4">[ Y ADEMÁS ]</p>
                <h3 className="text-2xl font-light text-white mb-6">Tu maqueta no tiene...</h3>
                <div className="space-y-4">
                  {NO_INCLUYE.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="w-7 h-7 border border-red-500/40 bg-red-500/10 flex items-center justify-center text-red-400 text-sm flex-shrink-0 font-medium">×</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8">
                <p className="text-3xl font-light text-blue-700 mb-2">$0</p>
                <p className="text-sm text-gray-600 font-light">
                  La maqueta es completamente gratuita. Solo pagás si decidís avanzar con el desarrollo de tu web — y ahí te damos un presupuesto claro y fijo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="py-20 sm:py-28 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ CÓMO FUNCIONA ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-black">
              Tres pasos,{' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                sin vueltas
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Línea conectora (desktop) */}
            <div className="hidden lg:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {PASOS.map((paso, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white border border-gray-200 group-hover:border-blue-400 group-hover:shadow-xl transition-all duration-300 p-8 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-blue-700 flex items-center justify-center">
                        <span className="text-sm font-medium text-white tracking-wider">{paso.icon}</span>
                      </div>
                      <span className="text-[10px] font-medium tracking-[0.2em] text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1">
                        {paso.duration}
                      </span>
                    </div>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-gray-400 mb-2">PASO {paso.num}</p>
                    <h3 className="text-xl font-light text-black mb-3">{paso.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{paso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ ¿ES PARA VOS? ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-black">
              La maqueta gratis es ideal{' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                si...
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: '01', text: 'Tenés un negocio y todavía no tenés web' },
              { num: '02', text: 'Tu web actual está desactualizada y no te genera clientes' },
              { num: '03', text: 'Tenés una idea pero no sabés cómo se vería en web' },
              { num: '04', text: 'Querés saber el costo antes de comprometerte' },
              { num: '05', text: 'Estás arrancando un emprendimiento y necesitás presencia online' },
              { num: '06', text: 'Comparaste opciones y no te convencen los diseños genéricos' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200">
                <span className="text-[11px] font-medium text-blue-600 tracking-widest flex-shrink-0 mt-0.5">{item.num}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ PREGUNTAS FRECUENTES ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-black">
              Todo lo que necesitás{' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">saber</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 bg-white p-6 hover:border-blue-300 transition-colors duration-200">
                <p className="text-sm font-medium text-black mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 sm:py-32 bg-[#0F172A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] text-blue-400">[ EMPEZÁ HOY ]</span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6">
            Tu web nueva empieza{' '}
            <span className="font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              con una maqueta gratis.
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-light mb-10 max-w-xl mx-auto">
            Sin formularios. Sin esperas. Mandanos un mensaje por WhatsApp y en menos de 48 horas tenés tu maqueta lista.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 sm:px-16 py-5 bg-gradient-to-r from-gray-100 to-white text-gray-900 text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>SOLICITAR MI MAQUETA WEB GRATIS</span>
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <p className="mt-6 text-xs text-gray-500 tracking-wider">
            Respondemos en menos de 2 horas · Lunes a viernes 9:00 – 18:00
          </p>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-8 justify-center">
            {[
              { num: '+120', label: 'Proyectos entregados' },
              { num: '48 hs', label: 'Tiempo de entrega de maqueta' },
              { num: '100%', label: 'Gratis y sin compromiso' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-light text-white">{stat.num}</p>
                <p className="text-xs text-gray-500 mt-1 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
