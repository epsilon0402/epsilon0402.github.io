import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'epsilon0402',
  description:
    'Epsilon, tức là rất nhỏ, nhưng không bằng 0. Và nhiều epsilon cộng lại có thể trở thành những cái đáng kể. Có thể là 1, là 2, có thể là vô cùng. Điều quan trọng là ta có biết cách kết hợp các epsilon khác nhau lại hay không',
  href: 'https://astro-erudite.vercel.app',
  author: 'epsilon0402',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/epsilon0402',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/epsilon0402',
    label: 'Twitter',
  },
  {
    href: 'mailto:epsilon0402@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
