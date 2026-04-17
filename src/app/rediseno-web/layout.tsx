import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rediseño Web Profesional para empresas | Modernizamos tu sitio",
  description: "¿Tu página web está desactualizada? La rediseñamos para que genere más clientes. Diseño moderno, rápido y optimizado para Google. Maqueta gratis sin compromiso.",
  keywords: "rediseño web, rediseño página web, actualizar página web, modernizar sitio web, renovar web empresa argentina",
  alternates: { canonical: "https://vmstudioweb.online/rediseno-web" },
  openGraph: { title: "Rediseño Web Profesional | VM Studio", description: "Rediseñamos tu página web para que venda más. Maqueta gratis en 48hs.", url: "https://vmstudioweb.online/rediseno-web" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
