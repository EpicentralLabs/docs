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
        text: 'Products',
        collapsed: true,
        items: [
          {
            text: 'OPX',
            collapsed: true,
            items: [
              { text: 'Protocol', link: '/products/opx' },
              { text: 'Fees', link: '/products/fees' },
            ]
          },
          { text: 'OMLP', link: '/products/omlp' },
          { text: 'xLABS', link: '/products/xlabs' },
          { text: 'API (Under Development)', link: '/products/api' },
          { text: 'OSV (Under Development)', link: '/products/osv' }
          
        ]
      },

      {
        text: 'Solana Options Standard SDK',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/option-standard-sdk/introduction' },
          { text: 'OPM', link: '/option-standard-sdk/opm' },
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
              { text: '3) - Greeks', link: '/options-for-starters/the-greeks' },
              { text: '4) - TradFi vs Defi', link: '/options-for-starters/tradfi-vs-defi' },
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
      },

      {
        text: 'Governance',
        collapsed: true,
        items: [
          { text: 'How We Make Decisions', link: '/governance/governance' },
      ]
      },
    ],
    socialLinks:[
      { icon: 'twitter', link: 'https://x.com/EpicentralLabs' },
      { icon: 'discord', link: 'https://discord.gg/5asAuY2sR8' },
      { icon: 'github', link: 'https://github.com/EpicentralLabs' }
    ]
  }
})
