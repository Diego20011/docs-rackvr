/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '🚀 Guía de Instalación',
      collapsed: false,
      items: [
        'instalacion-sistema',
        'abrir-servicios',
      ],
    },
    {
      type: 'category',
      label: '📦 Módulos y Configuración',
      collapsed: true,
      items: [
        'modulos/redes',
        'modulos/discos',
        'modulos/vms',
        'modulos/hosts',
      ],
    },
  ],
};

export default sidebars;