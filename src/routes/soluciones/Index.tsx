import { Link } from "react-router-dom";

const soluciones = [
  {
    slug: "procesamiento-virtualizacion",
    title: "Procesamiento & Virtualización",
    image: "/illustrations/card-server.svg",
    imageAlt: "Servidores y racks virtualizados",
  },
  {
    slug: "almacenamiento",
    title: "Almacenamiento de datos",
    image: "/illustrations/card-cloud.svg",
    imageAlt: "Nube y almacenamiento",
  },
  {
    slug: "redes-seguridad",
    title: "Redes & Seguridad",
    image: "/illustrations/card-security.svg",
    imageAlt: "Escudo de seguridad de red",
  },
  { slug: "proteccion-de-datos", title: "Protección de datos" },
  { slug: "computo-colaboracion", title: "Cómputo & Colaboración" },
  { slug: "cloud-iaas", title: "Cloud / IaaS" },
];

export default function SolucionesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Soluciones</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {soluciones.map((s) => (
          <Link
            key={s.slug}
            to={`/soluciones/${s.slug}`}
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
              Conoce más sobre nuestra solución.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
