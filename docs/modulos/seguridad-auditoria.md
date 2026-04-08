# Seguridad y Auditoría

La integridad del sistema se basa en tres pilares fundamentales:

1. **Autenticación Centralizada**: Integración con Keycloak para manejo de identidades.
2. **Control RBAC**: Los roles definen si un usuario puede solo visualizar recursos o también modificarlos.
3. **Logs de Auditoría**: Registro de operaciones críticas (quién inició una VM, quién borró una red) almacenados en PostgreSQL.