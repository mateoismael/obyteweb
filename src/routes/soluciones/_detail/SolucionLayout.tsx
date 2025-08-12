import type { PropsWithChildren } from "react";

export default function SolucionLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {children}
      <div className="mt-8 p-4 border rounded bg-blue-50">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="font-medium">Agenda una consultoría de 30 min</div>
          <a
            href="/contacto"
            className="px-4 py-2 rounded bg-blue-700 text-white"
          >
            Solicitar asesoría
          </a>
        </div>
      </div>
    </div>
  );
}
