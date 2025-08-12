import { Link } from "react-router-dom";

const soluciones = [
  {
    slug: "procesamiento-virtualizacion",
    title: "Procesamiento & Virtualización",
  },
  { slug: "almacenamiento", title: "Almacenamiento de datos" },
  { slug: "redes-seguridad", title: "Redes & Seguridad" },
  { slug: "proteccion-de-datos", title: "Protección de datos" },
  { slug: "computo-colaboracion", title: "Cómputo & Colaboración" },
  { slug: "cloud-iaas", title: "Cloud / IaaS" },
];

export default function SolucionesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Soluciones</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {soluciones.map((s) => (
          <Link
            key={s.slug}
            to={`/soluciones/${s.slug}`}
            className="border rounded p-5 hover:border-blue-600"
          >
            <h2 className="font-semibold">{s.title}</h2>
            <p className="text-sm text-gray-600">
              Conoce más sobre nuestra solución.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
