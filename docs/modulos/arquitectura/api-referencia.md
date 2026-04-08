# Referencia de la API REST

La API de RackVR proporciona un conjunto de puntos de enlace (endpoints) diseñados para la gestión automatizada de la infraestructura de virtualización. Está construida sobre el framework **FastAPI**, garantizando alta performance y documentación automática.

## Autenticación
Todas las peticiones a la API deben estar autenticadas mediante **Keycloak**. El sistema utiliza tokens JWT (JSON Web Tokens) para validar la identidad del usuario.

* **Header**: `Authorization: Bearer <JWT_TOKEN>`
* **Formato de datos**: Todas las respuestas y cuerpos de solicitud utilizan `application/json`.

## Endpoints Principales

### Gestión de Máquinas Virtuales (`/vms`)
Permite controlar el ciclo de vida de las instancias.
* `GET /vms`: Lista todas las máquinas virtuales registradas y su estado actual.
* `POST /vms`: Crea una nueva instancia basada en especificaciones de CPU, RAM y disco.
* `POST /vms/{id}/action`: Ejecuta operaciones de control (start, stop, pause, resume, revert).

### Gestión de Nodos (`/hosts`)
Interactúa con los servidores físicos conectados al clúster.
* `GET /hosts`: Devuelve el inventario de recursos de hardware y carga de trabajo.
* `POST /hosts`: Registra un nuevo nodo físico en la plataforma.

### Redes y Almacenamiento
* `GET /networks`: Lista las topologías disponibles (NAT, Bridge, Isolated).
* `GET /storage/pools`: Muestra el estado y capacidad de los Storage Pools de Libvirt.

## Códigos de Respuesta
| Código | Descripción |
| :--- | :--- |
| `200 OK` | Operación completada exitosamente. |
| `201 Created` | Recurso (VM/Red) creado correctamente. |
| `401 Unauthorized` | Token de Keycloak ausente o inválido. |
| `403 Forbidden` | El usuario no tiene permisos (RBAC) para esta acción. |
| `422 Unprocessable Entity` | Error de validación en los parámetros enviados. |