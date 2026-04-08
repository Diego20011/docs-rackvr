# Diagrama de Arquitectura

El flujo de RackVR se basa en una comunicación bidireccional entre el plano de gestión y los nodos de ejecución.

## Interacción de Componentes
El siguiente esquema describe el flujo de una petición desde el usuario hasta el hipervisor:

1. **Frontend**: Interfaz en React que envía peticiones REST.
2. **Keycloak**: Valida el token JWT de la sesión.
3. **FastAPI Backend**: Procesa la lógica y consulta a PostgreSQL.
4. **Libvirt API**: Envía la instrucción XML al Host físico.
5. **KVM/QEMU**: Ejecuta la acción sobre el hardware.

![Diagrama de Arquitectura de RackVR](/img/Diagrama_arquitectura_RackVR.png)