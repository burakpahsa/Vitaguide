import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitaPress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Vitamins', link: '/vitamins' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Vitamin A', link: '/guide/a' },
          // ...
        ],
      },
    ],
  },
});
