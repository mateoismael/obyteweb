import { useState } from "react";
import SolucionLayout from "./_detail/SolucionLayout";

export default function CableadoEstructurado() {
  const [activeTab, setActiveTab] = useState("enterprise");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const trustedLogos = [
    {
      name: "Scala Data Centers",
      description: "Alta densidad en interconexión",
    },
    { name: "GPON Telecom", description: "+100K habitantes conectados" },
    { name: "Resort Maldivas", description: "Laserway hospitality" },
    { name: "Enterprise Global", description: "Redes corporativas" },
  ];

  const solutionLines = [
    {
      id: "enterprise",
      title: "ITMAX Enterprise",
      description:
        "Cableado estructurado de alta performance para redes corporativas",
      features: [
        "Categoría 6A y Fibra Óptica OM4/OS2",
        "Certificación internacional TIA/EIA",
        "25 años de garantía integral",
        "Compatibilidad 10/40/100 Gbps",
      ],
      applications: [
        "Oficinas corporativas",
        "Campus universitarios",
        "Edificios inteligentes",
        "Redes LAN/WAN",
      ],
      icon: "🏢",
    },
    {
      id: "datacenter",
      title: "ITMAX Data Center",
      description:
        "Soluciones de ultra alta densidad para centros de datos críticos",
      features: [
        "Conectividad hasta 400G/800G",
        "Gestión automatizada con Datawave",
        "Ribbon fiber y conectores MPO",
        "Refrigeración optimizada",
      ],
      applications: [
        "Hyperscale data centers",
        "Cloud providers",
        "Colocation facilities",
        "Edge computing",
      ],
      icon: "🏗️",
    },
    {
      id: "laserway",
      title: "LASERWAY Broadband",
      description:
        "Redes de fibra óptica para ISPs y operadores de telecomunicaciones",
      features: [
        "FTTH/FTTB deployment",
        "Splicing automation",
        "Weather-resistant solutions",
        "Network planning tools",
      ],
      applications: [
        "ISP networks",
        "Municipal broadband",
        "Rural connectivity",
        "5G backhaul",
      ],
      icon: "📡",
    },
  ];

  const certifications = [
    {
      title: "TIA-568 Compliance",
      description: "Cumplimiento total con estándares internacionales",
      icon: "🏆",
    },
    {
      title: "ISO 9001:2015",
      description: "Sistema de gestión de calidad certificado",
      icon: "⭐",
    },
    {
      title: "25 Years Warranty",
      description: "Garantía extendida en todos los componentes",
      icon: "🛡️",
    },
    {
      title: "Green Building",
      description: "Sostenibilidad ambiental certificada",
      icon: "🌱",
    },
  ];

  const implementationPhases = [
    {
      phase: "Site Survey & Design",
      duration: "1-2 semanas",
      description: "Evaluación técnica y diseño de infraestructura de cableado",
      deliverables: [
        "Planos CAD",
        "BOM detallado",
        "Matriz de puertos",
        "Cronograma de obra",
      ],
    },
    {
      phase: "Pre-Installation",
      duration: "1 semana",
      description: "Preparación de sitio y pre-configuración de componentes",
      deliverables: [
        "Pathway installation",
        "Equipment staging",
        "Safety protocols",
        "Team coordination",
      ],
    },
    {
      phase: "Cable Installation",
      duration: "2-6 semanas",
      description: "Instalación física de cableado horizontal y backbone",
      deliverables: [
        "Copper & fiber runs",
        "Patch panels",
        "Outlet installation",
        "Cable management",
      ],
    },
    {
      phase: "Testing & Certification",
      duration: "1-2 semanas",
      description: "Pruebas de performance y certificación de calidad",
      deliverables: [
        "Fluke testing reports",
        "Fiber OTDR analysis",
        "Performance certificates",
        "As-built documentation",
      ],
    },
  ];

  const technologies = [
    {
      category: "Copper Solutions",
      products: [
        "Cat 6A UTP/FTP cables",
        "Keystone jacks & patch panels",
        "Cable management systems",
        "Consolidation points",
      ],
      performance: "10 Gbps hasta 100m",
      applications: "Workstations, IP phones, access points",
    },
    {
      category: "Fiber Optic Solutions",
      products: [
        "OM4/OM5 multimode fiber",
        "OS2 singlemode fiber",
        "MPO/MTP connectors",
        "Splice enclosures",
      ],
      performance: "100G+ long distance",
      applications: "Backbone, data centers, ISP networks",
    },
    {
      category: "Infrastructure Management",
      products: [
        '19" racks & cabinets',
        "Cable trays & conduits",
        "Fiber optic enclosures",
        "Environmental monitoring",
      ],
      performance: "99.99% uptime",
      applications: "Equipment rooms, telecom closets",
    },
  ];

  const faqs = [
    {
      question: "¿Qué diferencia a Lightera de otros fabricantes de cableado?",
      answer:
        "Lightera (ex-Furukawa) es líder mundial en fibra óptica con más de 135 años de experiencia. Ofrece soluciones end-to-end desde cables hasta sistemas de gestión automatizada como Datawave, con 25 años de garantía y certificaciones internacionales TIA/ISO.",
    },
    {
      question: "¿Incluyen la certificación y documentación de la instalación?",
      answer:
        "Sí, todas nuestras instalaciones incluyen certificación completa con equipos Fluke/OTDR, reportes de performance detallados, documentación as-built, y warranties extendidas. Cumplimos con estándares TIA-568, ISO/IEC 11801 y locales.",
    },
    {
      question: "¿Qué garantía ofrecen en el cableado estructurado?",
      answer:
        "Ofrecemos garantía integral de 25 años que cubre materiales, instalación y performance de la red. Incluye soporte técnico, reemplazo de componentes defectuosos y actualizaciones de certificación sin costo adicional.",
    },
    {
      question: "¿Pueden manejar proyectos de gran escala como data centers?",
      answer:
        "Absolutamente. Tenemos experiencia en proyectos hyperscale con Scala Data Centers y otros operadores. Manejamos desde pequeñas oficinas hasta campus corporativos de miles de puertos con soluciones ITMAX de alta densidad.",
    },
    {
      question: "¿Qué incluye el sistema de gestión automatizada Datawave?",
      answer:
        "Datawave permite gestión, visualización y documentación automatizada de conexiones físicas. Incluye planning de servicios, tracking de activos, change management, y reporting en tiempo real para optimización de la infraestructura de red.",
    },
  ];

  return (
    <SolucionLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20 px-6 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium">Cableado Estructurado</span>
            </div>
            <div className="bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
              <span className="text-xs font-medium text-green-300">
                ⚡ Powered by Lightera
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-200 bg-clip-text text-transparent">
            Creating Brighter <br />
            <span className="text-orange-300">Connections</span>
          </h1>

          <p className="text-xl text-orange-100 mb-8 max-w-3xl leading-relaxed">
            Infraestructura de cableado estructurado de clase mundial con{" "}
            <strong>Lightera Solutions</strong> - desde oficinas corporativas
            hasta hyperscale data centers, con garantía de 25 años y
            certificación internacional TIA-568.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              <span className="text-sm text-orange-100">
                135+ años en conectividad
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🔒</span>
              </div>
              <span className="text-sm text-orange-100">
                TIA-568 & ISO Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⭐</span>
              </div>
              <span className="text-sm text-orange-100">
                25 años de garantía
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contacto"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Site Survey Gratuito
            </a>
            <a
              href="https://lightera.com/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              Explorar Lightera →
            </a>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="my-16 text-center">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
          Proyectos de Referencia
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

      {/* Solution Lines Tabs */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Líneas de <span className="text-orange-600">Solución Completa</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutionLines.map((line) => (
              <button
                key={line.id}
                onClick={() => setActiveTab(line.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === line.id
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{line.icon}</span>
                {line.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {solutionLines.map((line) => (
            <div
              key={line.id}
              className={`${
                activeTab === line.id ? "block" : "hidden"
              } bg-white rounded-xl shadow-lg p-8 border border-gray-100`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {line.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    {line.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Características técnicas:
                    </h4>
                    <ul className="space-y-2">
                      {line.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Aplicaciones:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {line.applications.map((app, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-2 rounded text-sm text-gray-700"
                        >
                          • {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">{line.icon}</div>
                  <div className="text-sm text-gray-600">
                    Soluciones certificadas que garantizan performance y
                    escalabilidad a largo plazo
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Certificaciones y <span className="text-orange-600">Garantías</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Cumplimos con los más altos estándares internacionales de calidad,
          ofreciendo garantías extendidas que protegen su inversión en
          infraestructura.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Overview */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Tecnologías <span className="text-orange-600">Implementadas</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {tech.category}
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Productos principales:
                </h4>
                <ul className="space-y-2">
                  {tech.products.map((product, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg space-y-2">
                <div className="text-sm">
                  <strong>Performance:</strong> {tech.performance}
                </div>
                <div className="text-sm">
                  <strong>Aplicaciones:</strong> {tech.applications}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Proceso de <span className="text-orange-600">Implementación</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Metodología estructurada que garantiza instalaciones de calidad,
          cumpliendo cronogramas y estándares técnicos internacionales.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {phase.phase}
                        </h3>
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
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

      {/* Case Study Highlight */}
      <div className="my-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Caso de Éxito: Scala Data Centers
              </h2>
              <p className="text-xl text-orange-100">
                Implementación de solución inédita de alta densidad para
                interconexión de centros de datos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  400G
                </div>
                <div className="text-sm text-orange-100">
                  Conectividad de ultra alta densidad
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  70%
                </div>
                <div className="text-sm text-orange-100">
                  Reducción en espacio de racks
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  25
                </div>
                <div className="text-sm text-orange-100">
                  Años de garantía integral
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <blockquote className="text-lg italic text-orange-100 mb-4">
                "La solución ITMAX de Lightera nos permitió optimizar
                significativamente la densidad de nuestros data centers
                manteniendo la más alta calidad y confiabilidad."
              </blockquote>
              <cite className="text-orange-200 font-semibold">
                Engineering Team - Scala Data Centers
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Preguntas <span className="text-orange-600">Frecuentes</span>
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
            ¿Listo para una Infraestructura de Clase Mundial?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Únase a empresas como Scala Data Centers y miles de organizaciones
            que confían en Lightera para su infraestructura crítica. Solicite su
            site survey gratuito.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contacto"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Site Survey Gratuito
            </a>
            <a
              href="https://lightera.com/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explorar Catálogo Técnico →
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              🔧 <strong>Oferta especial:</strong> Site survey + diseño
              conceptual gratuito + 25 años de garantía incluida
            </p>
          </div>
        </div>
      </div>
    </SolucionLayout>
  );
}
