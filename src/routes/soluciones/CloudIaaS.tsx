import SolucionLayout from "./_detail/SolucionLayout";

export default function CloudIaaS() {
  return (
    <SolucionLayout>
      <h1 className="text-3xl font-bold">Cloud / IaaS</h1>
      <p className="mt-3 text-gray-700">
        Migramos y operamos cargas en la nube (lift & shift o modernización) con
        enfoque FinOps para controlar costos y asegurar desempeño.
      </p>
      <h2 className="text-xl font-semibold mt-6">Incluye</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Assessment y landing zone</li>
        <li>Redes híbridas y seguridad cloud</li>
        <li>Observabilidad</li>
        <li>Optimización de costos</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Beneficios</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Time‑to‑market</li>
        <li>Elasticidad</li>
        <li>Pago por uso controlado</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Caso</h2>
      <p>-28% gasto mensual tras rightsizing.</p>
      <h2 className="text-xl font-semibold mt-6">FAQ</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>VPN/Direct Connect</li>
        <li>Backups</li>
        <li>HA multi‑AZ</li>
        <li>Costos</li>
        <li>Compliance</li>
      </ul>
    </SolucionLayout>
  );
}
