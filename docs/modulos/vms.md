# Módulo de VMs (Virtual Machines)

El módulo de Máquinas Virtuales es el orquestador central de RackVR. Se encarga de traducir las acciones de la interfaz web en llamadas directas al hipervisor a través de la API de **FastAPI**.

### Gestión del Ciclo de Vida
La plataforma permite un control granular sobre el estado de ejecución de cada instancia:
- **Start**: Inicializa el dominio en Libvirt y reserva los recursos de CPU y RAM.
- **Stop / Shutdown**: Envía una señal ACPI para un apagado seguro del sistema operativo invitado.
- **Pause**: Suspende la ejecución de la VM, liberando ciclos de CPU pero manteniendo la RAM ocupada.
- **Revert**: Permite regresar a un estado previo (Snapshot) en caso de fallos en la configuración.

### Especificaciones Técnicas
Al desplegar o editar una VM, se configuran los siguientes parámetros:
- **Recursos**: Asignación dinámica de vCPUs y memoria RAM según la disponibilidad del Host.
- **Consola Remota**: Acceso integrado mediante **noVNC** (operando usualmente en el rango de puertos 5900+), permitiendo el control total sin necesidad de clientes externos.