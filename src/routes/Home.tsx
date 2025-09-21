import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setSEO } from "../lib/seo";
import { SITE } from "../config";

export default function HomePage() {
  useEffect(() => {
    setSEO({
      title: "Ohanabyte — Soluciones y Servicios TI en Perú",
      description:
        "Soluciones TI: infraestructura, nube, seguridad, soporte y más para empresas en Perú. Agenda una consultoría de 30 minutos sin costo.",
      canonical: "https://ohanabyte.com.pe/",
    });
  }, []);

  return (
    <div id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200 mb-6">
                ✨ Líderes en transformación digital
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Soluciones TI de
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {" "}
                  última generación
                </span>{" "}
                para tu empresa
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Diseñamos, implementamos y operamos infraestructura, nube y
                seguridad para que tu negocio no se detenga nunca.
                <strong className="text-gray-900">
                  {" "}
                  +150 proyectos exitosos
                </strong>{" "}
                nos respaldan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Link
                  to="/contacto"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Consultoría Gratuita
                </Link>
                <a
                  href={SITE.whatsappUrl}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.445" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>SLA 99.9%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>8 años experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>500+ TB gestionados</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/illustrations/hero-network.svg"
                  alt="Ilustración de red y nube representando infraestructura moderna"
                  className="w-full h-auto"
                  loading="eager"
                  width={800}
                  height={400}
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip - Enhanced */}
      {SITE.showPartners ? (
        <section className="py-12 border-y border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 mb-8 font-medium">
              Confianza de empresas líderes en el mercado
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
              {["techco", "datagrid", "netlabs", "cloudix", "secureon"].map(
                (partner) => (
                  <img
                    key={partner}
                    src={`/partners/${partner}.svg`}
                    alt={partner}
                    width={140}
                    height={40}
                    loading="lazy"
                    className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all"
                  />
                )
              )}
            </div>
          </div>
        </section>
      ) : null}

      {/* Solutions Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 mb-4">
              💡 Nuestras especialidades
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Soluciones que transforman empresas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestras soluciones diseñadas para impulsar la operación y
              competitividad de tu negocio con tecnología de vanguardia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.soluciones.map((s, index) => (
              <Card
                key={s.slug}
                title={s.title}
                text={s.text}
                to={`/soluciones/${s.slug}`}
                image={s.image}
                imageAlt={s.imageAlt}
                featured={index < 3}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/soluciones"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explorar Todas las Soluciones
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Now part of Soluciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200 mb-4">
              🛠️ Servicios profesionales
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Servicios especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde consultoría estratégica hasta soporte 24/7, cubrimos todo el
              ciclo de vida de tu infraestructura tecnológica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.servicios.slice(0, 6).map((s) => (
              <Card
                key={s.slug}
                title={s.title}
                text={s.text}
                to={`/soluciones/${s.slug}`}
                compact
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/soluciones"
              className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Ver Todas las Soluciones y Servicios
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Números que nos avalan
            </h2>
            <p className="text-xl text-blue-100">
              Más de 8 años construyendo infraestructuras confiables para
              empresas peruanas
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {metric.number}
                </div>
                <div className="text-blue-200 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full border border-green-200 mb-4">
              ⭐ ¿Por qué elegirnos?
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Diferenciadores que importan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No somos solo un proveedor más. Somos tu socio estratégico en la
              transformación digital de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r, index) => (
              <div
                key={r.title}
                className={`bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer ${
                  index === 0
                    ? "bg-gradient-to-br from-gray-50 to-blue-50 border-blue-200"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">{r.icon}</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {r.badge}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 mb-4">
                ❓ Preguntas frecuentes
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm cursor-pointer group"
                >
                  <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                    <span>{faq.question}</span>
                    <svg
                      className="w-5 h-5 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/contacto"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Agenda tu consultoría gratuita de 30 minutos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/20 mb-6">
              🚀 ¿Listo para el siguiente nivel?
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Transforma tu infraestructura TI hoy mismo
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Agenda una consultoría sin costo y obtén un roadmap claro de
              transformación digital personalizado para tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Agendar consultoría ahora
              </Link>
              <a
                href={SITE.whatsappUrl}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.445" />
                </svg>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  title,
  text,
  to,
  image,
  imageAlt,
  featured = false,
  compact = false,
}: {
  title: string;
  text: string;
  to: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer h-full flex flex-col ${
        featured
          ? "bg-gradient-to-br from-gray-50 to-blue-50 border-blue-200"
          : ""
      }`}
    >
      {image ? (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-40 object-contain transition-transform hover:scale-105"
            width={320}
            height={160}
            loading="lazy"
          />
        </div>
      ) : null}
      <h3
        className={`font-semibold mb-3 text-gray-900 ${
          compact ? "text-lg" : "text-xl"
        }`}
      >
        {title}
      </h3>
      <p className={`text-gray-600 mb-4 flex-1 ${compact ? "text-sm" : ""}`}>
        {text}
      </p>
      <div className="mt-auto">
        <Link
          to={to}
          className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2"
        >
          Ver más
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

const metrics = [
  { number: "+150", label: "Proyectos entregados" },
  { number: "8+", label: "Años de experiencia" },
  { number: "99.9%", label: "SLA garantizado" },
  { number: "500+", label: "TB gestionados" },
];

const faqs = [
  {
    question: "¿Atienden a todo el Perú?",
    answer:
      "Sí, ofrecemos atención tanto remota como presencial (on-site) según la ciudad y el tipo de servicio requerido.",
  },
  {
    question: "¿Pueden trabajar fuera de horario?",
    answer:
      "Absolutamente. Trabajamos con ventanas de cambio planificadas para minimizar el impacto en tu operación.",
  },
  {
    question: "¿Ofrecen soporte continuo?",
    answer:
      "Sí, contamos con planes de soporte 24/7 con SLA garantizado y monitoreo proactivo de infraestructura.",
  },
  {
    question: "¿Qué incluye la consultoría gratuita?",
    answer:
      "Assessment inicial de tu infraestructura actual, identificación de oportunidades de mejora y roadmap estratégico personalizado.",
  },
];

const reasons = [
  {
    icon: "🏗️",
    badge: "Disponibilidad",
    title: "Arquitecturas resilientes",
    text: "Diseño con alta disponibilidad y recuperación ante desastres según RTO/RPO.",
  },
  {
    icon: "⚡",
    badge: "Velocidad",
    title: "Ejecución sin fricción",
    text: "Implementaciones planificadas, ventanas de cambio y cero sorpresas.",
  },
  {
    icon: "🛡️",
    badge: "Seguridad",
    title: "Zero Trust por defecto",
    text: "Segmentación, identidad y protección de datos como pilares fundamentales.",
  },
  {
    icon: "💰",
    badge: "FinOps",
    title: "Costo bajo control",
    text: "Uso eficiente y visibilidad para optimizar gasto en nube e infraestructura.",
  },
] as const;

const sections = {
  soluciones: [
    {
      slug: "procesamiento-virtualizacion",
      title: "Procesamiento & Virtualización",
      text: "Modernizamos y consolidamos tus servidores mediante virtualización para elevar disponibilidad, optimizar costos y simplificar la administración.",
      image: "/illustrations/card-server.svg",
      imageAlt: "Servidores y racks virtualizados",
    },
    {
      slug: "almacenamiento",
      title: "Almacenamiento de datos",
      text: "Implementamos cabinas y almacenamiento definido por software con rendimiento, resiliencia y crecimiento lineal.",
      image: "/illustrations/card-cloud.svg",
      imageAlt: "Nube y almacenamiento",
    },
    {
      slug: "redes-seguridad",
      title: "Redes & Seguridad",
      text: "Diseñamos redes seguras de extremo a extremo con políticas Zero Trust y visibilidad.",
      image: "/illustrations/card-security.svg",
      imageAlt: "Escudo de seguridad de red",
    },
    {
      slug: "proteccion-de-datos",
      title: "Protección de datos",
      text: "Aseguramos copias 3-2-1, pruebas de restauración y planes DR según tus RTO/RPO.",
    },
    {
      slug: "computo-colaboracion",
      title: "Cómputo & Colaboración",
      text: "Estandarizamos endpoints y suites de productividad para colaboración segura.",
    },
    {
      slug: "cloud-iaas",
      title: "Cloud / IaaS",
      text: "Migramos y operamos cargas en la nube con enfoque FinOps.",
    },
  ],
  servicios: [
    {
      slug: "asesoria-ti",
      title: "Asesoría TI",
      text: "Evaluación de madurez, roadmap 6–12 meses, inventario y riesgos, recomendaciones priorizadas.",
      image: "/generated/gen-advisory.svg",
      imageAlt: "Asesoría tecnológica",
    },
    {
      slug: "implementacion",
      title: "Implementación",
      text: "Instalación, configuración, pruebas, documentación y traspaso.",
      image: "/generated/gen-implementation.svg",
      imageAlt: "Implementación de soluciones",
    },
    {
      slug: "soporte-monitoreo",
      title: "Soporte & Monitoreo",
      text: "N1/N2/N3, on-call, monitoreo, parches y reportes.",
      image: "/generated/gen-support.svg",
      imageAlt: "Mesa de ayuda y monitoreo",
    },
    {
      slug: "mantenimiento",
      title: "Mantenimiento",
      text: "Preventivo y correctivo, revisión física y lógica, firmware y pruebas.",
      image: "/generated/gen-maintenance.svg",
      imageAlt: "Mantenimiento preventivo y correctivo",
    },
    {
      slug: "cableado-estructurado",
      title: "Cableado estructurado",
      text: "Site survey, diseño, tendido, canalizaciones, certificación.",
      image: "/generated/gen-cabling.svg",
      imageAlt: "Cableado y canalizaciones",
    },
    {
      slug: "capacitaciones",
      title: "Capacitaciones",
      text: "Talleres in-company de seguridad, M365 y mejores prácticas TI.",
      image: "/generated/gen-training.svg",
      imageAlt: "Capacitaciones y talleres",
    },
  ],
};
