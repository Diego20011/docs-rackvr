# Guía de Instalación y Configuración

Sigue estos pasos detallados para preparar el entorno y desplegar los servicios de RackVR en tu servidor. 

> **Nota sobre el Sistema Operativo**: Los comandos de esta guía están diseñados para distribuciones basadas en RedHat (como AlmaLinux 9 o Rocky Linux) utilizando el gestor de paquetes `dnf`.

---

## 1. Instalación de Dependencias del Sistema

Primero, es necesario instalar las herramientas de virtualización y las librerías de desarrollo requeridas por el entorno de Python:

```bash
# Instalar dependencias de KVM y Libvirt
sudo dnf install -y qemu-kvm libvirt virt-install virt-manager bridge-utils
```

# Instalar librerías de desarrollo para Python y compilación
sudo dnf install -y gcc python3-devel libffi-devel openssl-devel
Activación del Hipervisor
Una vez instalados los paquetes, debes activar el servicio de virtualización y verificar que esté corriendo correctamente:

```Bash
sudo systemctl enable --now libvirtd 
sudo systemctl status libvirtd
```
## 2. Despliegue de Base de Datos (PostgreSQL)
RackVR utiliza PostgreSQL 17 para almacenar su estado. Desplegaremos la base de datos utilizando Docker, exponiéndola en el puerto 8081 del host.

```Bash
docker run -d --name postgres-omivm -p 8081:5432 \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin123 \
  -e POSTGRES_DB=omnivm_db \
  postgres:17
```
Credenciales de acceso a la base de datos:

Host: localhost

Puerto: 8081

Usuario: admin

Contraseña: admin123

Nombre BD: omnivm_db

Para ingresar a la DB manualmente por consola:

```Bash
psql -h localhost -p 8081 -U admin -d omnivm_db
```
## 3. Despliegue del Gestor de Identidad (Keycloak)
La autenticación está gestionada por Keycloak. Lo levantaremos en modo desarrollo utilizando Docker y lo expondremos en el puerto 8080.

```Bash
docker run -d --name keycloak -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest start-dev
```
Credenciales iniciales del panel de Keycloak:

Usuario: admin

Contraseña: admin

(Una vez iniciado, deberás acceder al panel para crear el Realm RackVR, el cliente y los roles descritos en la sección de Seguridad).

## 4. Despliegue del Backend (FastAPI)
Con la infraestructura base lista, procede a inicializar el entorno virtual y levantar la API de RackVR:

Navega al repositorio del backend y crea el entorno virtual:

```Bash
python3 -m venv venv
```
Activa el entorno e instala las dependencias:

```bash
source venv/bin/activate
pip install -r requirements.txt
```
Inicia el servidor en modo desarrollo (recarga automática):

```bash
uvicorn app.main:app --reload
```
(El backend de RackVR estará disponible y escuchando peticiones locales).

## 5. Despliegue del Frontend (React / Vite)
Finalmente, para interactuar con la plataforma, debes iniciar la interfaz de usuario:

Navega al directorio del frontend.

Instala las dependencias del proyecto (Este paso solo se debe realizar la primera vez o si hay cambios en el package.json):

```bash
npm install
```
Ejecuta el proyecto en entorno de desarrollo:


```bash
npm run dev
```
(La consola te indicará la URL local, habitualmente http://localhost:5173, donde podrás acceder al dashboard de RackVR).