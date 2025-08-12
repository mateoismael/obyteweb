import SolucionLayout from "./_detail/SolucionLayout";

export default function Almacenamiento() {
  return (
    <SolucionLayout>
      <h1 className="text-3xl font-bold">
        Almacenamiento de datos con resiliencia y rendimiento
      </h1>
      <p className="mt-3 text-gray-700">
        Implementamos cabinas y almacenamiento definido por software para datos
        estructurados y no estructurados con rendimiento, resiliencia y
        crecimiento lineal.
      </p>
      <h2 className="text-xl font-semibold mt-6">Incluye</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>SAN/NAS/Objetos</li>
        <li>Tiering</li>
        <li>Snapshots</li>
        <li>Replicación</li>
        <li>QoS</li>
        <li>Monitoreo</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Beneficios</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Rendimiento consistente</li>
        <li>Protección de datos</li>
        <li>Escalabilidad</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Caso</h2>
      <p>20% menos latencia en ERP y 0 RPO con replicación.</p>
      <h2 className="text-xl font-semibold mt-6">FAQ</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>IOPS</li>
        <li>Cachés</li>
        <li>DR</li>
        <li>Cifrado</li>
        <li>Ampliaciones</li>
      </ul>
    </SolucionLayout>
  );
}
