import { useState } from "react";
import { Link } from "react-router-dom";
import SolucionLayout from "./_detail/SolucionLayout";

export default function ComputoColaboracion() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo se gestionan las licencias en entornos VDI híbridos?",
      answer:
        "Implementamos licenciamiento por usuario concurrente con Citrix Virtual Apps, VMware Horizon o Azure Virtual Desktop. Incluye gestión centralizada de licencias Microsoft 365, optimización de costos por uso real y compliance automático con auditorías de software empresarial.",
    },
    {
      question: "¿Está incluido el backup de Microsoft 365 en las soluciones?",
      answer:
        "Sí, integramos Veeam Backup for Microsoft 365 con retención granular de Exchange, SharePoint, OneDrive y Teams. Incluye recuperación point-in-time, protección contra eliminación accidental/maliciosa y compliance con políticas de retención legal.",
    },
    {
      question:
        "¿Qué capacidades DLP están disponibles para colaboración segura?",
      answer:
        "Implementamos Microsoft Purview DLP nativo con políticas inteligentes para documentos, emails y Teams. Incluye clasificación automática, watermarking dinámico, prevención de exfiltración y integración con Azure Information Protection para etiquetado sensible.",
    },
    {
      question: "¿Hay compatibilidad con dispositivos BYOD y legacy?",
      answer:
        "Nuestras soluciones VDI soportan cualquier dispositivo: Windows, macOS, iOS, Android y thin clients Lenovo. La virtualización garantiza compatibilidad con aplicaciones legacy while maintaining security through centralized management y políticas de acceso granulares.",
    },
    {
      question:
        "¿Qué programas de training están incluidos para usuarios finales?",
      answer:
        "Incluimos Change Management completo: training Microsoft 365, sesiones de VDI onboarding, documentación interactiva y soporte de adopción. Nuestros especialistas certificados proveen workshops presenciales y virtuales para maximizar productividad desde día 1.",
    },
  ];

  return (
    <SolucionLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 mb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                ✓ Partner Lenovo Platinum
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                ✓ Microsoft Gold Partner
              </span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Cómputo & Colaboración
            <span className="block text-3xl lg:text-4xl mt-2">
              con VDI & Digital Workspace
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Implementamos <strong>Digital Workspace moderno</strong> con
            infraestructura VDI de Lenovo, Microsoft 365 optimizado y soluciones
            de colaboración híbrida.{" "}
            <strong>Trabajo desde cualquier lugar</strong>
            con seguridad empresarial y experiencia de usuario superior.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">VDI en cualquier dispositivo</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="font-medium">Microsoft 365 optimizado</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-medium">Colaboración híbrida</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Demo Gratuito
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
              href="https://www.lenovo.com/pe/es/servers-storage/solutions/client-virtualization/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Ver VDI Lenovo
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
      <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Powered by Lenovo VDI & Microsoft 365
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones completas de Digital Workspace que combinan
            infraestructura VDI de Lenovo con productividad Microsoft 365,
            habilitando trabajo híbrido seguro y colaboración moderna.
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Citrix Virtual Apps & Desktops
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Escritorios y aplicaciones Windows/Linux con experiencia local
              optimizada
            </p>
            <div className="text-sm text-gray-500">
              <div>• HDX adaptive protocols</div>
              <div>• GPU acceleration support</div>
              <div>• Mobile & BYOD ready</div>
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">VMware Horizon</h3>
            <p className="text-gray-600 text-sm mb-3">
              Plataforma VDI moderna integrada con vSphere y vSAN para máxima
              eficiencia
            </p>
            <div className="text-sm text-gray-500">
              <div>• Instant Clone technology</div>
              <div>• vSAN integration</div>
              <div>• Cloud pod architecture</div>
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
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Azure Virtual Desktop
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              VDI cloud-native con Windows 11 multi-session y integración
              Microsoft 365
            </p>
            <div className="text-sm text-gray-500">
              <div>• Windows 11 multi-session</div>
              <div>• FSLogix profile containers</div>
              <div>• Teams optimization</div>
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">ThinkAgile HX/VX</h3>
            <p className="text-gray-600 text-sm mb-3">
              Infraestructura hiperconvergente optimizada para VDI con
              deployment automático
            </p>
            <div className="text-sm text-gray-500">
              <div>• Nutanix/VMware ready</div>
              <div>• One-click deployment</div>
              <div>• Predictive scaling</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="font-bold text-gray-800 mb-2">
              NVIDIA GPU Acceleration
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Aceleración gráfica para CAD, 3D rendering y aplicaciones
              intensivas
            </p>
            <div className="text-sm text-gray-500">
              <div>• NVIDIA GRID/vGPU</div>
              <div>• RTX Virtual Workstations</div>
              <div>• AI workload support</div>
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Thin Clients & Endpoints
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              ThinkCentre Tiny y ThinkPad optimizados para acceso VDI seguro
            </p>
            <div className="text-sm text-gray-500">
              <div>• Zero-touch provisioning</div>
              <div>• Enterprise security</div>
              <div>• TruScale DaaS ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Workspace Components */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Microsoft 365 Optimizado
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                  Teams & Colaboración
                </h3>
                <p className="text-gray-600 text-sm">
                  Microsoft Teams optimizado para VDI con media offloading,
                  llamadas HD y integración completa con Office apps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                  SharePoint & OneDrive
                </h3>
                <p className="text-gray-600 text-sm">
                  Gestión documental centralizada con sync inteligente,
                  versionado automático y colaboración en tiempo real
                  cross-platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl">
              <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                  Exchange & Outlook
                </h3>
                <p className="text-gray-600 text-sm">
                  Email empresarial con calendarios compartidos, booking
                  automático de salas y integración móvil con políticas MDM.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                  Power Platform
                </h3>
                <p className="text-gray-600 text-sm">
                  Automatización de procesos con Power Automate, aplicaciones
                  custom con Power Apps y analytics con Power BI integrado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Seguridad & Gestión
          </h2>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
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
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Azure AD + SSO</h3>
                  <p className="text-gray-600 text-sm">
                    Identidad unificada con MFA adaptativo
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Microsoft Intune</h3>
                  <p className="text-gray-600 text-sm">
                    MDM/MAM con compliance policies
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
                    Information Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    DLP + clasificación automática
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Privileged Access</h3>
                  <p className="text-gray-600 text-sm">
                    PIM + Conditional Access policies
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">
              Métricas de Adopción
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-600">95%</div>
                <div className="text-sm text-gray-600">User satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">72h</div>
                <div className="text-sm text-gray-600">Deployment típico</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Methodology */}
      <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Metodología de Implementación
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Discovery</h3>
            <p className="text-gray-600 text-sm">
              Assessment de aplicaciones, perfiles de usuario, bandwidth
              requirements y análisis de dispositivos existentes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Diseño</h3>
            <p className="text-gray-600 text-sm">
              Arquitectura VDI optimizada, sizing de infraestructura, políticas
              de seguridad y estrategia de migración.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Deployment</h3>
            <p className="text-gray-600 text-sm">
              Implementación por fases, migración de usuarios piloto,
              configuración de políticas y testing exhaustivo.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Adoption</h3>
            <p className="text-gray-600 text-sm">
              Change management, training de usuarios, soporte de go-live y
              optimización continua basada en usage analytics.
            </p>
          </div>
        </div>
      </div>

      {/* Success Case */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Caso de Éxito: Transformación Digital Empresarial
          </h2>
          <p className="text-lg text-gray-600">
            Consultora internacional habilita trabajo híbrido para 500
            colaboradores
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
              Fuerza laboral distribuida sin herramientas de colaboración
              estándar, múltiples aplicaciones legacy, BYOD sin gestión y
              productividad inconsistente entre oficinas.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-indigo-600"
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
              VDI Citrix en ThinkAgile HX, Microsoft 365 E5, Teams optimizado,
              Intune MDM y programa de Change Management integral.
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
              <strong>40% aumento productividad</strong>, 100% workforce híbrido
              habilitado, 95% user satisfaction y reducción 60% en tiempo de
              onboarding.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
          <div className="text-center">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "La transformación digital con Ohanabyte nos permitió mantener
              continuidad durante la pandemia y ahora tenemos la flexibilidad
              que nuestros talentos demandan sin comprometer la seguridad
              empresarial."
            </p>
            <div className="mt-4">
              <div className="font-semibold text-gray-800">
                CTO - Consultora Internacional
              </div>
              <div className="text-gray-600 text-sm">
                500 usuarios VDI, 15 oficinas, 25 países
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
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para el Digital Workspace?
        </h2>
        <p className="text-xl mb-6 text-indigo-100">
          Obtén una demo personalizada de VDI moderno y estrategia de
          colaboración híbrida
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Solicitar Demo Personalizada
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
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
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
        <div className="mt-6 text-indigo-200 text-sm">
          ✓ Demo sin costo • ✓ POC incluido • ✓ Especialistas certificados VDI
        </div>
      </div>
    </SolucionLayout>
  );
}
