import { Link } from "react-router-dom";

export default function ProcesamientoVirtualizacion() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 mb-6">
              🚀 Infraestructura de próxima generación
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Procesamiento & Virtualización
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {" "}
                para mayor disponibilidad
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Modernizamos y consolidamos tus servidores mediante virtualización
              para elevar disponibilidad, optimizar costos y simplificar la
              administración. Diseñamos arquitecturas escalables con alta
              densidad de cómputo y recuperación ante fallas para soportar tus
              aplicaciones críticas.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>VMware vSphere Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Lenovo ThinkSystem Certified</span>
            </div>
          </div>

          {/* Partner Integration */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-blue-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Tecnología Lenovo ThinkSystem
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Servidores empresariales líderes en rendimiento y
                    confiabilidad
                  </p>
                </div>
              </div>
              <a
                href="https://www.lenovo.com/pe/es/servers-storage/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Ver servidores Lenovo
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Lo que incluye nuestra solución
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: "🏗️",
                    title: "Diseño de clúster",
                    desc: "Arquitectura óptima para máxima disponibilidad",
                  },
                  {
                    icon: "⚡",
                    title: "Hipervisores líderes",
                    desc: "VMware vSphere, Hyper-V, o soluciones open source",
                  },
                  {
                    icon: "🔄",
                    title: "Alta disponibilidad",
                    desc: "Failover automático y balanceo de cargas",
                  },
                  {
                    icon: "📊",
                    title: "Monitoreo continuo",
                    desc: "Supervisión 24/7 con alertas proactivas",
                  },
                  {
                    icon: "📈",
                    title: "Capacity planning",
                    desc: "Planificación de crecimiento basada en datos",
                  },
                  {
                    icon: "🔒",
                    title: "Hardening de seguridad",
                    desc: "Configuraciones seguras desde el primer día",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Beneficios clave
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                <div className="space-y-6">
                  {[
                    {
                      metric: "99.9%",
                      label: "Mayor uptime",
                      desc: "Disponibilidad garantizada",
                    },
                    {
                      metric: "60%",
                      label: "Mejor uso de recursos",
                      desc: "Optimización de hardware",
                    },
                    {
                      metric: "40%",
                      label: "Reducción de costos",
                      desc: "Consolidación eficiente",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {benefit.metric}
                        </div>
                        <div className="text-xs text-gray-500">promedio</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {benefit.label}
                        </h3>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Caso de éxito
                </h3>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-700">
                    <strong>Consolidación 40→8 hosts</strong>
                    <br />
                    Reducción del 35% en TCO durante los primeros 12 meses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra metodología probada
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proceso estructurado que garantiza implementaciones exitosas y
              transferencia de conocimiento
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Descubrimiento",
                desc: "Assessment de infraestructura actual y requerimientos",
              },
              {
                phase: "02",
                title: "Diseño",
                desc: "Arquitectura personalizada y plan de implementación",
              },
              {
                phase: "03",
                title: "Implementación",
                desc: "Despliegue controlado con ventanas de mantenimiento",
              },
              {
                phase: "04",
                title: "Acompañamiento",
                desc: "Soporte y optimización continua post-implementación",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.phase}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute mt-8 ml-8 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué hipervisores soportan?",
                a: "Trabajamos con VMware vSphere, Microsoft Hyper-V, Citrix XenServer, y soluciones open source como Proxmox y KVM.",
              },
              {
                q: "¿Cómo determinan el sizing correcto?",
                a: "Realizamos un assessment detallado de cargas de trabajo, patrones de uso, y proyecciones de crecimiento para dimensionar la solución óptima.",
              },
              {
                q: "¿Garantizan alta disponibilidad (HA)?",
                a: "Sí, diseñamos clusters con redundancia N+1, failover automático y balanceo de cargas para garantizar máxima disponibilidad.",
              },
              {
                q: "¿Cómo manejan las migraciones?",
                a: "Utilizamos herramientas como vMotion, Storage vMotion, y procesos de migración en caliente para minimizar downtime.",
              },
              {
                q: "¿Verifican compatibilidad de aplicaciones?",
                a: "Realizamos testing exhaustivo en ambiente de pruebas antes de migrar aplicaciones críticas al entorno virtualizado.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200"
              >
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para modernizar tu infraestructura?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita de 30 minutos y obtén un assessment
            inicial de tu infraestructura actual
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
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
              Consultoría gratuita
            </Link>
            <Link
              to="/soluciones"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all inline-flex items-center gap-2"
            >
              Ver otras soluciones
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
      </section>
    </div>
  );
}
