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
    <div className="bg-neutral-50 min-h-screen">
      <div className="container section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4">💬 Hablemos</div>
          <h1 className="heading-1 mb-4">Cuéntanos sobre tu proyecto</h1>
          <p className="text-lead max-w-2xl mx-auto">
            Agenda una consultoría gratuita de 30 minutos y obtén un roadmap
            personalizado para tu transformación digital.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card h-fit">
                <h3 className="heading-3 mb-6">Información de contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-brand-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email de proyectos</h4>
                      <a
                        href="mailto:gproyectos@ohanabyte.com.pe"
                        className="text-muted hover:text-brand-600 transition-colors"
                      >
                        gproyectos@ohanabyte.com.pe
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-brand-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Ubicación</h4>
                      <p className="text-muted">Lima, Perú</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-brand-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Tiempo de respuesta
                      </h4>
                      <p className="text-muted">Menos de 24 horas hábiles</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="font-semibold mb-4">
                    ¿Necesitas ayuda inmediata?
                  </h4>
                  <a href="#" className="btn btn-outline w-full justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.445" />
                    </svg>
                    Chatear por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="card">
                <h3 className="heading-3 mb-6">Formulario de contacto</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre completo *</label>
                    <input
                      id="nombre"
                      type="text"
                      {...register("nombre")}
                      className={errors.nombre ? "border-red-300" : ""}
                    />
                    {errors.nombre && (
                      <p className="form-error">
                        El nombre debe tener entre 2 y 80 caracteres
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa">Empresa</label>
                    <input id="empresa" type="text" {...register("empresa")} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="email">Email corporativo *</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-red-300" : ""}
                    />
                    {errors.email && (
                      <p className="form-error">Ingresa un email válido</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono *</label>
                    <input
                      id="telefono"
                      type="tel"
                      {...register("telefono")}
                      className={errors.telefono ? "border-red-300" : ""}
                      placeholder="987654321"
                    />
                    {errors.telefono && (
                      <p className="form-error">
                        Ingresa un teléfono válido (7-15 dígitos)
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="ruc">RUC (opcional)</label>
                    <input
                      id="ruc"
                      type="text"
                      {...register("ruc")}
                      placeholder="20123456789"
                    />
                    <small className="help">Solo números, 8-11 dígitos</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interes">¿En qué estás interesado? *</label>
                    <select id="interes" {...register("interes")}>
                      <option value="Soluciones">
                        Soluciones de infraestructura
                      </option>
                      <option value="Servicios">
                        Servicios especializados
                      </option>
                      <option value="Soporte">Soporte y mantenimiento</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group mb-6">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    {...register("mensaje")}
                    className={errors.mensaje ? "border-red-300" : ""}
                    placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, timeline, presupuesto estimado, etc."
                  />
                  {errors.mensaje && (
                    <p className="form-error">
                      El mensaje debe tener entre 10 y 1000 caracteres
                    </p>
                  )}
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  {...register("hp_field")}
                />

                <div className="form-group mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("consentimiento")}
                      className="mt-1"
                    />
                    <span className="text-sm text-muted leading-relaxed">
                      Acepto la{" "}
                      <a href="/legales/privacidad" className="link">
                        Política de Privacidad
                      </a>{" "}
                      y autorizo el tratamiento de mis datos personales para
                      fines comerciales y de comunicación. *
                    </span>
                  </label>
                  {errors.consentimiento && (
                    <p className="form-error">
                      Debes aceptar la política de privacidad
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-25"
                        ></circle>
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          className="opacity-75"
                        ></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Enviar consulta
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
