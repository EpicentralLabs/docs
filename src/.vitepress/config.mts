import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "Epicentral Labs | Documentation",
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
        text: 'Options Standard SDK',
        items: [
          { text: 'Introduction', link: '/option-standard-sdk/introduction' },
          { text: 'Calculation Modules', link: '/option-standard-sdk/calculation-modules' }
        ]
      },
      { 
        text: 'Guides', 
        items: [
          { text: 'Options - For Starters', link: '/options-basics/intro' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Options Standard SDK',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/option-standard-sdk/introduction' },
          { text: 'Calculation Modules', link: '/option-standard-sdk/calculation-modules' }
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
              { text: '1) - Learning the Foundation', link: '/options-basics/intro' },
              { text: '2) - Calls & Puts', link: '/options-basics/calls-and-puts' },
              { text: '3) - Greeks', link: '/options-basics/the-greeks' }
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
