import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

const Software = "/web.gif";
const Google = "/google.gif";
const Automatic = "/ia.gif";
const Logo = "/log.png";

export default function LandingWebParaRestaurantes() {

  const services = [
    {
      title: "1. MENÚ DIGITAL ONLINE",
      subtitle: "Menú & Carta Digital",
      description: "Tu carta completa online con fotos, descripciones y precios actualizados. Los clientes ven tu menú antes de ir, aumentando las reservas y el ticket promedio.",
      imageSrc: Software,
    },
    {
      title: "2. PRIMERO EN GOOGLE MAPS",
      subtitle: "SEO Local Gastronómico",
      description: "Aparecer primero cuando buscan 'restaurante en [tu barrio]' es clave. Optimizamos tu ficha de Google Maps y tu web para atraer más comensales locales.",
      imageSrc: Google,
    },
    {
      title: "3. RESERVAS Y PEDIDOS ONLINE",
      subtitle: "Reservas & Delivery",
      description: "Integración con sistemas de reservas online, pedidos para delivery y WhatsApp directo para que tus clientes reserven o pidan sin salir de tu web.",
      imageSrc: Automatic,
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Maqueta web gratis",
      description: "Te mostramos cómo quedaría la web de tu restaurante con tu menú, galería de fotos y diseño adaptado a la identidad de tu local.",
      duration: "48 HORAS"
    },
    {
      number: "02",
      title: "Desarrollo y contenido",
      description: "Desarrollamos tu web, cargamos el menú completo, las fotos del local y configuramos todo el sistema de reservas y contacto.",
      duration: "1-2 SEMANAS"
    },
    {
      number: "03",
      title: "Soporte y actualizaciones",
      description: "Actualizamos tu menú, precios y promociones cuando lo necesitás. Gestión continua de Google Maps y redes incluida. (Opcional)",
      duration: "MENSUAL"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 pb-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-2xl">
              <div className="mb-6 sm:mb-8">
                <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
                  [ MAQUETA GRATIS SIN COMPROMISO ]
                </span>
              </div>

              <h1 className="text-[2.4rem] sm:text-[clamp(2rem,7vw,4.5rem)] font-light leading-[1.05] sm:leading-[0.95] tracking-[-0.02em] mb-6 sm:mb-8">
                <span className="text-black">Páginas web para </span>
                <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  restaurantes y gastronomía.
                </span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 font-light">
                Diseñamos la web de tu restaurante con menú digital, galería de fotos y optimizada para que aparezcas primero en Google Maps.
                <span className="block mt-4 text-black font-normal">
                  Maqueta gratis en 48 horas.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cotizador"
                  className="
                    group relative px-6 sm:px-8 py-4
                    bg-gradient-to-r from-gray-900 to-blue-700
                    text-white text-center
                    text-sm font-medium tracking-wider
                    overflow-hidden transition-all duration-300
                    hover:shadow-2xl hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  <span className="relative z-10">PEDIR WEB PARA MI RESTAURANTE</span>
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
                <Link
                  href="/casos-de-estudio"
                  className="
                    px-6 sm:px-8 py-4 text-center
                    border border-gray-400
                    text-black
                    text-sm font-medium tracking-wider
                    hover:bg-gray-100
                    hover:border-blue-600
                    transition-all duration-300
                    hover:shadow-lg
                    active:scale-[0.98]
                  "
                >
                  VER CASOS DE ESTUDIO
                </Link>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-2xl border border-gray-300">
                <video
                  className="w-full h-full object-cover"
                  playsInline
                  controls
                  poster="https://res.cloudinary.com/ddmezsxfc/video/upload/v1772839995/valentinavm2_iscx9n.jpg"
                >
                  <source src="https://res.cloudinary.com/ddmezsxfc/video/upload/v1772839995/valentinavm2_iscx9n.mov" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue-600 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-20">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ WEB PARA RESTAURANTES ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black">
              Web que llena <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">tu local</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white border border-gray-200 hover:border-blue-500 transition-colors duration-300 overflow-hidden hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-full h-full mb-6 flex items-center justify-center border-gray-200 border bg-gray-200 rounded-md">
                    <Image src={service.imageSrc} width={150} height={150} loading="lazy" className="h-full w-full object-contain" alt={service.title} />
                  </div>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500">{service.subtitle}</span>
                  <h3 className="mt-2 text-2xl font-light mb-4 text-black">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-gray-500 mb-4">[ ¿LISTO PARA EMPEZAR? ]</p>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-black mb-6">
            Conseguí más reservas{' '}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              desde Google
            </span>
          </h2>
          <Link
            href="/cotizador"
            className="inline-block px-8 sm:px-12 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-[0.98]"
          >
            PEDIR WEB PARA MI RESTAURANTE
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-20">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ PROCESO ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black">
              Cómo <span className="font-medium">trabajamos</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group flex flex-col h-full">
                <div className="relative flex flex-col flex-1">
                  <span className="text-5xl font-light text-blue-300 group-hover:text-blue-600 transition-colors duration-300">{step.number}</span>
                  <h3 className="mt-4 text-xl font-medium mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{step.description}</p>
                  <span className="text-xs font-medium text-blue-600 tracking-wider mt-auto">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ DIFERENCIAL ]</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
              Por qué <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">nosotros</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-light mb-6 text-gray-500">Sin web propia</h3>
              <ul className="space-y-4">
                {["Dependés solo de Pedidos Ya o iFood","Sin menú online actualizable","No aparecer en Google Maps optimizado","Perdés reservas y pedidos todos los días"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-red-500 mt-0.5 text-sm">✕</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-5 sm:px-8 py-4 bg-gray-900 border-blue-500 border text-white rounded-lg">
              <Link href="/" className="flex items-center mb-4">
                <Image width={60} height={60} src={Logo} alt="VM Studio - Web para Restaurantes" />
              </Link>
              <ul className="space-y-4 pb-4">
                {[
                  "Menú digital actualizable cuando quieras",
                  "Primero en Google Maps en tu zona",
                  "Reservas y pedidos directos sin comisiones",
                  "Si no aumentan las reservas, te devolvemos el dinero"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5 text-sm">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-20">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ PREGUNTAS FRECUENTES ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black">
              Todo sobre la web de tu <span className="font-medium">restaurante</span>
            </h2>
          </div>
          <div className="space-y-1">
            {[
              { q: "¿Puedo actualizar el menú yo mismo?", a: "Sí. Tu web tiene un panel de administración donde podés actualizar precios, agregar o quitar platos y cambiar fotos del menú vos mismo." },
              { q: "¿La web incluye sistema de reservas online?", a: "Sí. Integramos un sistema de reservas online para que los clientes reserven directamente desde tu web, con confirmación automática." },
              { q: "¿Pueden integrar delivery y pedidos online?", a: "Sí. Podemos integrar pedidos para delivery directamente desde tu web, sin comisiones de plataformas externas." },
              { q: "¿En cuánto tiempo está lista la web?", a: "En general 1 a 2 semanas. Antes de empezar te mostramos una maqueta gratis en 48 horas con el diseño de tu local." },
              { q: "¿La web aparece en Google Maps?", a: "Sí. Optimizamos tu ficha de Google Maps para que aparezcas cuando buscan 'restaurante en [tu barrio]' o el tipo de cocina que ofrecés." },
              { q: "¿Funciona para cualquier tipo de local gastronómico?", a: "Sí. Diseñamos webs para restaurantes, bares, cafés, pizzerías, hamburgueserías, heladerías, panaderías y cualquier negocio gastronómico." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 group">
                <details className="group">
                  <summary className="flex justify-between items-center py-5 sm:py-6 cursor-pointer list-none hover:text-blue-600 transition-colors">
                    <span className="text-base sm:text-lg font-light pr-6 sm:pr-8 text-black">{faq.q}</span>
                    <span className="text-2xl font-light text-gray-400 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="pb-6 pr-12">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ EMPEZÁ HOY ]</span>
            <h2 className="mt-8 text-[clamp(2rem,6vw,4rem)] font-light leading-[1.1] mb-8 text-black">
              <span className="block">La web de tu restaurante</span>
              <span className="block font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">empieza hoy.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light mb-10 sm:mb-12">
              Pedí tu maqueta gratis y en 48 horas te mostramos cómo quedaría la web de tu local gastronómico.
              <span className="block mt-2">Sin compromiso. Sin costo.</span>
            </p>
            <Link
              href="/cotizador"
              className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-[0.98]"
            >
              PEDIR WEB PARA MI RESTAURANTE
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
