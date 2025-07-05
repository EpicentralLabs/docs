import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "Epicentral Labs | Docs",
  description: "Epicentral Labs Documentation Pages.",
  head: [['link', { rel: 'icon', href: '/Epicentral-Labs-Logo-Round.png' }]],
  cleanUrls: true,
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
      message: 'Released under the AGPL-3.0 License.',
      copyright: 'Copyright © 2025 Epicentral Labs, DAO LLC'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Solana Options Standard SDK',
        items: [
          { text: 'Introduction', link: '/option-standard-sdk/introduction' }
        ]
      },
      { 
        text: 'Guides', 
        items: [
          { text: 'Options - For Starters', link: '/options-for-starters/intro' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Solana Options Standard SDK',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/option-standard-sdk/introduction' }
        ]
      },
      {
        text: 'Guides',
        collapsed: true,
        items: [
          {
            text: 'Options - For Starters',
            collapsed: true,
            items: [
              { text: '1) - The Foundation', link: '/options-for-starters/intro' },
              { text: '2) - Calls & Puts', link: '/options-for-starters/calls-and-puts' },
              { text: '3) - Greeks', link: '/options-for-starters/the-greeks' }
            ]
          }
        ]
      },
    
      {
        text: 'For Developers',
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/getting-started/setup' },
        { text: 'Create an Option', link: '/getting-started/create-an-option' },
        { text: 'Calculating Volatility', link: '/getting-started/calculating-volatility' }
      ]
      }
    ],
    socialLinks:[
      { icon: 'twitter', link: 'https://x.com/EpicentralLabs' },
      { icon: 'discord', link: 'https://discord.gg/5asAuY2sR8' },
      { icon: 'github', link: 'https://github.com/EpicentralLabs' }
    ]
  }
})
