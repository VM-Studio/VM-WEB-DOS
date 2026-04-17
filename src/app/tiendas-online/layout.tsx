import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tiendas Online Profesionales | Creamos tu e-commerce listo para vender",
  description: "Creamos tu tienda online profesional con diseño moderno, pasarela de pago y optimizada para Google. Tu e-commerce listo para vender en 2 semanas.",
  keywords: "tiendas online, crear tienda online, e-commerce argentina, tienda virtual, vender por internet argentina, diseño tienda online",
  alternates: { canonical: "https://vmstudioweb.online/tiendas-online" },
  openGraph: { title: "Tiendas Online Profesionales | VM Studio", description: "Creamos tu tienda online lista para vender. Diseño moderno y pasarela de pago.", url: "https://vmstudioweb.online/tiendas-online" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
