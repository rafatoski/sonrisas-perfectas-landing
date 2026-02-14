# 🦷 Sonrisas Perfectas - Landing Page

Landing page para clínica dental con integración a n8n y WhatsApp.

## 🚀 Instalación y Desarrollo Local

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

El sitio estará disponible en: `http://localhost:4321`

3. **Construir para producción:**
```bash
npm run build
```

Los archivos estáticos se generan en la carpeta `dist/`

## ⚙️ Configuración

### Variables a configurar en `src/components/FormularioRegistro.astro`:

1. **WEBHOOK_URL**: URL del webhook de n8n
   - Actual: `https://n8ntest.neuromarkia.online/webhook-test/registro-paciente`

2. **WHATSAPP_NUMBER**: Número de WhatsApp de la clínica (sin +)
   - Formato: `573001234567`
   - Actual: `573001234567` (CAMBIAR POR EL REAL)

## 📦 Despliegue en Dokploy

### Opción 1: Desde GitHub

1. **Sube el código a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sonrisas-perfectas-landing.git
git push -u origin main
```

2. **En Dokploy:**
   - Crear nueva aplicación
   - Conectar con tu repositorio de GitHub
   - Configurar build:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Configurar dominio: `onboardingtest.neuromarkia.online`
   - Deploy

### Opción 2: File Manager (hPanel)

1. **Construir el proyecto:**
```bash
npm run build
```

2. **Subir carpeta `dist/` al servidor:**
   - Ir a hPanel → File Manager
   - Navegar a la carpeta del subdominio
   - Subir todo el contenido de `dist/`

## 🔧 Workflow de n8n

El webhook debe recibir estos datos:

```json
{
  "nombre": "María López",
  "email": "maria@email.com",
  "whatsapp": "+573001234567",
  "tratamiento": "Blanqueamiento dental",
  "imagen": "data:image/jpeg;base64,/9j/4AAQ..." 
}
```

### Estructura del workflow:

1. **Webhook** - Recibe los datos del formulario
2. **HTTP Request** - Sube imagen a Cloudinary
3. **Set** - Prepara datos (genera ID, timestamp, etc)
4. **Google Sheets** - Guarda la información
5. **Respond to Webhook** - Responde success al landing

## 📊 Estructura de Google Sheets

| Timestamp | Nombre | Email | WhatsApp | Tratamiento | URL_Imagen | ID_Cotizacion | Estado | Respuesta_IA |
|-----------|--------|-------|----------|-------------|------------|---------------|--------|--------------|

## 📱 Flujo del Usuario

1. Usuario llega desde Meta Ads
2. Ve información de la clínica y tratamientos
3. Llena formulario + sube foto
4. Sistema procesa y guarda en Google Sheets
5. Muestra mensaje de éxito
6. Usuario hace click en botón de WhatsApp
7. Abre WhatsApp con mensaje pre-escrito
8. Recibe cotización por IA vía WhatsApp

## 🎨 Personalización

### Colores (en `tailwind.config.mjs`):
- Puedes cambiar los colores primary editando la paleta

### Contenido:
- Editar `src/pages/index.astro` para cambiar textos
- Modificar tratamientos en la sección correspondiente

## 📝 Notas Importantes

- Las imágenes se convierten a Base64 antes de enviar
- Límite de tamaño: 1MB por imagen
- Formatos aceptados: JPG, PNG
- El número de WhatsApp incluye prefijo +57 (Colombia)

## 🐛 Troubleshooting

**Problema: El formulario no envía**
- Verificar que el webhook de n8n esté activo
- Revisar la consola del navegador para errores
- Confirmar que la URL del webhook sea correcta

**Problema: La imagen no se sube**
- Verificar tamaño (máximo 1MB)
- Confirmar formato (JPG o PNG)
- Revisar configuración de Cloudinary en n8n

**Problema: El botón de WhatsApp no funciona**
- Verificar que el número esté en formato correcto (sin espacios ni guiones)
- Confirmar que WHATSAPP_NUMBER esté configurado

## 📞 Soporte

Para dudas o problemas, revisar los logs de n8n y la consola del navegador.
