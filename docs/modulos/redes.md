# Módulo de Redes (Networking)

La gestión de redes en RackVR define cómo se comunican las máquinas virtuales entre sí y con el mundo exterior. Este módulo interactúa directamente con las capacidades de red de **CentOS/RHEL**.

### Modos de Conectividad
1. **Bridge (Puente)**: Utiliza `bridge-utils` para conectar la interfaz virtual de la VM directamente a la red física del host, permitiendo que la VM tenga su propia IP en la LAN.
2. **NAT (Network Address Translation)**: Crea una subred privada gestionada por Libvirt donde las VMs comparten la IP del host para salir a internet.
3. **Isolated (Aislada)**: Red privada sin salida al exterior, ideal para entornos de pruebas o bases de datos internas.

### Herramientas del Sistema
El funcionamiento correcto depende de las dependencias instaladas previamente:
- `virt-manager` y `bridge-utils` para la creación y monitoreo de puentes.
- Configuración de reglas en el Firewall para permitir el tráfico de datos.