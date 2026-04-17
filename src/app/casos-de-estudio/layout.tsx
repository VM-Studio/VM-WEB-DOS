import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Estudio - Resultados Reales de Nuestros Clientes",
  description: "Mirá los resultados reales que logramos para nuestros clientes: más tráfico, más consultas y más ventas. Casos de estudio de diseño web y marketing digital.",
  alternates: {
    canonical: "https://vmstudioweb.online/casos-de-estudio",
  },
  openGraph: {
    title: "Casos de Estudio - VM Studio | Resultados Reales",
    description: "Descubrí cómo ayudamos a empresas a crecer con diseño web y marketing digital. Resultados comprobados.",
    url: "https://vmstudioweb.online/casos-de-estudio",
  },
};

export default function CasosDeEstudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
