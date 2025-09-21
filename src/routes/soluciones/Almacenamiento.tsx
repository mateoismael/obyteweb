import { useState } from "react";
import { Link } from "react-router-dom";
import SolucionLayout from "./_detail/SolucionLayout";

export default function Almacenamiento() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question:
        "¿Cuántos IOPS puedo obtener con las soluciones de almacenamiento empresarial?",
      answer:
        "Con las cabinas ThinkSystem DG Series all-flash, puedes alcanzar hasta 8.5 millones de IOPS con latencia de microsegundos. Para workloads mixtos, las DM Series ofrecen hasta 2 millones de IOPS con optimización inteligente de cargas de trabajo.",
    },
    {
      question: "¿Cómo funcionan las tecnologías de caché inteligente?",
      answer:
        "Implementamos caché multi-nivel con algoritmos predictivos que aprenden de tus patrones de acceso. La tecnología Intel Optane acelera los datos críticos y el tiering automático mueve información entre SSD, QLC y HDD según frecuencia de uso.",
    },
    {
      question: "¿Qué opciones de disaster recovery están disponibles?",
      answer:
        "Ofrecemos replicación síncrona y asíncrona entre sitios, snapshots programables, backup integrado y clonación instantánea. Con RPO desde 0 segundos y RTO de minutos, garantizamos continuidad total del negocio.",
    },
    {
      question: "¿El cifrado afecta el rendimiento del almacenamiento?",
      answer:
        "Nuestras soluciones incluyen cifrado hardware AES-256 que opera a velocidad de línea sin impacto en rendimiento. El Self-Encrypting Drive (SED) y la gestión de claves centralizada mantienen máxima seguridad.",
    },
    {
      question: "¿Cómo se manejan las ampliaciones de capacidad?",
      answer:
        "El crecimiento es no disruptivo con expansión en caliente. Puedes agregar drives, shelves o módulos completos sin downtime. El load balancing automático redistribuye datos para optimizar rendimiento continuo.",
    },
  ];

  return (
    <SolucionLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 mb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
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
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                ✓ Partner Lenovo Platinum
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                ✓ Arquitectos Certificados
              </span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
            Almacenamiento Empresarial
            <span className="block text-3xl lg:text-4xl mt-2">
              con Rendimiento Extremo
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Implementamos soluciones de almacenamiento{" "}
            <strong>ThinkSystem de Lenovo</strong> con tecnología all-flash,
            híbrida y definida por software. Desde 100TB hasta multi-petabytes
            con <strong>8.5M IOPS</strong> y latencia de microsegundos para tus
            aplicaciones críticas.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Latencia &lt; 100μs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">99.9999% Disponibilidad</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-medium">Cifrado AES-256</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Consulta Gratuita
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
              href="https://www.lenovo.com/pe/es/servers-storage/storage/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Ver Catálogo Lenovo
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
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Powered by Lenovo ThinkSystem Storage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Como Partner Platinum de Lenovo, implementamos las cabinas de
            almacenamiento más avanzadas del mercado con soporte directo del
            fabricante y garantía global.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="font-bold text-gray-800 mb-2">DG Series</h3>
            <p className="text-gray-600 text-sm mb-3">
              All-flash arrays con tecnología QLC y el TCO más bajo del mercado
            </p>
            <div className="text-sm text-gray-500">
              <div>• Hasta 8.5M IOPS</div>
              <div>• Latencia &lt; 100μs</div>
              <div>• QLC Enterprise</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="font-bold text-gray-800 mb-2">DM Series</h3>
            <p className="text-gray-600 text-sm mb-3">
              Arrays escalables híbridos y all-flash para deployments cloud
            </p>
            <div className="text-sm text-gray-500">
              <div>• Hasta 2M IOPS</div>
              <div>• Híbrido/All-flash</div>
              <div>• Cloud-ready</div>
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">DE Series</h3>
            <p className="text-gray-600 text-sm mb-3">
              Arrays SAN para workloads de alto volumen con máxima confiabilidad
            </p>
            <div className="text-sm text-gray-500">
              <div>• All-flash/Híbrido</div>
              <div>• SAN optimizado</div>
              <div>• 99.9999% uptime</div>
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">D Series</h3>
            <p className="text-gray-600 text-sm mb-3">
              JBOD y expansión para almacenamiento masivo cost-effective
            </p>
            <div className="text-sm text-gray-500">
              <div>• Alta capacidad</div>
              <div>• Costo optimizado</div>
              <div>• Expansión modular</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Capacidades Técnicas Avanzadas
          </h2>

          <div className="space-y-4">
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
                  Protocolos Múltiples
                </h3>
                <p className="text-gray-600 text-sm">
                  SAN (FC, iSCSI), NAS (NFS, SMB/CIFS), Object Storage (S3,
                  Swift) y NVMe-oF para máxima flexibilidad de conectividad.
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
                  Tiering Inteligente
                </h3>
                <p className="text-gray-600 text-sm">
                  Movimiento automático de datos entre tiers SSD, QLC y HDD
                  basado en patrones de acceso y políticas de negocio definidas.
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
                  Protección Avanzada
                </h3>
                <p className="text-gray-600 text-sm">
                  Snapshots granulares, clonación instantánea, replicación
                  asíncrona/síncrona y integración con soluciones de backup
                  enterprise.
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
                  QoS Granular
                </h3>
                <p className="text-gray-600 text-sm">
                  Control de calidad de servicio por volumen, aplicación o
                  tenant con garantías de IOPS, throughput y latencia
                  configurables.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Beneficios Empresariales
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <div className="space-y-4">
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
                    Rendimiento Predecible
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Latencia consistente bajo cualquier carga de trabajo
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Máxima Disponibilidad
                  </h3>
                  <p className="text-gray-600 text-sm">
                    99.9999% uptime con redundancia total
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
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Escalabilidad Lineal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Crecimiento sin disrupción del servicio
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Seguridad Integral
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Cifrado end-to-end y compliance automático
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">ROI Comprobado</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">-40%</div>
                <div className="text-sm text-gray-600">TCO vs competencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">+200%</div>
                <div className="text-sm text-gray-600">Performance/Watt</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Methodology */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Metodología de Implementación
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Assessment</h3>
            <p className="text-gray-600 text-sm">
              Análisis de workloads actuales, patrones de I/O, crecimiento
              proyectado y requisitos de rendimiento específicos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Diseño</h3>
            <p className="text-gray-600 text-sm">
              Arquitectura optimizada con selección de series ThinkSystem,
              configuración de tiers y políticas de protección.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Implementación</h3>
            <p className="text-gray-600 text-sm">
              Despliegue profesional con migración en vivo, configuración
              avanzada y pruebas exhaustivas de rendimiento.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Optimización</h3>
            <p className="text-gray-600 text-sm">
              Monitoreo continuo, tuning de performance y ajustes proactivos
              para maximizar eficiencia operacional.
            </p>
          </div>
        </div>
      </div>

      {/* Success Case */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Caso de Éxito: Transformación de Data Center
          </h2>
          <p className="text-lg text-gray-600">
            Empresa financiera regional logra transformación completa de
            almacenamiento
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
              Storage legacy con latencia de 15ms, backup windows de 8 horas y
              crecimiento del 40% anual sin escalabilidad.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              ThinkSystem DM5100F all-flash con replicación a sitio DR, tiering
              automático y migración en vivo sin downtime.
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
              <strong>85% menos latencia</strong> (0.8ms), backup en 45 minutos,
              RPO de 0 segundos y escalabilidad para 5 años.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
          <div className="text-center">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "La transformación del almacenamiento con Ohanabyte nos permitió
              soportar el crecimiento del negocio mientras reducimos costos
              operativos en 30%. Las aplicaciones críticas ahora responden
              instantáneamente."
            </p>
            <div className="mt-4">
              <div className="font-semibold text-gray-800">
                CTO - Banco Regional
              </div>
              <div className="text-gray-600 text-sm">
                200TB implementados, 50,000 usuarios
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
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para Transformar tu Almacenamiento?
        </h2>
        <p className="text-xl mb-6 text-blue-100">
          Obtén una consulta gratuita y diseño personalizado de tu nueva
          infraestructura de almacenamiento
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Solicitar Consulta Gratuita
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
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
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
        <div className="mt-6 text-blue-200 text-sm">
          ✓ Assessment sin costo • ✓ Respuesta en 24h • ✓ Arquitectos
          certificados
        </div>
      </div>
    </SolucionLayout>
  );
}
