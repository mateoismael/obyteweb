import { useForm } from "react-hook-form";

type LibroForm = {
  tipo: "Queja" | "Reclamo";
  nombreCompleto: string;
  documento: string;
  email: string;
  telefono: string;
  descripcion: string;
  pedido: string;
  consentimiento: boolean;
  hp_field?: string;
};

export default function LibroPage() {
  const { register, handleSubmit } = useForm<LibroForm>({
    defaultValues: { tipo: "Reclamo" },
  });

  async function onSubmit(values: LibroForm) {
    const res = await fetch("/api/libro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (data?.ok) {
      alert(`Registro recibido. Código: ${data.code}`);
    } else {
      alert("No pudimos registrar tu caso. Inténtalo nuevamente.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Libro de Reclamaciones</h1>
      <p className="text-gray-700 mt-2">
        Conforme a la normativa peruana, este es el Libro de Reclamaciones
        virtual de Ohanabyte. Te responderemos en los plazos establecidos por
        ley.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Tipo*</label>
            <select
              className="mt-1 w-full border rounded p-2"
              {...register("tipo")}
            >
              <option>Queja</option>
              <option>Reclamo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Nombre completo*
            </label>
            <input
              className="mt-1 w-full border rounded p-2"
              {...register("nombreCompleto", { required: true, minLength: 2 })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">DNI/CE*</label>
            <input
              className="mt-1 w-full border rounded p-2"
              {...register("documento", {
                required: true,
                pattern: /^\d{8,12}$/,
              })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email*</label>
            <input
              type="email"
              className="mt-1 w-full border rounded p-2"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Teléfono*</label>
            <input
              className="mt-1 w-full border rounded p-2"
              {...register("telefono", {
                required: true,
                pattern: /^\d{7,15}$/,
              })}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Descripción*</label>
          <textarea
            rows={4}
            className="mt-1 w-full border rounded p-2"
            {...register("descripcion", { required: true, minLength: 10 })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Pedido del consumidor*
          </label>
          <textarea
            rows={3}
            className="mt-1 w-full border rounded p-2"
            {...register("pedido", { required: true, minLength: 3 })}
          />
        </div>
        {/* honeypot */}
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          {...register("hp_field")}
        />
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            {...register("consentimiento", { required: true })}
          />
          <span>
            Declaro ser el titular del reclamo y aceptar el tratamiento de mis
            datos personales.
          </span>
        </label>
        <button className="px-5 py-3 rounded bg-blue-700 text-white">
          Enviar
        </button>
      </form>
    </div>
  );
}
