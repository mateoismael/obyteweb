import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nombre: z.string().min(2).max(80),
  empresa: z.string().min(2).max(120).optional().or(z.literal("")),
  ruc: z
    .string()
    .regex(/^\d{8,11}$/)
    .optional()
    .or(z.literal("")),
  email: z.string().email(),
  telefono: z.string().regex(/^\d{7,15}$/),
  interes: z.enum(["Soluciones", "Servicios", "Soporte", "Otro"]),
  mensaje: z.string().min(10).max(1000),
  consentimiento: z.literal(true),
  hp_field: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ContactoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interes: "Soluciones" },
  });

  async function onSubmit(values: FormValues) {
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      reset();
      alert("¡Gracias! Te contactaremos en menos de 1 día hábil.");
    } else {
      alert(
        "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a contacto@ohanabyte.com.pe"
      );
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="text-gray-600 mt-2">Cuéntanos sobre tu necesidad.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Nombre*</label>
            <input
              className="mt-1 w-full border rounded p-2"
              {...register("nombre")}
            />
            {errors.nombre && (
              <p className="text-red-600 text-xs">Nombre inválido</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Empresa</label>
            <input
              className="mt-1 w-full border rounded p-2"
              {...register("empresa")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">RUC</label>
            <input
              className="mt-1 w-full border rounded p-2"
              {...register("ruc")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email*</label>
            <input
              type="email"
              className="mt-1 w-full border rounded p-2"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600 text-xs">Email inválido</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Teléfono*</label>
            <input
              className="mt-1 w-full border rounded p-2"
              {...register("telefono")}
            />
            {errors.telefono && (
              <p className="text-red-600 text-xs">Teléfono inválido</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Interés*</label>
            <select
              className="mt-1 w-full border rounded p-2"
              {...register("interes")}
            >
              <option>Soluciones</option>
              <option>Servicios</option>
              <option>Soporte</option>
              <option>Otro</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Mensaje*</label>
          <textarea
            rows={5}
            className="mt-1 w-full border rounded p-2"
            {...register("mensaje")}
          />
          {errors.mensaje && (
            <p className="text-red-600 text-xs">Mensaje inválido</p>
          )}
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
          <input type="checkbox" {...register("consentimiento")} />
          <span>
            Acepto la{" "}
            <a className="underline" href="/legales/privacidad">
              Política de Privacidad
            </a>
          </span>
        </label>
        <button
          disabled={isSubmitting}
          className="px-5 py-3 rounded bg-blue-700 text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
