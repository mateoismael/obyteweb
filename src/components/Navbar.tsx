import { Link, NavLink } from "react-router-dom";
import { SITE } from "../config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl flex items-center gap-2">
          <img src="/logo.png" alt="Ohanabyte" className="h-7 w-7 object-contain" />
          Ohanabyte
        </Link>
        <nav className="hidden md:flex gap-6">
          <NavLink
            to="/soluciones"
            className={({ isActive }) => (isActive ? "font-medium nav-link" : "nav-link")}
            style={({ isActive }) => (isActive ? { color: 'var(--brand-700)' } : undefined)}
          >
            Soluciones
          </NavLink>
          <NavLink
            to="/servicios"
            className={({ isActive }) => (isActive ? "font-medium nav-link" : "nav-link")}
            style={({ isActive }) => (isActive ? { color: 'var(--brand-700)' } : undefined)}
          >
            Servicios
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) => (isActive ? "font-medium nav-link" : "nav-link")}
            style={({ isActive }) => (isActive ? { color: 'var(--brand-700)' } : undefined)}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "font-medium nav-link" : "nav-link")}
            style={({ isActive }) => (isActive ? { color: 'var(--brand-700)' } : undefined)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "font-medium nav-link" : "nav-link")}
            style={({ isActive }) => (isActive ? { color: 'var(--brand-700)' } : undefined)}
          >
            Contacto
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contacto" className="btn btn-primary">
            Solicitar asesoría
          </Link>
          <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
