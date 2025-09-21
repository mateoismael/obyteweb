import { useState } from "react";
import { Link } from "react-router-dom";
import SolucionLayout from "./_detail/SolucionLayout";

export default function ProteccionDatos() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo protege Veeam contra ataques de ransomware modernos?",
      answer:
        "Veeam Data Platform implementa Zero Trust Data Resilience con backups inmutables end-to-end, detección AI de malware en tiempo real, análisis YARA para identificar cepas específicas y arquitectura 'cuatro ojos' que previene eliminación maliciosa. Incluye Centro de Amenazas con scoring de seguridad.",
    },
    {
      question:
        "¿Qué políticas de retención soporta para compliance empresarial?",
      answer:
        "Configuramos retenciones granulares desde días hasta décadas con inmutabilidad legal hold. Soporta compliance automático para GDPR, SOX, HIPAA con archivado inteligente cross-cloud, deduplicación global y gestión automatizada del ciclo de vida de datos con auditoría completa.",
    },
    {
      question: "¿Cómo funciona DRaaS (Disaster Recovery as a Service)?",
      answer:
        "Ofrecemos orquestación completa con Veeam Recovery Orchestrator: runbooks automatizados, failover/failback con un clic, testing sin impacto de producción, RTO de minutos y capacidad de recuperación granular a nivel aplicación, VM o sitio completo con validación continua.",
    },
    {
      question: "¿Cuál es la estructura de costos para protección empresarial?",
      answer:
        "Modelo por workload protegido con tres ediciones (Foundation, Advanced, Premium). Incluye Veeam Data Cloud Vault con pricing predecible, deduplicación que reduce costos hasta 95%, y opciones BaaS/DRaaS gestionadas con partners certificados para optimizar CAPEX/OPEX.",
    },
    {
      question: "¿Qué frameworks de compliance están pre-configurados?",
      answer:
        "Veeam incluye analizador de compliance automatizado para ISO 27001, SOC 2, PCI-DSS, GDPR, HIPAA, SOX con reportes pre-built, evidencia de auditoría digital firmada, chain of custody automático y dashboard ejecutivo con métricas de compliance en tiempo real.",
    },
  ];

  return (
    <SolucionLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-8 mb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
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
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                ✓ Partner Veeam Gold
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                ✓ Gartner Leader 9x
              </span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 bg-clip-text text-transparent mb-4">
            Protección de Datos
            <span className="block text-3xl lg:text-4xl mt-2">
              con AI-Powered Resilience
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Implementamos <strong>Veeam Data Platform</strong> con resiliencia
            radical: backup seguro, recuperación instantánea y protección{" "}
            <strong>Zero Trust</strong> contra ransomware.
            <strong>3-2-1-1-0</strong> rule con inmutabilidad end-to-end y AI
            integrada.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Recuperación instantánea</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="font-medium">Inmutabilidad garantizada</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="font-medium">AI threat detection</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
              href="https://www.veeam.com/es/products/veeam-data-platform/backup-recovery.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Ver Veeam Data Platform
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
      <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Powered by Veeam Data Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La plataforma líder mundial en resiliencia de datos con protección
            radical contra ransomware, recuperación instantánea multiplataforma
            y AI integrada para detección proactiva de amenazas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="font-bold text-gray-800 mb-2">
              Veeam Backup & Replication
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Backup y recuperación instantánea para VMware, Hyper-V, físicos y
              cloud
            </p>
            <div className="text-sm text-gray-500">
              <div>• Recuperación instantánea</div>
              <div>• Inmutabilidad garantizada</div>
              <div>• Cross-platform mobility</div>
            </div>
          </div>

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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Veeam ONE</h3>
            <p className="text-gray-600 text-sm mb-3">
              Monitoreo y analytics 24/7 con AI para optimización proactiva
            </p>
            <div className="text-sm text-gray-500">
              <div>• Performance monitoring</div>
              <div>• Capacity planning</div>
              <div>• Compliance reporting</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Recovery Orchestrator
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Orquestación automatizada de DR con runbooks y testing sin impacto
            </p>
            <div className="text-sm text-gray-500">
              <div>• Automated failover</div>
              <div>• DR testing</div>
              <div>• Compliance validation</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Threat Center</h3>
            <p className="text-gray-600 text-sm mb-3">
              Centro de amenazas con AI para detección proactiva y scoring de
              seguridad
            </p>
            <div className="text-sm text-gray-500">
              <div>• Malware detection</div>
              <div>• YARA analysis</div>
              <div>• Security scoring</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="font-bold text-gray-800 mb-2">Data Cloud Vault</h3>
            <p className="text-gray-600 text-sm mb-3">
              Almacenamiento cloud seguro con pricing predecible e inmutabilidad
            </p>
            <div className="text-sm text-gray-500">
              <div>• Cloud-native storage</div>
              <div>• Predictable pricing</div>
              <div>• End-to-end encryption</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="font-bold text-gray-800 mb-2">AI Assistant</h3>
            <p className="text-gray-600 text-sm mb-3">
              Asistente AI generativo integrado para soporte técnico instantáneo
            </p>
            <div className="text-sm text-gray-500">
              <div>• Real-time support</div>
              <div>• Knowledge base access</div>
              <div>• Automated guidance</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-2-1-1-0 Rule */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Estrategia 3-2-1-1-0 Moderna
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Tres Copias de Datos
                </h3>
                <p className="text-gray-600 text-sm">
                  Datos primarios más dos copias de backup con deduplicación
                  inteligente y compresión avanzada para optimizar
                  almacenamiento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Dos Medios Diferentes
                </h3>
                <p className="text-gray-600 text-sm">
                  Almacenamiento local de alta velocidad más repositorio cloud
                  con tiering automático basado en políticas de retención.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-xl">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Una Copia Off-site
                </h3>
                <p className="text-gray-600 text-sm">
                  Replicación automática a sitio remoto o cloud con verificación
                  de integridad y testing automatizado de restauración.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Una Copia Inmutable
                </h3>
                <p className="text-gray-600 text-sm">
                  Backup inmutable end-to-end con Linux hardened repositories,
                  Object Lock y arquitectura Zero Trust para protección total.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">0</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Cero Errores
                </h3>
                <p className="text-gray-600 text-sm">
                  Verificación automática con SureBackup, testing granular de
                  aplicaciones y validación continua de recoverability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Protección Anti-Ransomware
          </h2>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
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
                    Detección AI en Tiempo Real
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Motor ML que analiza entropía y patrones durante backup
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
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
                    Inmutabilidad Garantizada
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Linux hardened repos con Object Lock S3
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
                    Recuperación Instantánea
                  </h3>
                  <p className="text-gray-600 text-sm">
                    RTO de segundos con Instant VM Recovery
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Análisis YARA</h3>
                  <p className="text-gray-600 text-sm">
                    Identificación específica de cepas de malware
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">
              Métricas de Resiliencia
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-600">
                  99.99%
                </div>
                <div className="text-sm text-gray-600">
                  Disponibilidad garantizada
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">
                  &lt;15min
                </div>
                <div className="text-sm text-gray-600">RPO típico</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Methodology */}
      <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Metodología de Implementación
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Assessment</h3>
            <p className="text-gray-600 text-sm">
              Análisis completo de infraestructura, workloads críticos, RPO/RTO
              actuales y evaluación de vulnerabilidades.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Diseño 3-2-1-1-0</h3>
            <p className="text-gray-600 text-sm">
              Arquitectura de protección con repositorios inmutables, políticas
              de retención y estrategia DR personalizada.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Deployment</h3>
            <p className="text-gray-600 text-sm">
              Implementación por fases con backup inicial, configuración de jobs
              y validación exhaustiva de recoverability.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Operación</h3>
            <p className="text-gray-600 text-sm">
              Monitoreo 24/7, testing automático de DR, optimización continua y
              respuesta proactiva a amenazas.
            </p>
          </div>
        </div>
      </div>

      {/* Success Case */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Caso de Éxito: Resiliencia Bancaria
          </h2>
          <p className="text-lg text-gray-600">
            Banco regional logra recuperación sub-15 minutos para aplicaciones
            críticas
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
              Core bancario con RTO de 24h, backups no probados, vulnerabilidad
              a ransomware y compliance SOX inconsistente para auditorías
              regulatorias.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-emerald-600"
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
              Veeam Data Platform Premium con repos inmutables, Recovery
              Orchestrator, testing automático y Data Cloud Vault para
              compliance total.
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
              <strong>RPO 5 min, RTO 12 min</strong> para core bancario,
              compliance SOX automatizado, resistencia total a ransomware y
              validación diaria.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
          <div className="text-center">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "Con Veeam Data Platform transformamos la protección de datos de
              un riesgo operacional a una ventaja competitiva. Nuestros
              auditores ahora nos felicitan por la evidencia automática de
              compliance."
            </p>
            <div className="mt-4">
              <div className="font-semibold text-gray-800">
                CRO - Banco Regional
              </div>
              <div className="text-gray-600 text-sm">
                500TB protegidos, 24/7 operations, SOX compliance
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
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para Radical Resilience?
        </h2>
        <p className="text-xl mb-6 text-emerald-100">
          Obtén un assessment gratuito de tu estrategia de protección y diseño
          de arquitectura 3-2-1-1-0
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300"
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
        <div className="mt-6 text-emerald-200 text-sm">
          ✓ Assessment sin costo • ✓ Demo Veeam Data Platform • ✓ Especialistas
          certificados
        </div>
      </div>
    </SolucionLayout>
  );
}
