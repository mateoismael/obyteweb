import { useState } from "react";
import { Link } from "react-router-dom";
import SolucionLayout from "./_detail/SolucionLayout";

export default function RedesSeguridad() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question:
        "¿Cómo funciona el control de acceso Zero Trust en tiempo real?",
      answer:
        "Con Extreme Platform ONE™ implementamos Universal ZTNA que verifica continuamente identidad, dispositivo y comportamiento. Cada conexión se evalúa mediante AI/ML, aplicando políticas granulares por usuario, aplicación y ubicación con decisiones en menos de 100ms.",
    },
    {
      question:
        "¿Qué soluciones BYOD soportan las redes empresariales modernas?",
      answer:
        "Nuestro NAC (Network Access Control) con ExtremeCloud IQ gestiona automáticamente dispositivos personales, corporativos e IoT. Incluye onboarding automático, perfilado de dispositivos, certificados dinámicos y segmentación micro-adaptativa por política.",
    },
    {
      question: "¿Cómo se centralizan y analizan los logs de seguridad?",
      answer:
        "Extreme Analytics correlaciona logs de red, wireless, firewalls y endpoints en tiempo real. Con AI-powered insights, detectamos amenazas, comportamientos anómalos y vulnerabilidades antes de que impacten el negocio, con integración SIEM/SOAR nativa.",
    },
    {
      question: "¿Qué capacidades de auditoría y compliance están disponibles?",
      answer:
        "Generamos reportes automáticos para ISO 27001, SOC 2, PCI-DSS y regulaciones locales. El sistema mantiene trazabilidad completa de accesos, cambios de configuración y eventos de seguridad con retención configurable y firma digital.",
    },
    {
      question:
        "¿Las soluciones SD-WAN se integran con la seguridad empresarial?",
      answer:
        "Extreme SD-WAN incluye secure edge nativo con ZTNA, SWG, CASB y FWaaS integrados. La plataforma unificada elimina point solutions, reduce latencia y simplifica gestión con una sola consola cloud-native para WAN y seguridad.",
    },
  ];

  return (
    <SolucionLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8 mb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-100 to-red-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                ✓ Partner Extreme Networks
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                ✓ Zero Trust Certified
              </span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-red-800 to-orange-800 bg-clip-text text-transparent mb-4">
            Redes & Seguridad
            <span className="block text-3xl lg:text-4xl mt-2">
              con AI-Powered Zero Trust
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Implementamos infraestructura de red empresarial con{" "}
            <strong>Extreme Platform ONE™</strong>, la primera plataforma de
            networking con AI integrada. <strong>Zero Trust Security</strong>{" "}
            nativo, automatización inteligente y visibilidad completa para redes
            campus, data center y branch.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">90% menos tareas manuales</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="font-medium">Universal ZTNA</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-medium">AI-Native Analytics</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Assessment Gratuito
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="https://www.extremenetworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Ver Extreme Platform ONE™
              <svg
                className="ml-2 w-5 h-5"
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

      {/* Partnership Section */}
      <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Powered by Extreme Networks Platform ONE™
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La primera plataforma de networking completamente integrada con AI.
            Unifica gestión de wired, wireless, SD-WAN y seguridad con
            automatización inteligente y analytics avanzados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Wireless Access</h3>
            <p className="text-gray-600 text-sm mb-3">
              Wi-Fi 6/6E/7 de alto rendimiento con cobertura indoor/outdoor y
              analytics AI
            </p>
            <div className="text-sm text-gray-500">
              <div>• 6 GHz spectrum</div>
              <div>• AI-powered optimization</div>
              <div>• Location analytics</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Network Fabric</h3>
            <p className="text-gray-600 text-sm mb-3">
              Fabric automation con seguridad integrada para campus, data center
              y branch
            </p>
            <div className="text-sm text-gray-500">
              <div>• Zero-touch deployment</div>
              <div>• Micro-segmentation</div>
              <div>• Self-healing network</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Network Security</h3>
            <p className="text-gray-600 text-sm mb-3">
              Universal ZTNA, wireless intrusion prevention y fabric security
              nativo
            </p>
            <div className="text-sm text-gray-500">
              <div>• Universal ZTNA</div>
              <div>• Threat detection</div>
              <div>• Policy automation</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Wired Access</h3>
            <p className="text-gray-600 text-sm mb-3">
              Switching edge-to-core con fabric gratis y operaciones
              consistentes
            </p>
            <div className="text-sm text-gray-500">
              <div>• Free fabric license</div>
              <div>• PoE++ support</div>
              <div>• Unified management</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Cloud Management</h3>
            <p className="text-gray-600 text-sm mb-3">
              ExtremeCloud IQ con AI para gestión unificada multi-site y
              multi-tenant
            </p>
            <div className="text-sm text-gray-500">
              <div>• Cloud-native</div>
              <div>• AI insights</div>
              <div>• Global visibility</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Analytics & AI</h3>
            <p className="text-gray-600 text-sm mb-3">
              Machine learning para optimización automática y detección
              proactiva de issues
            </p>
            <div className="text-sm text-gray-500">
              <div>• Predictive analytics</div>
              <div>• Anomaly detection</div>
              <div>• Auto-remediation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Zero Trust Architecture */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Arquitectura Zero Trust Integral
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Identity-First Security
                </h3>
                <p className="text-gray-600 text-sm">
                  Verificación continua de usuarios, dispositivos y
                  comportamiento con autenticación adaptativa y certificados
                  dinámicos por política de riesgo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Micro-Segmentación
                </h3>
                <p className="text-gray-600 text-sm">
                  Políticas granulares automáticas por aplicación, usuario y
                  dispositivo. Aislamiento lateral dinámico que se adapta a
                  cambios de contexto en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Threat Intelligence
                </h3>
                <p className="text-gray-600 text-sm">
                  AI/ML analytics correlacionan patrones globales de amenazas
                  con comportamiento local. Respuesta automática con aislamiento
                  y remediación sin intervención manual.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Compliance Automation
                </h3>
                <p className="text-gray-600 text-sm">
                  Auditoría continua con reportes automáticos para frameworks
                  regulatorios. Evidencia digital firmada y trazabilidad
                  completa de accesos y cambios.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Beneficios Operacionales
          </h2>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Superficie de Ataque Mínima
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Reducción del 95% en exposición lateral
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Respuesta Automática
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Detección y contención en &lt; 1 segundo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Visibilidad Total</h3>
                  <p className="text-gray-600 text-sm">
                    360° analytics en tiempo real
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Compliance Continuo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Auditoría automatizada 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">
              Métricas de Eficiencia
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">-90%</div>
                <div className="text-sm text-gray-600">Tareas manuales</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">+300%</div>
                <div className="text-sm text-gray-600">Velocidad detección</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Methodology */}
      <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Metodología de Implementación
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Discovery</h3>
            <p className="text-gray-600 text-sm">
              Mapeo completo de red existente, inventario de dispositivos,
              análisis de tráfico y evaluación de riesgos de seguridad.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Diseño Zero Trust</h3>
            <p className="text-gray-600 text-sm">
              Arquitectura de segmentación, políticas ZTNA, integración con
              identidad y diseño de fabric automatizado.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Deployment</h3>
            <p className="text-gray-600 text-sm">
              Implementación por fases con migración sin downtime, configuración
              automatizada y validación exhaustiva.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Optimización</h3>
            <p className="text-gray-600 text-sm">
              AI-powered tuning, baselining de seguridad, training del equipo y
              documentación completa del entorno.
            </p>
          </div>
        </div>
      </div>

      {/* Success Case */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Caso de Éxito: Transformación Zero Trust
          </h2>
          <p className="text-lg text-gray-600">
            Universidad internacional implementa red segura para 15,000 usuarios
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Desafío</h3>
            <p className="text-gray-600 text-sm">
              Red legacy vulnerable con 200+ VLANs, BYOD sin control, múltiples
              brechas de seguridad y gestión manual de 50 switches heredados.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Solución</h3>
            <p className="text-gray-600 text-sm">
              Extreme Platform ONE™ con fabric automation, Universal ZTNA, Wi-Fi
              6E campus-wide y analytics AI para 15,000 usuarios.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Resultados</h3>
            <p className="text-gray-600 text-sm">
              <strong>Zero incidentes</strong> en 18 meses, 95% menos superficie
              de ataque, onboarding automático y gestión unificada desde cloud.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
          <div className="text-center">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "La transformación con Extreme Networks nos dio la seguridad que
              necesitábamos sin sacrificar la experiencia del usuario. Los
              estudiantes y profesores ahora se conectan sin fricciones mientras
              mantenemos control total."
            </p>
            <div className="mt-4">
              <div className="font-semibold text-gray-800">
                Director de TI - Universidad Internacional
              </div>
              <div className="text-gray-600 text-sm">
                15,000 usuarios, 3 campus, 500+ APs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Preguntas Frecuentes Técnicas
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
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
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para Implementar Zero Trust?
        </h2>
        <p className="text-xl mb-6 text-red-100">
          Obtén un assessment gratuito de tu red actual y diseño de arquitectura
          Zero Trust personalizada
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Solicitar Assessment Gratuito
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <a
            href="tel:+51998877665"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Llamar Ahora
          </a>
        </div>
        <div className="mt-6 text-red-200 text-sm">
          ✓ Assessment sin costo • ✓ Demo en vivo • ✓ Arquitectos especializados
          en Zero Trust
        </div>
      </div>
    </SolucionLayout>
  );
}
