import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia de Marketing Digital y Posicionamiento en Google para empresas",
  description: "Agencia especializada en marketing digital y Google Ads para empresas en Argentina. Posicionamiento SEO, publicidad en Google, campañas que generan clientes reales. Resultados garantizados.",
  keywords: "marketing digital para empresas, google ads argentina, posicionamiento en google, seo para negocios, publicidad online, agencia marketing digital pilar buenos aires, google ads empresas",
  alternates: {
    canonical: "https://vmstudioweb.online/marketing-digital",
  },
  openGraph: {
    title: "Agencia de Marketing Digital y Google Ads para empresas | VM Studio",
    description: "Posicionamiento en Google y campañas publicitarias que generan clientes reales para tu negocio. Garantizado en 30 días.",
    url: "https://vmstudioweb.online/marketing-digital",
  },
};

export default function LandingMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
