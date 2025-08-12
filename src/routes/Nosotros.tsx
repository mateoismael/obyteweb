import { useEffect } from "react";
import { setSEO } from "../lib/seo";
import { SEO } from "./Nosotros.seo";

export default function NosotrosPage() {
  useEffect(() => {
    setSEO(SEO);
  }, []);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Nosotros</h1>
      <p className="text-gray-700 mt-4">
        Acelerar la competitividad de las empresas peruanas con soluciones TI
        confiables, seguras y eficientes.
      </p>
      {/* TODO: misión/visión/valores, equipo, línea de tiempo, aliados */}
    </div>
  );
}
