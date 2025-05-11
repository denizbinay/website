import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://denizbinay.de',
  title: 'deniz binay',
  description: 'my blog',
  author: 'Deniz Binay',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'About', href: '/about/' }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-bluesky',
      href: 'https://bsky.app/profile/denizbinay.bsky.social',
      label: 'Bluesky'
    },
    {
      icon: 'tabler--mail',
      href: 'mailto:tellme@denizbinay',
      label: 'Email'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  postsPerPage: 4,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
