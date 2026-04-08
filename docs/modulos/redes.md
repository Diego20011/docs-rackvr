# Gestión de Redes y Conectividad

La infraestructura de red en RackVR permite la comunicación aislada o externa de las instancias mediante la manipulación de puentes virtuales en el host.

## Topologías Soportadas
* **Red NAT (Virtual)**: Crea un segmento de red privado donde las VMs obtienen salida a internet a través de la IP del host. Ideal para servicios internos.
* **Red Bridge (Puente)**: Conecta la interfaz virtual directamente a la interfaz física del host. La VM se comporta como un nodo físico adicional en la red local.
* **Red Isolated (Aislada)**: Entorno sin salida a redes externas, garantizando el aislamiento total para pruebas o bases de datos críticas.

## Componentes de Gestión
El sistema interactúa con `bridge-utils` y las capacidades nativas de Linux para monitorear el tráfico y garantizar que las reglas del firewall permitan el flujo de datos según la política definida.