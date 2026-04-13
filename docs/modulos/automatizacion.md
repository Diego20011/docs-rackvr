# Tareas Programadas y Salud

RackVR no es solo una interfaz; es un sistema activo que trabaja en segundo plano.

## Procesos Automáticos (APScheduler)
1. **Sincronización de Estado**: Cada 30 segundos, el backend pregunta a los hosts el estado real de las VMs para detectar cambios externos.
2. **Health Check de Nodos**: Validación de conectividad SSH y estado del servicio `libvirtd`.
3. **Limpieza de Recursos**: Eliminación automática de archivos temporales de consola y tokens expirados.
4. **Métricas de Rendimiento**: Recolección de telemetría de CPU y RAM para las gráficas del Dashboard.