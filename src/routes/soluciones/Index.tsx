import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setSEO } from "../../lib/seo";

// Soluciones organizadas por categorías
const solucionesData = {
  "Infraestructura & Virtualización": [
    {
      slug: "procesamiento-virtualizacion",
      title: "Procesamiento & Virtualización",
      description: "Servidores Lenovo ThinkSystem con hiperconvergencia Nutanix para máximo rendimiento y eficiencia operacional.",
      image: "/illustrations/card-server.svg",
      imageAlt: "Servidores y racks virtualizados",
      category: "infrastructure"
    },
    {
      slug: "almacenamiento",
      title: "Almacenamiento de datos", 
      description: "Sistemas de almacenamiento Lenovo ThinkSystem con arquitecturas SAN, NAS y object storage para cualquier escala.",
      image: "/illustrations/card-cloud.svg",
      imageAlt: "Nube y almacenamiento",
      category: "infrastructure"
    },
    {
      slug: "redes-seguridad",
      title: "Redes & Seguridad",
      description: "Infraestructura de red Extreme Networks con switching, wireless y seguridad perimetral de última generación.",
      image: "/illustrations/card-security.svg",
      imageAlt: "Escudo de seguridad de red",
      category: "infrastructure"
    },
    {
      slug: "cableado-estructurado",
      title: "Cableado Estructurado",
      description: "Sistemas ITMAX con fibra óptica y gestión automatizada Datawave. 25 años de garantía integral.",
      image: "/generated/gen-cabling.svg",
      imageAlt: "Cableado y canalizaciones",
      category: "infrastructure"
    }
  ],
  "Protección & Respaldo": [
    {
      slug: "proteccion-de-datos",
      title: "Protección de Datos",
      description: "Estrategia 3-2-1-1-0 con Veeam Backup & Replication. Cumplimiento normativo y Radical Resilience.",
      image: "/illustrations/card-cloud.svg",
      imageAlt: "Protección y respaldo de datos",
      category: "protection"
    },
    {
      slug: "soporte-monitoreo",
      title: "Soporte & Monitoreo",
      description: "Operación 24/7 con RMM Atera, mesa de ayuda multinivel y dashboards ejecutivos en tiempo real.",
      image: "/generated/gen-support.svg", 
      imageAlt: "Mesa de ayuda y monitoreo",
      category: "protection"
    }
  ],
  "Modernización Digital": [
    {
      slug: "cloud-iaas",
      title: "Cloud / IaaS",
      description: "Migración y gestión cloud con Nutanix Cloud Platform. FinOps y optimización de costos incluido.",
      image: "/illustrations/card-cloud.svg",
      imageAlt: "Servicios en la nube",
      category: "digital"
    },
    {
      slug: "computo-colaboracion", 
      title: "Cómputo & Colaboración",
      description: "Endpoints Lenovo ThinkPad/ThinkCentre con suites Microsoft 365 para trabajo híbrido seguro.",
      image: "/illustrations/card-server.svg",
      imageAlt: "Computadoras y colaboración",
      category: "digital"
    }
  ],
  "Servicios Profesionales": [
    {
      slug: "asesoria-ti",
      title: "Asesoría TI",
      description: "Evaluación de madurez, roadmap 6-12 meses, inventario y riesgos, recomendaciones priorizadas.",
      image: "/generated/gen-advisory.svg",
      imageAlt: "Asesoría tecnológica",
      category: "services"
    },
    {
      slug: "implementacion",
      title: "Implementación",
      description: "Despliegue profesional con metodología probada, gestión de cambios y migración sin downtime.",
      image: "/generated/gen-implementation.svg",
      imageAlt: "Implementación de soluciones",
      category: "services"
    },
    {
      slug: "mantenimiento",
      title: "Mantenimiento",
      description: "Mantenimiento preventivo y correctivo con SLAs garantizados y planes de continuidad operacional.",
      image: "/generated/gen-maintenance.svg",
      imageAlt: "Mantenimiento preventivo y correctivo",
      category: "services"
    },
    {
      slug: "capacitaciones",
      title: "Capacitaciones",
      description: "Programas de entrenamiento técnico y certificaciones oficiales para maximizar el ROI tecnológico.",
      image: "/generated/gen-training.svg",
      imageAlt: "Capacitaciones y talleres",
      category: "services"
    }
  ]
};

const categoryColors: Record<string, string> = {
  infrastructure: "from-blue-500 to-cyan-500",
  protection: "from-emerald-500 to-teal-500", 
  digital: "from-purple-500 to-pink-500",
  services: "from-amber-500 to-orange-500"
};

const categoryIcons: Record<string, string> = {
  infrastructure: "🏗️",
  protection: "🛡️", 
  digital: "☁️",
  services: "👥"
};

export default function SolucionesIndex() {
  useEffect(() => {
    setSEO({
      title: "Soluciones TI Integrales — Ohanabyte",
      description: "Infraestructura, protección, cloud y servicios profesionales. Transformamos empresas con tecnología de vanguardia y soporte especializado.",
      canonical: "https://ohanabyte.com.pe/soluciones/",
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 mb-6">
          💡 Portafolio completo de capacidades
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Soluciones TI <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Integrales</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Desde infraestructura hasta servicios profesionales, transformamos empresas con tecnología de vanguardia 
          y metodologías probadas. <strong className="text-gray-900">+150 proyectos exitosos</strong> nos respaldan.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="space-y-16">
        {Object.entries(solucionesData).map(([categoryName, solutions]) => {
          const firstSolution = solutions[0];
          const gradientClass = categoryColors[firstSolution.category];
          const icon = categoryIcons[firstSolution.category];
          
          return (
            <div key={categoryName} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${gradientClass} text-white rounded-2xl shadow-lg mb-4`}>
                  <span className="text-2xl">{icon}</span>
                  <h2 className="text-2xl font-bold">{categoryName}</h2>
                </div>
              </div>

              {/* Solutions Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions.map((solution) => (
                  <Link
                    key={solution.slug}
                    to={`/soluciones/${solution.slug}`}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
                  >
                    {solution.image && (
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <img
                          src={solution.image}
                          alt={solution.imageAlt || solution.title}
                          className="w-full h-full object-contain"
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                      Ver detalles 
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          ¿Listo para Transformar tu Infraestructura TI?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Agenda una consulta gratuita de 30 minutos y descubre cómo nuestras soluciones 
          pueden impulsar el crecimiento de tu empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Agendar Consulta Gratuita
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/nosotros"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600/20 text-white border-2 border-white/30 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            Conocer Más Sobre Nosotros
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-blue-100 text-sm">
            🏆 <strong>+150 proyectos exitosos</strong> • 🏢 <strong>Empresas de todas las industrias</strong> • 🚀 <strong>Metodologías probadas</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
