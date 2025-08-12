export default function ErrorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold">500</h1>
      <p className="text-gray-600 mt-2">Ha ocurrido un error inesperado.</p>
      <a
        href="/"
        className="inline-block mt-6 px-5 py-3 rounded bg-blue-700 text-white"
      >
        Volver al inicio
      </a>
    </div>
  );
}
