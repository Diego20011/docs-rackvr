# Referencia de la API (RESTful)

RackVR expone una API robusta construida con **FastAPI**.

## Endpoints de Infraestructura
* `GET /datacenters`: Lista todos los centros de datos.
* `GET /clusters/{dc_id}`: Filtra clusters por datacenter.
* `POST /hosts/health`: Dispara un escaneo de salud sobre un host específico.

## Endpoints de Recursos
* `GET /vms`: Inventario completo de máquinas virtuales.
* `POST /vms/create`: Inicia el orquestador de despliegue.
* `GET /isos`: Catálogo de imágenes de instalación.

## Endpoints de Sistema
* `GET /audit/logs`: Registros de trazabilidad (Solo Auditores/Admins).
* `GET /health`: Estado de los servicios internos (DB, Keycloak, Celery).

