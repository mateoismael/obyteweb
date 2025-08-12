import SolucionLayout from "./_detail/SolucionLayout";

export default function ProteccionDatos() {
  return (
    <SolucionLayout>
      <h1 className="text-3xl font-bold">
        Protección de datos (Backup/DR/Continuidad)
      </h1>
      <p className="mt-3 text-gray-700">
        Aseguramos copias 3-2-1, pruebas de restauración y planes DR que
        recuperan servicios en minutos/horas según tus RTO/RPO.
      </p>
      <h2 className="text-xl font-semibold mt-6">Incluye</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Backup on‑prem/cloud e inmutabilidad</li>
        <li>Orquestación DR y runbooks</li>
        <li>Pruebas periódicas</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Beneficios</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Riesgo reducido</li>
        <li>Cumplimiento</li>
        <li>Restauraciones confiables</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Caso</h2>
      <p>RPO 15 min, RTO 1 h para core bancario.</p>
      <h2 className="text-xl font-semibold mt-6">FAQ</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Ransomware</li>
        <li>Retenciones</li>
        <li>DRaaS</li>
        <li>Costos</li>
        <li>Compliance</li>
      </ul>
    </SolucionLayout>
  );
}
