// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,
  // You can add more customizations here if needed
} satisfies Theme
