import { useState } from "react";
import SolucionLayout from "./_detail/SolucionLayout";

export default function CloudIaaS() {
  const [activeTab, setActiveTab] = useState("hyperconverged");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const trustedLogos = [
    { name: "OPPLUS", description: "Plataforma tecnológica transformada" },
    { name: "Grupo Tragsa", description: "Virtualización simplificada" },
    { name: "Senado", description: "Infraestructura gubernamental" },
    { name: "Fundación P&S", description: "Salud digital resiliente" },
  ];

  const platformFeatures = [
    {
      id: "hyperconverged",
      title: "Infraestructura Hiperconvergente",
      description:
        "HCI que combina compute, storage y red en una plataforma unificada",
      features: [
        "Nutanix Cloud Infrastructure (NCI)",
        "Software-defined storage con deduplicación",
        "Hypervisor agnóstico (AHV, VMware, Hyper-V)",
        "Auto-healing y self-service",
      ],
      icon: "🏗️",
    },
    {
      id: "multicloud",
      title: "Hybrid Multicloud",
      description:
        "Ejecute aplicaciones en cualquier lugar con operaciones consistentes",
      features: [
        "Nutanix Cloud Clusters (NC2)",
        "Consistencia operacional cross-cloud",
        "Migración de aplicaciones sin refactoring",
        "Licencias portátiles",
      ],
      icon: "☁️",
    },
    {
      id: "management",
      title: "Cloud Manager",
      description: "Gestión unificada de infraestructura multicloud híbrida",
      features: [
        "Single pane of glass",
        "Cost governance y FinOps",
        "Capacity planning inteligente",
        "Compliance y security posture",
      ],
      icon: "🎛️",
    },
  ];

  const migrationPhases = [
    {
      phase: "Assessment",
      duration: "2-4 semanas",
      description: "Análisis de infraestructura actual y workload mapping",
      deliverables: [
        "Inventario de aplicaciones",
        "Dependency mapping",
        "ROI calculation",
        "Migration roadmap",
      ],
    },
    {
      phase: "Design & Planning",
      duration: "3-6 semanas",
      description: "Arquitectura target y estrategia de migración",
      deliverables: [
        "HCI sizing",
        "Network design",
        "Security blueprint",
        "Disaster recovery plan",
      ],
    },
    {
      phase: "Pilot & Testing",
      duration: "4-8 semanas",
      description: "Implementación de entorno piloto y validación",
      deliverables: [
        "Proof of concept",
        "Performance testing",
        "User acceptance",
        "Runbook documentation",
      ],
    },
    {
      phase: "Production Migration",
      duration: "6-12 semanas",
      description: "Migración por fases con minimal downtime",
      deliverables: [
        "Cutover execution",
        "Data migration",
        "Application testing",
        "Go-live support",
      ],
    },
  ];

  const faqs = [
    {
      question: "¿Qué diferencia a Nutanix de otras soluciones HCI?",
      answer:
        "Nutanix ofrece una plataforma completa que integra infraestructura y gestión, con capacidades nativas de multicloud híbrida. A diferencia de otras soluciones que requieren múltiples herramientas, Nutanix proporciona un modelo operativo consistente desde on-premises hasta cloud público.",
    },
    {
      question: "¿Cómo funciona la migración desde VMware tradicional?",
      answer:
        "Nutanix facilita la migración desde entornos VMware tradicionales mediante herramientas automatizadas de lift-and-shift. Las VMs pueden migrar sin cambios, manteniendo la compatibilidad mientras se obtienen los beneficios de HCI y gestión simplificada.",
    },
    {
      question: "¿Qué opciones de backup y disaster recovery incluye?",
      answer:
        "La plataforma incluye snapshots nativos, replicación asíncrona y síncrona, y capacidades de disaster recovery automatizado. Integración con soluciones de terceros como Veeam para estrategias de backup más robustas.",
    },
    {
      question: "¿Cómo se gestiona el crecimiento y la escalabilidad?",
      answer:
        "Nutanix permite escalamiento horizontal agregando nodos al cluster sin downtime. El capacity planning predictivo ayuda a anticipar necesidades futuras, mientras que las licencias portátiles facilitan la expansión a diferentes ubicaciones.",
    },
    {
      question: "¿Qué nivel de soporte se incluye?",
      answer:
        "Nutanix ofrece soporte 24x7 con SLAs garantizados, acceso al portal de soporte para documentación y best practices, y soporte proactivo con health checks automáticos y alertas preventivas.",
    },
  ];

  return (
    <SolucionLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-6 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium">
                Cloud Infrastructure as a Service
              </span>
            </div>
            <div className="bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
              <span className="text-xs font-medium text-green-300">
                ✨ Powered by Nutanix
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Hybrid Multicloud <br />
            <span className="text-blue-300">Run Anywhere</span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Transforme su infraestructura con{" "}
            <strong>Nutanix Cloud Platform</strong> - la solución
            hiperconvergente que unifica operaciones desde el data center hasta
            la nube pública, eliminando la complejidad y optimizando costos con
            un modelo operativo consistente.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-sm text-blue-100">
                +27,000 empresas confían en Nutanix
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⭐</span>
              </div>
              <span className="text-sm text-blue-100">
                Líder en Gartner Magic Quadrant HCI
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🏆</span>
              </div>
              <span className="text-sm text-blue-100">
                Enterprise Ready Security
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Consulta Gratuita
            </a>
            <a
              href="https://www.nutanix.com/es/one-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              Test Drive Gratuito →
            </a>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="my-16 text-center">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
          Casos de Éxito en España
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {trustedLogos.map((company, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="text-lg font-bold text-gray-800 mb-2">
                  {company.name}
                </div>
                <div className="text-xs text-gray-600">
                  {company.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features Tabs */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Una Plataforma para{" "}
          <span className="text-blue-600">Múltiples Nubes</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platformFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === feature.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{feature.icon}</span>
                {feature.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {platformFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`${
                activeTab === feature.id ? "block" : "hidden"
              } bg-white rounded-xl shadow-lg p-8 border border-gray-100`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <div className="text-sm text-gray-600">
                    Arquitectura simplificada que reduce la complejidad
                    operacional en un 60% según nuestros clientes
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Migration Methodology */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Metodología de <span className="text-blue-600">Migración Cloud</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Nuestro enfoque probado garantiza migraciones exitosas con mínimo
          riesgo y downtime, siguiendo las mejores prácticas de Nutanix y cloud
          providers líderes.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {migrationPhases.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {phase.phase}
                        </h3>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6">{phase.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <span className="text-sm text-gray-700">
                              • {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <div className="my-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Calculadora de ROI Cloud
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Descubra cuánto puede ahorrar migrando a Nutanix Cloud Platform
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  60%
                </div>
                <div className="text-sm text-blue-100">
                  Reducción en complejidad operacional
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  40%
                </div>
                <div className="text-sm text-blue-100">
                  Reducción en TCO vs soluciones tradicionales
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  85%
                </div>
                <div className="text-sm text-blue-100">
                  Mejora en time-to-market
                </div>
              </div>
            </div>

            <a
              href="/contacto"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Solicitar Análisis de ROI Personalizado
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Preguntas <span className="text-blue-600">Frecuentes</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span
                    className={`transform transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="my-20">
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para Modernizar su Infraestructura?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Únase a las +27,000 empresas que han transformado su infraestructura
            con Nutanix. Solicite una consulta gratuita y descubra cómo podemos
            acelerar su journey to cloud.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Agendar Consulta Gratuita
            </a>
            <a
              href="https://www.nutanix.com/es"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explorar Nutanix Platform →
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              💡 <strong>Oferta especial:</strong> Test Drive gratuito de 30
              días + Assessment de infraestructura sin costo
            </p>
          </div>
        </div>
      </div>
    </SolucionLayout>
  );
}
