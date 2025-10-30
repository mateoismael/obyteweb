# 📖 Guía de Uso del Brochure Ohanabyte

## 🎯 Archivos Disponibles

### 1. **brochure-trifold.html**

Brochure tríptico tradicional (3 paneles) optimizado para impresión profesional.

**Características:**

- Formato A4 horizontal (297mm x 210mm)
- 6 paneles (3 frontales + 3 traseros)
- Diseño corporativo con paleta azul/gris
- Listo para imprimir directamente

**Uso recomendado:**

- Ferias y eventos empresariales
- Presentaciones comerciales presenciales
- Envío físico a prospectos
- Material de ventas corporativo

---

### 2. **brochure-digital.html**

Brochure interactivo de una sola página con animaciones y scroll.

**Características:**

- Responsive (adaptable a móviles y tablets)
- Animaciones suaves al hacer scroll
- Diseño moderno con gradientes
- Optimizado para compartir por email o web

**Uso recomendado:**

- Envío por email a clientes
- Descarga desde sitio web
- Compartir en redes sociales
- Presentaciones virtuales (Zoom, Teams)

---

## 🖨️ Cómo Imprimir el Brochure

### Opción 1: Imprimir desde Navegador

1. Abre `brochure-trifold.html` en tu navegador (Chrome recomendado)
2. Presiona `Ctrl + P` (Windows) o `Cmd + P` (Mac)
3. Configura las siguientes opciones:
   - **Destino:** Guardar como PDF (o tu impresora)
   - **Páginas:** Todas
   - **Diseño:** Horizontal
   - **Márgenes:** Ninguno
   - **Opciones:** Activar "Gráficos de fondo"
4. Click en "Imprimir" o "Guardar"

### Opción 2: Exportar a PDF Profesional

**Usando Chrome:**

```
1. Abre DevTools (F12)
2. Presiona Ctrl + Shift + P
3. Escribe "Print to PDF"
4. Selecciona formato Landscape
5. Guarda el archivo
```

**Usando herramientas profesionales:**

- Adobe Acrobat
- wkhtmltopdf (línea de comandos)
- Canva (importar HTML)

---

## 📐 Especificaciones de Impresión Profesional

### Para Imprenta

**Formato:**

- Tamaño: A4 (297 x 210 mm)
- Orientación: Horizontal (Landscape)
- Resolución: 300 DPI mínimo

**Papel Recomendado:**

- Couché brillante o mate: 150-200 gramos
- Papel bond premium: 120-150 gramos
- Para durabilidad: 200-250 gramos

**Acabados:**

- Plegado en Z o en C (3 paneles)
- Plastificado opcional (mate o brillante)
- Barniz UV selectivo (opcional)

**Sangrado:**

- Agregar 3mm adicionales en los bordes
- Ajustar en software de diseño profesional

**Cantidad mínima sugerida:**

- 100 unidades (económico)
- 500 unidades (precio óptimo)
- 1000+ unidades (mejor precio unitario)

---

## 🎨 Paleta de Colores Corporativa

```
Azul Principal:   #3b82f6  (RGB: 59, 130, 246)
Azul Oscuro:      #1e3a8a  (RGB: 30, 58, 138)
Azul Claro:       #60a5fa  (RGB: 96, 165, 250)
Gris Oscuro:      #1e293b  (RGB: 30, 41, 59)
Gris Medio:       #64748b  (RGB: 100, 116, 139)
Gris Claro:       #f8fafc  (RGB: 248, 250, 252)
Blanco:           #ffffff  (RGB: 255, 255, 255)
```

**Conversión a CMYK (para impresión):**

```
Azul Principal:   C:76 M:46 Y:0 K:4
Azul Oscuro:      C:100 M:77 Y:0 K:46
Gris Oscuro:      C:73 M:64 Y:56 K:57
```

---

## 📱 Visualización y Compartir Digital

### Opción 1: Hospedar en Sitio Web

Sube `brochure-digital.html` a tu servidor:

```bash
# Estructura sugerida
/public/brochure/
  ├── index.html (copia de brochure-digital.html)
  └── assets/
```

Accede en: `https://ohanabyte.com.pe/brochure/`

### Opción 2: Enviar por Email

**Método 1 - Adjuntar PDF:**

1. Exporta brochure a PDF
2. Adjunta en email
3. Asunto sugerido: "Brochure Ohanabyte - Soluciones TI Empresariales"

**Método 2 - Link Directo:**
Hospedar en servidor y enviar enlace:

