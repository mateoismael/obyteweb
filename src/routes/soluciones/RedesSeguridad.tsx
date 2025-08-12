import SolucionLayout from "./_detail/SolucionLayout";

export default function RedesSeguridad() {
  return (
    <SolucionLayout>
      <h1 className="text-3xl font-bold">
        Redes & Seguridad con enfoque Zero Trust
      </h1>
      <p className="mt-3 text-gray-700">
        Diseñamos redes seguras de extremo a extremo: core, distribución, acceso
        cableado/inalámbrico y perímetro con políticas Zero Trust.
      </p>
      <h2 className="text-xl font-semibold mt-6">Incluye</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Switching/routing</li>
        <li>Wi‑Fi empresarial</li>
        <li>Firewalls NG y VPN</li>
        <li>NAC y segmentación</li>
        <li>IDS/IPS y SIEM básico</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Beneficios</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Menos incidentes</li>
        <li>Visibilidad</li>
        <li>Cumplimiento</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Caso</h2>
      <p>Segmentación redujo 80% superficie de ataque.</p>
      <h2 className="text-xl font-semibold mt-6">FAQ</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Control de acceso</li>
        <li>BYOD</li>
        <li>Logs</li>
        <li>Auditoría</li>
        <li>SD‑WAN</li>
      </ul>
    </SolucionLayout>
  );
}
