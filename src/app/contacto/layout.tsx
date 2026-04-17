import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Pedí tu Maqueta Web Gratis",
  description: "Contactanos y pedí tu maqueta web gratis. Te respondemos en menos de 24 horas con una propuesta personalizada para tu empresa en Pilar y Buenos Aires.",
  alternates: {
    canonical: "https://vmstudioweb.online/contacto",
  },
  openGraph: {
    title: "Contacto - VM Studio | Maqueta Web Gratis",
    description: "Completá el formulario y recibí una propuesta personalizada en menos de 24 horas.",
    url: "https://vmstudioweb.online/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
