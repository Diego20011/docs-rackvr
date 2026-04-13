# Gestión de Imágenes ISO

El módulo de ISOs permite mantener un repositorio centralizado de medios de instalación.

## Funcionalidades
* **Catálogo Central**: Visualización de todas las imágenes disponibles en los Storage Pools.
* **Carga (Upload)**: Interfaz para subir archivos `.iso` directamente al host.
* **Metadatos**: El sistema identifica automáticamente el sistema operativo y versión (vía `libosinfo`).
* **Asignación**: Durante la creación de la VM, se puede "montar" virtualmente cualquier ISO del catálogo.