# Módulo de Discos y Storage Pools

Este módulo administra el almacenamiento persistente de las máquinas virtuales. RackVR organiza el almacenamiento en **Storage Pools** (depósitos) de Libvirt.

### Almacenamiento de Datos
- **PostgreSQL 17**: La base de datos (corriendo en el puerto **8081**) almacena los metadatos, rutas de archivos y estados de los discos.
- **Formatos de Disco**: Soporte nativo para imágenes **QCOW2**, que permiten la expansión dinámica del almacenamiento (Thin Provisioning).

### Ubicación del Almacenamiento
Por defecto, los discos se gestionan en las rutas estándar de Libvirt (`/var/lib/libvirt/images`), garantizando que el sistema tenga permisos de lectura/escritura sobre los volúmenes creados.