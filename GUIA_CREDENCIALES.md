# 📖 Guía: Obtener Token y Client ID de Discord

## Paso 1: Acceder a Discord Developer Portal

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Inicia sesión con tu cuenta de Discord
3. Click en **"New Application"**
4. Dale un nombre a tu aplicación (ej: "Bot 4Elements")
5. Click en **"Create"**

## Paso 2: Obtener el CLIENT_ID

1. En la ventana que se abre, ve a la pestaña **"General Information"**
2. Verás un campo llamado **"Application ID"**
3. **Copia este ID** y guárdalo
4. Pégalo en tu archivo `.env`:
   ```
   CLIENT_ID=tu_id_aqui
   ```

## Paso 3: Obtener el DISCORD_TOKEN

1. En el menú izquierdo, ve a **"Bot"**
2. Click en **"Add Bot"** (si no tiene uno ya)
3. Bajo el nombre del bot, verás un botón **"Reset Token"**
4. Click en **"Copy"** (el botón al lado del token)
5. **Copia el token** y guárdalo inmediatamente
6. Pégalo en tu archivo `.env`:
   ```
   DISCORD_TOKEN=tu_token_aqui
   ```

⚠️ **IMPORTANTE:** Nunca compartas tu token públicamente. Si lo expones, regenera uno nuevo.

## Paso 4: Configurar Permisos del Bot

1. En la pestaña **"Bot"**, baja hasta **"TOKEN PERMISSIONS"**
2. Selecciona estos permisos:
   - ✅ **Send Messages**
   - ✅ **Read Message History**
   - ✅ **Add Reactions**
   - ✅ **Manage Messages**
   - ✅ **Read Messages/View Channels**

3. También ve a **"OAuth2"** → **"URL Generator"**
4. En **"Scopes"** selecciona:
   - ✅ **bot**
5. En **"Permissions"** selecciona los mismos permisos de arriba
6. Copia la URL generada y úsala para invitar el bot a tu servidor

## Paso 5: Invitar el Bot a tu Servidor

1. En **OAuth2** → **URL Generator**, copia la URL
2. Pégala en tu navegador
3. Selecciona tu servidor de prueba
4. Autoriza los permisos
5. ¡Listo! El bot está en tu servidor

## Paso 6: Verificar el Archivo .env

Tu archivo `.env` debe verse así:
