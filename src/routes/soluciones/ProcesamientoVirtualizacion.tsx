import SolucionLayout from "./_detail/SolucionLayout";

export default function ProcesamientoVirtualizacion() {
  return (
    <SolucionLayout>
      <h1 className="text-3xl font-bold">
        Procesamiento & Virtualización para mayor disponibilidad
      </h1>
      <p className="mt-3 text-gray-700">
        Modernizamos y consolidamos tus servidores mediante virtualización para
        elevar disponibilidad, optimizar costos y simplificar la administración.
        Diseñamos arquitecturas escalables con alta densidad de cómputo y
        recuperación ante fallas para soportar tus aplicaciones críticas.
      </p>
      <h2 className="text-xl font-semibold mt-6">Incluye</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Diseño de clúster</li>
        <li>Hipervisores líderes</li>
        <li>Alta disponibilidad</li>
        <li>Balanceo</li>
        <li>Monitoreo</li>
        <li>Capacity planning</li>
        <li>Hardening básico</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Beneficios</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Mayor uptime</li>
        <li>Mejor uso de recursos</li>
        <li>Crecimiento predecible</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Metodología</h2>
      <p>Descubrimiento → Diseño → Implementación → Acompañamiento</p>
      <h2 className="text-xl font-semibold mt-6">Caso</h2>
      <p>Consolidación 40→8 hosts, -35% TCO en 12 meses.</p>
      <h2 className="text-xl font-semibold mt-6">FAQ</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Licencias</li>
        <li>Sizing</li>
        <li>HA</li>
        <li>Migraciones</li>
        <li>Compatibilidad</li>
      </ul>
    </SolucionLayout>
  );
}
