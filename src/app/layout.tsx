import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import MetaPixel from '../components/MetaPixel';
import CookieBanner from '../components/CookieBanner';
import WhatsAppButton from '../components/WhatsAppButton';
import UTMTracker from '../components/UTMTracker';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ============================================
// CONFIGURACIÓN DEL META PIXEL
// ============================================
const META_PIXEL_ID = '34667264706250799';
// ============================================

export const metadata: Metadata = {
  title: {
    default: 'El mejor desarrollo de páginas Web para empresas - VM Studio',
    template: '%s | VM Studio',
  },
  description: 'Diseño y desarrollo de páginas web profesionales para empresas en Argentina. Generamos clientes nuevos con páginas web de alto rendimiento y posicionamiento en Google. Garantizado en 30 días.',
  keywords: 'desarrollo de páginas web para empresas, diseño web profesional, páginas web argentina, google ads, marketing digital, posicionamiento google, publicidad online, pilar, buenos aires',
  openGraph: {
    title: 'VM STUDIO - Clientes Nuevos en 30 Días Garantizado',
    description: 'Página Web y publicidad de Google optimizada para generar clientes nuevos. Empezando este mes.',
    url: 'https://vmstudioweb.online',
    siteName: 'VM Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VM Studio - Desarrollo Web y Marketing Digital en Pilar',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VM Studio - Clientes Nuevos Garantizados',
    description: 'Página Web y publicidad optimizada para generar clientes nuevos en 30 días.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vmstudioweb.online',
  },
  verification: {
    other: {
      'facebook-domain-verification': ['qnxipw6xcwrytnke3gr9js3oc7d6ow'],
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZSZXFDJ');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Preconnect to external domains */}
  <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        
        {/* Script to prevent FOUC (Flash of Unstyled Content) */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem('theme') || 'light';
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          `}
        </Script>

        {/* Schema markup: Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://vmstudioweb.online/#organization",
                  "name": "VM Studio",
                  "url": "https://vmstudioweb.online",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://vmstudioweb.online/log.png",
                    "width": 200,
                    "height": 60
                  },
                  "sameAs": [
                    "https://www.instagram.com/vmstudio.online",
                    "https://www.linkedin.com/company/vm-studio"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+54-11-2450-8191",
                    "contactType": "customer service",
                    "availableLanguage": "Spanish"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://vmstudioweb.online/#localbusiness",
                  "name": "VM Studio",
                  "description": "Desarrollo de páginas web y marketing digital para empresas en Pilar y Buenos Aires. Generamos clientes nuevos garantizado en 30 días.",
                  "url": "https://vmstudioweb.online",
                  "telephone": "+54-11-2450-8191",
                  "email": "vmstudio.online@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Pilar",
                    "addressRegion": "Buenos Aires",
                    "addressCountry": "AR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -34.4587,
                    "longitude": -58.9142
                  },
                  "priceRange": "$$",
                  "openingHours": "Mo-Fr 09:00-18:00",
                  "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": -34.4587,
                      "longitude": -58.9142
                    },
                    "geoRadius": "50000"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de VM Studio",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Diseño y Desarrollo Web",
                          "description": "Creamos páginas web optimizadas para convertir visitas en clientes"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Google Ads y SEO",
                          "description": "Posicionamiento en Google y campañas publicitarias para generar leads"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Inteligencia Artificial y Automatización",
                          "description": "Implementación de IA para filtrar y responder consultas de clientes"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZSZXFDJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* UTM parameter capture for campaign tracking */}
        <Suspense fallback={null}>
          <UTMTracker />
        </Suspense>

        {/* Meta Pixel */}
        <MetaPixel pixelId={META_PIXEL_ID} />
        
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>

        {/* WhatsApp floating button */}
        <WhatsAppButton />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              "name": "VM Studio",
              "description": "Agencia de marketing digital especializada en generación de leads con garantía de resultados",
              "url": "https://www.vmstudioweb.online/",
              "telephone": "+54 11 1234-5678",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressRegion": "CABA",
                "postalCode": "C1425",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-34.6037",
                "longitude": "-58.3816"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.linkedin.com/company/e-ticketpro",
                "https://twitter.com/e_ticketpro",
                "https://www.instagram.com/vmstudio"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Google Ads Management",
                  "description": "Gestión profesional de campañas en Google Ads con garantía de resultados"
                },
                {
                  "@type": "Offer",
                  "name": "Meta Ads Management",
                  "description": "Campañas optimizadas en Facebook e Instagram"
                },
                {
                  "@type": "Offer",
                  "name": "Landing Page Development",
                  "description": "Páginas web optimizadas para conversión"
                }
              ],
              "review": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            })
          }}
        />
        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
