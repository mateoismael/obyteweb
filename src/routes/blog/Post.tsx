import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{slug}</h1>
      <article className="prose max-w-none mt-6">
        <p>Contenido del post.</p>
      </article>
    </div>
  );
}
