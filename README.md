````markdown
# GitHub Repositories API

Este proyecto es una aplicación NestJS que se conecta a la API de GitHub
Mostrar los 10 proyectos top del user google

## Requisitos

- Node.js (versión recomendada: 14.x o superior)
- npm (generalmente viene con Node.js)

## Instalación

Clona este repositorio y navega hasta el directorio del proyecto:

```bash
git clone https://tu-repositorio-aqui.git
cd ruta-al-proyecto
```
````

Instala las dependencias necesarias:

```bash
npm install
```

## Configuración

Para que este proyecto funcione correctamente, asegúrate de que tienes acceso a Internet para las solicitudes a la API de GitHub. No se requieren claves API para los endpoints utilizados en este proyecto.

## Ejecutar la aplicación

Inicia el servidor de desarrollo:

```bash
npm run start:dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Documentación de la API con Swagger

Puedes consultar la documentación interactiva de la API y probar los endpoints utilizando Swagger UI. Simplemente navega a:

```bash
http://localhost:3000/api
```

## Endpoints

### Obtener repositorios del usuario 'google'

- **URL**: `/github/google-repos`
- **Método**: `GET`
- **Respuesta exitosa**:
  - **Código**: 200
  - **Contenido**: JSON con los repositorios de Google.
- **Respuesta de error**:
  - **Código**: 404
  - **Contenido**: `{ error : "Repositories not found." }`

## Pruebas

Para probar los endpoints, puedes usar `curl` o Postman. Aquí un ejemplo con `curl`:

```bash
curl http://localhost:3000/github/google-repos
```

## Contribuir

Para contribuir a este proyecto, por favor crea un fork y envía un pull request, o abre un issue con los detalles del cambio o la adición propuesta.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` en este repositorio para más detalles.

```

```
