/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: any;
  }
}

function trackWhatsApp() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contacto',
      event_label: 'whatsapp',
    });
    window.gtag('event', 'conversion', {
      send_to: 'AW-18011718561',
    });
  }
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact');
  }
}

const ETICKETPRO = "/eticketproo.gif";
const WoodPallet = "/pallet.gif";
const Yesica = "/yesica-oviedo.gif";
const AJR = "/ajr.gif";
const Aspen = "/aspen.gif";
const Allbroker = "/allbroker.gif";

// Case study type
interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  client: string;
  industry: string;
  services: string[];
  results: string;
  slug: string;
  image?: any;
}

export default function CaseStudiesPage() {
  const [showMore, setShowMore] = useState(false);

  // Case studies data - currently only e-ticketpro
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'E-ticketpro: La ticketera del futuro',
      excerpt: 'Desarrollamos una plataforma completa para la venta de entradas online, con sistema de gestión para organizadores de eventos y experiencia optimizada para compradores.',
      client: 'E-ticketpro',
      industry: 'EVENTOS & ENTRETENIMIENTO',
      services: ['Desarrollo Web', 'App Mobile', 'Sistema de Pagos', 'Automatizaciones'],
      results: '+100 eventos creados, +5K entradas vendidas',
      slug: 'https://e-ticketpro.com/',
      image: ETICKETPRO,
    },
    {
      id: '2',
      title: 'Wood Pallet: Pallets de madera para cada necesidad',
      excerpt: 'Desarrollamos el sitio web de Wood Pallet, empresa familiar con más de 20 años de trayectoria en fabricación y venta de pallets de madera nuevos y seminuevos. El sitio incluye catálogo completo de productos con visualización 3D interactiva, cotizador online, sección de servicios, posicionamiento SEO y formulario de contacto directo.',
      client: 'Wood Pallet',
      industry: 'INDUSTRIA & LOGÍSTICA',
      services: ['Desarrollo Web', 'Catálogo con Modelos 3D', 'Cotizador Online', 'SEO'],
      results: 'Presencia online desde cero, captación de clientes B2B',
      slug: 'https://woodpallets.com.ar',
      image: WoodPallet,
    },
    {
      id: '3',
      title: 'Yesica Oviedo: Desarrollo Inmobiliario',
      excerpt: 'Desarrollamos una página web completa con formulario de contacto, optimización de SEO, blog con artículos, llamadas a la acción y otras características para Yesica Oviedo.',
      client: 'Yesica Oviedo',
      industry: 'REAL ESTATE',
      services: ['Desarrollo Web', 'Optimización SEO', 'Blog', 'Formularios'],
      results: '+300% aumento en consultas, +50 contactos mensuales',
      slug: 'https://yesicaoviedo.com/',
      image: Yesica,
    },
    {
      id: '4',
      title: 'Organización AJR: Broker de Seguros',
      excerpt: 'Creamos una página web para el broker de seguros AJR, completamente optimizada para búsquedas locales en Google, perfiles de Google My Business, formularios de contacto y una interfaz para manejar consultas.',
      client: 'Organización AJR',
      industry: 'SEGUROS',
      services: ['Desarrollo Web', 'SEO Local', 'Google My Business', 'Formularios'],
      results: '+120% en tráfico orgánico, +40 consultas mensuales',
      slug: 'https://www.organizacionajr.com/',
      image: AJR,
    },
    {
      id: '5',
      title: 'The Aspen Sound: Banda en vivo',
      excerpt: 'Desarrollamos una página web para la reconocida banda The Aspen Sound, presentando su repertorio, historial de eventos, formularios de contacto para contratación y optimización en Google.',
      client: 'The Aspen Sound',
      industry: 'BANDA MUSICAL',
      services: ['Desarrollo Web', 'SEO', 'Formularios de Contratación', 'Galería Multimedia'],
      results: '+25 contrataciones directas, +200% en alcance online',
      slug: 'https://www.theaspensound.com/',
      image: Aspen,
    },
    {
      id: '6',
      title: 'All Broker',
      excerpt: 'Desarrollamos una página web básica para un broker de seguros en Buenos Aires. Incluye secciones informativas del broker, formularios de contacto y presencia básica en Google.',
      client: 'All Broker SRL',
      industry: 'BROKER DE SEGUROS',
      services: ['Desarrollo Web', 'SEO Básico', 'Formularios'],
      results: '+80% visibilidad local, +15 consultas mensuales',
      slug: 'https://www.allbrokersrl.com/',
      image: Allbroker,
    }
  ];

  const extraCaseStudies: CaseStudy[] = [
    {
      id: '6',
      title: 'Kudu',
      excerpt: 'Desarrollamos una página web con catálogo interactivo completo para el representante oficial de KUDU en Buenos Aires. El sitio presenta sus líneas de purificadores, campanas, anafes, hornos y extractores con fichas técnicas detalladas, optimización SEO y formulario de contacto directo.',
      client: 'Kudu Buenos Aires',
      industry: 'ELECTRODOMÉSTICOS DE COCINA',
      services: ['Desarrollo Web', 'Catálogo Digital', 'SEO Local', 'Formularios'],
      results: '+200% en consultas de productos, presencia orgánica en Google',
      slug: 'https://kuduobras.com/',
      image: '/kudu.mp4',
    },
    {
      id: '7',
      title: 'Dr Brass Saxofones',
      excerpt: 'Desarrollamos la página web para DR BRASS, la tienda líder en Rosario especializada en saxofones e instrumentos de viento. El sitio incluye catálogo completo de productos nuevos y usados, secciones de servicios (luthería, canjes, consignaciones y asesoramiento), optimización SEO local y formulario de contacto.',
      client: 'DR BRASS Rosario',
      industry: 'INSTRUMENTOS DE VIENTO',
      services: ['Desarrollo Web', 'Catálogo de Productos', 'SEO Local', 'Formularios'],
      results: '+150% visibilidad online, presencia en búsquedas locales de Rosario',
      slug: 'https://drbrassrosario.com/',
      image: '/saxofon.mp4',
    },
    {
      id: '8',
      title: 'Fili & Asociados',
      excerpt: 'Desarrollamos la página web para el estudio jurídico del Dr. Augusto Filí, con más de 20 años de trayectoria en Córdoba. El sitio presenta sus áreas de práctica (derecho laboral, sucesiones, indemnizaciones y familia), artículos de prensa destacados, testimonios de clientes y un sistema de consulta directa por WhatsApp.',
      client: 'Filí & Asociados',
      industry: 'ESTUDIO DE ABOGADOS',
      services: ['Desarrollo Web', 'SEO Local', 'Formularios', 'Integración WhatsApp'],
      results: '+180% en consultas digitales, posicionamiento en búsquedas legales de Córdoba',
      slug: 'https://filiyasociados.com/',
      image: '/abogados.mp4',
    },
    {
      id: '9',
      title: 'Ali Broker',
      excerpt: 'Desarrollamos una página web de alto impacto para Ali Broker, especializados en propiedades exclusivas. El sitio presenta una residencia única en Altos de Campo Grande: 510m² sobre 1600m² de terreno con sistema Béton Brut, galería de imágenes profesional, ficha técnica detallada y formulario de asesoría personalizada.',
      client: 'Ali Broker',
      industry: 'REAL ESTATE',
      services: ['Desarrollo Web', 'Galería Multimedia', 'Formularios', 'SEO'],
      results: '+200% en consultas de propiedades, captación de compradores calificados',
      slug: 'https://alibroker-propiedades.com/',
      image: '/propiedades.mp4',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ CASOS DE ESTUDIO ]
            </span>
            <h1 className="mt-4 text-[clamp(2.2rem,8vw,4rem)] font-light leading-[0.9] tracking-[-0.02em] mb-6 text-black">
              Proyectos que {' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                cambiaron empresas
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light">
              Conocé cómo ayudamos a empresas locales a crecer.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.id} className="group">
                <Link href={`${caseStudy.slug}`} className="block" target="_blank" rel="noopener noreferrer">
                  <div className="grid md:grid-cols-2 gap-0 bg-white border border-gray-200 overflow-hidden hover:border-blue-500 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                    <div className="relative h-[220px] sm:h-[260px] md:h-[360px] bg-gray-100">
                      {caseStudy.image && (
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      )}
                    </div>
                    <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12 md:h-[360px] overflow-hidden">
                      <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500">
                        {caseStudy.industry}
                      </span>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-light mb-4 text-black group-hover:text-blue-600 transition-colors">
                        {caseStudy.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                        {caseStudy.excerpt}
                      </p>
                      <div className="mt-4 sm:mt-6">
                        <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                          Ver página web
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}

            {/* Extra cases - shown when showMore is true */}
            {showMore && extraCaseStudies.map((caseStudy) => (
              <article
                key={caseStudy.id}
                className="group animate-fadeIn"
                style={{ animation: 'fadeInUp 0.4s ease forwards' }}
              >
                <Link href={`${caseStudy.slug}`} className="block" target="_blank" rel="noopener noreferrer">
                  <div className="grid md:grid-cols-2 gap-0 bg-white border border-gray-200 overflow-hidden hover:border-blue-500 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                    <div className="relative h-[220px] sm:h-[260px] md:h-[360px] bg-gray-100">
                      {caseStudy.image && caseStudy.image.endsWith('.mp4') ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        >
                          <source src={caseStudy.image} type="video/mp4" />
                        </video>
                      ) : caseStudy.image && (
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                    </div>
                    <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12 md:h-[360px] overflow-hidden">
                      <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500">
                        {caseStudy.industry}
                      </span>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-light mb-4 text-black group-hover:text-blue-600 transition-colors">
                        {caseStudy.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                        {caseStudy.excerpt}
                      </p>
                      <div className="mt-4 sm:mt-6">
                        <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                          Ver página web
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load more button */}
          <div className="mt-12 sm:mt-20 text-center">
            <button
              onClick={() => !showMore && setShowMore(true)}
              className={`
                inline-flex items-center justify-center w-16 h-16 mb-4
                transition-all duration-300
                ${showMore
                  ? 'bg-gray-100 cursor-default'
                  : 'bg-gradient-to-br from-gray-900 to-blue-700 hover:scale-110 hover:shadow-xl cursor-pointer'
                }
              `}
              aria-label={showMore ? 'No hay más proyectos' : 'Ver más proyectos'}
            >
              <svg
                className={`w-8 h-8 transition-colors duration-300 ${showMore ? 'text-gray-400' : 'text-white'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <h3 className="text-xl font-light text-gray-600 mb-2">
              {showMore ? 'Nuevos proyectos en camino' : 'Más casos próximamente'}
            </h3>
            <p className="text-gray-500 mb-8">
              {showMore ? 'Seguimos creciendo y sumando nuevos clientes a nuestra cartera.' : 'Estamos trabajando en nuevos proyectos increíbles'}
            </p>
            <a
              href="https://wa.me/541124508191"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsApp}
              className="
                inline-block px-8 py-4
                bg-gradient-to-r from-gray-900 to-blue-700
                text-white
                text-sm font-medium tracking-wider
                transition-all duration-300
                hover:shadow-2xl hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              PEDIR MAQUETA GRATIS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
