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

## 3. Ejecución del Backend
Finalmente, levantamos la API de RackVR. Asegúrate de tener tu entorno virtual activo.

# Instalar requerimientos (si es la primera vez)
```bash
pip install -r requirements.txt
```

# Iniciar servidor con recarga automática
```bash
uvicorn app.main:app --reload
```