/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

const Software = "/web.gif";
const Google = "/google.gif";
const Automatic = "/ia.gif";
const Logo = "/log.png";

const MainContent: React.FC = () => {
  
  // Servicios data corregidos
  const services = [
    {
      title: "1. TU PÁGINA WEB OPTIMIZADA",
      subtitle: "Diseño & Desarrollo Web",
      description: "Creamos o renovamos tu página web para que al menos 1 de cada 10 visitas se convierta en un cliente potencial.",
      imageSrc: Software,
    },
    {
      title: "2. PRESENCIA EN GOOGLE",
      subtitle: "Google My Business & SEO",
      description: "En cuanto tu página web esté lista, optimizamos tu perfil de Google y lo posicionamos en los primeros puestos.",
      imageSrc: Google,
    },
    {
      title: "3. INTELIGENCIA ARTIFICIAL",
      subtitle: "IA & Automatización",
      description: "Si estas sobrecargado de consultas y visitas, implementamos IA para filtrar y responder a tus clientes potenciales.",
      imageSrc: Automatic,
    }
  ];

  // Process steps corregidos
  const processSteps = [
    {
      number: "01",
      title: "Planeamos tu éxito",
      description: "Estudiamos tu mercado, empresa y competencia. Planificamos una solución personalizada para vos y te armamos una maqueta web gratis para que tengas un parámetro real de cómo se vería tu web nueva o remodelada.",
      duration: "48 HORAS"
    },
    {
      number: "02",
      title: "Comunicación y desarrollo",
      description: "Te vamos mostrando avances semanales mientras desarrollamos tu app o página web.",
      duration: "SEMANALMENTE"
    },
    {
      number: "03",
      title: "Mantenimiento mensual",
      description: "Realizamos cambios, modificaciones que necesites y mantenemos todo actualizado a las últimas tecnologías. (Opcional)",
      duration: "MENSUAL"
    }
  ];

  return (
    <>
      {/* Hero Section - X.ai style with video space */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle gradient background for light and dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        {/* Very subtle pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Text content */}
            <div className="max-w-2xl">
              {/* Small caption */}
              <div className="mb-6 sm:mb-8">
                <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
                  [ GARANTIZADO EN 30 DÍAS ]
                </span>
              </div>

              {/* Main headline */}
              <h1 className="text-[clamp(1.8rem,8vw,2.4rem)] sm:text-[clamp(2rem,7vw,4.5rem)] font-light leading-[0.95] tracking-[-0.02em] mb-6 sm:mb-8">
                <span className=" text-black">Desarrollamos Páginas Web
                de alto rendimiento para</span> {/*  */}
                <span className=" font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  empresas.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 font-light">
                  Creamos o renovamos tu página web y ponemos a tu empresa enfrente de personas que están activamente buscando tus servicios en Google.            
                  <span className="block mt-4 text-black font-normal">
                  Empezando este mes.               
                 </span>      
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/maqueta-gratis"
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
                  <span className="relative z-10">PEDIR MAQUETA WEB GRATIS</span>
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

            {/* Right column - Video space */}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
      
            <div className="w-[1px] h-8 bg-gradient-to-b from-blue-600 to-transparent"/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="capabilities" className="py-16 sm:py-24 lg:py-32 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-20">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ SERVICIOS ]
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black">
              Cómo te ayudamos a<span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent"> crecer</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group relative p-8 
                  bg-white
                  border border-gray-200
                  hover:border-blue-500
                  transition-colors duration-300
                  overflow-hidden
                  hover:shadow-xl
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Hueco para foto con GIF en vez de icono */}
                  <div className="w-full h-full mb-6 flex items-center justify-center border-gray-200 border bg-gray-200 rounded-md">
                    <Image 
                      src={service.imageSrc}
                      width={150}
                      height={150}
                      loading="lazy"
                      className='h-full w-full object-contain'
                      alt={service.title}
                    />
                  </div>
                  
                  <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500">
                    {service.subtitle}
                  </span>
                  <h3 className="mt-2 text-2xl font-light mb-4 text-black">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cotizador Section */}
      <section className="relative py-16 sm:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">[ COTIZADOR ]</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-black">
              ¿Cuánto cuesta tu{' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                proyecto?
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-500 font-light">
              Calculá tu presupuesto estimado en menos de 2 minutos.
              <span className="block mt-1">Sin registrarte, sin compromiso.</span>
            </p>
            <div className="mt-8">
              <Link
                href="/cotizador"
                className="
                  inline-block px-10 py-4
                  bg-gradient-to-r from-gray-900 to-blue-700
                  text-white text-sm font-medium tracking-[0.2em]
                  transition-all duration-300
                  hover:scale-105 hover:shadow-xl
                  active:scale-[0.98]
                "
              >
                CALCULAR AHORA →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-24 lg:py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-20">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ METODOLOGÍA ]
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black">
              Cómo <span className="font-medium">trabajamos</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group flex flex-col h-full"
              >
                <div className="relative flex flex-col flex-1">
                  <span className="text-5xl font-light text-blue-300 group-hover:text-blue-600 transition-colors duration-300">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-medium mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    {step.description}
                  </p>
                  <span className="text-xs font-medium text-blue-600 tracking-wider mt-auto">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="enterprise" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ DIFERENCIAL ]
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
              Por qué <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">nosotros</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-light mb-6 text-gray-500">Otros</h3>
              <ul className="space-y-4">
                {[
                  "Contratos de 12+ meses",
                  "Reportes mensuales",
                  "Múltiples intermediarios",
                  "Sin garantías"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-red-500 mt-0.5 text-sm">✕</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-5 sm:px-8 py-4 bg-gradient-to-br bg-gray-900 border-blue-500 border text-white rounded-lg">
                        <Link href="/" className="flex items-center">
              <Image 
                width={60}
                height={60}
                src={Logo}
                alt="VM Studio - Desarrollo Web y Marketing Digital"
              />
            </Link>
              <ul className="space-y-4 pb-4">
                {[
                  "Si no funciona, te devolvemos tu dinero (válido para servicios de posicionamiento en Google)",
                  "Llamadas semanales y reportes en tiempo real",
                  "Apps, páginas web, posicionamiento en Google, lo cubrimos todo",
                  "Flexibles, ningún contrato obligatorio a largo plazo"
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
      <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-20">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ PREGUNTAS FRECUENTES ]
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black">
              Todo lo que necesitás <span className="font-medium">saber</span>
            </h2>
          </div>

          <div className="space-y-1">
            {[
              {
                q: "¿Podés mostrarme ejemplos de otras empresas como la mía y cómo las ayudaste?",
                a: "Sí. Sentite libre de chequear nuestros casos de estudio."
              },
              {
                q: "¿Qué van a hacer exactamente por mi negocio?",
                a: "Vamos a desarrollar una página web personalizada o mejorar tu página actual y, si elegís sumar el servicio de Posicionamiento en Google, la vamos a posicionar en los primeros puestos de Google."
              },
              {
                q: "¿Cuánto tiempo va a tardar esto?",
                a: "Dependiendo de tu proyecto, pero generalmente en los primeros 30 días."
              },
              {
                q: "¿Cómo sé si me van a devolver el dinero?",
                a: "Somos una compañía registrada junto a un software que desarrollamos. Trabajás con profesionales que no están interesados en llevarse una mala imagen o en perder su reputación. Cuando quieras un reintegro de tu dinero, hacénoslo saber."
              },
              {
                q: "¿Cuánto tiempo va a tomar de mi parte?",
                a: "Casi nada. Vos solo tenés que responder a todas las consultas que te lleguen."
              },
              {
                q: "¿Tengo que aprender algo técnico?",
                a: "No hay nada técnico que debas hacer. Nosotros nos encargamos de todo."
              },
              {
                q: "¿Qué pasa si no funciona con mi tipo de negocio?",
                a: "Nos aseguramos de traer resultados a tu exacto tipo de negocio. Tenemos cero interés en devolver el dinero y dejarnos un mal nombre. Estás en buenas manos."
              },
              {
                q: "¿Cuánto tiempo estoy comprometido con este contrato?",
                a: "Hay absoluto cero compromiso con nuestra oferta. Todos los meses te consultaremos si estás interesado en continuar o no."
              },
              {
                q: "¿Puedo pensarlo y después contactarme?",
                a: "Mejor escribinos por WhatsApp, así ya tenés nuestro contacto guardado para cuando quieras dar el paso. Te vamos a enviar material mostrando cómo es trabajar con nosotros."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-200 group"
              >
                <details className="group">
                  <summary className="flex justify-between items-center py-5 sm:py-6 cursor-pointer list-none hover:text-blue-600 transition-colors">
                    <span className="text-base sm:text-lg font-light pr-6 sm:pr-8 text-black">{faq.q}</span>
                    <span className="text-2xl font-light text-gray-400 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="pb-6 pr-12">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ EMPEZÁ HOY ]
            </span>
            
            <h2 className="mt-8 text-[clamp(2rem,6vw,4rem)] font-light leading-[1.1] mb-8 text-black">
              <span className="block">Hagamos crecer a</span>
              <span className="block font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                tu empresa
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light mb-10 sm:mb-12">
              Programá una llamada de 30 minutos. Sin compromiso.
              <span className="block mt-2">Te mostramos exactamente cómo podemos hacer crecer a tu empresa.</span>
            </p>
            
            <Link
              href="/maqueta-gratis"
              className="
                inline-block px-8 sm:px-12 py-4
                bg-gradient-to-r from-gray-900 to-blue-700
                text-white
                text-sm font-medium tracking-wider
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                active:scale-[0.98]
              "
            >
              PEDIR MAQUETA WEB GRATIS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MainContent;
