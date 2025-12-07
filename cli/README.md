# cli-lider-gemini

Una herramienta de línea de comandos (CLI) creada con la ayuda de Gemini para ayudar en la automatización y gestión de tareas de proyectos.

## Instalación

Para instalar esta CLI globalmente en tu sistema y poder usarla desde cualquier directorio, ejecuta el siguiente comando en tu terminal:

```bash
npm install -g cli-lider-gemini
```

## Uso

Una vez instalada, puedes invocar la CLI directamente desde tu terminal:

```bash
cli-lider-gemini
```

---

## Cómo Actualizar y Publicar una Nueva Versión

Para mantener esta CLI y lanzar nuevas versiones, sigue este flujo de trabajo estandarizado. Esto asegura que cada cambio quede registrado y sea fácil de gestionar.

### Paso 1: Realiza tus cambios

Modifica el código fuente de la CLI (por ejemplo, el archivo `install.js` u otros) para añadir las nuevas funcionalidades o para corregir errores.

### Paso 2: Actualiza la Versión del Paquete

Antes de publicar, es fundamental actualizar el número de versión en `package.json`. En lugar de editar el archivo manualmente, utiliza el comando `npm version` desde el directorio `cli`.

Elige uno de los siguientes comandos según la naturaleza de tus cambios (esto sigue el estándar de **Versionado Semántico**):

*   **Para una corrección de error simple (Patch):**
    *Sube la versión de `1.0.0` a `1.0.1`.*
    ```bash
    npm version patch
    ```

*   **Para añadir una nueva funcionalidad retrocompatible (Minor):**
    *Sube la versión de `1.0.1` a `1.1.0`.*
    ```bash
    npm version minor
    ```

*   **Para un cambio mayor que rompe la compatibilidad (Major):**
    *Sube la versión de `1.1.0` a `2.0.0`.*
    ```bash
    npm version major
    ```

### Paso 3: Publica la Nueva Versión en NPM

Una vez que la versión ha sido actualizada con el comando anterior, publica el paquete para que los cambios estén disponibles para todos.

(Asegúrate de haber iniciado sesión previamente con `npm login`)

```bash
npm publish
```

¡Y listo! Con estos tres pasos, mantendrás un ciclo de vida ordenado, profesional y predecible para tu CLI a lo largo del tiempo.
