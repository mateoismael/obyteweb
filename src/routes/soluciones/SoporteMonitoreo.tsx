import { useState } from "react";
import SolucionLayout from "./_detail/SolucionLayout";

export default function SoporteMonitoreo() {
  const [activeTab, setActiveTab] = useState("rmm");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const trustedLogos = [
    { name: "Leeds United", description: "35% reducción en tickets" },
    { name: "Boeing", description: "Gestión IT enterprise" },
    { name: "Grant Thornton", description: "Soporte multinacional" },
    { name: "Georgia Tech", description: "IT educativa" },
  ];

  const platformModules = [
    {
      id: "rmm",
      title: "Remote Monitoring & Management",
      description:
        "Monitoreo proactivo 24/7 con detección automática de problemas",
      features: [
        "Monitoreo de dispositivos ilimitados",
        "Alertas inteligentes y escalamiento",
        "Performance monitoring en tiempo real",
        "Informes automatizados y dashboards",
      ],
      icon: "📊",
    },
    {
      id: "ticketing",
      title: "Sistema de Tickets Inteligente",
      description: "Gestión de incidencias con IA para resolución automática",
      features: [
        "IT Autopilot con resolución autónoma",
        "Sistema de tickets integrado",
        "SLA tracking y escalamiento",
        "Knowledge base inteligente",
      ],
      icon: "🎫",
    },
    {
      id: "automation",
      title: "Automatización & Parches",
      description: "Gestión automatizada de actualizaciones y configuraciones",
      features: [
        "Patch management automático",
        "Deployment de software",
        "Configuración remota",
        "Scripts personalizados",
      ],
      icon: "⚙️",
    },
  ];

  const aiFeatures = [
    {
      title: "IT Autopilot",
      description: "Resolución autónoma del 40% de tickets rutinarios",
      capabilities: [
        "Diagnosis automática de problemas",
        "Reset de contraseñas sin intervención",
        "Instalación de aplicaciones",
        "Resolución de incidencias comunes",
      ],
      impact: "40% reducción en workload manual",
    },
    {
      title: "Action AI™",
      description: "Asistencia inteligente para técnicos IT",
      capabilities: [
        "Recomendaciones contextuales",
        "Predicción de fallos",
        "Optimización de flujos de trabajo",
        "Generación automática de documentación",
      ],
      impact: "35% mejora en tiempo de resolución",
    },
    {
      title: "Network Discovery",
      description: "Mapeo automático y análisis de seguridad de red",
      capabilities: [
        "Descubrimiento automático de dispositivos",
        "Análisis de vulnerabilidades",
        "Mapeo de topología de red",
        "Inventario de activos automatizado",
      ],
      impact: "100% visibilidad de infraestructura",
    },
  ];

  const implementationPhases = [
    {
      phase: "Evaluación & Diseño",
      duration: "1-2 semanas",
      description: "Análisis de infraestructura IT actual y diseño de solución",
      deliverables: [
        "IT asset inventory",
        "Monitoring strategy",
        "SLA definition",
        "Integration plan",
      ],
    },
    {
      phase: "Deployment & Configuración",
      duration: "2-4 semanas",
      description: "Instalación de agentes y configuración de monitoreo",
      deliverables: [
        "Agent deployment",
        "Dashboard configuration",
        "Alert setup",
        "Automation scripts",
      ],
    },
    {
      phase: "Training & Go-Live",
      duration: "1-2 semanas",
      description: "Entrenamiento del equipo y puesta en producción",
      deliverables: [
        "User training",
        "Documentation",
        "Process handover",
        "Go-live support",
      ],
    },
    {
      phase: "Optimización Continua",
      duration: "Ongoing",
      description: "Mejora continua y optimización de procesos",
      deliverables: [
        "Performance reports",
        "Process optimization",
        "Proactive recommendations",
        "Regular reviews",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "¿Cómo funciona la IA de Atera para resolver tickets automáticamente?",
      answer:
        "IT Autopilot utiliza inteligencia artificial para analizar problemas comunes y ejecutar resoluciones automáticas sin intervención humana. Puede resetear contraseñas, instalar software, resolver problemas de conectividad y más, manejando hasta el 40% de tickets rutinarios de forma autónoma.",
    },
    {
      question: "¿Qué dispositivos y sistemas operativos soporta Atera?",
      answer:
        "Atera soporta Windows, macOS, Linux, dispositivos móviles iOS/Android, servidores, y equipos de red. La plataforma incluye agentes nativos para cada sistema operativo y capacidades de monitoreo agentless para dispositivos de red y sistemas embebidos.",
    },
    {
      question: "¿Cómo se integra con nuestras herramientas existentes?",
      answer:
        "Atera ofrece integraciones nativas con Microsoft Teams, Slack, Office 365, Active Directory, Zapier, y más de 100 herramientas populares. También incluye API RESTful para integraciones personalizadas y webhooks para automatización avanzada.",
    },
    {
      question: "¿Qué nivel de seguridad y compliance ofrece?",
      answer:
        "Atera cumple con SOC 2 Type II, ISO 27001, y GDPR. Incluye encriptación end-to-end, autenticación multi-factor, controles de acceso granulares, y auditoría completa de actividades para garantizar la seguridad de sus datos.",
    },
    {
      question: "¿Cuál es el modelo de precios y ROI esperado?",
      answer:
        "Atera utiliza precio fijo por técnico, no por dispositivo, permitiendo monitorear dispositivos ilimitados. El ROI típico incluye 40% reducción en tiempo de resolución, 35% menos tickets manuales, y hasta 60% reducción en costos operativos IT.",
    },
  ];

  return (
    <SolucionLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 px-6 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='30 15 45 45 15 45'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium">
                Soporte & Monitoreo IT
              </span>
            </div>
            <div className="bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
              <span className="text-xs font-medium text-green-300">
                🤖 Powered by Atera AI
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent">
            Autonomous IT <br />
            <span className="text-emerald-300">Made Real</span>
          </h1>

          <p className="text-xl text-emerald-100 mb-8 max-w-3xl leading-relaxed">
            Transforme su operación IT con{" "}
            <strong>Atera's All-in-One Platform</strong> - RMM, PSA, y ticketing
            unificado con IA que resuelve automáticamente el 40% de incidencias,
            desde detección hasta resolución, sin intervención humana.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              <span className="text-sm text-emerald-100">
                Líder G2 Enterprise IT Management
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🔒</span>
              </div>
              <span className="text-sm text-emerald-100">
                SOC 2 Type II + ISO 27001
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚡</span>
              </div>
              <span className="text-sm text-emerald-100">
                Dispositivos ilimitados
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contacto"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Demo Personalizada
            </a>
            <a
              href="https://www.atera.com/es/signup/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              Prueba Gratuita 30 días →
            </a>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="my-16 text-center">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
          Confían en Atera
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

      {/* Platform Modules Tabs */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Todo en una{" "}
          <span className="text-emerald-600">Plataforma Unificada</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platformModules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === module.id
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{module.icon}</span>
                {module.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {platformModules.map((module) => (
            <div
              key={module.id}
              className={`${
                activeTab === module.id ? "block" : "hidden"
              } bg-white rounded-xl shadow-lg p-8 border border-gray-100`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {module.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    {module.description}
                  </p>
                  <ul className="space-y-3">
                    {module.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">{module.icon}</div>
                  <div className="text-sm text-gray-600">
                    Interfaz unificada que centraliza todas las operaciones IT
                    en un solo panel de control
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Features Section */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Inteligencia Artificial{" "}
          <span className="text-emerald-600">Que Actúa</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          No solo asistencia, sino resolución autónoma. La IA de Atera maneja
          desde detección hasta resolución, llevando su gestión IT de
          automatizada a autónoma.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🤖</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-6">{feature.description}</p>

              <ul className="space-y-2 mb-6">
                {feature.capabilities.map((capability, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-emerald-700">
                  {feature.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Proceso de <span className="text-emerald-600">Implementación</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Implementación rápida en 5 minutos según Atera. Nuestro proceso
          estructurado garantiza una transición suave y adopción exitosa por
          parte del equipo.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {phase.phase}
                        </h3>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
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
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Caso de Éxito: Leeds United FC
              </h2>
              <p className="text-xl text-emerald-100">
                Transformación IT con reducción del 35% en tickets y
                automatización completa de knowledge base
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  35%
                </div>
                <div className="text-sm text-emerald-100">
                  Reducción en tickets manuales
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-emerald-100">
                  Automatización de knowledge base
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  24/7
                </div>
                <div className="text-sm text-emerald-100">Soporte autónomo</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <blockquote className="text-lg italic text-emerald-100 mb-4">
                "The AI copilot is like having another team member. Tickets have
                been reduced by 25-35% and it's assisting us with knowledge base
                generation."
              </blockquote>
              <cite className="text-emerald-200 font-semibold">
                Zack Barr, Service Desk Analyst - Leeds United FC
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Preguntas <span className="text-emerald-600">Frecuentes</span>
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
            ¿Listo para el IT Autónomo?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Únase a empresas como Boeing, Leeds United y Grant Thornton que han
            transformado su operación IT con Atera. Comience su prueba gratuita
            y experimente el impacto exponencial.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contacto"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Solicitar Demo Personalizada
            </a>
            <a
              href="https://www.atera.com/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explorar Atera Platform →
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              🚀 <strong>Oferta especial:</strong> Prueba gratuita 30 días +
              Onboarding gratuito + Sin tarjeta de crédito
            </p>
          </div>
        </div>
      </div>
    </SolucionLayout>
  );
}
