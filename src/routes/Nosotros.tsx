import { useEffect } from "react";
import { setSEO } from "../lib/seo";
import { SEO } from "./Nosotros.seo";

export default function NosotrosPage() {
  useEffect(() => {
    setSEO(SEO);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Nosotros</h1>
        <p className="text-gray-700 mt-4">
          Acelerar la competitividad de las empresas peruanas con soluciones TI
          confiables, seguras y eficientes.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Qué nos diferencia</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {difs.map((d) => (
            <div className="card" key={d.title}>
              <div className="badge mb-2">{d.badge}</div>
              <h3 className="font-semibold">{d.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: misión/visión/valores, equipo, línea de tiempo, aliados */}
    </div>
  );
}

const difs = [
  {
    badge: "Experiencia",
    title: "+150 proyectos",
    text: "Implementaciones exitosas en múltiples industrias.",
  },
  {
    badge: "Metodología",
    title: "Plan y control",
    text: "Roadmaps claros, ventanas de cambio y documentación.",
  },
  {
    badge: "Seguridad",
    title: "Mejores prácticas",
    text: "Políticas, segmentación, respaldo y pruebas periódicas.",
  },
  {
    badge: "Cercanía",
    title: "Soporte real",
    text: "Atención oportuna y especializada según el SLA.",
  },
] as const;
