# Seguridad e Identidad

La gestión de acceso en RackVR está centralizada a través de **Keycloak**, proporcionando un estándar industrial para la protección de la infraestructura.

## Control de Acceso (RBAC)
El sistema implementa un modelo de Control de Acceso Basado en Roles para definir permisos específicos sobre los recursos:
* **Administradores**: Control total sobre hosts, redes y usuarios.
* **Operadores**: Gestión del ciclo de vida de máquinas virtuales asignadas.
* **Auditores**: Acceso de solo lectura a métricas y registros de eventos.

## Mecanismos de Autenticación
* **Single Sign-On (SSO)**: Acceso unificado a todos los componentes del sistema.
* **Gestión de Sesiones**: Validación continua de tokens JWT para asegurar la integridad de las peticiones a la API.