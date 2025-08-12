import { Link } from "react-router-dom";

const servicios = [
  { slug: "asesoria-ti", title: "Asesoría TI" },
  { slug: "implementacion", title: "Implementación" },
  { slug: "soporte-monitoreo", title: "Soporte & Monitoreo" },
  { slug: "mantenimiento", title: "Mantenimiento" },
  { slug: "cableado-estructurado", title: "Cableado estructurado" },
  { slug: "capacitaciones", title: "Capacitaciones" },
];

export default function ServiciosIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Servicios</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {servicios.map((s) => (
          <Link
            key={s.slug}
            to={`/servicios/${s.slug}`}
            className="border rounded p-5 hover:border-blue-600"
          >
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
