# 🌐 Guía: Subir Bot a WispBite

## ¿Qué es WispBite?

WispBite es un hosting especializado en bots de Discord con:
- ✅ Hosting 24/7 gratis
- ✅ Soporte para Node.js
- ✅ Fácil integración con GitHub
- ✅ Variables de entorno seguras
- ✅ Logs en tiempo real

---

## Paso 1: Preparar tu Código en GitHub

Asegúrate de que tu código esté en GitHub:

```bash
git add .
git commit -m "Bot listo para WispBite"
git push origin main
```

Verifica en GitHub que tengas:
- ✅ `main/` carpeta con tu código
- ✅ `package.json` con dependencias
- ✅ `.gitignore` con `.env`
- ✅ `tsconfig.json`

---

## Paso 2: Crear Cuenta en WispBite

1. Ve a [WispBite.com](https://wispbite.com)
2. Click en **Sign Up**
3. Usa tu email y crea contraseña
4. Verifica tu email
5. ¡Listo! Acceso a tu dashboard

---

## Paso 3: Conectar tu Bot en WispBite

### A. Dashboard Principal

1. En tu dashboard, click en **New Bot**
2. Rellena:
   - **Bot Name**: `bot-4elements`
   - **Bot Token**: Tu token de Discord
   - **Client ID**: Tu Client ID de Discord
3. Click en **Continue**

### B. Conectar GitHub

1. Click en **Connect GitHub**
2. Autoriza WispBite a acceder a tus repos
3. Selecciona `bot-4elements`
4. Selecciona rama: `main`
5. Click en **Connect**

---

## Paso 4: Configurar Variables de Entorno

En WispBite:

1. Ve a **Settings** → **Environment Variables**
2. Agrega:
   ```
   DISCORD_TOKEN=tu_token_aqui
   CLIENT_ID=tu_client_id_aqui
   ```
3. Click en **Save**

---

## Paso 5: Configurar Instalación

1. Ve a **Settings** → **Installation**
2. Selecciona:
   - **Runtime**: Node.js
   - **Node Version**: 18 o superior
3. En **Start Command**, asegúrate que sea:
   ```
   npm run start
   ```

---

## Paso 6: Compilar e Iniciar

1. Ve a **Build**
2. Click en **Build Now**
3. Espera a que compile (verás los logs)
4. Si todo va bien, verás ✅ **Build Successful**
5. Click en **Start Bot**
6. El bot está **EN VIVO** 🎉

---

## Paso 7: Verificar que Funciona

1. Ve a tu servidor de Discord
2. Verifica que el bot esté en línea (círculo verde)
3. Prueba `/sorteo premio:PS5 duracion:30`
4. Deberías ver el embed del sorteo

---

## Mantener Actualizado

Cada vez que hagas cambios:

```bash
# En tu computadora
git add .
git commit -m "Cambio: descripción"
git push origin main

# En WispBite
# 1. Ve a Build
# 2. Click en Build Now
# 3. Click en Start Bot
# ¡Listo!
```

O habilita **Auto-Deploy**:
1. Settings → **Auto-Deploy**
2. Habilita
3. Cada push a GitHub dispara una construcción automática

---

## Alternativa: Deploy Manual desde GitHub

Si WispBite no conecta directamente:

### Opción A: Git Clone

1. En WispBite, ve a **Settings** → **Git**
2. Copia el comando que te muestra
3. Ejecuta en terminal:
   ```bash
   git clone [url-wispbite] my-bot
   cd my-bot
   git remote add github https://github.com/TU_USUARIO/bot-4elements.git
   git pull github main
   git push origin main
   ```

### Opción B: Subir ZIP

1. Comprime tu carpeta `bot-4elements`
2. En WispBite, ve a **Files**
3. Click en **Upload**
4. Sube el ZIP
5. WispBite lo descomprime automáticamente

---

## Monitoreo y Logs

### Ver Logs en Vivo

1. Ve a **Logs**
2. Verás en tiempo real:
   ```
   ✅ Bot conectado como YourBot#0000
   🎁 Sorteo iniciado: PS5 (30s)
   🏆 Ganador: Usuario123 - Premio: PS5
   ```

### Reiniciar Bot

1. Ve a **Control**
2. Click en **Restart**
3. El bot se reinicia en segundos

### Detener Bot

1. Ve a **Control**
2. Click en **Stop**
3. El bot se desconecta

---

## Troubleshooting

### Error: "npm install failed"

**Solución:**
1. Verifica que `package.json` esté en la raíz
2. Intenta construir de nuevo: **Build** → **Build Now**

### Error: "Command not found: npm run start"

**Solución:**
1. Ve a **Settings** → **Installation**
2. Cambia **Start Command** a:
   ```
   node dist/main/index.js
   ```
3. Intenta nuevamente

### Bot no aparece en línea

**Solución:**
1. Verifica token en Environment Variables
2. Verifica Client ID
3. Revisa los logs en **Logs**
4. Reinicia el bot en **Control**

### Variables de entorno no cargan

**Solución:**
1. En **Settings** → **Environment Variables**
2. Elimina y vuelve a agregar
3. Click en **Save**
4. Reinicia bot

---

## Configuración Avanzada

### Puerto Personalizado

Si necesitas escuchar en un puerto:

```typescript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Escuchando en puerto ${PORT}`));
```

En WispBite, agrega variable:
