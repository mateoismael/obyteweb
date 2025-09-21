import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiciosRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir a la nueva página de soluciones
    navigate("/soluciones", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirigiendo a Soluciones...</p>
      </div>
    </div>
  );
}