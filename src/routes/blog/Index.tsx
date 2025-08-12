import { Link } from "react-router-dom";

const posts = [
  {
    slug: "rpo-rto-2025",
    title: "Cómo definir RPO/RTO realistas para tu negocio en 2025",
    date: "2025-01-15",
  },
  {
    slug: "checklist-migracion-nube-costos",
    title: "Checklist para migrar a la nube sin sorpresas de costo",
    date: "2025-02-10",
  },
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="border rounded p-4">
            <h2 className="text-xl font-semibold">
              <Link to={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <div className="text-xs text-gray-500">{p.date}</div>
            <div className="mt-2 text-sm text-gray-700">
              Resumen del artículo...
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
