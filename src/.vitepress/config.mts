import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Epicentral Labs",
  description: "Solana Options Standard",
  head: [['link', { rel: 'icon', href: '/Epicentral-Labs-Logo-Round.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/Epicentral-Labs-Logo-Round.png',
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Epicentral Labs'
    },
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'An Introduction',
        collapsed: false,
        items: [
          { text: 'What are Options?', link: '/introduction/about' },
          { text: 'Solana Options Standard', link: '/introduction/options-standard' },
        ]
      }
      //{
      //text: 'For Developers',
      //collapsed: false,
      //items: [
        //{ text: 'Getting Started', link: '/getting-started/setup' },
        //{ text: 'Create an Option', link: '/getting-started/create-an-option' },
        //{ text: 'Calculating Volatility', link: '/getting-started/calculating-volatility' },
        //]
      //}
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/EpicentralLabs' },
      { icon: 'discord', link: 'https://discord.gg/5asAuY2sR8' },
      { icon: 'github', link: 'https://github.com/EpicentralLabs' }
    ]
  }
})
