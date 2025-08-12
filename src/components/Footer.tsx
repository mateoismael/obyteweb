import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold text-lg">Ohanabyte</div>
          <p className="text-gray-600 mt-2">
            Soluciones y Servicios TI para empresas en Perú.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Menú</div>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link to="/soluciones">Soluciones</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contacto</div>
          <ul className="space-y-1 text-gray-700">
            <li>
              Email:{" "}
              <a href="mailto:gproyectos@ohanabyte.com.pe">
                gproyectos@ohanabyte.com.pe
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:gerencia@ohanabyte.com.pe">
                gerencia@ohanabyte.com.pe
              </a>
            </li>
            {/* TODO: teléfono, dirección, redes */}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legales</div>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link to="/legales/terminos">Términos</Link>
            </li>
            <li>
              <Link to="/legales/privacidad">Privacidad</Link>
            </li>
            <li>
              <Link to="/legales/cookies">Cookies</Link>
            </li>
            <li>
              <Link to="/legales/libro-de-reclamaciones">
                Libro de Reclamaciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {year} Ohanabyte. Todos los derechos reservados.
      </div>
    </footer>
  );
}
