# Componentes del Sistema

La arquitectura de RackVR se basa en una estructura modular donde cada componente cumple una función específica dentro del ecosistema de virtualización.

## Capas Tecnológicas

### Plano de Control (Backend)
Desarrollado en **FastAPI**, actúa como el orquestador principal. Recibe solicitudes de la interfaz de usuario y las traduce en llamadas a la API de **libvirt** para interactuar con el hipervisor.

### Gestión de Datos
* **PostgreSQL 17**: Almacena de forma persistente la configuración de los clusters, registros de red, metadatos de almacenamiento y el estado de las VMs.

### Seguridad e Identidad
* **Keycloak**: Gestiona de manera centralizada la autenticación y autorización, permitiendo implementar políticas de acceso basadas en roles (RBAC).

### Virtualización y Consola
* **libvirt / KVM**: Capa de abstracción y ejecución de las máquinas virtuales.
* **noVNC**: Proporciona acceso a la consola gráfica de las instancias directamente desde el navegador web mediante protocolos seguros.