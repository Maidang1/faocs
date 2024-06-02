
import { defineConfig } from './lib/config'

export default defineConfig({
  pagesDir: "site/pages",
  dirs: () => "hello",
  socials: [
    {
      icon: "github",
      link: "https://github.com/Maidang1/faocs"
    }
  ],

  topNav: [
    { text: 'Guide & API', link: '/about' },
    { text: 'Blog', link: '/about' },

  ],
  sidebar: [
    {
      text: 'Getting Started',
      link: '/about',
    },
  ],
})