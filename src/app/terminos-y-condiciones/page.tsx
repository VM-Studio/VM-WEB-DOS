import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — VM Studio',
  description: 'Conocé los términos y condiciones de contratación de los servicios de VM Studio.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vmstudioweb.online/terminos-y-condiciones' },
}

export default function TerminosYCondicionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
            [ LEGAL ]
          </span>
          <h1 className="mt-3 sm:mt-4 text-[clamp(2rem,8vw,4rem)] font-light leading-[1.05] sm:leading-[0.95] tracking-[-0.02em] mb-3 sm:mb-4 text-black">
            Términos y{' '}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Condiciones
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-xl">
            Última actualización: 5 de abril de 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-20 lg:pb-32 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-4 border-t border-gray-100 space-y-10">

            {/* 1. Aceptación */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                01 — ACEPTACIÓN DE LOS TÉRMINOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Al contratar cualquier servicio de VM Studio o al utilizar el sitio web{' '}
                <a href="https://vmstudioweb.online" className="text-blue-600 hover:underline">
                  vmstudioweb.online
                </a>
                , el cliente declara haber leído, comprendido y aceptado en su totalidad los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestros servicios.
              </p>
            </div>

            {/* 2. Descripción de servicios */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                02 — DESCRIPCIÓN DE LOS SERVICIOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
                VM Studio es una agencia digital con sede en Argentina que ofrece los siguientes servicios:
              </p>
              <ul className="space-y-2">
                {[
                  'Diseño y desarrollo de páginas web profesionales',
                  'Desarrollo de aplicaciones web a medida',
                  'Desarrollo de aplicaciones móviles (iOS y Android)',
                  'Landing pages optimizadas para conversión',
                  'Sistemas y plataformas digitales a medida',
                  'Gestión de publicidad digital en Google Ads y Meta Ads (Facebook e Instagram)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                El alcance específico de cada servicio se define en la propuesta comercial acordada entre VM Studio y el cliente previo al inicio del trabajo.
              </p>
            </div>

            {/* 3. Proceso de contratación */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                03 — PROCESO DE CONTRATACIÓN
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Los servicios se contratan mediante una propuesta comercial escrita elaborada por VM Studio y aceptada formalmente por el cliente. La aceptación puede ser por escrito (email, WhatsApp u otro medio digital) o mediante el pago del anticipo acordado, lo que ocurra primero.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                El inicio efectivo del trabajo queda condicionado a:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'La aceptación formal de la propuesta comercial.',
                  'El pago del anticipo pactado (cuando corresponda).',
                  'La entrega por parte del cliente de los materiales, accesos e información necesarios para comenzar.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Pagos */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                04 — PAGOS Y FACTURACIÓN
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Los precios de cada servicio se establecen en la propuesta comercial correspondiente. VM Studio puede requerir un anticipo para dar inicio al proyecto, cuyo porcentaje se especificará en dicha propuesta.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Los pagos atrasados pueden generar demoras en los plazos de entrega. VM Studio se reserva el derecho de pausar o suspender el trabajo ante la falta de pago en los plazos acordados, sin que esto genere responsabilidad por incumplimiento de plazos de parte de VM Studio.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Todos los precios se expresan en la moneda indicada en cada propuesta (pesos argentinos o dólares estadounidenses según corresponda).
              </p>
            </div>

            {/* 5. Plazos */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                05 — PLAZOS DE ENTREGA
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Los plazos de entrega se acuerdan en cada propuesta comercial y son estimativos. Pueden verse afectados por:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Demoras en la entrega de materiales, contenidos, textos o imágenes por parte del cliente.',
                  'Demoras en la revisión y aprobación de entregas parciales.',
                  'Cambios en el alcance del proyecto solicitados durante el desarrollo.',
                  'Factores externos fuera del control de VM Studio (caídas de plataformas de terceros, dominios, hosting, etc.).',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                VM Studio no se responsabiliza por demoras originadas en causas ajenas a su control. En caso de demoras imputables a VM Studio, el cliente será notificado con anticipación.
              </p>
            </div>

            {/* 6. Propiedad intelectual */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                06 — PROPIEDAD INTELECTUAL
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Una vez abonado el servicio en su totalidad, el cliente recibe los derechos de uso sobre el producto final entregado (sitio web, aplicación, diseños, etc.), en los términos acordados en la propuesta comercial.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Durante el desarrollo y hasta la cancelación total del servicio, el código, diseños, maquetas y materiales desarrollados por VM Studio son propiedad de VM Studio.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                VM Studio se reserva el derecho de exhibir el trabajo realizado en su portfolio, sitio web y redes sociales como muestra de su trabajo, salvo que el cliente solicite expresamente lo contrario por escrito antes de la entrega.
              </p>
            </div>

            {/* 7. Revisiones */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                07 — REVISIONES Y CAMBIOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Cada propuesta comercial especifica la cantidad de rondas de revisión incluidas en el precio. Una ronda de revisión consiste en un conjunto de cambios menores solicitados por el cliente sobre una entrega parcial o final.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Los cambios que excedan las rondas de revisión acordadas, o que impliquen modificaciones sustanciales al alcance original del proyecto, pueden tener un costo adicional. Dicho costo será informado y acordado previamente con el cliente antes de ejecutarse.
              </p>
            </div>

            {/* 8. Servicios de publicidad digital */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                08 — SERVICIOS DE PUBLICIDAD DIGITAL
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Para los servicios de gestión de campañas de Google Ads y Meta Ads, el cliente es responsable de:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Proveer acceso a sus cuentas publicitarias (Google Ads, Meta Business Manager).',
                  'Contar con presupuesto de inversión en pauta publicitaria, independiente del honorario de gestión de VM Studio.',
                  'Proveer información veraz sobre su negocio, público objetivo y objetivos comerciales.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                VM Studio no garantiza resultados específicos en campañas publicitarias (cantidad de leads, ventas, ROAS, etc.), ya que estos dependen de múltiples factores externos como la competencia, el mercado, el presupuesto de pauta y las propias plataformas de Google y Meta.
              </p>
            </div>

            {/* 9. Limitación de responsabilidad */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                09 — LIMITACIÓN DE RESPONSABILIDAD
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                VM Studio no se responsabiliza por pérdidas de negocio, pérdida de datos, lucro cesante, daño emergente ni ningún otro perjuicio indirecto derivado del uso, imposibilidad de uso o funcionamiento incorrecto de los productos o servicios entregados.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                En cualquier caso, la responsabilidad máxima de VM Studio frente al cliente se limita al monto total efectivamente abonado por el servicio en cuestión durante los últimos 12 meses.
              </p>
            </div>

            {/* 10. Confidencialidad */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                10 — CONFIDENCIALIDAD
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                VM Studio se compromete a mantener la confidencialidad de toda la información del cliente a la que tenga acceso en el marco de la prestación de sus servicios (datos del negocio, accesos a plataformas, información estratégica, etc.) y a no divulgarla a terceros, salvo requerimiento legal expreso.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Esta obligación de confidencialidad se extiende más allá de la finalización del contrato o relación comercial.
              </p>
            </div>

            {/* 11. Rescisión */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                11 — RESCISIÓN DEL SERVICIO
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Cualquiera de las partes puede rescindir el contrato de servicios con un aviso previo mínimo de 15 (quince) días corridos, comunicado por escrito a la otra parte.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Los trabajos realizados hasta la fecha efectiva de rescisión serán facturados y deberán ser abonados por el cliente de forma proporcional al avance del proyecto. VM Studio entregará los materiales desarrollados hasta esa instancia una vez recibido el pago correspondiente.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Los anticipos abonados no son reembolsables salvo que la rescisión sea imputable exclusivamente a VM Studio por incumplimiento de sus obligaciones.
              </p>
            </div>

            {/* 12. Ley aplicable */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                12 — LEY APLICABLE Y JURISDICCIÓN
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Los presentes Términos y Condiciones se rigen por las leyes de la República Argentina, en particular por el Código Civil y Comercial de la Nación y las normas aplicables a la prestación de servicios digitales.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                Cualquier controversia, disputa o reclamación derivada de estos términos o de la relación comercial con VM Studio que no pueda resolverse de forma amistosa, será sometida a los tribunales ordinarios competentes de la Ciudad Autónoma de Buenos Aires, Argentina, renunciando expresamente las partes a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

            {/* 13. Modificaciones */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                13 — MODIFICACIONES DE ESTOS TÉRMINOS
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                VM Studio puede actualizar, modificar o reemplazar estos Términos y Condiciones en cualquier momento para reflejar cambios en sus servicios, en la legislación aplicable o en sus prácticas comerciales. La versión vigente siempre estará disponible en esta página con la fecha de última actualización indicada al inicio.
              </p>
              <p className="mt-3 text-base text-gray-700 font-light leading-relaxed">
                El uso continuado de los servicios de VM Studio tras la publicación de cambios en estos términos implica la aceptación de la nueva versión.
              </p>
            </div>

            {/* 14. Contacto */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 mb-3">
                14 — CONTACTO
              </h2>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                Para cualquier consulta, duda o reclamo relacionado con estos Términos y Condiciones, podés contactarnos por:
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-6">
                <a
                  href="mailto:vmstudio.online@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-500">●</span> vmstudio.online@gmail.com
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-500">●</span> Formulario de contacto
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
