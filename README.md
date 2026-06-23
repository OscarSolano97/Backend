# Análisis Técnico del Proyecto Backend

## 1. Proceso de Configuración

### Pasos realizados
1. Creé la carpeta del proyecto `backend`.
2. Inicialicé el proyecto con `npm init` y configuré el archivo `package.json`.
3. Instalé dependencias necesarias: `express` para crear el servidor y `nodemon` para desarrollo.
4. Creé el archivo principal `app.js` con la configuración de Express.
5. Definí las rutas `/`, `/aprendices` y `/programas`.
6. Configuré el script `start` en `package.json` para ejecutar el servidor con `nodemon`.
7. Ejecuté el servidor con `npm start`.

### Función de `package.json`
`package.json` es el archivo de metadatos del proyecto. Contiene:
- nombre, versión y descripción del proyecto.
- dependencias del proyecto (`express`, `cors`, `nodemon`).
- scripts de npm para ejecutar comandos comunes.
- configuración de entrada principal (`main`).

Este archivo permite que npm gestione dependencias, automatice tareas y proporcione información sobre el proyecto.

### Qué ocurre al ejecutar `npm install`
Al ejecutar `npm install`:
- npm lee `package.json` y descarga las dependencias listadas en la carpeta `node_modules`.
- Genera o actualiza `package-lock.json` para fijar versiones exactas.
- Prepara el entorno para que el proyecto pueda ejecutarse correctamente.

## 2. Comprensión del Servidor

### ¿Qué significa que el servidor esté “escuchando” en un puerto?
Cuando el servidor está "escuchando" en un puerto significa que queda a la espera de solicitudes HTTP entrantes en ese número de puerto. En este proyecto, `app.listen(3000)` hace que el servidor escuche en el puerto `3000` de `localhost`.

### ¿Qué sucede internamente al acceder a `http://localhost:3000/`?
1. El navegador o cliente envía una petición HTTP GET a `localhost` en el puerto `3000`.
2. El servidor Express recibe la solicitud.
3. Express compara la URL solicitada con las rutas definidas.
4. Encuentra la ruta `/` y ejecuta su manejador.
5. El servidor responde con un objeto JSON `{"message":"Bienvenido al sistema de gestión."}`.
6. El navegador muestra o procesa la respuesta JSON.

## 3. Análisis de Rutas

### Diferencia entre cada ruta creada
- `/`: ruta raíz que sirve como mensaje de bienvenida al sistema.
- `/aprendices`: devuelve una lista de nombres de aprendices.
- `/programas`: devuelve una lista de programas de formación.

Cada ruta corresponde a un recurso o tema diferente y permite separar la lógica según su propósito.

### Papel de los parámetros `request` y `response`
- `request` (`req`): contiene información de la solicitud del cliente, como URL, parámetros, cuerpo, encabezados y método HTTP. Permite leer datos enviados por el usuario.
- `response` (`res`): permite construir y enviar la respuesta de vuelta al cliente. Incluye métodos como `res.json()` y `res.send()` para devolver datos.

## 4. Reflexión Técnica

### Dificultades encontradas
- Ajustar la configuración de módulos para usar `import` en lugar de `require`, que depende del campo `type` en `package.json`.
- Asegurarse de que las rutas retornaran JSON y no texto plano.
- Mantener la estructura de archivos clara al momento de cambiar rutas y mensajes.

### Aprendizajes
- Comprendí mejor la diferencia entre una ruta y la lógica que procesa la solicitud.
- Entendí la importancia de `package.json` como el centro de la configuración del proyecto.
- Vi cómo `nodemon` facilita el desarrollo al reiniciar automáticamente el servidor cuando hay cambios en el código.

### Importancia de estructurar bien un proyecto desde el inicio
- Facilita el mantenimiento y la lectura del código.
- Permite escalar el proyecto sin que la complejidad crezca de forma desordenada.
- Ayuda a otros desarrolladores a entender rápidamente la organización y los puntos de entrada.
- Reduce errores y hace más eficiente el desarrollo colaborativo.

## 5. Uso del Proyecto

Para iniciar el servidor, en la carpeta del proyecto ejecuta:

```bash
npm start
```

Luego abre:
- `http://localhost:3000/`
- `http://localhost:3000/aprendices`
- `http://localhost:3000/programas`


## Pantallazos del funcionamiento de mi app

<img width="1182" height="491" alt="image" src="https://github.com/user-attachments/assets/e6269e35-c1c9-4ff4-83d0-ff4953dd0297" />


