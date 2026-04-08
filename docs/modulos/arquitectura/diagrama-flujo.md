# Diagrama de Arquitectura

El siguiente esquema detalla la interacción entre las capas de gestión y los nodos de ejecución de RackVR.

![Diagrama de Arquitectura de RackVR](/img/Diagrama_arquitectura_RackVR.png)

## Flujo de Operación
1. **Frontend**: Interfaz de usuario para la gestión.
2. **Keycloak**: Validación de identidad y tokens.
3. **Backend (FastAPI)**: Orquestador central.
4. **PostgreSQL**: Persistencia de metadatos.
5. **Nodos KVM**: Ejecución física de las máquinas virtuales.

