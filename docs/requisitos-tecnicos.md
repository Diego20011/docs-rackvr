# Requisitos Técnicos

Antes de instalar RackVR, asegúrese de cumplir con las siguientes especificaciones:

## Infraestructura del Host (Hipervisor)
* **Sistema Operativo**: AlmaLinux 9, Ubuntu 22.04 LTS o Debian 12.
* **CPU**: Soporte para virtualización Intel VT-x o AMD-V habilitado en BIOS.
* **RAM**: Mínimo 8GB (para el sistema + overhead de VMs).
* **Red**: Interfaz puente (Bridge) configurada.

## Stack de Software (Servidor de Gestión)
| Componente | Versión Mínima |
| :--- | :--- |
| **PostgreSQL** | 17.0 |
| **Python** | 3.11 |
| **Keycloak** | 24.0 |
| **Node.js** | 20.0 (Para el Frontend) |