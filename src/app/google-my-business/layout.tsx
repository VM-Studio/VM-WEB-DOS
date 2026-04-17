import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Google My Business: Posicionamos tu negocio en Google Maps",
  description: "Optimizamos tu ficha de Google My Business para que aparezcas primero en Google Maps. Más llamadas, más visitas y más clientes locales para tu negocio.",
  keywords: "google my business, optimizar google my business, posicionar google maps, SEO local, ficha google negocio argentina",
  alternates: { canonical: "https://vmstudioweb.online/google-my-business" },
  openGraph: { title: "Google My Business | VM Studio", description: "Posicionamos tu negocio en Google Maps. Más clientes locales.", url: "https://vmstudioweb.online/google-my-business" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
