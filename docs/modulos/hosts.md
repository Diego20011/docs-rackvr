
# Gestión de Hosts

Los hosts son los servidores físicos individuales que ejecutan el hipervisor KVM y alojan las máquinas virtuales de RackVR.

## Jerarquía Lógica de Infraestructura
RackVR organiza el hardware de forma jerárquica para facilitar la gestión de grandes despliegues:

1. **Datacenters:** Capa superior que representa ubicaciones físicas o regiones lógicas.
2. **Clusters:** Grupos de hosts dentro de un Datacenter que comparten recursos de red y almacenamiento comunes.
3. **Hosts (Nodos):** Los servidores finales donde se instancian las VMs mediante `libvirt`.



## Gestión de Datastores (Almacenamiento)
Cada host administra contenedores de almacenamiento donde se alojan los discos virtuales:
- **Monitoreo de Capacidad:** El sistema reporta en tiempo real el espacio total, usado y disponible.
- **Formatos Soportados:** Optimización para imágenes de disco en formato `.qcow2` (con soporte para Thin Provisioning) y `.raw`.