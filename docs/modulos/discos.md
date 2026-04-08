# Administración de Almacenamiento

RackVR gestiona el almacenamiento persistente utilizando la abstracción de **Storage Pools** de Libvirt, optimizando el rendimiento de lectura y escritura.

## Formatos y Aprovisionamiento
* **QCOW2**: Formato estándar utilizado que permite el uso de *Thin Provisioning* (los archivos crecen según la demanda real de datos).
* **Snapshots**: Capacidad de congelar el estado del disco para permitir reversiones rápidas ante fallos de configuración.

## Flujo de Datos
1. **Definición**: El usuario define el tamaño y el pool de destino (por defecto `/var/lib/libvirt/images`).
2. **Registro**: Los metadatos de la ruta y el estado se indexan en PostgreSQL.
3. **Asignación**: El volumen se vincula dinámicamente al dominio de la VM durante el proceso de arranque.