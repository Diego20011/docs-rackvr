const sidebars = {
  // Configuración manual del sidebar para tener control total del orden
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Conociendo RackVR',
      collapsible: true,
      collapsed: false,
      items: [
        'intro',
        'requisitos-tecnicos',
        'instalacion-sistema',
        'glosario',
      ],
    },
    {
      type: 'category',
      label: 'Arquitectura del Sistema',
      collapsible: true,
      collapsed: false,
      items: [
        'modulos/arquitectura/vision-general',
        'modulos/arquitectura/componentes',
        'modulos/arquitectura/api-referencia',
        'modulos/arquitectura/diagrama-flujo',
        'modulos/arquitectura/casos-uso',
      ],
    },
    {
      type: 'category',
      label: 'Seguridad y Trazabilidad',
      collapsible: true,
      collapsed: true,
      items: [
        'modulos/usuarios-permisos',
        'modulos/seguridad-auditoria',
        'modulos/auditoria-trazabilidad',
      ],
    },
    {
      type: 'category',
      label: 'Gestión de Infraestructura',
      collapsible: true,
      collapsed: true,
      items: [
        'modulos/hosts',
        'modulos/vms',
        'modulos/discos',
        'modulos/redes',
        'modulos/imagenes-iso',
      ],
    },
    {
      type: 'category',
      label: 'Operación y Mantenimiento',
      collapsible: true,
      collapsed: true,
      items: [
        'modulos/interfaz-usuario',
        'modulos/proceso-despliegue',
        'modulos/automatizacion',
      ],
    },
    {
      type: 'category',
      label: 'Planificación Estratégica',
      collapsible: true,
      collapsed: false,
      items: [
        'roadmap',
      ],
    },
  ],
};

module.exports = sidebars;