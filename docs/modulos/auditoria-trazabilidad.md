# Auditoría y Trazabilidad

RackVR incluye un sistema de registro detallado para garantizar la transparencia y seguridad de todas las operaciones realizadas sobre la infraestructura virtual.

## Registro de Actividades
El sistema captura automáticamente los siguientes eventos:
- **Gestión de Sesiones:** Inicios y cierres de sesión de usuarios.
- **Ciclo de Vida de VM:** Creación, encendido, apagado, pausa y eliminación.
- **Cambios de Configuración:** Modificaciones en redes, recursos de hardware y permisos.
- **Acceso a Consola:** Registros de apertura de conexiones noVNC.

## Estructura de los Logs
Cada entrada en el registro de auditoría contiene:
- **Usuario:** Quién realizó la acción.
- **Acción:** Descripción de la operación.
- **Recurso:** ID de la VM, Host o Red afectada.
- **Timestamp:** Fecha y hora exacta (UTC).
- **Dirección IP:** Origen de la petición.

## Consulta de Registros
Los administradores pueden filtrar los logs por:
- Rango de fechas.
- Usuario específico.
- Tipo de evento (Error, Info, Warning).