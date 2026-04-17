import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maqueta Web Gratis en 48 hs — Mirá cómo quedaría tu web antes de invertir | VM Studio",
  description: "Te mostramos cómo quedaría tu nueva web antes de que gastes un peso. Maqueta personalizada, gratis y sin compromiso. Listo en 48 horas.",
  keywords: "maqueta web gratis, diseño web gratis, prototipo web, web sin compromiso, diseño web argentina, maqueta web profesional",
  alternates: {
    canonical: "https://vmstudioweb.online/maqueta-gratis",
  },
  openGraph: {
    title: "Maqueta Web Gratis en 48 hs | VM Studio",
    description: "Mirá cómo quedaría tu web antes de invertir. Sin costo, sin compromiso.",
    url: "https://vmstudioweb.online/maqueta-gratis",
  },
};

export default function MaquetaGratisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
