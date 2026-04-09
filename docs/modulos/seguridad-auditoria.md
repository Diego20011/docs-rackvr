# Seguridad y Auditoría

RackVR implementa un modelo de seguridad multicapa diseñado para proteger tanto el acceso a la plataforma como la integridad de los nodos de virtualización remotos.

## Validación Estricta de Tokens (JWT)
El backend (FastAPI) no solo actúa como receptor, sino que realiza una validación exhaustiva de cada identidad mediante:
- **Firma Criptográfica:** Verificación con la clave pública de Keycloak (RS256).
- **Emisor (iss):** Se valida que el token provenga exclusivamente de la instancia configurada de Keycloak.
- **Audiencia (aud):** El token debe haber sido emitido específicamente para el cliente `rackvr-backend`.
- **Expiración:** Rechazo automático de tokens caducados para prevenir ataques de repetición.

## Seguridad en la Comunicación con Hosts
Para evitar la exposición de puertos sensibles y ataques Man-in-the-Middle (MITM):
- **Protocolo Seguro:** Toda la gestión se realiza vía `qemu+ssh://`, utilizando la librería `asyncssh` para túneles cifrados.
- **Whitelist de Comandos:** Se aplica una política de "denegar por defecto", permitiendo únicamente un conjunto predefinido de comandos `virsh` sanitizados.
- **Aislamiento de Gestión:** El tráfico de administración se separa del tráfico de datos de las máquinas virtuales mediante segmentación de red.