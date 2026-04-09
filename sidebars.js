/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Infraestructura y Diseño',
      items: [
        'modulos/arquitectura/vision-general',
        'modulos/arquitectura/componentes',
        'modulos/arquitectura/diagrama-flujo',
        'modulos/arquitectura/api-referencia',
        'modulos/arquitectura/casos-uso',
      ],
    },
    {
      type: 'category',
      label: 'Guía de Instalación',
      items: [
        'instalacion-sistema',
        'abrir-servicios',
      ],
    },
    {
      type: 'category',
      label: 'Manual de Usuario',
      items: [
        'modulos/interfaz-usuario',
        'modulos/proceso-despliegue',
        'modulos/vms',
        'modulos/redes',
        'modulos/discos',
      ],
    },
    {
      type: 'category',
      label: 'Administración y Seguridad',
      items: [
        'modulos/hosts',
        'modulos/usuarios-permisos',
        'modulos/seguridad-auditoria',
        'modulos/auditoria-trazabilidad',
      ],
    },
  ],
};

export default sidebars;