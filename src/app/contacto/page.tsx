"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "../../components/Footer";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: any;
  }
}

function trackWhatsApp() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contacto',
      event_label: 'whatsapp',
    });
    window.gtag('event', 'conversion', {
      send_to: 'AW-18011718561',
    });
  }
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact');
  }
}

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  notes: string;
  whatsapp: "si" | "no" | "";
};

export default function ContactoPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
    whatsapp: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  function update(field: keyof FormState, value: string) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push('/agradecimiento');
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-400 text-base focus:outline-none focus:border-blue-500 transition-colors duration-200";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
            [ CONTACTO ]
          </span>
          <h1 className="mt-3 sm:mt-4 text-[clamp(2rem,8vw,4rem)] font-light leading-[1.05] sm:leading-[0.95] tracking-[-0.02em] mb-3 sm:mb-4 text-black">
            Contanos sobre{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              tu proyecto
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-xl">
            Completá el formulario y te contactamos en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-16 sm:pb-20 lg:pb-32 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

            {/* Nombre + Empresa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium tracking-[0.15em] text-gray-500">NOMBRE *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium tracking-[0.15em] text-gray-500">EMPRESA</label>
                <input
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Nombre de tu empresa"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email + Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium tracking-[0.15em] text-gray-500">EMAIL *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium tracking-[0.15em] text-gray-500">TELÉFONO</label>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+54 11 ..."
                  className={inputClass}
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium tracking-[0.15em] text-gray-500">MENSAJE</label>
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Contanos tu idea o necesidad, te respondemos en menos de 24 hs..."
                rows={5}
                className="w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-400 text-base focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none min-h-[120px]"
              />
            </div>

            {/* ¿Responder por WhatsApp? */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-medium tracking-[0.15em] text-gray-500">
                ¿DESEA QUE TE CONTESTEMOS POR WHATSAPP?
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => update("whatsapp", "si")}
                  className={`px-6 py-3 text-sm font-medium tracking-wider border transition-all duration-200 min-h-[44px] ${
                    form.whatsapp === "si"
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  SÍ
                </button>
                <button
                  type="button"
                  onClick={() => update("whatsapp", "no")}
                  className={`px-6 py-3 text-sm font-medium tracking-wider border transition-all duration-200 min-h-[44px] ${
                    form.whatsapp === "no"
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="pt-2 sm:pt-4 border-t border-gray-100" />

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  w-full sm:w-auto
                  px-8 py-4
                  bg-gradient-to-r from-gray-900 to-blue-700
                  text-white text-sm font-medium tracking-wider
                  transition-all duration-300
                  hover:shadow-xl hover:scale-[1.02]
                  active:scale-[0.98]
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {status === "sending" ? "ENVIANDO..." : "ENVIAR CONSULTA"}
              </button>

              {status === "error" && (
                <span className="text-sm text-red-500 font-medium text-center sm:text-left">
                  Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp.
                </span>
              )}
            </div>

            {/* Aviso de privacidad */}
            <p className="text-xs text-gray-400 font-light">
              Al enviar este formulario aceptás nuestros{' '}
              <Link href="/terminos-y-condiciones" className="underline hover:text-gray-600 transition-colors">
                Términos y Condiciones
              </Link>
              {' '}y nuestra{' '}
              <Link href="/politica-de-privacidad" className="underline hover:text-gray-600 transition-colors">
                Política de Privacidad
              </Link>
              .
            </p>

          </form>

          {/* Alternative contact */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-3">¿Preferís contactarnos directamente?</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a
                href="https://wa.me/541124508191"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span className="text-green-500">●</span> WhatsApp — 11 2450-8191
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=vmstudio.online@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span className="text-blue-500">●</span> vmstudio.online@gmail.com
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