```
Estimado/a [Nombre],

Te compartimos nuestro brochure corporativo con información
detallada sobre nuestras soluciones TI:

🔗 Ver brochure digital: https://ohanabyte.com.pe/brochure/

Saludos,
Equipo Ohanabyte
```

### Opción 3: Convertir a PDF Interactivo

Usa herramientas como:

- **Adobe Acrobat Pro** (permite agregar botones clickeables)
- **Canva** (exportar como PDF interactivo)
- **Flipsnack** (crear flipbook digital)

---

## ✏️ Cómo Personalizar el Contenido

### Actualizar Información de Contacto

1. Abre el archivo HTML en editor de código
2. Busca la sección `<!-- CONTACT SECTION -->`
3. Modifica los emails, teléfonos, dirección
4. Guarda el archivo

**Ejemplo:**

```html
<p>gproyectos@ohanabyte.com.pe</p>
<!-- Cambiar a: -->
<p>ventas@ohanabyte.com.pe</p>
```

### Actualizar Estadísticas

Busca la sección `<!-- STATS SECTION -->`:

```html
<div class="stat-number">+150</div>
<!-- Cambiar a: -->
<div class="stat-number">+200</div>
```

### Cambiar Colores

Edita las variables CSS al inicio:

```css
/* Cambiar color principal */
background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
/* A tu color corporativo */
background: linear-gradient(135deg, #tu-color-1 0%, #tu-color-2 100%);
```

---

## 🔄 Versiones Adicionales Sugeridas

### Versión Compacta (Bifold)

- 2 paneles en lugar de 3
- Información más concisa
- Ideal para eventos rápidos

### Versión Específica por Sector

- Brochure enfocado en Healthcare
- Brochure enfocado en Finanzas
- Brochure enfocado en Retail

### Versión en Inglés

Traducir contenido para clientes internacionales

---

## 📊 Métricas de Efectividad

### Para Versión Digital

Trackear con Google Analytics:

- Tiempo de permanencia en página
- Clicks en botones CTA
- Conversión a contacto

### Para Versión Impresa

- Códigos QR únicos por lote
- Landing page específica
- Cupón de descuento rastreable

---

## 🎁 Material Adicional Recomendado

### Crear Suite Completa de Marketing

1. **Business Cards** (Tarjetas de presentación)
2. **One-Pager** (Hoja resumen)
3. **Slide Deck** (Presentación PowerPoint)
4. **Case Studies** (Casos de éxito)
5. **Product Sheets** (Fichas de productos)

---

## 🆘 Resolución de Problemas

### El brochure no se ve bien al imprimir

**Solución:** Asegúrate de:

- Usar navegador Chrome o Edge
- Activar "Gráficos de fondo" en opciones de impresión
- Configurar márgenes en "Ninguno"
- Orientación en "Horizontal"

### Los colores se ven diferentes en impresión

**Solución:**

- Convierte de RGB a CMYK antes de enviar a imprenta
- Solicita prueba de color a la imprenta
- Ajusta saturación si los colores salen muy oscuros

### Las fuentes no se cargan

**Solución:**

- Espera a que cargue completamente la página
- Verifica conexión a internet (usa Google Fonts)
- Alternativa: descarga fuente Inter localmente

---

## 📞 Soporte Técnico

Si necesitas ayuda para:

- Personalización avanzada
- Integración con CRM
- Traducción a otros idiomas
- Versiones para industrias específicas

**Contacto:**

- Email: gproyectos@ohanabyte.com.pe
- Web: ohanabyte.com.pe

---

## 📝 Checklist Pre-Impresión

Antes de enviar a imprenta, verifica:

- [ ] Toda la información está actualizada
- [ ] No hay errores ortográficos
- [ ] Emails y teléfonos son correctos
- [ ] Estadísticas están al día
- [ ] Logos de partners autorizados
- [ ] Colores convertidos a CMYK
- [ ] Resolución mínima 300 DPI
- [ ] Sangrado agregado (3mm)
- [ ] Prueba de impresión revisada

---

## 🚀 Próximos Pasos

1. **Revisar** contenido con equipo de marketing
2. **Aprobar** diseño final
3. **Cotizar** con 3 imprentas
4. **Imprimir** lote de prueba (10-20 unidades)
5. **Ajustar** si es necesario
6. **Producir** cantidad final
7. **Distribuir** en eventos y reuniones

---

**Última actualización:** Octubre 2025  
**Versión:** 1.0  
**Creado para:** Ohanabyte - Soluciones TI

© 2025 Ohanabyte. Todos los derechos reservados.
