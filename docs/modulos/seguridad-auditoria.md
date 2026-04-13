# Seguridad y Flujo de Identidad

La seguridad en RackVR es "Stateless" y federada.

## Flujo de Autenticación (8 Pasos)
1. **Petición**: El usuario accede al Frontend.
2. **Redirección**: Se envía al servidor Keycloak.
3. **Credenciales**: El usuario ingresa datos en Keycloak (MFA soportado).
4. **Emisión**: Keycloak genera un **Access Token JWT**.
5. **Cabecera**: El Frontend guarda el token y lo envía en cada petición (`Authorization: Bearer`).
6. **Validación**: El Backend valida la firma **RS256** con la clave pública de Keycloak.
7. **RBAC**: Se verifican los roles en el token (`admin`, `operator`, `auditor`, `viewer`).
8. **Ejecución**: Si todo es válido, la API interactúa con el host vía túnel SSH seguro.

## Gestión Stateless
No se guardan sesiones en el servidor de API. Si un token es robado, su corta duración y la validación de audiencia (`aud`) mitigan el riesgo.