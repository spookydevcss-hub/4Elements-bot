# 🚀 Guía: Subir Bot a Discord Developer Portal

## ¿Qué significa "subir a dev.discord.com"?

En realidad, tu bot **ya está en Discord** cuando:
1. ✅ Creaste la aplicación en Developer Portal
2. ✅ Obtuviste el TOKEN
3. ✅ Obtuviste el CLIENT_ID
4. ✅ Invitaste el bot a tu servidor
5. ✅ Ejecutas tu código localmente

**No hay "subir archivos" a Discord.** Tu código corre en tu computadora/servidor.

---

## Lo que realmente haces:

### 1️⃣ Crear la Aplicación (YA HECHO)
- ✅ Discord Developer Portal → New Application
- ✅ Obtener Client ID
- ✅ Crear Bot
- ✅ Obtener Token

### 2️⃣ Configurar el Bot en Developer Portal

#### A. Ir a OAuth2 → URL Generator

1. En Developer Portal, ve a **OAuth2**
2. Click en **URL Generator**
3. En **Scopes**, selecciona:
   - ✅ `bot`
4. En **Permissions**, selecciona:
   - ✅ Send Messages
   - ✅ Read Messages/View Channels
   - ✅ Add Reactions
   - ✅ Manage Messages
   - ✅ Read Message History

5. **Copia la URL generada**

#### B. Invitar el Bot a tu Servidor

1. Pega la URL en tu navegador
2. Selecciona tu servidor de prueba
3. Click en **Autorizar**
4. Resuelve el CAPTCHA
5. ¡Listo! El bot está en tu servidor

---

## 3️⃣ Ejecutar tu Bot Localmente

Tu código debe estar en tu computadora/servidor, **NO en Discord**.

```bash
# En la carpeta de tu proyecto
cd c:\Users\iqliz\bot-4elements

# Instalar dependencias
npm install

# Compilar
npm run build

# Ejecutar
npm start
```

El bot se conectará a Discord usando tu TOKEN y estará **activo mientras se ejecute**.

---

## 4️⃣ Para Mantener el Bot 24/7

Tienes 3 opciones:

### Opción A: Hosting Gratuito (Recomendado para principiantes)

**Replit:**
1. Ve a [Replit.com](https://replit.com)
2. Click en **Create Repl**
3. Selecciona **Node.js**
4. Sube tus archivos
5. En **Secrets**, agrega:
   - `DISCORD_TOKEN=tu_token`
   - `CLIENT_ID=tu_client_id`
6. Click en **Run**

**Alternativas:** Railway, Heroku (ahora de pago), Glitch

### Opción B: Hosting de Pago

- **AWS** - Gratis primer año
- **DigitalOcean** - $4/mes
- **Google Cloud** - Gratis primer año
- **Azure** - Gratis primer año

### Opción C: Servidor Personal

- Usa una Raspberry Pi
- Una computadora vieja siempre encendida
- Tu VPS personal

---

## 5️⃣ Configuración Final en Developer Portal

### Permisos Recomendados

Ve a **Bot** → **TOKEN PERMISSIONS**:

