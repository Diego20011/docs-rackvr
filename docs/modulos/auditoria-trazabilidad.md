
# Auditoría y Trazabilidad

El sistema de auditoría de RackVR garantiza que cada acción realizada sobre la infraestructura sea registrada de forma persistente e inalterable.

## Eventos Auditables
El sistema monitoriza y registra en la tabla `audit_logs` de PostgreSQL:
- **Ciclo de Vida de VM:** Operaciones de creación, inicio, apagado, pausa y eliminación.
- **Gestión de Recursos:** Cambios en la asignación de CPU, memoria y almacenamiento.
- **Seguridad y Acceso:** Intentos de inicio de sesión y apertura de consolas remotas vía noVNC.

## Estructura de los Registros
Cada entrada de auditoría contiene la información necesaria para una reconstrucción forense:
- **Actor:** El ID o nombre del usuario que ejecutó la operación.
- **Acción:** Descripción técnica de la tarea realizada.
- **Recurso:** Identificador único (UUID) del elemento afectado (VM, Host o Red).
- **Timestamp:** Marca de tiempo precisa en formato UTC.
- **Estado:** Resultado de la operación (Éxito / Error detallado).