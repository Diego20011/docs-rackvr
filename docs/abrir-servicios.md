# Despliegue de RackVR y Keycloak

Una vez preparado el host, procedemos a levantar los servicios de soporte (Docker) y la aplicación principal.

## 1. Capa de Autenticación (Keycloak)
Utilizamos Keycloak para gestionar el acceso seguro. Lo desplegamos en modo desarrollo para facilitar la configuración inicial.

```bash
docker run -d --name keycloak -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest start-dev
```
Acceso: http://localhost:8080

Credenciales: Usuario admin / Contraseña admin.

## 2. Capa de Datos (PostgreSQL)
La base de datos almacena toda la configuración de tus clusters, redes y registros de VMs.

```bash
docker run -d --name postgres-omivm -p 8081:5432 \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin123 \
  -e POSTGRES_DB=omnivm_db \
  postgres:17
```
Host: localhost | Puerto: 8081

Acceso rápido: psql -U admin -d omnivm_db

## 3. Ejecución del Backend (FastAPI)
El Backend actúa como el motor que se comunica con Libvirt y la base de datos.

Crear y activar el entorno virtual:
Esto aísla las librerías del proyecto de tu sistema global.

```bash
python3 -m venv venv
source venv/bin/activate
Instalar dependencias:
```

```bash
pip install -r requirements.txt
```

Configurar variables de entorno:
Asegúrate de tener un archivo .env con las credenciales de la base de datos (puerto 8081) y Keycloak.

Iniciar el servidor:

```bash
uvicorn app.main:app --reload
```
El servidor estará disponible en http://localhost:8000.

## 4. Ejecución del Frontend (React + Vite)
La interfaz de usuario es la que permite gestionar visualmente los hosts y las VMs.

Instalar módulos de Node:
Debes estar dentro de la carpeta frontend-rackvr.

```bash
npm install
Iniciar el entorno de desarrollo:
```

```bash
npm run dev
```
La web se abrirá automáticamente en http://localhost:5173.