# 🐙 Guía: Subir Bot a GitHub y Ejecutarlo

## ¿Por qué GitHub?

- Backup de tu código
- Fácil deploy en hosting
- Control de versiones
- Compartir con otros desarrolladores

---

## Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Inicia sesión (o crea cuenta)
3. Click en **+** → **New repository**
4. Nombre: `bot-4elements`
5. Descripción: `Bot de Discord para sorteos`
6. Selecciona **Private** (para mantener seguro)
7. Click en **Create repository**

---

## Paso 2: Subir tu Código a GitHub

### Opción A: Desde Terminal (Recomendado)

```bash
# 1. Ve a tu carpeta del proyecto
cd c:\Users\iqliz\bot-4elements

# 2. Inicializa git
git init

# 3. Agrega todos los archivos
git add .

# 4. Crea el primer commit
git commit -m "Inicial: Bot de sorteos"

# 5. Agrega tu repositorio remoto (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/bot-4elements.git

# 6. Sube los archivos
git branch -M main
git push -u origin main
```

### Opción B: Desde GitHub Desktop (Más fácil)

1. Descarga [GitHub Desktop](https://desktop.github.com)
2. Inicia sesión con tu cuenta
3. Click en **File** → **Add Local Repository**
4. Selecciona tu carpeta `bot-4elements`
5. Click en **Publish repository**
6. Selecciona **Private**
7. Click en **Publish**

---

## Paso 3: Configurar .env en GitHub (IMPORTANTE)

⚠️ **NUNCA subas el archivo `.env` a GitHub**

### Verificar que .env está ignorado

1. Abre `.gitignore`
2. Asegúrate que tenga:
   ```
   .env
   node_modules/
   dist/
   ```

3. Si ya subiste el token, regenera uno nuevo en Developer Portal

---

## Paso 4: Ejecutar en Hosting (Replit - Gratis)

### A. Crear Proyecto en Replit desde GitHub

1. Ve a [Replit.com](https://replit.com)
2. Click en **Create**
3. Selecciona **Import from GitHub**
4. Pega tu URL: `https://github.com/TU_USUARIO/bot-4elements`
5. Click en **Import from GitHub**

### B. Configurar Variables de Entorno

1. En Replit, ve a **Secrets** (candado en la izquierda)
2. Agrega:
   ```
   DISCORD_TOKEN = tu_token_aqui
   CLIENT_ID = tu_client_id_aqui
   ```
3. Presiona Enter después de cada una

### C. Ejecutar el Bot

1. Click en **Run**
2. En la terminal verás: `✅ Bot conectado como YourBot#0000`
3. ¡Tu bot está vivo! 🎉

---

## Paso 5: Mantener el Bot 24/7 en Replit

### Opción A: Replit Always On (Pago)

1. Click en tu nombre → **Account**
2. Busca **Always On**
3. Habilita por $7/mes (incluye otros beneficios)

### Opción B: Usar UptimeRobot (Gratis)

1. Ve a [UptimeRobot.com](https://uptimerobot.com)
2. Crea cuenta
3. Click en **Monitors** → **Add New Monitor**
4. Tipo: **HTTP(s)**
5. URL: Tu URL de Replit (termina en `.repl.co`)
6. Intervalo: **5 minutos**
7. Click en **Create Monitor**

Esto hace ping cada 5 minutos para mantener el bot activo.

---

## Paso 6: Actualizar Código Desde GitHub

Cuando hagas cambios en tu computadora:

```bash
# Hacer cambios en tus archivos...

# Subir cambios a GitHub
git add .
git commit -m "Descripción del cambio"
git push

# En Replit, click en el botón de GitHub
# Tu código se actualiza automáticamente
```

---

## Paso 7: Configurar Auto-Deploy (Opcional)

### En Replit

1. Ve a tu Replit
2. Click en **Tools** → **Version Control**
3. Habilita **GitHub Auto-Import**
4. Ahora cada push a GitHub actualiza Replit automáticamente

---

## Estructura Final en GitHub

