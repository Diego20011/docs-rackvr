# Gestión de Usuarios y Roles (RBAC)

RackVR delega la gestión de identidades a **Keycloak**, pero define 4 roles internos:

| Rol | Permisos | Acceso a Logs |
| :--- | :--- | :--- |
| **Administrador** | Control total de infraestructura y usuarios. | Sí (Completo) |
| **Operador** | Crea, borra y gestiona el ciclo de vida de VMs. | No |
| **Auditor** | Solo lectura de métricas y visualización de logs. | Sí (Solo lectura) |
| **Viewer** | Solo lectura de estado de VMs y dashboard. | No |

## Integración Corporativa
Gracias a Keycloak, RackVR permite sincronizar usuarios desde **LDAP** o **Active Directory**, facilitando la adopción en empresas grandes.