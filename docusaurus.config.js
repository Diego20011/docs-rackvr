// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RackVR Docs',
  tagline: 'Orquestación de Virtualización KVM',
  favicon: 'img/logor.ico',

  url: 'https://tu-dominio.com',
  baseUrl: '/',

  organizationName: 'diego20011', 
  projectName: 'docs-rackvr', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Rack VR RGB-01.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'RackVR',
        logo: {
          alt: 'RackVR Logo',
          src: 'img/Rack VR RGB-01.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/diego20011/docs-rackvr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Arquitectura',
                to: '/docs/modulos/arquitectura/vision-general',
              },
              {
                label: 'Instalación',
                to: '/docs/instalacion-sistema',
              },
            ],
          },
          {
            title: 'Infraestructura',
            items: [
              {
                label: 'Gestión de VMs',
                to: '/docs/modulos/vms',
              },
              {
                label: 'Redes',
                to: '/docs/modulos/redes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RackVR.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;