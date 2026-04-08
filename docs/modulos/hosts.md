# Gestión de Nodos (Hosts)

El módulo de Hosts permite la administración centralizada de los servidores físicos que ejecutan el hipervisor KVM/QEMU. RackVR utiliza la capa de abstracción **libvirt** para realizar operaciones remotas sin intervención directa en la terminal del nodo.

## Capacidades del Módulo
* **Inventario Automatizado**: Lectura de hilos de CPU, memoria RAM total y almacenamiento disponible en tiempo real.
* **Monitoreo de Carga**: Supervisión del estado del servicio `libvirtd` y métricas de consumo (Load Average).
* **Cálculo de Overcommitting**: Análisis inteligente para determinar la viabilidad de desplegar nuevas instancias según los recursos remanentes.

## Requisitos de Integración
Para que un servidor sea gestionado por RackVR, debe tener activo el demonio de virtualización y permitir el acceso al backend mediante el grupo de permisos `libvirt`.