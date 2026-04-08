# Orquestación de Máquinas Virtuales(VMS)

Este módulo representa el núcleo del sistema, encargándose de traducir los estados lógicos de la interfaz en operaciones de hipervisor.

## Ciclo de Vida
* **Despliegue**: Creación de dominios XML basados en especificaciones de CPU y RAM.
* **Control de Estado**: Operaciones de Inicio (Start), Parada Segura (Shutdown), Pausa y Reanudación.
* **Recuperación**: Reversión de estados mediante puntos de restauración almacenados en la base de datos.

## Acceso Remoto
El acceso a la interfaz gráfica de las instancias se realiza a través de **noVNC**.
* **Protocolo**: Tráfico encapsulado vía WebSockets.
* **Seguridad**: Los puertos de consola (5900+) son gestionados dinámicamente y validados contra la sesión del usuario.