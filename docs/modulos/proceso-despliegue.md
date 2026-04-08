# Proceso de Despliegue de Instancias

El despliegue de una Máquina Virtual (VM) en RackVR es un proceso orquestado que asegura la asignación eficiente de recursos físicos y la persistencia de datos en el clúster.

## Flujo Operativo de Aprovisionamiento

### 1. Solicitud y Validación
El proceso inicia cuando el usuario define las especificaciones técnicas (vCPU, RAM, Disco) y la red de destino. El Backend realiza las siguientes validaciones:
* **Cuotas**: Verifica que el usuario tenga permisos suficientes.
* **Capacidad del Host**: El sistema consulta el inventario del nodo físico para asegurar que el *overcommitting* de recursos se mantenga dentro de los límites operativos.

### 2. Preparación del Almacenamiento
RackVR interactúa con el **Storage Pool** asignado:
* Se genera un volumen basado en el formato **QCOW2**.
* Se utiliza *Thin Provisioning* para optimizar el espacio en el disco físico del host.

### 3. Definición del Dominio (XML)
El orquestador genera dinámicamente un archivo de configuración XML compatible con **libvirt**. Este archivo incluye:
* Definición de arquitectura y aceleración KVM.
* Configuración de interfaces de red (Bridge, NAT o Isolated).
* Asignación de puertos para la consola **noVNC**.

### 4. Ejecución y Registro
Una vez que libvirt confirma la creación del dominio, el sistema realiza el encendido automático:
* **Estado en BD**: Se registra la instancia en PostgreSQL con estado `Running`.
* **Consola**: Se habilita el túnel de WebSockets para permitir el acceso gráfico inmediato del usuario.

## Estados de Despliegue
| Estado | Descripción |
| :--- | :--- |
| **Pending** | El sistema está validando recursos y creando el disco. |
| **Defining** | Creación del dominio XML en el hipervisor. |
| **Running** | La instancia ha iniciado y la consola está disponible. |
| **Error** | Fallo en el aprovisionamiento (ej. falta de recursos físicos). |