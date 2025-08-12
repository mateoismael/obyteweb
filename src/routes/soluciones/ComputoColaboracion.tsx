import SolucionLayout from "./_detail/SolucionLayout";

export default function ComputoColaboracion() {
  return (
    <SolucionLayout>
      <h1 className="text-3xl font-bold">Cómputo & Colaboración</h1>
      <p className="mt-3 text-gray-700">
        Estandarizamos endpoints y suites de productividad para colaboración
        segura, con gestión de parches, identidades y videoconferencia.
      </p>
      <h2 className="text-xl font-semibold mt-6">Incluye</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>MDM/Intune y hardening</li>
        <li>Correo y colaboración</li>
        <li>SSO/MFA</li>
        <li>Salas de reunión</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Beneficios</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Menos incidencias</li>
        <li>Adopción rápida</li>
        <li>Seguridad</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Caso</h2>
      <p>Onboarding 50 usuarios en 72 h con MFA.</p>
      <h2 className="text-xl font-semibold mt-6">FAQ</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Licencias</li>
        <li>Backup M365</li>
        <li>DLP</li>
        <li>Compatibilidad</li>
        <li>Training</li>
      </ul>
    </SolucionLayout>
  );
}
