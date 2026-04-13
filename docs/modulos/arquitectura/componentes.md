# Componentes Tecnológicos

RackVR se apoya en librerías líderes para garantizar estabilidad:

## Backend (Python/FastAPI)
* **Asyncssh**: Para ejecutar comandos `virsh` de forma asíncrona y segura.
* **APScheduler**: Gestiona tareas de limpieza y sincronización de estado de hosts.
* **Alembic**: Maneja las migraciones de la base de datos PostgreSQL.
* **Pydantic**: Validación estricta de los datos que entran y salen de la API.

## Frontend (React/Vite)
* **TailwindCSS**: Diseño moderno, responsivo y ligero.
* **Lucide React**: Set de iconos consistentes para la interfaz.

## Virtualización
* **Libvirt Python**: Comunicación directa con el demonio del hipervisor.
* **Websockify**: Bridge para convertir tráfico de consola VNC a WebSockets.