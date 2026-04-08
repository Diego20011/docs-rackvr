# Arquitectura del Sistema

RackVR está diseñado como una plataforma de orquestación distribuida para entornos de virtualización basados en KVM. El sistema actúa como un plano de control centralizado que abstrae la complejidad de la gestión directa de hipervisores.

## Visión General
La arquitectura separa la lógica de negocio y la interfaz de usuario de la ejecución física de las máquinas virtuales. Esto permite la gestión de múltiples nodos (hosts) desde una única API.

## Flujo de Operación
1. **Solicitud**: El usuario interactúa con el Frontend o la API REST.
2. **Validación**: Keycloak gestiona la identidad y PostgreSQL verifica los límites de recursos.
3. **Orquestación**: El Backend traduce la solicitud en instrucciones para Libvirt.
4. **Ejecución**: El host físico realiza la operación sobre el dominio KVM correspondiente.