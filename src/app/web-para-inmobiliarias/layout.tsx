import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Páginas Web para Inmobiliarias | Diseño profesional con propiedades",
  description: "Diseñamos páginas web profesionales para inmobiliarias. Catálogo de propiedades, formularios de consulta y SEO local. Maqueta gratis sin compromiso.",
  keywords: "páginas web para inmobiliarias, diseño web inmobiliaria, sitio web inmobiliaria argentina, web para vender propiedades, inmobiliaria online",
  alternates: { canonical: "https://vmstudioweb.online/web-para-inmobiliarias" },
  openGraph: { title: "Páginas Web para Inmobiliarias | VM Studio", description: "Webs profesionales para inmobiliarias con catálogo de propiedades y SEO local.", url: "https://vmstudioweb.online/web-para-inmobiliarias" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
