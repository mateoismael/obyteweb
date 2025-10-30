# 🖨️ GUÍA DEFINITIVA: Exportar a PDF con Colores Perfectos

## ⚠️ PROBLEMA COMÚN

**Síntoma**: Cuando abres el HTML se ve bonito con colores azules y amarillos, pero al exportar a PDF todo sale gris/blanco.

**Causa**: Chrome desactiva los "gráficos de fondo" por defecto para ahorrar tinta.

**Solución**: El archivo ahora incluye `print-color-adjust: exact` que FUERZA a Chrome a imprimir los colores. Solo necesitas **activar una opción crítica**.

---

## 📋 PASOS EXACTOS PARA CHROME/EDGE

### 1️⃣ Abrir el archivo HTML

```
Doble clic en: brochure-print-a4.html
Se abre en Chrome o Edge
```

### 2️⃣ Abrir diálogo de impresión

```
Presiona: Ctrl + P (Windows)
         Cmd + P (Mac)
```

### 3️⃣ ⚡ CONFIGURACIÓN OBLIGATORIA

**En el panel derecho de impresión, configura EXACTAMENTE así:**

| Opción               | Configuración           |
| -------------------- | ----------------------- |
| **Destino**          | `Guardar como PDF`      |
| **Páginas**          | `Todas` (4 páginas)     |
| **Diseño**           | `Vertical`              |
| **Páginas por hoja** | `1`                     |
| **Márgenes**         | ⚡ `Ninguno` (CRÍTICO)  |
| **Escala**           | `Predeterminado (100%)` |

### 4️⃣ 🎨 LA OPCIÓN MÁS IMPORTANTE

**Busca la sección "Más opciones" o "Más configuraciones"**

```
✅ ACTIVAR: "Gráficos de fondo"
   (En inglés: "Background graphics")
```

**SIN ESTA OPCIÓN ACTIVADA**:

- ❌ Fondo azul de portada → desaparece
- ❌ Badge amarillo → se vuelve gris
- ❌ Iconos de colores → pierden fondo
- ❌ Bordes amarillos → invisibles

**CON ESTA OPCIÓN ACTIVADA**:

- ✅ Todos los colores se mantienen
- ✅ Gradientes azules visibles
- ✅ Amarillo corporativo vibrante
- ✅ Diseño idéntico a la pantalla

### 5️⃣ Guardar el PDF

```
Clic en botón "Guardar"
Elige carpeta
Nombre: Brochure_Ohanabyte_2025.pdf
```

---

## 🔍 VERIFICACIÓN POST-EXPORTACIÓN

Abre el PDF y verifica que se vean:

### Página 1 - Portada

✅ Fondo azul degradado completo  
✅ Badge amarillo "LÍDERES EN TRANSFORMACIÓN DIGITAL"  
✅ Estadísticas con fondo azul semi-transparente  
✅ Logo Ohanabyte con sombra

### Página 2 - Quiénes Somos

✅ Iconos circulares azules con letras amarillas (A, E, Z, F, C, M)  
✅ Línea amarilla debajo del título

### Página 3 - Soluciones

✅ 6 tarjetas con borde amarillo superior  
✅ Iconos azules con números blancos (01-06)  
✅ Todas las soluciones completas (no cortadas)

### Página 4 - Partners

✅ Iconos de contacto con fondo amarillo  
✅ Caja CTA con gradiente azul

---

## 🌐 OTROS NAVEGADORES

### Firefox

1. `Ctrl + P`
2. ✅ Activar: "Imprimir fondos"
3. Márgenes: Ninguno
4. Guardar como PDF

### Safari (Mac)

1. `Cmd + P`
2. "Mostrar detalles"
3. ✅ Activar: "Imprimir fondos"
4. PDF → Guardar como PDF

### Microsoft Edge

- Mismo proceso que Chrome (usa mismo motor)

---

## 🖨️ PARA IMPRENTA PROFESIONAL

### Especificaciones:

- **Formato**: A4 (210mm × 297mm)
- **Páginas**: 4 páginas
- **Colores**: Full Color CMYK
- **Papel recomendado**: Couché brillante 150-200gr

### Colores Corporativos en CMYK:

```
Azul Principal (#063DBD):
CMYK: C=97% M=74% Y=0% K=26%

Amarillo Acento (#FDD419):
CMYK: C=0% M=16% Y=90% K=1%
```

### Instrucciones para la imprenta:

1. Exportar PDF con "Gráficos de fondo" ✅ ACTIVADO
2. NO escalar (mantener 100%)
3. Informar que archivo es RGB (ellos harán conversión CMYK)
4. Solicitar prueba de color digital antes de tirada

---

## 🚨 SOLUCIÓN DE PROBLEMAS

### "Sigo viendo todo gris/blanco en el PDF"

**Pasos de solución:**

1. **Cerrar** el diálogo de impresión
2. **Refrescar** la página (F5)
3. **Reabrir** diálogo (Ctrl+P)
4. **Expandir** "Más opciones" o "Más configuraciones"
5. **VERIFICAR** que checkbox "Gráficos de fondo" esté ✅ MARCADO
6. **Exportar** nuevamente

### "Las soluciones 5 y 6 se cortan"

✅ **Solución**: Márgenes debe estar en "Ninguno"

### "Salen 5 páginas en lugar de 4"

✅ **Solución**:

- Desactivar "Encabezados y pies de página"
- Verificar que escala sea 100%

### "Los colores se ven pálidos/apagados"

✅ **Solución**:

- Escala: 100% (NO "Ajustar a página")
- Activar "Gráficos de fondo"
- NO activar "Optimizar para pantalla"

### "El logo no se ve"

✅ **Solución**:

- Verificar que archivo `public/logo.png` existe
- Path correcto: `../public/logo.png`

---

## 💡 CONSEJOS PRO

### Para presentaciones digitales:

- Usa el PDF exportado (no el HTML)
- Mejor compatibilidad cross-platform
- Colores consistentes en cualquier dispositivo

### Para impresión masiva:

- Solicitar prueba de color a la imprenta
- Considerar laminado mate para durabilidad
- Papel 200gr para sensación premium

### Para envío por email:

- PDF pesa ~500KB-2MB
- Compatible con todos los dispositivos
- Se abre directo sin necesidad de navegador

---

## ✅ CHECKLIST FINAL

Antes de dar por finalizado el PDF:

- [ ] Abrí el HTML en Chrome/Edge
- [ ] Presioné Ctrl+P
- [ ] Configuré Destino: "Guardar como PDF"
- [ ] Configuré Márgenes: "Ninguno"
- [ ] ⚡ ACTIVÉ "Gráficos de fondo" ⚡
- [ ] Guardé el PDF
- [ ] Abrí el PDF y verifiqué colores azules y amarillos
- [ ] Verifiqué que las 4 páginas estén completas
- [ ] Verifiqué que soluciones 5 y 6 se vean completas

---

**🎉 ¡Ahora sí tendrás un PDF perfecto con todos los colores corporativos!**

Si después de seguir esta guía sigues teniendo problemas, verifica:

1. Versión de Chrome actualizada (mínimo v90+)
2. Que el archivo HTML esté completo
3. Que la carpeta `public/` con logo esté accesible
