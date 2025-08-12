import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-600 mt-2">La página que buscas no existe.</p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-3 rounded bg-blue-700 text-white"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
