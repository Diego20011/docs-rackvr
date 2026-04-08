/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
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
      label: 'Infraestructura y Diseño',
      items: [
        'modulos/arquitectura/vision-general',
        'modulos/arquitectura/componentes',
        'modulos/arquitectura/api-referencia',
        'modulos/arquitectura/diagrama-flujo',
      ],
    },
    {
      type: 'category',
      label: 'Manual de Funcionalidades',
      items: [
        'modulos/proceso-despliegue',
        'modulos/vms',
        'modulos/redes',
        'modulos/discos',
        'modulos/hosts',
        'modulos/usuarios-permisos',
      ],
    },
    'roadmap',
  ],
};

export default sidebars;