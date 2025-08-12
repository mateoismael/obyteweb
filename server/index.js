import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5174; // run alongside Vite

app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"],
    methods: ["POST", "GET"],
  })
);
app.use(express.json({ limit: "100kb" }));

// basic health
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, t: Date.now() });
});

// honeypot helper
const isSpam = (body) => {
  if (typeof body !== "object" || !body) return true;
  if (body.hp_field) return true; // hidden honeypot field
  return false;
};

// mail transporter (SMTP or fallback to ethereal if missing in dev)
async function getTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  // noop transport logs to console (development)
  return nodemailer.createTransport({ jsonTransport: true });
}

function sanitize(str) {
  return String(str || "").replace(/[<>]/g, "");
}

function htmlEscape(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getMeta(req) {
  return {
    ip: req.ip,
    ua: req.get("user-agent") || "",
    referer: req.get("referer") || "",
    t: new Date().toISOString(),
  };
}

// CONTACTO
app.post("/api/contacto", async (req, res) => {
  try {
    if (isSpam(req.body)) return res.status(400).json({ ok: false });

    const {
      nombre,
      empresa,
      ruc,
      email,
      telefono,
      interes,
      mensaje,
      consentimiento,
      // honeypot: hp_field
    } = req.body || {};

    // basic validation
    const errors = [];
    const len = (s) => String(s || "").trim().length;
    if (len(nombre) < 2 || len(nombre) > 80) errors.push("nombre");
    if (empresa && (len(empresa) < 2 || len(empresa) > 120))
      errors.push("empresa");
    if (ruc && !/^\d{8,11}$/.test(String(ruc))) errors.push("ruc");
    if (!/^\S+@\S+\.\S+$/.test(String(email))) errors.push("email");
    if (!/^\d{7,15}$/.test(String(telefono))) errors.push("telefono");
    if (
      !["Soluciones", "Servicios", "Soporte", "Otro"].includes(String(interes))
    )
      errors.push("interes");
    if (len(mensaje) < 10 || len(mensaje) > 1000) errors.push("mensaje");
    if (!consentimiento) errors.push("consentimiento");

    if (errors.length) return res.status(422).json({ ok: false, errors });

    const clean = {
      nombre: sanitize(nombre),
      empresa: sanitize(empresa),
      ruc: sanitize(ruc),
      email: sanitize(email),
      telefono: sanitize(telefono),
      interes: sanitize(interes),
      mensaje: sanitize(mensaje),
    };

    const meta = getMeta(req);

    const subject = `[Contacto Ohanabyte] ${clean.nombre} — ${clean.interes}`;
    const to = [
      "gproyectos@ohanabyte.com.pe",
      "gerencia@ohanabyte.com.pe",
    ].join(",");

    const html = `
      <h2>Contacto Ohanabyte</h2>
      <p><strong>Nombre:</strong> ${htmlEscape(clean.nombre)}</p>
      <p><strong>Empresa:</strong> ${htmlEscape(clean.empresa)}</p>
      <p><strong>RUC:</strong> ${htmlEscape(clean.ruc)}</p>
      <p><strong>Email:</strong> ${htmlEscape(clean.email)}</p>
      <p><strong>Teléfono:</strong> ${htmlEscape(clean.telefono)}</p>
      <p><strong>Interés:</strong> ${htmlEscape(clean.interes)}</p>
      <p><strong>Mensaje:</strong><br/>${htmlEscape(clean.mensaje).replace(
        /\n/g,
        "<br/>"
      )}</p>
      <hr/>
      <p><small>IP: ${htmlEscape(meta.ip)} | UA: ${htmlEscape(
      meta.ua
    )} | Ref: ${htmlEscape(meta.referer)} | Fecha: ${meta.t}</small></p>
    `;

    const transporter = await getTransporter();
    await transporter.sendMail({
      from: process.env.MAIL_FROM || "no-reply@ohanabyte.com.pe",
      to,
      subject,
      html,
    });

    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false });
  }
});

// LIBRO DE RECLAMACIONES
app.post("/api/libro", async (req, res) => {
  try {
    if (isSpam(req.body)) return res.status(400).json({ ok: false });

    const {
      tipo,
      nombreCompleto,
      documento,
      email,
      telefono,
      descripcion,
      pedido,
      consentimiento,
    } = req.body || {};

    const errors = [];
    const len = (s) => String(s || "").trim().length;
    if (!["Queja", "Reclamo"].includes(String(tipo))) errors.push("tipo");
    if (len(nombreCompleto) < 2) errors.push("nombreCompleto");
    if (!/^\d{8,12}$/.test(String(documento))) errors.push("documento");
    if (!/^\S+@\S+\.\S+$/.test(String(email))) errors.push("email");
    if (!/^\d{7,15}$/.test(String(telefono))) errors.push("telefono");
    if (len(descripcion) < 10) errors.push("descripcion");
    if (len(pedido) < 3) errors.push("pedido");
    if (!consentimiento) errors.push("consentimiento");

    if (errors.length) return res.status(422).json({ ok: false, errors });

    const meta = getMeta(req);
    const code = `OB-${Date.now().toString(36).toUpperCase()}`;

    const transporter = await getTransporter();

    const to = [
      "gproyectos@ohanabyte.com.pe",
      "gerencia@ohanabyte.com.pe",
    ].join(",");

    const html = `
      <h2>Libro de Reclamaciones</h2>
      <p><strong>Código:</strong> ${code}</p>
      <p><strong>Tipo:</strong> ${htmlEscape(tipo)}</p>
      <p><strong>Nombre:</strong> ${htmlEscape(nombreCompleto)}</p>
      <p><strong>Documento:</strong> ${htmlEscape(documento)}</p>
      <p><strong>Email:</strong> ${htmlEscape(email)}</p>
      <p><strong>Teléfono:</strong> ${htmlEscape(telefono)}</p>
      <p><strong>Descripción:</strong><br/>${htmlEscape(descripcion).replace(
        /\n/g,
        "<br/>"
      )}</p>
      <p><strong>Pedido:</strong><br/>${htmlEscape(pedido).replace(
        /\n/g,
        "<br/>"
      )}</p>
      <hr/>
      <p><small>IP: ${htmlEscape(meta.ip)} | UA: ${htmlEscape(
      meta.ua
    )} | Fecha: ${meta.t}</small></p>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || "no-reply@ohanabyte.com.pe",
      to,
      subject: `[Libro de Reclamaciones] ${code}`,
      html,
    });

    // Acknowledge to user if email provided
    await transporter.sendMail({
      from: process.env.MAIL_FROM || "no-reply@ohanabyte.com.pe",
      to: email,
      subject: `Acuse de recibo — Código ${code}`,
      html: `<p>Hemos recibido tu ${htmlEscape(
        tipo
      ).toLowerCase()}. Código: <strong>${code}</strong>. Te responderemos según la normativa.</p>`,
    });

    return res.json({ ok: true, code });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false });
  }
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
