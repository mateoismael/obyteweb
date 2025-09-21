import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout.tsx";
import HomePage from "./routes/Home.tsx";
import SolucionesIndex from "./routes/soluciones/Index.tsx";
import ProcesamientoVirtualizacion from "./routes/soluciones/ProcesamientoVirtualizacion.tsx";
import Almacenamiento from "./routes/soluciones/Almacenamiento.tsx";
import RedesSeguridad from "./routes/soluciones/RedesSeguridad.tsx";
import ProteccionDatos from "./routes/soluciones/ProteccionDatos.tsx";
import ComputoColaboracion from "./routes/soluciones/ComputoColaboracion.tsx";
import CloudIaaS from "./routes/soluciones/CloudIaaS.tsx";
import SoporteMonitoreo from "./routes/soluciones/SoporteMonitoreo.tsx";
import CableadoEstructurado from "./routes/soluciones/CableadoEstructurado.tsx";
import ServiciosIndex from "./routes/servicios/Index.tsx";
import NosotrosPage from "./routes/Nosotros.tsx";
import BlogIndex from "./routes/blog/Index.tsx";
import BlogPost from "./routes/blog/Post.tsx";
import ContactoPage from "./routes/Contacto.tsx";
import TerminosPage from "./routes/legales/Terminos.tsx";
import PrivacidadPage from "./routes/legales/Privacidad.tsx";
import CookiesPage from "./routes/legales/Cookies.tsx";
import LibroPage from "./routes/legales/Libro.tsx";
import NotFoundPage from "./routes/NotFound.tsx";
import ErrorPage from "./routes/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "soluciones", element: <SolucionesIndex /> },
      {
        path: "soluciones/procesamiento-virtualizacion",
        element: <ProcesamientoVirtualizacion />,
      },
      { path: "soluciones/almacenamiento", element: <Almacenamiento /> },
      { path: "soluciones/redes-seguridad", element: <RedesSeguridad /> },
      { path: "soluciones/proteccion-de-datos", element: <ProteccionDatos /> },
      {
        path: "soluciones/computo-colaboracion",
        element: <ComputoColaboracion />,
      },
      { path: "soluciones/cloud-iaas", element: <CloudIaaS /> },
      { path: "soluciones/soporte-monitoreo", element: <SoporteMonitoreo /> },
      {
        path: "soluciones/cableado-estructurado",
        element: <CableadoEstructurado />,
      },
      { path: "servicios", element: <ServiciosIndex /> },
      { path: "nosotros", element: <NosotrosPage /> },
      { path: "blog", element: <BlogIndex /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "contacto", element: <ContactoPage /> },
      { path: "legales/terminos", element: <TerminosPage /> },
      { path: "legales/privacidad", element: <PrivacidadPage /> },
      { path: "legales/cookies", element: <CookiesPage /> },
      { path: "legales/libro-de-reclamaciones", element: <LibroPage /> },
      { path: "500", element: <ErrorPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
