import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TeamMember from './components/TeamMember.vue'
import './styles/team.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TeamMember', TeamMember)
  }
} satisfies Theme