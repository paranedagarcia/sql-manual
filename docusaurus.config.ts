import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SQL',
  tagline: 'Análisis de datos con SQL',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://patricioaraneda.cl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sql',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'patricioaraneda', // Usually your GitHub org/user name.
  projectName: 'sql-manual', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SQL',
      logo: {
        alt: 'SQL',
        src: 'img/ODC-isotipo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual',
        },
        {
          href: 'https://github.com/paranedagarcia/sql-manual',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Otros cursos de la serie',
            items: [
              {
                label: 'Programación en Python',
                href: 'https://patricioaraneda.cl/python/',
              },
              {
                label: 'Bioestadística',
                href: 'https://patricioaraneda.cl/bioestadistica/',
              },
              {
                label: 'Ciencia de Datos',
                href: 'https://patricioaraneda.cl/ciencia-de-datos/',
              },
              {
                label: 'Inteligencia Artificial',
                href: 'https://patricioaraneda.cl/inteligencia-artificial/',
              },
            ],
        },
        {
          title: 'Conecta',
            items: [
              {
                label: 'Website',
                href: 'https://patricioaraneda.cl',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/patricioaraneda',
              },
              {
                label: 'Whatsapp',
                href: 'https://wa.me/56978872845',
              },
              
            ],
        },
        {
          title: 'Más',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/paranedagarcia/sql-manual',
              },
              {
                label: 'ORCID',
                href: 'https://orcid.org/0000-0001-9677-5959',
              },
              {
                label: 'Correo',
                href: 'mailto:paraneda@ug.uchile.cl',
              }
            ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Patricio Araneda G. | Manual SQL, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['r', 'python', 'javascript', 'bash', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
