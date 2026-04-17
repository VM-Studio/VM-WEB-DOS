import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El mejor desarrollo de páginas Web para empresas - Diseño Web Profesional",
  description: "Creamos páginas web de alto rendimiento para empresas. Diseño moderno, carga rápida y optimizada para convertir visitas en clientes. Maqueta gratis sin compromiso.",
  keywords: "desarrollo de páginas web para empresas, diseño web profesional, crear página web, página web para negocio, diseño web argentina, páginas web pilar buenos aires",
  alternates: {
    canonical: "https://vmstudioweb.online/paginas-web",
  },
  openGraph: {
    title: "El mejor desarrollo de páginas Web para empresas | VM Studio",
    description: "Páginas web profesionales que convierten visitas en clientes. Maqueta gratis sin compromiso.",
    url: "https://vmstudioweb.online/paginas-web",
  },
};

export default function LandingPaginasWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
