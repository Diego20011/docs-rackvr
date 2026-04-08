# Guía de Instalación y Despliegue
Sigue estos pasos para configurar el entorno de RackVR, Keycloak y la base de datos en tu máquina local.

#  Preparación del Host

Antes de desplegar RackVR, es necesario preparar el sistema operativo (CentOS/RHEL) con las herramientas de virtualización y las librerías de desarrollo necesarias.

## 1. Herramientas de Virtualización
Instalamos el stack de KVM y utilidades de gestión de red. Estas permiten que el servidor actúe como un hipervisor.

```bash
sudo dnf install -y qemu-kvm libvirt virt-install virt-manager bridge-utils
```

## 2. Dependencias de Desarrollo
Para que el Backend (FastAPI) pueda compilar ciertas librerías de Python y comunicarse con el sistema, instalamos las herramientas de compilación y cabeceras necesarias:

```bash
sudo dnf install -y gcc python3-devel libffi-devel openssl-devel
```
## 3. Activación del Hipervisor
El servicio libvirtd es el demonio que gestiona las máquinas virtuales. Debemos asegurarnos de que inicie automáticamente con el sistema.


# Habilitar e iniciar el servicio

```bash
sudo systemctl enable --now libvirtd
```

# Verificar que el estado sea "active (running)"

```bash
sudo systemctl status libvirtd
```
:::tip Verificación
Si al ejecutar virsh list --all no recibes errores, significa que el hipervisor está listo para recibir instrucciones de RackVR.
:::