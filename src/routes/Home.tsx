import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setSEO } from "../lib/seo";

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
    <div>
      <section className="bg-gradient-to-b from-white to-[var(--brand-50)]">
        <div className="container py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Soluciones TI a tu medida en Perú
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Diseñamos, implementamos y operamos infraestructura, nube y
            seguridad para que tu negocio no se detenga.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/contacto" className="btn btn-primary">
              Solicitar asesoría
            </Link>
            <a href="#" className="btn btn-outline">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Soluciones destacadas</h2>
        <p className="text-gray-600">
          Explora nuestras soluciones para impulsar tu operación.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {sections.soluciones.map((s) => (
            <Card
              key={s.slug}
              title={s.title}
              text={s.text}
              to={`/soluciones/${s.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {sections.servicios.map((s) => (
            <Card
              key={s.slug}
              title={s.title}
              text={s.text}
              to={`/servicios/${s.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Métricas</h2>
        <p className="text-gray-600">
          +150 proyectos entregados • 8 años de experiencia • SLA 99.9% • 500 TB
          gestionados
        </p>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Mini-FAQ</h2>
        <div className="mt-4 space-y-2 text-gray-700">
          <details className="border rounded p-3">
            <summary>¿Atienden a todo el Perú?</summary>
            <p>Sí, atención remota y on-site según ciudad.</p>
          </details>
          <details className="border rounded p-3">
            <summary>¿Pueden trabajar fuera de horario?</summary>
            <p>Sí, con ventana de cambio planificada.</p>
          </details>
          <details className="border rounded p-3">
            <summary>¿Ofrecen soporte continuo?</summary>
            <p>Sí, planes con SLA y monitoreo.</p>
          </details>
        </div>
        <div className="mt-6">
          <Link to="/contacto" className="btn btn-primary">
            Agenda una consultoría de 30 minutos sin costo
          </Link>
        </div>
      </section>
    </div>
  );
}

function Card({
  title,
  text,
  to,
}: {
  title: string;
  text: string;
  to: string;
}) {
  return (
    <div className="card">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{text}</p>
      <div className="mt-4">
        <Link to={to} className="link">
          Ver más →
        </Link>
      </div>
    </div>
  );
}

const sections = {
  soluciones: [
    {
      slug: "procesamiento-virtualizacion",
      title: "Procesamiento & Virtualización",
      text: "Modernizamos y consolidamos tus servidores mediante virtualización para elevar disponibilidad, optimizar costos y simplificar la administración.",
    },
    {
      slug: "almacenamiento",
      title: "Almacenamiento de datos",
      text: "Implementamos cabinas y almacenamiento definido por software con rendimiento, resiliencia y crecimiento lineal.",
    },
    {
      slug: "redes-seguridad",
      title: "Redes & Seguridad",
      text: "Diseñamos redes seguras de extremo a extremo con políticas Zero Trust y visibilidad.",
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
    },
    {
      slug: "implementacion",
      title: "Implementación",
      text: "Instalación, configuración, pruebas, documentación y traspaso.",
    },
    {
      slug: "soporte-monitoreo",
      title: "Soporte & Monitoreo",
      text: "N1/N2/N3, on-call, monitoreo, parches y reportes.",
    },
    {
      slug: "mantenimiento",
      title: "Mantenimiento",
      text: "Preventivo y correctivo, revisión física y lógica, firmware y pruebas.",
    },
    {
      slug: "cableado-estructurado",
      title: "Cableado estructurado",
      text: "Site survey, diseño, tendido, canalizaciones, certificación.",
    },
    {
      slug: "capacitaciones",
      title: "Capacitaciones",
      text: "Talleres in-company de seguridad, M365 y mejores prácticas TI.",
    },
  ],
};
