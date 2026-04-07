# Módulo de Hosts (Nodos de Cómputo)

El módulo de **Hosts** es el encargado de gestionar los servidores físicos (nodos) donde se ejecutan los recursos de cómputo. En RackVR, un Host es cualquier servidor que corre un hipervisor **KVM/QEMU** y permite ser administrado de forma remota.

### El Hipervisor y la Conexión
Cada host integrado en la plataforma utiliza la biblioteca **libvirt** como capa de abstracción. La comunicación entre el Backend de RackVR y el Host físico se realiza mediante protocolos seguros, permitiendo una gestión centralizada sin necesidad de acceder individualmente a cada servidor por terminal.

### Capacidades de Gestión
Desde este módulo, RackVR realiza las siguientes tareas críticas:

1. **Inventario de Recursos**: 
   - Lectura de capacidades físicas: Total de hilos de CPU, memoria RAM instalada y almacenamiento disponible.
   - Cálculo de "Overcommitting": Permite analizar cuántas VMs adicionales puede soportar el nodo antes de comprometer el rendimiento.

2. **Monitoreo en Tiempo Real**:
   - Estado del servicio `libvirtd`.
   - Carga de trabajo actual (Load Average).
   - Consumo de red por parte de todas las instancias alojadas.

3. **Abstracción de Hardware**:
   - Identificación de las capacidades de aceleración de hardware (VT-x o AMD-V).
   - Gestión de los puentes de red (Bridges) disponibles en el nodo físico para vincularlos a las VMs.

### Configuración del Lado del Host
Para que un host pueda ser añadido a RackVR, debe cumplir con la configuración base instalada previamente:
- **Servicio activo**: `libvirtd` debe estar en ejecución.
- **Permisos**: El usuario con el que conecta el Backend debe pertenecer al grupo `libvirt`.
- **Accesibilidad**: Los puertos necesarios para la comunicación y la consola **noVNC** deben estar habilitados en el firewall del host.

:::tip Nota de Arquitectura
RackVR está diseñado para ser **multi-host**, lo que significa que puedes añadir múltiples servidores físicos y gestionarlos todos desde el mismo panel central, distribuyendo tus máquinas virtuales según la carga de cada nodo.
:::