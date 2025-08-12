import { Link } from "react-router-dom";

const servicios = [
  {
    slug: "asesoria-ti",
    title: "Asesoría TI",
    image: "/generated/gen-advisory.svg",
    imageAlt: "Asesoría tecnológica",
  },
  {
    slug: "implementacion",
    title: "Implementación",
    image: "/generated/gen-implementation.svg",
    imageAlt: "Implementación de soluciones",
  },
  {
    slug: "soporte-monitoreo",
    title: "Soporte & Monitoreo",
    image: "/generated/gen-support.svg",
    imageAlt: "Mesa de ayuda y monitoreo",
  },
  {
    slug: "mantenimiento",
    title: "Mantenimiento",
    image: "/generated/gen-maintenance.svg",
    imageAlt: "Mantenimiento preventivo y correctivo",
  },
  {
    slug: "cableado-estructurado",
    title: "Cableado estructurado",
    image: "/generated/gen-cabling.svg",
    imageAlt: "Cableado y canalizaciones",
  },
  {
    slug: "capacitaciones",
    title: "Capacitaciones",
    image: "/generated/gen-training.svg",
    imageAlt: "Capacitaciones y talleres",
  },
];

export default function ServiciosIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Servicios</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((s) => (
          <Link
            key={s.slug}
            to={`/servicios/${s.slug}`}
            className="border rounded p-5 hover:border-[var(--brand-700)]"
          >
            {s.image ? (
              <img
                src={s.image}
                alt={s.imageAlt || s.title}
                className="w-full h-32 object-contain mb-3"
                width={320}
                height={128}
                loading="lazy"
              />
            ) : null}
            <h2 className="font-semibold">{s.title}</h2>
            <p className="text-sm text-gray-600">
              Conoce más sobre este servicio.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
