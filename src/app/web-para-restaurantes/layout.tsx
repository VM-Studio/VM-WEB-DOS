import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Páginas Web para Restaurantes y Gastronomía | Menú online y reservas",
  description: "Diseñamos la web de tu restaurante con menú digital, reservas online y optimizada para Google Maps. Más clientes a tu local. Maqueta gratis sin compromiso.",
  keywords: "páginas web para restaurantes, web para gastronomía, menú online restaurante, diseño web bar restaurante argentina, reservas online restaurante",
  alternates: { canonical: "https://vmstudioweb.online/web-para-restaurantes" },
  openGraph: { title: "Páginas Web para Restaurantes | VM Studio", description: "Webs profesionales para restaurantes con menú digital y reservas online.", url: "https://vmstudioweb.online/web-para-restaurantes" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
