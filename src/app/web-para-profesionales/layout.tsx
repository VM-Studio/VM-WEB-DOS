import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Páginas Web para Profesionales Independientes | Médicos, Abogados y más",
  description: "Diseñamos páginas web profesionales para médicos, abogados, psicólogos, contadores y otros profesionales independientes. Más consultas, más pacientes. Maqueta gratis.",
  keywords: "páginas web para profesionales, web para médicos, web para abogados, web para psicólogos, diseño web profesional independiente argentina",
  alternates: { canonical: "https://vmstudioweb.online/web-para-profesionales" },
  openGraph: { title: "Páginas Web para Profesionales | VM Studio", description: "Webs profesionales para médicos, abogados, psicólogos y más. Maqueta gratis.", url: "https://vmstudioweb.online/web-para-profesionales" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
