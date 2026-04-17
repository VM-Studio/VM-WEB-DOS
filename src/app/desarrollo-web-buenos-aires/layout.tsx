import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Desarrollo de páginas Web en Buenos Aires para empresas",
  description: "Agencia de desarrollo web en Buenos Aires. Creamos páginas web profesionales para empresas y negocios porteños. Diseño moderno, SEO y maqueta gratis sin compromiso.",
  keywords: "desarrollo web buenos aires, diseño web buenos aires, páginas web para empresas buenos aires, agencia web caba, crear página web buenos aires",
  alternates: { canonical: "https://vmstudioweb.online/desarrollo-web-buenos-aires" },
  openGraph: { title: "Desarrollo Web en Buenos Aires | VM Studio", description: "Páginas web profesionales para empresas en Buenos Aires. Maqueta gratis en 48hs.", url: "https://vmstudioweb.online/desarrollo-web-buenos-aires" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
